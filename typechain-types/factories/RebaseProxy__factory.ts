/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RebaseProxy, RebaseProxyInterface } from "../RebaseProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_baseToken",
        type: "address",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002315380380620023158339818101604052810190620000379190620001f2565b828282816003908051906020019062000052929190620000b9565b5080600490805190602001906200006b929190620000b9565b50505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000438565b828054620000c79062000343565b90600052602060002090601f016020900481019282620000eb576000855562000137565b82601f106200010657805160ff191683800117855562000137565b8280016001018555821562000137579182015b828111156200013657825182559160200191906001019062000119565b5b5090506200014691906200014a565b5090565b5b80821115620001655760008160009055506001016200014b565b5090565b6000620001806200017a84620002a3565b6200027a565b9050828152602081018484840111156200019957600080fd5b620001a68482856200030d565b509392505050565b600081519050620001bf816200041e565b92915050565b600082601f830112620001d757600080fd5b8151620001e984826020860162000169565b91505092915050565b6000806000606084860312156200020857600080fd5b60006200021886828701620001ae565b935050602084015167ffffffffffffffff8111156200023657600080fd5b6200024486828701620001c5565b925050604084015167ffffffffffffffff8111156200026257600080fd5b6200027086828701620001c5565b9150509250925092565b60006200028662000299565b905062000294828262000379565b919050565b6000604051905090565b600067ffffffffffffffff821115620002c157620002c0620003de565b5b620002cc826200040d565b9050602081019050919050565b6000620002e682620002ed565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156200032d57808201518184015260208101905062000310565b838111156200033d576000848401525b50505050565b600060028204905060018216806200035c57607f821691505b60208210811415620003735762000372620003af565b5b50919050565b62000384826200040d565b810181811067ffffffffffffffff82111715620003a657620003a5620003de565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200042981620002d9565b81146200043557600080fd5b50565b611ecd80620004486000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b4114610287578063a457c2d7146102a5578063a9059cbb146102d5578063dd62ed3e14610305576100ea565b806339509351146101f757806340c10f191461022757806370a0823114610257576100ea565b806318160ddd116100c857806318160ddd1461015b5780631e9a69501461017957806323b872dd146101a9578063313ce567146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d5780630adcdbaa1461013d575b600080fd5b6100f7610335565b6040516101049190611741565b60405180910390f35b6101276004803603810190610122919061144a565b6103c7565b6040516101349190611726565b60405180910390f35b6101456103e5565b60405161015291906118a3565b60405180910390f35b6101636104ee565b60405161017091906118a3565b60405180910390f35b610193600480360381019061018e919061144a565b6104f8565b6040516101a091906118a3565b60405180910390f35b6101c360048036038101906101be91906113fb565b6105ea565b6040516101d09190611726565b60405180910390f35b6101e16106e2565b6040516101ee91906118be565b60405180910390f35b610211600480360381019061020c919061144a565b6106eb565b60405161021e9190611726565b60405180910390f35b610241600480360381019061023c919061144a565b610797565b60405161024e91906118a3565b60405180910390f35b610271600480360381019061026c9190611396565b610943565b60405161027e91906118a3565b60405180910390f35b61028f61098b565b60405161029c9190611741565b60405180910390f35b6102bf60048036038101906102ba919061144a565b610a1d565b6040516102cc9190611726565b60405180910390f35b6102ef60048036038101906102ea919061144a565b610b08565b6040516102fc9190611726565b60405180910390f35b61031f600480360381019061031a91906113bf565b610b26565b60405161032c91906118a3565b60405180910390f35b60606003805461034490611a92565b80601f016020809104026020016040519081016040528092919081815260200182805461037090611a92565b80156103bd5780601f10610392576101008083540402835291602001916103bd565b820191906000526020600020905b8154815290600101906020018083116103a057829003601f168201915b5050505050905090565b60006103db6103d4610bad565b8484610bb5565b6001905092915050565b600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161044391906116ab565b60206040518083038186803b15801561045b57600080fd5b505afa15801561046f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049391906114af565b9050600061049f6104ee565b14806104ab5750600081145b156104c157670de0b6b3a76400009150506104eb565b6104c96104ee565b670de0b6b3a7640000826104dd919061197c565b6104e7919061194b565b9150505b90565b6000600254905090565b6000806105036103e5565b90506000670de0b6b3a7640000848361051c919061197c565b610526919061194b565b90506105323385610d80565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86836040518363ffffffff1660e01b815260040161058f9291906116fd565b602060405180830381600087803b1580156105a957600080fd5b505af11580156105bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e19190611486565b50505092915050565b60006105f7848484610f57565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610642610bad565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b9906117e3565b60405180910390fd5b6106d6856106ce610bad565b858403610bb5565b60019150509392505050565b60006012905090565b600061078d6106f8610bad565b848460016000610706610bad565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461078891906118f5565b610bb5565b6001905092915050565b6000806107a26103e5565b9050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401610803939291906116c6565b602060405180830381600087803b15801561081d57600080fd5b505af1158015610831573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108559190611486565b61085e57600080fd5b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108bb91906116ab565b60206040518083038186803b1580156108d357600080fd5b505afa1580156108e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090b91906114af565b9050600082670de0b6b3a764000083610924919061197c565b61092e919061194b565b905061093a86826111d8565b50505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461099a90611a92565b80601f01602080910402602001604051908101604052809291908181526020018280546109c690611a92565b8015610a135780601f106109e857610100808354040283529160200191610a13565b820191906000526020600020905b8154815290600101906020018083116109f657829003601f168201915b5050505050905090565b60008060016000610a2c610bad565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610ae9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae090611863565b60405180910390fd5b610afd610af4610bad565b85858403610bb5565b600191505092915050565b6000610b1c610b15610bad565b8484610f57565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1c90611843565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8c906117a3565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610d7391906118a3565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610df0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de790611803565b60405180910390fd5b610dfc82600083611338565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7990611783565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610ed991906119d6565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f3e91906118a3565b60405180910390a3610f528360008461133d565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610fc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbe90611823565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102e90611763565b60405180910390fd5b611042838383611338565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156110c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110bf906117c3565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461115b91906118f5565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111bf91906118a3565b60405180910390a36111d284848461133d565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123f90611883565b60405180910390fd5b61125460008383611338565b806002600082825461126691906118f5565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112bb91906118f5565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161132091906118a3565b60405180910390a36113346000838361133d565b5050565b505050565b505050565b60008135905061135181611e52565b92915050565b60008151905061136681611e69565b92915050565b60008135905061137b81611e80565b92915050565b60008151905061139081611e80565b92915050565b6000602082840312156113a857600080fd5b60006113b684828501611342565b91505092915050565b600080604083850312156113d257600080fd5b60006113e085828601611342565b92505060206113f185828601611342565b9150509250929050565b60008060006060848603121561141057600080fd5b600061141e86828701611342565b935050602061142f86828701611342565b92505060406114408682870161136c565b9150509250925092565b6000806040838503121561145d57600080fd5b600061146b85828601611342565b925050602061147c8582860161136c565b9150509250929050565b60006020828403121561149857600080fd5b60006114a684828501611357565b91505092915050565b6000602082840312156114c157600080fd5b60006114cf84828501611381565b91505092915050565b6114e181611a0a565b82525050565b6114f081611a1c565b82525050565b6000611501826118d9565b61150b81856118e4565b935061151b818560208601611a5f565b61152481611b51565b840191505092915050565b600061153c6023836118e4565b915061154782611b62565b604082019050919050565b600061155f6022836118e4565b915061156a82611bb1565b604082019050919050565b60006115826022836118e4565b915061158d82611c00565b604082019050919050565b60006115a56026836118e4565b91506115b082611c4f565b604082019050919050565b60006115c86028836118e4565b91506115d382611c9e565b604082019050919050565b60006115eb6021836118e4565b91506115f682611ced565b604082019050919050565b600061160e6025836118e4565b915061161982611d3c565b604082019050919050565b60006116316024836118e4565b915061163c82611d8b565b604082019050919050565b60006116546025836118e4565b915061165f82611dda565b604082019050919050565b6000611677601f836118e4565b915061168282611e29565b602082019050919050565b61169681611a48565b82525050565b6116a581611a52565b82525050565b60006020820190506116c060008301846114d8565b92915050565b60006060820190506116db60008301866114d8565b6116e860208301856114d8565b6116f5604083018461168d565b949350505050565b600060408201905061171260008301856114d8565b61171f602083018461168d565b9392505050565b600060208201905061173b60008301846114e7565b92915050565b6000602082019050818103600083015261175b81846114f6565b905092915050565b6000602082019050818103600083015261177c8161152f565b9050919050565b6000602082019050818103600083015261179c81611552565b9050919050565b600060208201905081810360008301526117bc81611575565b9050919050565b600060208201905081810360008301526117dc81611598565b9050919050565b600060208201905081810360008301526117fc816115bb565b9050919050565b6000602082019050818103600083015261181c816115de565b9050919050565b6000602082019050818103600083015261183c81611601565b9050919050565b6000602082019050818103600083015261185c81611624565b9050919050565b6000602082019050818103600083015261187c81611647565b9050919050565b6000602082019050818103600083015261189c8161166a565b9050919050565b60006020820190506118b8600083018461168d565b92915050565b60006020820190506118d3600083018461169c565b92915050565b600081519050919050565b600082825260208201905092915050565b600061190082611a48565b915061190b83611a48565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119405761193f611ac4565b5b828201905092915050565b600061195682611a48565b915061196183611a48565b92508261197157611970611af3565b5b828204905092915050565b600061198782611a48565b915061199283611a48565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156119cb576119ca611ac4565b5b828202905092915050565b60006119e182611a48565b91506119ec83611a48565b9250828210156119ff576119fe611ac4565b5b828203905092915050565b6000611a1582611a28565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611a7d578082015181840152602081019050611a62565b83811115611a8c576000848401525b50505050565b60006002820490506001821680611aaa57607f821691505b60208210811415611abe57611abd611b22565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611e5b81611a0a565b8114611e6657600080fd5b50565b611e7281611a1c565b8114611e7d57600080fd5b50565b611e8981611a48565b8114611e9457600080fd5b5056fea264697066735822122048e32b8e4400e9008776691036499f17779b317aba989b4487453b69e93edf0264736f6c63430008040033";

export class RebaseProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _baseToken: string,
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RebaseProxy> {
    return super.deploy(
      _baseToken,
      name_,
      symbol_,
      overrides || {}
    ) as Promise<RebaseProxy>;
  }
  getDeployTransaction(
    _baseToken: string,
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _baseToken,
      name_,
      symbol_,
      overrides || {}
    );
  }
  attach(address: string): RebaseProxy {
    return super.attach(address) as RebaseProxy;
  }
  connect(signer: Signer): RebaseProxy__factory {
    return super.connect(signer) as RebaseProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RebaseProxyInterface {
    return new utils.Interface(_abi) as RebaseProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RebaseProxy {
    return new Contract(address, _abi, signerOrProvider) as RebaseProxy;
  }
}