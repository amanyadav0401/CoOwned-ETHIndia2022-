/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721HolderUpgradeable,
  ERC721HolderUpgradeableInterface,
} from "../ERC721HolderUpgradeable";

const _abi = [
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101af806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004e61003e366004610087565b630a85bd0160e11b949350505050565b6040516001600160e01b0319909116815260200160405180910390f35b80356001600160a01b038116811461008257600080fd5b919050565b6000806000806080858703121561009d57600080fd5b6100a68561006b565b93506100b46020860161006b565b925060408501359150606085013567ffffffffffffffff808211156100d857600080fd5b818701915087601f8301126100ec57600080fd5b8135818111156100fe576100fe610163565b604051601f8201601f19908116603f0116810190838211818310171561012657610126610163565b816040528281528a602084870101111561013f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f7c05900d873c8568a559efe90ddeb1939c2cb44443cbccc222b94006b5dde3064736f6c63430008070033";

export class ERC721HolderUpgradeable__factory extends ContractFactory {
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
  ): Promise<ERC721HolderUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721HolderUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721HolderUpgradeable {
    return super.attach(address) as ERC721HolderUpgradeable;
  }
  connect(signer: Signer): ERC721HolderUpgradeable__factory {
    return super.connect(signer) as ERC721HolderUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721HolderUpgradeableInterface {
    return new utils.Interface(_abi) as ERC721HolderUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721HolderUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721HolderUpgradeable;
  }
}
