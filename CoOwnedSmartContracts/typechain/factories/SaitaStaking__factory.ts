/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SaitaStaking, SaitaStakingInterface } from "../SaitaStaking";

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
        indexed: false,
        internalType: "uint256",
        name: "_txNo",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "RewardWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_txNo",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_percent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_lockPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_lockedUntil",
        type: "uint256",
      },
    ],
    name: "StakeDeposit",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txNo",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "renounceOwnership",
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
    name: "rewardPercent",
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
        name: "_txNo",
        type: "uint256",
      },
    ],
    name: "rewards",
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
        name: "_time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_percentInBP",
        type: "uint256",
      },
    ],
    name: "setRewardPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
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
    name: "stakingTx",
    outputs: [
      {
        internalType: "uint256",
        name: "txNo",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_txNo",
        type: "uint256",
      },
    ],
    name: "userTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockedUntil",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "stakingOver",
            type: "bool",
          },
        ],
        internalType: "struct SaitaStaking.UserTransaction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a33610023565b60018055610073565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611106806100826000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063c4d66de811610071578063c4d66de814610198578063c79bdb46146101ab578063cbc502f0146101be578063f2fde38b146101fa578063f301af421461020d578063fc0c546a1461022057600080fd5b8063379607f5146100b9578063715018a6146100ce5780637b0472f0146100d65780638da5cb5b146100e9578063b842ec4414610113578063c2ab88291461016a575b600080fd5b6100cc6100c7366004610ee1565b610233565b005b6100cc610448565b6100cc6100e4366004610efa565b61047e565b6000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b610126610121366004610e93565b61064f565b60405161010a9190600060a0820190508251825260208301516020830152604083015160408301526060830151606083015260808301511515608083015292915050565b61018a610178366004610ee1565b60046020526000908152604090205481565b60405190815260200161010a565b6100cc6101a6366004610e76565b6106ec565b6100cc6101b9366004610efa565b6107f5565b6101e56101cc366004610e76565b6003602052600090815260409020805460019091015482565b6040805192835260208301919091520161010a565b6100cc610208366004610e76565b6108da565b61018a61021b366004610ee1565b610975565b6002546100f6906001600160a01b031681565b6002600154141561028b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600181815533600090815260036020908152604080832086845294850190915290206004015460ff16151514156103125760405162461bcd60e51b8152602060048201526024808201527f53616974615374616b653a205265776172647320616c726561647920636c616960448201526336b2b21760e11b6064820152608401610282565b600082815260028201602052604090206003015442116103825760405162461bcd60e51b815260206004820152602560248201527f53616974615374616b653a205374616b6520706572696f64206973206e6f742060448201526437bb32b91760d91b6064820152608401610282565b600061038d83610975565b60008481526002840160205260408120549192506103ab8383610fee565b9050818460010160008282546103c19190611047565b90915550506002546103dd906001600160a01b031633836109d5565b6000858152600285016020908152604091829020600401805460ff1916600117905581518781529081018490529081018490527f9549bc3ab80685b72be16a99657f49f2802ef7458da3f7ca37a9b72cb7bbb81e9060600160405180910390a1505060018055505050565b6000546001600160a01b031633146104725760405162461bcd60e51b815260040161028290610fb9565b61047c6000610a3d565b565b600260015414156104d15760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610282565b6002600155336000908152600360205260409020816105325760405162461bcd60e51b815260206004820152601860248201527f53616974615374616b653a204e756c6c20616d6f756e742100000000000000006044820152606401610282565b826105785760405162461bcd60e51b815260206004820152601660248201527553616974615374616b653a204e756c6c2074696d652160501b6044820152606401610282565b6000838152600460205260409020546105d35760405162461bcd60e51b815260206004820152601f60248201527f53616974615374616b653a2054696d65206e6f74207370656369666965642e006044820152606401610282565b6105dd8383610a8d565b8054600081815260028084016020908152604092839020918201546003909201548351948552908401869052918301869052606083015260808201527fd02ec4ddf94c878103d43eaacf104ca7af92ba9ccfd08335de8231e21a0037849060a00160405180910390a150506001805550565b6106836040518060a00160405280600081526020016000815260200160008152602001600081526020016000151581525090565b506001600160a01b03821660009081526003602081815260408084208585526002908101835293819020815160a08101835281548152600182015493810193909352938401549082015290820154606082015260049091015460ff161515608082015292915050565b60006106f86001610b48565b90508015610714576000805460ff60a81b1916600160a81b1790555b600280546001600160a01b0319166001600160a01b038416179055600460205260c87f5564a3699837f937070bc8e1a858506e72778e568c12590eed67a771b908e223556101907f081e5db68bd0b2138c7c7d33ea1f03c6cfd3b3a9624c556c6c483f10267e83a9556276a7006000526102587f3fed37f7d98193d2657b011eb0a3eec5f7221e6290af9fcd81f4c04fccd6843d5580156107f1576000805460ff60a81b19169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6000546001600160a01b0316331461081f5760405162461bcd60e51b815260040161028290610fb9565b60008111801561083157506107d08111155b61087d5760405162461bcd60e51b815260206004820152601860248201527f53616974615374616b653a204e6f7420696e2052616e676500000000000000006044820152606401610282565b62278d008210156108c85760405162461bcd60e51b81526020600482015260156024820152744d696e696d756d2074696d65206e6f74206d65742160581b6044820152606401610282565b60009182526004602052604090912055565b6000546001600160a01b031633146109045760405162461bcd60e51b815260040161028290610fb9565b6001600160a01b0381166109695760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610282565b61097281610a3d565b50565b336000908152600360209081526040808320848452600280820190935290832080549281015460019091015491928492909164496cebb800916109b89190611028565b6109c29083611028565b6109cc9190611006565b95945050505050565b6040516001600160a01b038316602482015260448101829052610a3890849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610be3565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3360008181526003602052604090206002549091610ab6916001600160a01b0316903085610cb5565b8054816000610ac48361108a565b919050555081816001016000828254610add9190610fee565b909155505080546000908152600282016020526040808220849055825482529020600101839055610b0e8342610fee565b8154600090815260028084016020818152604080852060030195909555968352600487528383205494548352909552209092019190915550565b60008054600160a81b900460ff1615610b91578160ff166001148015610b6d5750303b155b610b895760405162461bcd60e51b815260040161028290610f6b565b506000919050565b60005460ff808416600160a01b9092041610610bbf5760405162461bcd60e51b815260040161028290610f6b565b506000805460ff909216600160a01b0260ff60a01b19909216919091179055600190565b6000610c38826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610cf39092919063ffffffff16565b805190915015610a385780806020019051810190610c569190610ebf565b610a385760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610282565b6040516001600160a01b0380851660248301528316604482015260648101829052610ced9085906323b872dd60e01b90608401610a01565b50505050565b6060610d028484600085610d0c565b90505b9392505050565b606082471015610d6d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610282565b6001600160a01b0385163b610dc45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610282565b600080866001600160a01b03168587604051610de09190610f1c565b60006040518083038185875af1925050503d8060008114610e1d576040519150601f19603f3d011682016040523d82523d6000602084013e610e22565b606091505b5091509150610e32828286610e3d565b979650505050505050565b60608315610e4c575081610d05565b825115610e5c5782518084602001fd5b8160405162461bcd60e51b81526004016102829190610f38565b600060208284031215610e8857600080fd5b8135610d05816110bb565b60008060408385031215610ea657600080fd5b8235610eb1816110bb565b946020939093013593505050565b600060208284031215610ed157600080fd5b81518015158114610d0557600080fd5b600060208284031215610ef357600080fd5b5035919050565b60008060408385031215610f0d57600080fd5b50508035926020909101359150565b60008251610f2e81846020870161105e565b9190910192915050565b6020815260008251806020840152610f5781604085016020870161105e565b601f01601f19169190910160400192915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115611001576110016110a5565b500190565b60008261102357634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611042576110426110a5565b500290565b600082821015611059576110596110a5565b500390565b60005b83811015611079578181015183820152602001611061565b83811115610ced5750506000910152565b600060001982141561109e5761109e6110a5565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461097257600080fdfea2646970667358221220c7c4fa0c7adfa37e0e7151d47a4789b748528b9405ec63df101bdc49091cd7c064736f6c63430008070033";

export class SaitaStaking__factory extends ContractFactory {
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
  ): Promise<SaitaStaking> {
    return super.deploy(overrides || {}) as Promise<SaitaStaking>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SaitaStaking {
    return super.attach(address) as SaitaStaking;
  }
  connect(signer: Signer): SaitaStaking__factory {
    return super.connect(signer) as SaitaStaking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaitaStakingInterface {
    return new utils.Interface(_abi) as SaitaStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SaitaStaking {
    return new Contract(address, _abi, signerOrProvider) as SaitaStaking;
  }
}
