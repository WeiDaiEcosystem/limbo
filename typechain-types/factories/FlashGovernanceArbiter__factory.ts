/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FlashGovernanceArbiter,
  FlashGovernanceArbiterInterface,
} from "../FlashGovernanceArbiter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "actor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "deposit_asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "flashDecision",
    type: "event",
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
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bool",
        name: "emergency",
        type: "bool",
      },
    ],
    name: "assertGovernanceApproved",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFlashGovernanceAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "assetBurnable",
        type: "bool",
      },
    ],
    name: "configureFlashGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "maxGovernanceChangePerEpoch",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "epochSize",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "changeTolerance",
        type: "uint8",
      },
    ],
    name: "configureSecurityParameters",
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
    inputs: [
      {
        internalType: "uint256",
        name: "v1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "v2",
        type: "uint256",
      },
    ],
    name: "enforceTolerance",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "v1",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "v2",
        type: "int256",
      },
    ],
    name: "enforceToleranceInt",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "flashGovernanceConfig",
    outputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "assetBurnable",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pendingFlashDecision",
    outputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "assetBurnable",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "security",
    outputs: [
      {
        internalType: "uint8",
        name: "maxGovernanceChangePerEpoch",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "epochSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastFlashGovernanceAct",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "changeTolerance",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
        internalType: "bool",
        name: "enforce",
        type: "bool",
      },
    ],
    name: "setEnforcement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "withdrawGovernanceAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200256738038062002567833981810160405281019062000037919062000273565b8062000049816200005160201b60201c565b505062000370565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480620000fc5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80620001155750600060149054906101000a900460ff16155b62000157576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200014e90620002c6565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16632317beae6040518163ffffffff1660e01b815260040160206040518083038186803b158015620001df57600080fd5b505afa158015620001f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021a919062000273565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000815190506200026d8162000356565b92915050565b6000602082840312156200028657600080fd5b600062000296848285016200025c565b91505092915050565b6000620002ae600283620002e8565b9150620002bb826200032d565b602082019050919050565b60006020820190508181036000830152620002e1816200029f565b9050919050565b600082825260208201905092915050565b600062000306826200030d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f454b000000000000000000000000000000000000000000000000000000000000600082015250565b6200036181620002f9565b81146200036d57600080fd5b50565b6121e780620003806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80637d77bf431161009757806398fabd3a1161006657806398fabd3a1461023a578063ad64d6cb14610258578063b8b9765414610274578063e73a914c14610295576100f5565b80637d77bf43146101b15780638772a23a146101cd578063984905e4146101eb57806398f112411461021e576100f5565b80633850ed1e116100d35780633850ed1e1461014e5780634739a2ba1461016a578063478fa629146101865780635487991814610190576100f5565b806301f68ce3146100fa5780630e2365f2146101165780631070c82414610132575b600080fd5b610114600480360381019061010f9190611718565b6102b1565b005b610130600480360381019061012b9190611806565b61074d565b005b61014c60048036038101906101479190611754565b6107d0565b005b610168600480360381019061016391906118bb565b610a06565b005b610184600480360381019061017f91906118f7565b610aac565b005b61018e610cc7565b005b610198610ce4565b6040516101a89493929190611cce565b60405180910390f35b6101cb60048036038101906101c69190611933565b610d1c565b005b6101d5610dc8565b6040516101e29190611bb8565b60405180910390f35b61020560048036038101906102009190611718565b610ddb565b6040516102159493929190611b73565b60405180910390f35b610238600480360381019061023391906117b7565b610e45565b005b610242611261565b60405161024f9190611ab3565b60405180910390f35b610272600480360381019061026d9190611869565b611287565b005b61027c6112e1565b60405161028c9493929190611b73565b60405180910390f35b6102af60048036038101906102aa91906116c6565b61132c565b005b8073ffffffffffffffffffffffffffffffffffffffff16600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614801561040a57506000600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154115b8015610494575042600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154105b6104d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ca90611c93565b60405180910390fd5b600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546040518363ffffffff1660e01b815260040161062c929190611b4a565b602060405180830381600087803b15801561064657600080fd5b505af115801561065a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067e9190611892565b50600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556003820160006101000a81549060ff021916905550505050565b6107563361152e565b83600360000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260036001018190555081600360020181905550806003800160006101000a81548160ff02191690831515021790555050505050565b6107d93361152e565b600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16156108d7578173ffffffffffffffffffffffffffffffffffffffff166342966c68826040518263ffffffff1660e01b81526004016108a49190611cb3565b600060405180830381600087803b1580156108be57600080fd5b505af11580156108d2573d6000803e3d6000fd5b505050505b6003600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018201548160010155600282015481600201556003820160009054906101000a900460ff168160030160006101000a81548160ff02191690831515021790555090505050505050565b600060149054906101000a900460ff16610a1f57610aa8565b6000808313610a5957827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a549190611d7a565b610a5b565b825b90506000808313610a9757827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a929190611d7a565b610a99565b825b9050610aa58282610aac565b50505b5050565b600060149054906101000a900460ff161580610b125750600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b15610b1c57610cc3565b80821115610bf5576000811415610b76576001821115610b71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6890611c73565b60405180910390fd5b610bf0565b81600760030160009054906101000a900460ff1660ff16610b979190611e91565b60648284610ba59190611eeb565b610baf9190611e91565b10610bef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be690611c73565b60405180910390fd5b5b610cc2565b6000821415610c47576001811115610c42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3990611c73565b60405180910390fd5b610cc1565b81600760030160009054906101000a900460ff1660ff16610c689190611e91565b60648383610c769190611eeb565b610c809190611e91565b10610cc0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb790611c73565b60405180910390fd5b5b5b5b5050565b6001600060146101000a81548160ff021916908315150217905550565b60078060000160009054906101000a900460ff16908060010154908060020154908060030160009054906101000a900460ff16905084565b610d253361152e565b82600760000160006101000a81548160ff021916908360ff160217905550816007600101819055506064600760030160009054906101000a900460ff1660ff1610610da5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9c90611bd3565b60405180910390fd5b80600760030160006101000a81548160ff021916908360ff160217905550505050565b600060149054906101000a900460ff1681565b600b602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030160009054906101000a900460ff16905084565b600360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd84306003600101546040518463ffffffff1660e01b8152600401610eac93929190611ace565b602060405180830381600087803b158015610ec657600080fd5b505af1158015610eda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efe9190611892565b8015610f88575042600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154105b15611221578080610fad575060076001015460076002015442610fab9190611eeb565b115b610fec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe390611c53565b60405180910390fd5b6003600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018201548160010155600282015481600201556003820160009054906101000a900460ff168160030160006101000a81548160ff02191690831515021790555090505042600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546111a49190611d24565b92505081905550426007600201819055507fd2ee22547ba3675fb74486298b9ad32c9bbc4d7f773a2b679d3e2c27dae30ee683600360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360010154856040516112149493929190611b05565b60405180910390a161125c565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125390611c33565b60405180910390fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60038060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030160009054906101000a900460ff16905084565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806113d65750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806113ee5750600060149054906101000a900460ff16155b61142d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142490611bf3565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16632317beae6040518163ffffffff1660e01b815260040160206040518083038186803b1580156114b457600080fd5b505afa1580156114c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ec91906116ef565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060149054906101000a900460ff1615806115f15750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b7ebc23b826040518263ffffffff1660e01b81526004016115a09190611ab3565b60206040518083038186803b1580156115b857600080fd5b505afa1580156115cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f09190611892565b5b611630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162790611c13565b60405180910390fd5b50565b6000813590506116428161213e565b92915050565b6000815190506116578161213e565b92915050565b60008135905061166c81612155565b92915050565b60008151905061168181612155565b92915050565b6000813590506116968161216c565b92915050565b6000813590506116ab81612183565b92915050565b6000813590506116c08161219a565b92915050565b6000602082840312156116d857600080fd5b60006116e684828501611633565b91505092915050565b60006020828403121561170157600080fd5b600061170f84828501611648565b91505092915050565b6000806040838503121561172b57600080fd5b600061173985828601611633565b925050602061174a85828601611633565b9150509250929050565b6000806000806080858703121561176a57600080fd5b600061177887828801611633565b945050602061178987828801611633565b935050604061179a87828801611633565b92505060606117ab8782880161169c565b91505092959194509250565b6000806000606084860312156117cc57600080fd5b60006117da86828701611633565b93505060206117eb86828701611633565b92505060406117fc8682870161165d565b9150509250925092565b6000806000806080858703121561181c57600080fd5b600061182a87828801611633565b945050602061183b8782880161169c565b935050604061184c8782880161169c565b925050606061185d8782880161165d565b91505092959194509250565b60006020828403121561187b57600080fd5b60006118898482850161165d565b91505092915050565b6000602082840312156118a457600080fd5b60006118b284828501611672565b91505092915050565b600080604083850312156118ce57600080fd5b60006118dc85828601611687565b92505060206118ed85828601611687565b9150509250929050565b6000806040838503121561190a57600080fd5b60006119188582860161169c565b92505060206119298582860161169c565b9150509250929050565b60008060006060848603121561194857600080fd5b6000611956868287016116b1565b93505060206119678682870161169c565b9250506040611978868287016116b1565b9150509250925092565b61198b81611f1f565b82525050565b61199a81611f31565b82525050565b60006119ad601a83611d13565b91506119b882611fad565b602082019050919050565b60006119d0600283611d13565b91506119db82611fd6565b602082019050919050565b60006119f3600283611d13565b91506119fe82611fff565b602082019050919050565b6000611a16602483611d13565b9150611a2182612028565b604082019050919050565b6000611a39603283611d13565b9150611a4482612077565b604082019050919050565b6000611a5c600383611d13565b9150611a67826120c6565b602082019050919050565b6000611a7f602883611d13565b9150611a8a826120ef565b604082019050919050565b611a9e81611f67565b82525050565b611aad81611f71565b82525050565b6000602082019050611ac86000830184611982565b92915050565b6000606082019050611ae36000830186611982565b611af06020830185611982565b611afd6040830184611a95565b949350505050565b6000608082019050611b1a6000830187611982565b611b276020830186611982565b611b346040830185611a95565b611b416060830184611982565b95945050505050565b6000604082019050611b5f6000830185611982565b611b6c6020830184611a95565b9392505050565b6000608082019050611b886000830187611982565b611b956020830186611a95565b611ba26040830185611a95565b611baf6060830184611991565b95945050505050565b6000602082019050611bcd6000830184611991565b92915050565b60006020820190508181036000830152611bec816119a0565b9050919050565b60006020820190508181036000830152611c0c816119c3565b9050919050565b60006020820190508181036000830152611c2c816119e6565b9050919050565b60006020820190508181036000830152611c4c81611a09565b9050919050565b60006020820190508181036000830152611c6c81611a2c565b9050919050565b60006020820190508181036000830152611c8c81611a4f565b9050919050565b60006020820190508181036000830152611cac81611a72565b9050919050565b6000602082019050611cc86000830184611a95565b92915050565b6000608082019050611ce36000830187611aa4565b611cf06020830186611a95565b611cfd6040830185611a95565b611d0a6060830184611aa4565b95945050505050565b600082825260208201905092915050565b6000611d2f82611f67565b9150611d3a83611f67565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d6f57611d6e611f7e565b5b828201905092915050565b6000611d8582611f3d565b9150611d9083611f3d565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482116000841360008413161615611dcf57611dce611f7e565b5b817f80000000000000000000000000000000000000000000000000000000000000000583126000841260008413161615611e0c57611e0b611f7e565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615611e4957611e48611f7e565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0582126000841260008412161615611e8657611e85611f7e565b5b828202905092915050565b6000611e9c82611f67565b9150611ea783611f67565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611ee057611edf611f7e565b5b828202905092915050565b6000611ef682611f67565b9150611f0183611f67565b925082821015611f1457611f13611f7e565b5b828203905092915050565b6000611f2a82611f47565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4c696d626f3a2025206265747765656e203020616e6420313030000000000000600082015250565b7f454b000000000000000000000000000000000000000000000000000000000000600082015250565b7f454a000000000000000000000000000000000000000000000000000000000000600082015250565b7f4c494d424f3a20676f7665726e616e6365206465636973696f6e2072656a656360008201527f7465642e00000000000000000000000000000000000000000000000000000000602082015250565b7f4c696d626f3a20666c61736820676f7665726e616e63652064697361626c656460008201527f20666f722072657374206f662065706f63680000000000000000000000000000602082015250565b7f4645310000000000000000000000000000000000000000000000000000000000600082015250565b7f4c696d626f3a20466c617368676f7665726e616e6365206465636973696f6e2060008201527f70656e64696e672e000000000000000000000000000000000000000000000000602082015250565b61214781611f1f565b811461215257600080fd5b50565b61215e81611f31565b811461216957600080fd5b50565b61217581611f3d565b811461218057600080fd5b50565b61218c81611f67565b811461219757600080fd5b50565b6121a381611f71565b81146121ae57600080fd5b5056fea2646970667358221220ad7c60c0d79cc533d121a1494a0b125f5f15cee89323620ab7165b5cb0d9e2b364736f6c63430008040033";

export class FlashGovernanceArbiter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    dao: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FlashGovernanceArbiter> {
    return super.deploy(
      dao,
      overrides || {}
    ) as Promise<FlashGovernanceArbiter>;
  }
  getDeployTransaction(
    dao: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(dao, overrides || {});
  }
  attach(address: string): FlashGovernanceArbiter {
    return super.attach(address) as FlashGovernanceArbiter;
  }
  connect(signer: Signer): FlashGovernanceArbiter__factory {
    return super.connect(signer) as FlashGovernanceArbiter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashGovernanceArbiterInterface {
    return new utils.Interface(_abi) as FlashGovernanceArbiterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashGovernanceArbiter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FlashGovernanceArbiter;
  }
}