/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVaultfactory, IVaultfactoryInterface } from "../IVaultfactory";

const _abi = [
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
    name: "createVault",
    outputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "updateVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
    ],
    name: "viewVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IVaultfactory__factory {
  static readonly abi = _abi;
  static createInterface(): IVaultfactoryInterface {
    return new utils.Interface(_abi) as IVaultfactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVaultfactory {
    return new Contract(address, _abi, signerOrProvider) as IVaultfactory;
  }
}
