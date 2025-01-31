// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "../ProposalFactory.sol";
import "../../facades/LimboLike.sol";
import "../../facades/MorgothTokenApproverLike.sol";
import "../../periphery/Errors.sol";

// import "hardhat/console.sol";

/**
 * @author Justin Goro
 * @notice The singular form of UpdateMultiplSoulConfig
 */
contract UpdateSoulConfigProposal is Proposal {
  struct Parameters {
    address token;
    uint256 crossingThreshold;
    uint256 soulType;
    uint256 state;
    uint256 index;
    uint256 fps;
  }
  Parameters params;
  LimboLike limbo;
  MorgothTokenApproverLike morgothApprover;

  constructor(
    address dao,
    string memory _description,
    address _limbo,
    address morgothTokenApprover
  ) Proposal(dao, _description) {
    limbo = LimboLike(_limbo);
    morgothApprover = MorgothTokenApproverLike(morgothTokenApprover);
  }

  function parameterize(
    address token,
    uint256 crossingThreshold,
    uint256 soulType,
    uint256 state,
    uint256 index,
    uint256 fps
  ) public lockUntilComplete {
    require(block.chainid != 1, "not maintained for main net.");
    if (!morgothApprover.approved(token) && soulType < 2) {
      revert TokenNotApproved(token);
    }
    params.token = token;
    params.crossingThreshold = crossingThreshold;
    params.soulType = soulType;
    params.state = state;
    params.index = index;
    params.fps = fps;
  }

  function execute() internal override returns (bool) {
    limbo.configureSoul(
      params.token,
      params.crossingThreshold,
      params.soulType,
      params.state,
      params.index,
      params.fps
    );

    return true;
  }
}
