/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapHelper, UniswapHelperInterface } from "../UniswapHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_limbo",
        type: "address",
      },
      {
        internalType: "address",
        name: "limboDAO",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DAO",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blackHole",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "buyFlanAndBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_limbo",
        type: "address",
      },
      {
        internalType: "address",
        name: "FlanSCXPair",
        type: "address",
      },
      {
        internalType: "address",
        name: "behodler",
        type: "address",
      },
      {
        internalType: "address",
        name: "flan",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "divergenceTolerance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minQuoteWaitDuration",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "precision",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "priceBoostOvershoot",
        type: "uint8",
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "configured",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endConfiguration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "generateFLNQuote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "latestFlanQuotes",
    outputs: [
      {
        internalType: "uint256",
        name: "DaiScxSpotPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "DaiBalanceOnBehodler",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockProduced",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minAPY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "daiThreshold",
        type: "uint256",
      },
    ],
    name: "minAPY_to_FPS",
    outputs: [
      {
        internalType: "uint256",
        name: "fps",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dai",
        type: "address",
      },
    ],
    name: "setDAI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
    ],
    name: "setDAO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rectangleOfFairness",
        type: "uint256",
      },
    ],
    name: "stabilizeFlan",
    outputs: [
      {
        internalType: "uint256",
        name: "lpMinted",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620037413803806200374183398181016040528101906200003791906200040d565b806200004981620001b260201b60201c565b5081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040516200009990620003bd565b604051809103906000f080158015620000b6573d6000803e3d6000fd5b50600960020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550735c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f600960070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550736b175474e89094c44da98b954eedeac495271d0f600960060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200051f565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806200025d5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80620002765750600060149054906101000a900460ff16155b620002b8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002af9062000475565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16632317beae6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200034057600080fd5b505afa15801562000355573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200037b9190620003e1565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b605c80620036e583390190565b600081519050620003db8162000505565b92915050565b600060208284031215620003f457600080fd5b60006200040484828501620003ca565b91505092915050565b600080604083850312156200042157600080fd5b60006200043185828601620003ca565b92505060206200044485828601620003ca565b9150509250929050565b60006200045d60028362000497565b91506200046a82620004dc565b602082019050919050565b6000602082019050818103600083015262000490816200044e565b9050919050565b600082825260208201905092915050565b6000620004b582620004bc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f454b000000000000000000000000000000000000000000000000000000000000600082015250565b6200051081620004a8565b81146200051c57600080fd5b50565b6131b6806200052f6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638772a23a1161008c5780639e90f9aa116100665780639e90f9aa146101d8578063ae480d96146101f6578063b97dbf5914610228578063e73a914c14610244576100cf565b80638772a23a146101805780638b8de7151461019e57806398fabd3a146101ba576100cf565b80633626339f146100d4578063421e5b4814610104578063432f31cb146101345780634492ffc914610150578063478fa6291461015a5780635bb4780814610164575b600080fd5b6100ee60048036038101906100e99190612789565b610260565b6040516100fb9190612c25565b60405180910390f35b61011e600480360381019061011991906127db565b610bbd565b60405161012b9190612c25565b60405180910390f35b61014e6004803603810190610149919061265f565b610c90565b005b610158610ef4565b005b610162611078565b005b61017e6004803603810190610179919061260d565b611095565b005b610188611120565b6040516101959190612aba565b60405180910390f35b6101b860048036038101906101b39190612711565b611133565b005b6101c26116ad565b6040516101cf9190612a08565b60405180910390f35b6101e06116d3565b6040516101ed9190612a08565b60405180910390f35b610210600480360381019061020b9190612789565b611700565b60405161021f93929190612c8a565b60405180910390f35b610242600480360381019061023d919061260d565b611730565b005b61025e6004803603810190610259919061260d565b6117bb565b005b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102bc57600080fd5b6102c46119bd565b6000600960010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103249190612a08565b60206040518083038186803b15801561033c57600080fd5b505afa158015610350573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037491906127b2565b90506062836064836103869190612d75565b6103909190612d44565b146103d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c790612c05565b60405180910390fd5b8092506000600960010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600960000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016104589190612a08565b60206040518083038186803b15801561047057600080fd5b505afa158015610484573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a891906127b2565b9050600084826104b89190612cee565b90506000670de0b6b3a76400006003600060028110610500577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6003020160000154836105139190612d75565b61051d9190612d44565b90506000600960000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600960030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016105a99190612a08565b60206040518083038186803b1580156105c157600080fd5b505afa1580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f991906127b2565b9050828110156108ab5760006064600960070160149054906101000a900460ff1660646106269190612e03565b60ff1683866106359190612dcf565b61063f9190612d75565b6106499190612d44565b9050600081146106595780610666565b81846106659190612dcf565b5b9050600960030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1984836040518363ffffffff1660e01b81526004016106c8929190612a91565b602060405180830381600087803b1580156106e257600080fd5b505af11580156106f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071a9190612760565b50600960010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb848b6040518363ffffffff1660e01b815260040161077b929190612a91565b602060405180830381600087803b15801561079557600080fd5b505af11580156107a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cd9190612760565b50600960000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636a627842600960020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016108519190612a08565b602060405180830381600087803b15801561086b57600080fd5b505af115801561087f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a391906127b2565b975050610baa565b6000600960000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561091a57600080fd5b505af115801561092e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095291906127b2565b8261095d9190612d44565b9050600960030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f19846002846109ae9190612cee565b6040518363ffffffff1660e01b81526004016109cb929190612a91565b602060405180830381600087803b1580156109e557600080fd5b505af11580156109f9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1d9190612760565b50600960010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb848b6040518363ffffffff1660e01b8152600401610a7e929190612a91565b602060405180830381600087803b158015610a9857600080fd5b505af1158015610aac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad09190612760565b50600960000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636a627842600960020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401610b549190612a08565b602060405180830381600087803b158015610b6e57600080fd5b505af1158015610b82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba691906127b2565b9750505b610bb2612072565b505050505050919050565b6000610bc76119bd565b60008214610bd55781610c19565b6003600060028110610c10577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60030201600101545b9150610c5a6040518060400160405280601081526020017f646169207468726573686f6c642025730000000000000000000000000000000081525083612128565b60006127108385610c6b9190612d75565b610c759190612d44565b90506301e1338081610c879190612d44565b91505092915050565b610c99336121c4565b87600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600960000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600960010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600960030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506064841015610dea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de190612b05565b60405180910390fd5b8360096004018190555082600960050181905550736b175474e89094c44da98b954eedeac495271d0f600960060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008260ff1614610e675781610e69565b815b600960060160146101000a81548160ff021916908360ff16021790555060648160ff1610610ecc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec390612b25565b60405180910390fd5b80600960070160146101000a81548160ff021916908360ff1602179055505050505050505050565b6003600060028110610f2f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600302016003600160028110610f6e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60030201600082015481600001556001820154816001015560028201548160020155905050610f9b6122c9565b6003600060028110610fd6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600302016000016000600360006002811061101a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60030201600101600084919050558391905055505043600360006002811061106b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6003020160020181905550565b6001600060146101000a81548160ff021916908315150217905550565b60014614156110d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d090612bc5565b60405180910390fd5b80600960070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060149054906101000a900460ff1681565b6000600960070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e6a4390585600960030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b81526004016111ba929190612a23565b60206040518083038186803b1580156111d257600080fd5b505afa1580156111e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120a9190612636565b90506000600960030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b815260040161126c9190612a08565b60206040518083038186803b15801561128457600080fd5b505afa158015611298573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bc91906127b2565b905060008573ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b81526004016112f99190612a08565b60206040518083038186803b15801561131157600080fd5b505afa158015611325573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134991906127b2565b905060006113588683856124c0565b90506000600960030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16106113ba57816113bd565b60005b90506000600960030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1610611420576000611422565b825b90508873ffffffffffffffffffffffffffffffffffffffff1663a9059cbb878a6040518363ffffffff1660e01b815260040161145f929190612a91565b602060405180830381600087803b15801561147957600080fd5b505af115801561148d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b19190612760565b508573ffffffffffffffffffffffffffffffffffffffff1663022c0d9f8383306040518463ffffffff1660e01b81526004016114ef93929190612c40565b600060405180830381600087803b15801561150957600080fd5b505af115801561151d573d6000803e3d6000fd5b5050505060006064846115309190612d44565b9050600960030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb89836040518363ffffffff1660e01b8152600401611592929190612a91565b602060405180830381600087803b1580156115ac57600080fd5b505af11580156115c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e49190612760565b50600960030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c6882866116329190612dcf565b6040518263ffffffff1660e01b815260040161164e9190612c25565b602060405180830381600087803b15801561166857600080fd5b505af115801561167c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a09190612760565b5050505050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600960020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6003816002811061171057600080fd5b600302016000915090508060000154908060010154908060020154905083565b6001461415611774576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176b90612b45565b60405180910390fd5b80600960060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806118655750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061187d5750600060149054906101000a900460ff16155b6118bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b390612b65565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16632317beae6040518163ffffffff1660e01b815260040160206040518083038186803b15801561194357600080fd5b505afa158015611957573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061197b9190612636565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6119c5612541565b6003600060028110611a00577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60030201604051806060016040529081600082015481526020016001820154815260200160028201548152505081600060028110611a67577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201819052506003600160028110611aaa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60030201604051806060016040529081600082015481526020016001820154815260200160028201548152505081600160028110611b11577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020181905250600081600160028110611b55577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516000015182600060028110611b98577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516000015111611c475781600060028110611be0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160000151606483600160028110611c25577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160000151611c389190612d75565b611c429190612d44565b611ce4565b81600160028110611c81577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160000151606483600060028110611cc6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160000151611cd99190612d75565b611ce39190612d44565b5b9050600082600160028110611d22577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516020015183600060028110611d65577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516020015111611e145782600060028110611dad577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160200151606484600160028110611df2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160200151611e059190612d75565b611e0f9190612d44565b611eb1565b82600160028110611e4e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160200151606484600060028110611e93577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160200151611ea69190612d75565b611eb09190612d44565b5b9050611ef26040518060400160405280601981526020017f6461692062616c616e636520646976657267656e63652025730000000000000081525082612128565b60096004015482108015611f0a575060096004015481105b611f49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f4090612be5565b60405180910390fd5b60096005015483600160028110611f89577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516040015184600060028110611fcc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160400151611fdf9190612dcf565b11801561202e5750600083600160028110612023577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160400151115b61206d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206490612b85565b60405180910390fd5b505050565b60036000600281106120ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600302016000808201600090556001820160009055600282016000905550506003600160028110612107577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60030201600080820160009055600182016000905560028201600090555050565b6121c0828260405160240161213e929190612ad5565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612518565b5050565b600060149054906101000a900460ff1615806122875750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b7ebc23b826040518263ffffffff1660e01b81526004016122369190612a08565b60206040518083038186803b15801561224e57600080fd5b505afa158015612262573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122869190612760565b5b6122c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122bd90612ba5565b60405180910390fd5b50565b6000806000600960010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166372c3fdd9600960060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16612710670de0b6b3a7640000600960060160149054906101000a900460ff166040518563ffffffff1660e01b81526004016123739493929190612a4c565b60206040518083038186803b15801561238b57600080fd5b505afa15801561239f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123c391906127b2565b9050670de0b6b3a764000080826123da9190612d75565b6123e49190612d44565b9250600960060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600960010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016124699190612a08565b60206040518083038186803b15801561248157600080fd5b505afa158015612495573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124b991906127b2565b9150509091565b6000806103e5856124d19190612d75565b9050600083826124e19190612d75565b90506000826103e8876124f49190612d75565b6124fe9190612cee565b9050808261250c9190612d44565b93505050509392505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60405180604001604052806002905b61255861256e565b8152602001906001900390816125505790505090565b60405180606001604052806000815260200160008152602001600081525090565b60008135905061259e81613124565b92915050565b6000815190506125b381613124565b92915050565b6000815190506125c88161313b565b92915050565b6000813590506125dd81613152565b92915050565b6000815190506125f281613152565b92915050565b60008135905061260781613169565b92915050565b60006020828403121561261f57600080fd5b600061262d8482850161258f565b91505092915050565b60006020828403121561264857600080fd5b6000612656848285016125a4565b91505092915050565b600080600080600080600080610100898b03121561267c57600080fd5b600061268a8b828c0161258f565b985050602061269b8b828c0161258f565b97505060406126ac8b828c0161258f565b96505060606126bd8b828c0161258f565b95505060806126ce8b828c016125ce565b94505060a06126df8b828c016125ce565b93505060c06126f08b828c016125f8565b92505060e06127018b828c016125f8565b9150509295985092959890939650565b60008060006060848603121561272657600080fd5b60006127348682870161258f565b9350506020612745868287016125ce565b92505060406127568682870161258f565b9150509250925092565b60006020828403121561277257600080fd5b6000612780848285016125b9565b91505092915050565b60006020828403121561279b57600080fd5b60006127a9848285016125ce565b91505092915050565b6000602082840312156127c457600080fd5b60006127d2848285016125e3565b91505092915050565b600080604083850312156127ee57600080fd5b60006127fc858286016125ce565b925050602061280d858286016125ce565b9150509250929050565b61282081612e37565b82525050565b61282f81612e49565b82525050565b61283e81612e8c565b82525050565b61284d81612e9e565b82525050565b600061285e82612cc1565b6128688185612cdd565b9350612878818560208601612ec2565b61288181612f53565b840191505092915050565b6000612899601b83612cdd565b91506128a482612f64565b602082019050919050565b60006128bc602a83612cdd565b91506128c782612f8d565b604082019050919050565b60006128df601883612cdd565b91506128ea82612fdc565b602082019050919050565b6000612902600283612cdd565b915061290d82613005565b602082019050919050565b6000612925600283612cdd565b91506129308261302e565b602082019050919050565b6000612948600283612cdd565b915061295382613057565b602082019050919050565b600061296b600083612ccc565b915061297682613080565b600082019050919050565b600061298e602483612cdd565b915061299982613083565b604082019050919050565b60006129b1600283612cdd565b91506129bc826130d2565b602082019050919050565b60006129d4600283612cdd565b91506129df826130fb565b602082019050919050565b6129f381612e75565b82525050565b612a0281612eb0565b82525050565b6000602082019050612a1d6000830184612817565b92915050565b6000604082019050612a386000830185612817565b612a456020830184612817565b9392505050565b6000608082019050612a616000830187612817565b612a6e6020830186612844565b612a7b6040830185612835565b612a8860608301846129f9565b95945050505050565b6000604082019050612aa66000830185612817565b612ab360208301846129ea565b9392505050565b6000602082019050612acf6000830184612826565b92915050565b60006040820190508181036000830152612aef8185612853565b9050612afe60208301846129ea565b9392505050565b60006020820190508181036000830152612b1e8161288c565b9050919050565b60006020820190508181036000830152612b3e816128af565b9050919050565b60006020820190508181036000830152612b5e816128d2565b9050919050565b60006020820190508181036000830152612b7e816128f5565b9050919050565b60006020820190508181036000830152612b9e81612918565b9050919050565b60006020820190508181036000830152612bbe8161293b565b9050919050565b60006020820190508181036000830152612bde81612981565b9050919050565b60006020820190508181036000830152612bfe816129a4565b9050919050565b60006020820190508181036000830152612c1e816129c7565b9050919050565b6000602082019050612c3a60008301846129ea565b92915050565b6000608082019050612c5560008301866129ea565b612c6260208301856129ea565b612c6f6040830184612817565b8181036060830152612c808161295e565b9050949350505050565b6000606082019050612c9f60008301866129ea565b612cac60208301856129ea565b612cb960408301846129ea565b949350505050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612cf982612e75565b9150612d0483612e75565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612d3957612d38612ef5565b5b828201905092915050565b6000612d4f82612e75565b9150612d5a83612e75565b925082612d6a57612d69612f24565b5b828204905092915050565b6000612d8082612e75565b9150612d8b83612e75565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612dc457612dc3612ef5565b5b828202905092915050565b6000612dda82612e75565b9150612de583612e75565b925082821015612df857612df7612ef5565b5b828203905092915050565b6000612e0e82612e7f565b9150612e1983612e7f565b925082821015612e2c57612e2b612ef5565b5b828203905092915050565b6000612e4282612e55565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000612e9782612e75565b9050919050565b6000612ea982612e75565b9050919050565b6000612ebb82612e7f565b9050919050565b60005b83811015612ee0578082015181840152602081019050612ec5565b83811115612eef576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f446976657267656e6365206f6620313030206973207061726974790000000000600082015250565b7f536574206f76657273686f6f7420746f206e756d626572206265747765656e2060008201527f3120616e64203130302e00000000000000000000000000000000000000000000602082015250565b7f4441492068617264636f646564206f6e206d61696e6e65740000000000000000600082015250565b7f454b000000000000000000000000000000000000000000000000000000000000600082015250565b7f4548000000000000000000000000000000000000000000000000000000000000600082015250565b7f454a000000000000000000000000000000000000000000000000000000000000600082015250565b50565b7f556e697377617020666163746f72792068617264636f646564206f6e206d616960008201527f6e6e657400000000000000000000000000000000000000000000000000000000602082015250565b7f4547000000000000000000000000000000000000000000000000000000000000600082015250565b7f454d000000000000000000000000000000000000000000000000000000000000600082015250565b61312d81612e37565b811461313857600080fd5b50565b61314481612e49565b811461314f57600080fd5b50565b61315b81612e75565b811461316657600080fd5b50565b61317281612e7f565b811461317d57600080fd5b5056fea2646970667358221220eec3f0a06a8cf7ea7943f20546f4d683d6c2930889ddbaa4c917bbcbc53c2cf764736f6c634300080400336080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220caf4af9f6c720a2be886cfb5346ee088d9ec00ca22ab791e78a951333574b49a64736f6c63430008040033";

export class UniswapHelper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _limbo: string,
    limboDAO: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapHelper> {
    return super.deploy(
      _limbo,
      limboDAO,
      overrides || {}
    ) as Promise<UniswapHelper>;
  }
  getDeployTransaction(
    _limbo: string,
    limboDAO: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_limbo, limboDAO, overrides || {});
  }
  attach(address: string): UniswapHelper {
    return super.attach(address) as UniswapHelper;
  }
  connect(signer: Signer): UniswapHelper__factory {
    return super.connect(signer) as UniswapHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapHelperInterface {
    return new utils.Interface(_abi) as UniswapHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapHelper {
    return new Contract(address, _abi, signerOrProvider) as UniswapHelper;
  }
}