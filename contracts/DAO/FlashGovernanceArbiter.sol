// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "./Governable.sol";
import "../facades/Burnable.sol";
import "../openzeppelin/SafeERC20.sol";
import "../openzeppelin/IERC20.sol";

///@author Justin Goro
/**@notice When assessing whether flash governance rules must apply, the configured status of the calling contract must be inspected
 */
abstract contract Configurable {
  function configured() public view virtual returns (bool);
}

///@title Flash Governance Arbiter
///@author Justin Goro
/**@notice LimboDAO offers two forms of governance: flash and proposal. Proposals are contracts that have authorization to execute guarded functions on contracts that implement the Governable abstract contract.
 * Proposals require Fate to be put forward for voting and Fate is the spendable voting token.
 * Flash governance occurs in the duration of one transaction and is more appropriate for variable tweaking such as changing the Flan per Second or Threshold of a pool.
 * Flash governance requires an asset be deposited into an adjudication contract. The community can then vote, through a proposal, whether the decision was legitimate. If not, the deposit can be slashed
 * By default, the asset is EYE.
 */
contract FlashGovernanceArbiter is Governable {
  using SafeERC20 for IERC20;

  /**
   * @param actor user making flash governance decision
   * @param deposit_asset is the asset type put up as decision collateral. Must be burnable.
   * @param amount is the amount of the deposit_asset to be put up as decision collateral.
   * @param target is the contract that will be affected by the flash governance decision.
   */
  event flashDecision(address indexed actor, address indexed deposit_asset, uint256 amount, address indexed target);

  mapping(address => bool) enforceLimitsActive;

  constructor(address dao) Governable(dao) {
    flashGovernanceConfig.unlockTime = 6 days; //defaulted to 3 times proposal voting window
  }

  struct FlashGovernanceConfig {
    uint256 amount;
    uint256 unlockTime;
    IERC20 asset;
    bool assetBurnable;
  }

  //Note: epoch settings prevent DOS attacks. Change tolerance curtails the damage of bad flash governance.
  struct SecurityParameters {
    uint256 epochSize; //only one flash governance action can happen per epoch to prevent governance DOS
    uint256 lastFlashGovernanceAct;
    uint8 maxGovernanceChangePerEpoch; //prevents flash governance from wrecking the incentives.
    uint8 changeTolerance; //1-100 maximum percentage any numeric variable can be changed through flash gov
  }

  //the current parameters determining the rules of flash governance
  FlashGovernanceConfig public flashGovernanceConfig;
  SecurityParameters public security;

  /**@notice contracts with flash governance enabled
   */
  mapping(address => bool) public governed;

  /**@notice sets contracts LimboDAO has authority to govern
   *@param governables candidate contracts for flash governance
   *@param isGoverned flags whether contract is governanble by FlashGovernanceArbiter
   */
  function setGoverned(address[] calldata governables, bool[] calldata isGoverned) external onlySuccessfulProposal {
    if (governables.length != isGoverned.length) {
      revert ArrayLengthMismatch(governables.length, isGoverned.length);
    }
    for (uint256 i = 0; i < governables.length; i++) {
      governed[governables[i]] = isGoverned[i];
    }
  }

  /*For every decision, we record the config at the time of the decision. This allows governance to change the rules
   *without undermining the terms under which pending decisions were made.
   */
  mapping(address => mapping(address => FlashGovernanceConfig)) public pendingFlashDecision; //contract->user->config

  /**
   *@notice An attempt is made to withdraw the current deposit requirement.
   * For a given user, flash governance decisions can only happen one at a time
   *@param sender is the user making the flash governance decision
   *@param target is the contract that will be affected by the flash governance decision.
   *@param emergency flash governance decisions are restricted in frequency per epoch but some decisions are too important. These can be marked emergency.
   *@dev be very careful about setting emergency to true. Only decisions which preclude the execution of other flash governance decisions should be considered candidtes for emergency.
   */
  function assertGovernanceApproved(
    address sender,
    address target,
    bool emergency
  ) public {
    if (msg.sender != DAO && !governed[msg.sender]) {
      revert FlashGovernanceDisabled(msg.sender);
    }
    FlashGovernanceConfig memory current = pendingFlashDecision[target][sender];

    if (current.unlockTime < block.timestamp) {
      if (!emergency && (block.timestamp - security.lastFlashGovernanceAct < security.epochSize)) {
        revert FlashGovernanceEpochFull(security.epochSize, security.lastFlashGovernanceAct);
      }

      //if user has previously made a flashGovernanceDecision on this contract and the requisite time for judgment has passed
      //but the user has failed to withdraw their deposit then this will simply transfer the net amount required.
      //if the requisite amount has fallen since the first decision, the user will be reimbursed the difference.
      //if the amount has increased, the user's deposit in this contract will be increased

      int256 netTransferAmount = int256(flashGovernanceConfig.amount) - int256(current.amount);
      flashGovernanceConfig.asset.approve(address(this), type(uint256).max);
      flashGovernanceConfig.asset.safeNetTransferFrom(sender, address(this), netTransferAmount);

      current = flashGovernanceConfig;
      current.unlockTime += block.timestamp;
      pendingFlashDecision[target][sender] = current;
      security.lastFlashGovernanceAct = block.timestamp;
      emit flashDecision(sender, address(flashGovernanceConfig.asset), flashGovernanceConfig.amount, target);
    } else {
      revert ExistingFlashGovernanceDecisionUnderReview(sender, target);
    }
  }

  /**
   *@param asset is the asset type put up as decision collateral. Must be burnable.
   *@param amount is the amount of the deposit_asset to be put up as decision collateral.
   *@param unlockTime is the duration for which the deposit collateral must be locked in order to give the community time to weigh up the decision
   *@param assetBurnable is a technical parameter to determined the manner in which burning should occur. Non burnable assets are just no longer accounted for and accumulate within this contract.
   */
  function configureFlashGovernance(
    address asset,
    uint256 amount,
    uint256 unlockTime,
    bool assetBurnable
  ) public virtual onlySuccessfulProposal {
    flashGovernanceConfig.asset = IERC20(asset);
    flashGovernanceConfig.amount = amount;
    (uint256 votingDuration, , ) = LimboDAOLike(DAO).proposalConfig();
    if (unlockTime < votingDuration) {
      revert FlashGovLockTimeMustExceedVoting(unlockTime, votingDuration);
    }
    flashGovernanceConfig.unlockTime = unlockTime;
    flashGovernanceConfig.assetBurnable = assetBurnable;
  }

  /**
    @param maxGovernanceChangePerEpoch max number of flash governance decisions per epoch to prevent DOS
    @param epochSize is the duration of a flash governance epoch and reflects proposal deliberation durations
    @param changeTolerance is the amount by which a variable can be changed through flash governance.
    */
  function configureSecurityParameters(
    uint8 maxGovernanceChangePerEpoch,
    uint256 epochSize,
    uint8 changeTolerance
  ) public virtual onlySuccessfulProposal {
    security.maxGovernanceChangePerEpoch = maxGovernanceChangePerEpoch;
    security.epochSize = epochSize;
    if (changeTolerance > 100) {
      revert InvalidChangeTolerance(changeTolerance);
    }
    security.changeTolerance = changeTolerance;
  }

  /**
    @notice LimboDAO proposals for burning flash governance collateral act through this function
    @param targetContract is the contract that is affected by the flash governance decision.
    @param user is the user who made the flash governance decision
    @param asset is the collateral asset to be burnt
    @param amount is the amount of the collateral to be burnt
    */
  function burnFlashGovernanceAsset(
    address targetContract,
    address user,
    address asset,
    uint256 amount
  ) public virtual onlySuccessfulProposal {
    if (pendingFlashDecision[targetContract][user].assetBurnable) {
      Burnable(asset).burn(amount);
    }

    delete pendingFlashDecision[targetContract][user];
  }

  /**
   *@notice Assuming a flash governance decision was not rejected during the lock window, the user is free to withdraw their asset
   *@param targetContract is the contract that is affected by the flash governance decision.
   *@param asset is the collateral asset to be withdrawn
   */
  function withdrawGovernanceAsset(address targetContract, address asset) public virtual {
    bool ready = address(pendingFlashDecision[targetContract][msg.sender].asset) == asset &&
      pendingFlashDecision[targetContract][msg.sender].amount > 0 &&
      pendingFlashDecision[targetContract][msg.sender].unlockTime < block.timestamp;

    if (!ready) {
      revert FlashDecisionPending(targetContract, msg.sender);
    }

    IERC20(pendingFlashDecision[targetContract][msg.sender].asset).transfer(
      msg.sender,
      pendingFlashDecision[targetContract][msg.sender].amount
    );
    delete pendingFlashDecision[targetContract][msg.sender];
  }

  /**
   *@notice when a governance function is executed, it can enforce change limits on variables in the event that the execution is through flash governance
   * However, a proposal is subject to the full deliberation of the DAO and such limits may thwart good governance.
   * @param enforce for the given context, set whether variable movement limits are enforced or not.
   */
  function setEnforcement(bool enforce) public {
    enforceLimitsActive[msg.sender] = enforce;
  }

  ///@dev for negative values, relative comparisons need to be calculated correctly.
  function enforceToleranceInt(int256 v1, int256 v2) public view {
    if (!configured()) return;
    uint256 uv1 = uint256(v1 > 0 ? v1 : -1 * v1);
    uint256 uv2 = uint256(v2 > 0 ? v2 : -1 * v2);
    enforceTolerance(uv1, uv2);
  }

  ///@notice Allows functions to enforce maximum limits on a per variable basis
  ///@dev the 100 factor is just to allow for simple percentage comparisons without worrying about enormous precision.
  function enforceTolerance(uint256 v1, uint256 v2) public view {
    if (!enforceLimitsActive[msg.sender] || !Configurable(msg.sender).configured()) return;
    //bonus points for readability
    if (v1 > v2) {
      if ((v2 == 0 && v1 > 1) || (v1 - v2) * 100 >= security.changeTolerance * v1) {
        revert FlashToleranceViolated(v1, v2);
      }
    } else {
      if ((v1 == 0 && v2 > 1) || ((v2 - v1) * 100) >= security.changeTolerance * v1) {
        revert FlashToleranceViolated(v1, v2);
      }
    }
  }
}
