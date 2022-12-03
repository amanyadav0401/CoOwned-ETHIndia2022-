/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoOwnNFT, CoOwnNFTInterface } from "../CoOwnNFT";

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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Properties",
    outputs: [
      {
        internalType: "uint256",
        name: "propertyNo",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalFractions",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "lister",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pricePerFraction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fractionsLeft",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "propertySold",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_fractionSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pricePerFraction",
        type: "uint256",
      },
    ],
    name: "addProperty",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fractions",
        type: "uint256",
      },
    ],
    name: "buyFraction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "_vaultfactory",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "renounceOwnership",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lister",
        type: "address",
      },
    ],
    name: "viewListedProperties",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a33610024565b600160ca55610076565b60c980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6123ee806100856000396000f3fe6080604052600436106101355760003560e01c806370a08231116100ab578063a22cb4651161006f578063a22cb465146103db578063b88d4fde146103fb578063c87b56dd1461041b578063d40b02141461043b578063e985e9c51461045c578063f2fde38b146104a557600080fd5b806370a08231146102cb578063715018a6146102f95780638da5cb5b1461030e57806395d89b411461032c5780639d1168841461034157600080fd5b8063095ea7b3116100fd578063095ea7b31461020b57806323b872dd1461022b5780633eb90c2e1461024b57806342842e0e1461026b57806342966c681461028b5780636352211e146102ab57600080fd5b806301ffc9a71461013a578063045cfded1461016f57806306fdde0314610191578063077f224a146101b3578063081812fc146101d3575b600080fd5b34801561014657600080fd5b5061015a610155366004611eaf565b6104c5565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b5061018f61018a366004611f61565b610517565b005b34801561019d57600080fd5b506101a6610628565b60405161016691906120e9565b3480156101bf57600080fd5b5061018f6101ce366004611ee9565b6106ba565b3480156101df57600080fd5b506101f36101ee366004611ffb565b61082b565b6040516001600160a01b039091168152602001610166565b34801561021757600080fd5b5061018f610226366004611e66565b610852565b34801561023757600080fd5b5061018f610246366004611d77565b610968565b34801561025757600080fd5b5061018f610266366004611d04565b610999565b34801561027757600080fd5b5061018f610286366004611d77565b6109e7565b34801561029757600080fd5b5061018f6102a6366004611ffb565b610a02565b3480156102b757600080fd5b506101f36102c6366004611ffb565b610a4a565b3480156102d757600080fd5b506102eb6102e6366004611d04565b610aaa565b604051908152602001610166565b34801561030557600080fd5b5061018f610b30565b34801561031a57600080fd5b5060c9546001600160a01b03166101f3565b34801561033857600080fd5b506101a6610b66565b34801561034d57600080fd5b5061039e61035c366004611ffb565b60ce60205260009081526040902080546001820154600283015460038401546004850154600590950154939492936001600160a01b0390921692909160ff1686565b6040805196875260208701959095526001600160a01b039093169385019390935260608401526080830191909152151560a082015260c001610166565b3480156103e757600080fd5b5061018f6103f6366004611e38565b610b75565b34801561040757600080fd5b5061018f610416366004611db8565b610b84565b34801561042757600080fd5b506101a6610436366004611ffb565b610bb6565b61044e610449366004612014565b610cc7565b6040516101669291906120ce565b34801561046857600080fd5b5061015a610477366004611d3e565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b3480156104b157600080fd5b5061018f6104c0366004611d04565b610ed3565b60006001600160e01b031982166380ac58cd60e01b14806104f657506001600160e01b03198216635b5e139f60e01b145b8061051157506301ffc9a760e01b6001600160e01b03198316145b92915050565b600260ca54141561056f5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260ca55600182116105a95760405162461bcd60e51b8152602060048201526002602482015261494160f01b6044820152606401610566565b6105b885858560cd5486610f6b565b60cd8054600081815260ce60205260408082209283556001909201859055825481528181206004018590558254815281812060020180546001600160a01b03191633179055825481529081206003018390558154919061061783612338565b9091555050600160ca555050505050565b606060658054610637906122fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610663906122fd565b80156106b05780601f10610685576101008083540402835291602001916106b0565b820191906000526020600020905b81548152906001019060200180831161069357829003601f168201915b5050505050905090565b600054610100900460ff16158080156106da5750600054600160ff909116105b806106f45750303b1580156106f4575060005460ff166001145b6107575760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610566565b6000805460ff19166001179055801561077a576000805461ff0019166101001790555b6001600160a01b0382166107b55760405162461bcd60e51b81526020600482015260026024820152615a4160f01b6044820152606401610566565b6107bf848461103b565b60cb80546001600160a01b0319166001600160a01b038416179055600160cd558015610825576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b6000610836826110cd565b506000908152606960205260409020546001600160a01b031690565b600061085d82610a4a565b9050806001600160a01b0316836001600160a01b031614156108cb5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610566565b336001600160a01b03821614806108e757506108e78133610477565b6109595760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610566565b610963838361111d565b505050565b610972338261118b565b61098e5760405162461bcd60e51b815260040161056690612148565b610963838383611209565b6001600160a01b0381166109d45760405162461bcd60e51b81526020600482015260026024820152615a4160f01b6044820152606401610566565b6001600160a01b031660005260cc602052565b61096383838360405180602001604052806000815250610b84565b60c9546001600160a01b03163314610a2c5760405162461bcd60e51b81526004016105669061222c565b610a358161137a565b610a3e57600080fd5b610a4781611397565b50565b6000818152606760205260408120546001600160a01b0316806105115760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610566565b60006001600160a01b038216610b145760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610566565b506001600160a01b031660009081526068602052604090205490565b60c9546001600160a01b03163314610b5a5760405162461bcd60e51b81526004016105669061222c565b610b6460006113d7565b565b606060668054610637906122fd565b610b80338383611429565b5050565b610b8e338361118b565b610baa5760405162461bcd60e51b815260040161056690612148565b610825848484846114f8565b6060610bc1826110cd565b60008281526097602052604081208054610bda906122fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610c06906122fd565b8015610c535780601f10610c2857610100808354040283529160200191610c53565b820191906000526020600020905b815481529060010190602001808311610c3657829003601f168201915b505050505090506000610c7160408051602081019091526000815290565b9050805160001415610c84575092915050565b815115610cb6578082604051602001610c9e929190612062565b60405160208183030381529060405292505050919050565b610cbf8461152b565b949350505050565b60006060600260ca541415610d1e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610566565b600260ca55610d2c8461137a565b50600084815260ce602052604090206003810154610d4a908561229b565b341015610d915760405162461bcd60e51b8152602060048201526015602482015274283934b1b29032bc31b2b2b2399030b6b7bab73a1760591b6044820152606401610566565b600085815260d060205260409081902054905163a9059cbb60e01b8152336004820152602481018690526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b158015610dea57600080fd5b505af1158015610dfe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e229190611e92565b506000610e30606434612279565b90506000610e3e82346122ba565b600284015460405191925060009182916001600160a01b03169084908381818185875af1925050503d8060008114610e92576040519150601f19603f3d011682016040523d82523d6000602084013e610e97565b606091505b509150915087856004016000828254610eb091906122ba565b90915550829050610ec057600080fd5b600160ca55909890975095505050505050565b60c9546001600160a01b03163314610efd5760405162461bcd60e51b81526004016105669061222c565b6001600160a01b038116610f625760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610566565b610a47816113d7565b60cb5460405163fb0687d760e01b81526000916001600160a01b03169063fb0687d790610fa49089908990879030908a906004016120fc565b602060405180830381600087803b158015610fbe57600080fd5b505af1158015610fd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff69190611d21565b9050611002818461159f565b600083815260d06020526040902080546001600160a01b0319166001600160a01b03831617905561103383856115b9565b505050505050565b600054610100900460ff166110a65760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610566565b81516110b9906065906020850190611b9f565b508051610963906066906020840190611b9f565b6110d68161137a565b610a475760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610566565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061115282610a4a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061119783610a4a565b9050806001600160a01b0316846001600160a01b031614806111de57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610cbf5750836001600160a01b03166111f78461082b565b6001600160a01b031614949350505050565b826001600160a01b031661121c82610a4a565b6001600160a01b0316146112425760405162461bcd60e51b8152600401610566906121e7565b6001600160a01b0382166112a45760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610566565b6112b18383836001611644565b826001600160a01b03166112c482610a4a565b6001600160a01b0316146112ea5760405162461bcd60e51b8152600401610566906121e7565b600081815260696020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260688552838620805460001901905590871680865283862080546001019055868652606790945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000908152606760205260409020546001600160a01b0316151590565b6113a0816116cc565b600081815260976020526040902080546113b9906122fd565b159050610a47576000818152609760205260408120610a4791611c23565b60c980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316141561148b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610566565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611503848484611209565b61150f8484848461176f565b6108255760405162461bcd60e51b815260040161056690612195565b6060611536826110cd565b600061154d60408051602081019091526000815290565b9050600081511161156d5760405180602001604052806000815250611598565b806115778461187c565b604051602001611588929190612062565b6040516020818303038152906040525b9392505050565b610b80828260405180602001604052806000815250611919565b6115c28261137a565b6116255760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610566565b6000828152609760209081526040909120825161096392840190611b9f565b6001811115610825576001600160a01b0384161561168a576001600160a01b038416600090815260686020526040812080548392906116849084906122ba565b90915550505b6001600160a01b03831615610825576001600160a01b038316600090815260686020526040812080548392906116c1908490612261565b909155505050505050565b60006116d782610a4a565b90506116e7816000846001611644565b6116f082610a4a565b600083815260696020908152604080832080546001600160a01b03199081169091556001600160a01b0385168085526068845282852080546000190190558785526067909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60006001600160a01b0384163b1561187157604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906117b3903390899088908890600401612091565b602060405180830381600087803b1580156117cd57600080fd5b505af19250505080156117fd575060408051601f3d908101601f191682019092526117fa91810190611ecc565b60015b611857573d80801561182b576040519150601f19603f3d011682016040523d82523d6000602084013e611830565b606091505b50805161184f5760405162461bcd60e51b815260040161056690612195565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610cbf565b506001949350505050565b606060006118898361194c565b600101905060008167ffffffffffffffff8111156118a9576118a9612369565b6040519080825280601f01601f1916602001820160405280156118d3576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461190c57611911565b6118dd565b509392505050565b6119238383611a24565b611930600084848461176f565b6109635760405162461bcd60e51b815260040161056690612195565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061198b5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106119b7576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106119d557662386f26fc10000830492506010015b6305f5e10083106119ed576305f5e100830492506008015b6127108310611a0157612710830492506004015b60648310611a13576064830492506002015b600a83106105115760010192915050565b6001600160a01b038216611a7a5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610566565b611a838161137a565b15611ad05760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610566565b611ade600083836001611644565b611ae78161137a565b15611b345760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610566565b6001600160a01b038216600081815260686020908152604080832080546001019055848352606790915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b828054611bab906122fd565b90600052602060002090601f016020900481019282611bcd5760008555611c13565b82601f10611be657805160ff1916838001178555611c13565b82800160010185558215611c13579182015b82811115611c13578251825591602001919060010190611bf8565b50611c1f929150611c59565b5090565b508054611c2f906122fd565b6000825580601f10611c3f575050565b601f016020900490600052602060002090810190610a4791905b5b80821115611c1f5760008155600101611c5a565b600067ffffffffffffffff80841115611c8957611c89612369565b604051601f8501601f19908116603f01168101908282118183101715611cb157611cb1612369565b81604052809350858152868686011115611cca57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611cf557600080fd5b61159883833560208501611c6e565b600060208284031215611d1657600080fd5b81356115988161237f565b600060208284031215611d3357600080fd5b81516115988161237f565b60008060408385031215611d5157600080fd5b8235611d5c8161237f565b91506020830135611d6c8161237f565b809150509250929050565b600080600060608486031215611d8c57600080fd5b8335611d978161237f565b92506020840135611da78161237f565b929592945050506040919091013590565b60008060008060808587031215611dce57600080fd5b8435611dd98161237f565b93506020850135611de98161237f565b925060408501359150606085013567ffffffffffffffff811115611e0c57600080fd5b8501601f81018713611e1d57600080fd5b611e2c87823560208401611c6e565b91505092959194509250565b60008060408385031215611e4b57600080fd5b8235611e568161237f565b91506020830135611d6c81612394565b60008060408385031215611e7957600080fd5b8235611e848161237f565b946020939093013593505050565b600060208284031215611ea457600080fd5b815161159881612394565b600060208284031215611ec157600080fd5b8135611598816123a2565b600060208284031215611ede57600080fd5b8151611598816123a2565b600080600060608486031215611efe57600080fd5b833567ffffffffffffffff80821115611f1657600080fd5b611f2287838801611ce4565b94506020860135915080821115611f3857600080fd5b50611f4586828701611ce4565b9250506040840135611f568161237f565b809150509250925092565b600080600080600060a08688031215611f7957600080fd5b853567ffffffffffffffff80821115611f9157600080fd5b611f9d89838a01611ce4565b96506020880135915080821115611fb357600080fd5b611fbf89838a01611ce4565b95506040880135915080821115611fd557600080fd5b50611fe288828901611ce4565b9598949750949560608101359550608001359392505050565b60006020828403121561200d57600080fd5b5035919050565b6000806040838503121561202757600080fd5b50508035926020909101359150565b6000815180845261204e8160208601602086016122d1565b601f01601f19169290920160200192915050565b600083516120748184602088016122d1565b8351908301906120888183602088016122d1565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906120c490830184612036565b9695505050505050565b8215158152604060208201526000610cbf6040830184612036565b6020815260006115986020830184612036565b60a08152600061210f60a0830188612036565b82810360208401526121218188612036565b604084019690965250506001600160a01b0392909216606083015260809091015292915050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111561227457612274612353565b500190565b60008261229657634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156122b5576122b5612353565b500290565b6000828210156122cc576122cc612353565b500390565b60005b838110156122ec5781810151838201526020016122d4565b838111156108255750506000910152565b600181811c9082168061231157607f821691505b6020821081141561233257634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561234c5761234c612353565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610a4757600080fd5b8015158114610a4757600080fd5b6001600160e01b031981168114610a4757600080fdfea2646970667358221220c7e9bbd24a7f48716157cfe86c321ae853651ea63b4a7fdfc147bee682e2d14264736f6c63430008070033";

export class CoOwnNFT__factory extends ContractFactory {
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
  ): Promise<CoOwnNFT> {
    return super.deploy(overrides || {}) as Promise<CoOwnNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoOwnNFT {
    return super.attach(address) as CoOwnNFT;
  }
  connect(signer: Signer): CoOwnNFT__factory {
    return super.connect(signer) as CoOwnNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoOwnNFTInterface {
    return new utils.Interface(_abi) as CoOwnNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoOwnNFT {
    return new Contract(address, _abi, signerOrProvider) as CoOwnNFT;
  }
}