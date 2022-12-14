/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LotteryInterface extends ethers.utils.Interface {
  functions: {
    "Raffle(uint256)": FunctionFragment;
    "buyTicket(uint256,uint256)": FunctionFragment;
    "createRaffle(uint256,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "declareWinner(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "totalRaffles()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "Raffle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTicket",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createRaffle",
    values: [
      BigNumberish,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "declareWinner",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalRaffles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "Raffle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyTicket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRaffle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "declareWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRaffles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LotteryInterface;

  functions: {
    Raffle(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string,
        BigNumber
      ] & {
        number: BigNumber;
        maxTickets: BigNumber;
        ticketBuyOption: boolean;
        ticketPrice: BigNumber;
        ticketCounter: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        raffleOver: boolean;
        raffleRewardToken: string;
        winner: string;
        rewardPercent: BigNumber;
      }
    >;

    buyTicket(
      _raffleNumber: BigNumberish,
      _noOfTickets: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRaffle(
      _maxTickets: BigNumberish,
      _ticketBuyOption: boolean,
      _ticketPrice: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _rewardToken: string,
      _rewardBP: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    declareWinner(
      _randomWinner: BigNumberish,
      _raffleNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalRaffles(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  Raffle(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      string,
      string,
      BigNumber
    ] & {
      number: BigNumber;
      maxTickets: BigNumber;
      ticketBuyOption: boolean;
      ticketPrice: BigNumber;
      ticketCounter: BigNumber;
      startTime: BigNumber;
      endTime: BigNumber;
      raffleOver: boolean;
      raffleRewardToken: string;
      winner: string;
      rewardPercent: BigNumber;
    }
  >;

  buyTicket(
    _raffleNumber: BigNumberish,
    _noOfTickets: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRaffle(
    _maxTickets: BigNumberish,
    _ticketBuyOption: boolean,
    _ticketPrice: BigNumberish,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    _rewardToken: string,
    _rewardBP: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  declareWinner(
    _randomWinner: BigNumberish,
    _raffleNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalRaffles(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    Raffle(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string,
        BigNumber
      ] & {
        number: BigNumber;
        maxTickets: BigNumber;
        ticketBuyOption: boolean;
        ticketPrice: BigNumber;
        ticketCounter: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        raffleOver: boolean;
        raffleRewardToken: string;
        winner: string;
        rewardPercent: BigNumber;
      }
    >;

    buyTicket(
      _raffleNumber: BigNumberish,
      _noOfTickets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createRaffle(
      _maxTickets: BigNumberish,
      _ticketBuyOption: boolean,
      _ticketPrice: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _rewardToken: string,
      _rewardBP: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    declareWinner(
      _randomWinner: BigNumberish,
      _raffleNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    totalRaffles(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    Raffle(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    buyTicket(
      _raffleNumber: BigNumberish,
      _noOfTickets: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRaffle(
      _maxTickets: BigNumberish,
      _ticketBuyOption: boolean,
      _ticketPrice: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _rewardToken: string,
      _rewardBP: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    declareWinner(
      _randomWinner: BigNumberish,
      _raffleNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalRaffles(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    Raffle(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyTicket(
      _raffleNumber: BigNumberish,
      _noOfTickets: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRaffle(
      _maxTickets: BigNumberish,
      _ticketBuyOption: boolean,
      _ticketPrice: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _rewardToken: string,
      _rewardBP: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    declareWinner(
      _randomWinner: BigNumberish,
      _raffleNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalRaffles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
