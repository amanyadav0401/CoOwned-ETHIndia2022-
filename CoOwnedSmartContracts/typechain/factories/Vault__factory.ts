/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vault, VaultInterface } from "../Vault";

const _abi = [
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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    inputs: [],
    name: "admin",
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
        name: "",
        type: "address",
      },
    ],
    name: "excludeFee",
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
    name: "finalOfferredAmount",
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
    name: "fractionPrice",
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
    name: "fractionSupply",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_tokenSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token721",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "marketFeeWallet",
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
    inputs: [],
    name: "offerNumber",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "taxWallet",
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
    name: "token721",
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
    name: "tokenID",
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
        name: "to",
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
        name: "from",
        type: "address",
      },
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
  "0x608060405234801561001057600080fd5b50610f98806100206000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a5c42ef11161007c578063a5c42ef1146102e4578063a8f8e887146102ed578063a9059cbb146102f6578063dd62ed3e14610309578063f851a4401461031c578063fede02761461032f57600080fd5b806370a08231146102615780637967d26d1461028a57806385c292b4146102ad57806395d89b41146102c0578063974c7c9e146102c8578063a457c2d7146102d157600080fd5b80632dc0562d116101155780632dc0562d146101ef578063313ce5671461021a57806332ee508514610229578063395093511461023257806356953bda146102455780635b922cc61461024e57600080fd5b806306fdde0314610152578063095ea7b314610170578063150b7a021461019357806318160ddd146101ca57806323b872dd146101dc575b600080fd5b61015a610344565b6040516101679190610e4b565b60405180910390f35b61018361017e366004610d9b565b6103d6565b6040519015158152602001610167565b6101b16101a1366004610d1f565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610167565b6035545b604051908152602001610167565b6101836101ea366004610ce3565b6103ee565b609854610202906001600160a01b031681565b6040516001600160a01b039091168152602001610167565b60405160128152602001610167565b6101ce609d5481565b610183610240366004610d9b565b610412565b6101ce609b5481565b609954610202906001600160a01b031681565b6101ce61026f366004610c95565b6001600160a01b031660009081526033602052604090205490565b610183610298366004610c95565b60a36020526000908152604090205460ff1681565b609a54610202906001600160a01b031681565b61015a610434565b6101ce60a05481565b6101836102df366004610d9b565b610443565b6101ce609c5481565b6101ce609f5481565b610183610304366004610d9b565b6104c3565b6101ce610317366004610cb0565b6104d1565b609754610202906001600160a01b031681565b61034261033d366004610dc5565b6104fc565b005b60606036805461035390610f11565b80601f016020809104026020016040519081016040528092919081815260200182805461037f90610f11565b80156103cc5780601f106103a1576101008083540402835291602001916103cc565b820191906000526020600020905b8154815290600101906020018083116103af57829003601f168201915b5050505050905090565b6000336103e4818585610669565b5060019392505050565b6000336103fc85828561078d565b610407858585610807565b506001949350505050565b6000336103e481858561042583836104d1565b61042f9190610eeb565b610669565b60606037805461035390610f11565b6000338161045182866104d1565b9050838110156104b65760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6104078286868403610669565b6000336103e4818585610807565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b600054610100900460ff161580801561051c5750600054600160ff909116105b806105365750303b158015610536575060005460ff166001145b6105995760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104ad565b6000805460ff1916600117905580156105bc576000805461ff0019166101001790555b6105c4610852565b6105ce868661087b565b609a80546001600160a01b0319166001600160a01b038516908117909155609c8390556105fb90856108c9565b603554609d5530600090815260a360205260409020805460ff191660011790558015610661576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b6001600160a01b0383166106cb5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104ad565b6001600160a01b03821661072c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104ad565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061079984846104d1565b9050600019811461080157818110156107f45760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104ad565b6108018484848403610669565b50505050565b6001600160a01b0382166108425760405162461bcd60e51b81526020600482015260026024820152615a4160f01b60448201526064016104ad565b61084d8383836108d7565b505050565b600054610100900460ff166108795760405162461bcd60e51b81526004016104ad90610ea0565b565b600054610100900460ff166108a25760405162461bcd60e51b81526004016104ad90610ea0565b81516108b5906036906020850190610b43565b50805161084d906037906020840190610b43565b6108d38282610a82565b5050565b6001600160a01b03831661093b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104ad565b6001600160a01b03821661099d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104ad565b6001600160a01b03831660009081526033602052604090205481811015610a155760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104ad565b6001600160a01b0380851660008181526033602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a759086815260200190565b60405180910390a3610801565b6001600160a01b038216610ad85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104ad565b8060356000828254610aea9190610eeb565b90915550506001600160a01b0382166000818152603360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b828054610b4f90610f11565b90600052602060002090601f016020900481019282610b715760008555610bb7565b82601f10610b8a57805160ff1916838001178555610bb7565b82800160010185558215610bb7579182015b82811115610bb7578251825591602001919060010190610b9c565b50610bc3929150610bc7565b5090565b5b80821115610bc35760008155600101610bc8565b600067ffffffffffffffff80841115610bf757610bf7610f4c565b604051601f8501601f19908116603f01168101908282118183101715610c1f57610c1f610f4c565b81604052809350858152868686011115610c3857600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b0381168114610c6957600080fd5b919050565b600082601f830112610c7f57600080fd5b610c8e83833560208501610bdc565b9392505050565b600060208284031215610ca757600080fd5b610c8e82610c52565b60008060408385031215610cc357600080fd5b610ccc83610c52565b9150610cda60208401610c52565b90509250929050565b600080600060608486031215610cf857600080fd5b610d0184610c52565b9250610d0f60208501610c52565b9150604084013590509250925092565b60008060008060808587031215610d3557600080fd5b610d3e85610c52565b9350610d4c60208601610c52565b925060408501359150606085013567ffffffffffffffff811115610d6f57600080fd5b8501601f81018713610d8057600080fd5b610d8f87823560208401610bdc565b91505092959194509250565b60008060408385031215610dae57600080fd5b610db783610c52565b946020939093013593505050565b600080600080600060a08688031215610ddd57600080fd5b853567ffffffffffffffff80821115610df557600080fd5b610e0189838a01610c6e565b96506020880135915080821115610e1757600080fd5b50610e2488828901610c6e565b94505060408601359250610e3a60608701610c52565b949793965091946080013592915050565b600060208083528351808285015260005b81811015610e7857858101830151858201604001528201610e5c565b81811115610e8a576000604083870101525b50601f01601f1916929092016040019392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008219821115610f0c57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680610f2557607f821691505b60208210811415610f4657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220467df07b5e83d35812df9e7a7973885a404a9ff2e105c0dbe3b244d4b0f729cc64736f6c63430008070033";

export class Vault__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vault> {
    return super.deploy(overrides || {}) as Promise<Vault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Vault {
    return super.attach(address) as Vault;
  }
  connect(signer: Signer): Vault__factory {
    return super.connect(signer) as Vault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new utils.Interface(_abi) as VaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault {
    return new Contract(address, _abi, signerOrProvider) as Vault;
  }
}
