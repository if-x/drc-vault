/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DRCVaultContract extends Truffle.Contract<DRCVaultInstance> {
  "new"(
    _drcAddress: string,
    meta?: Truffle.TransactionDetails
  ): Promise<DRCVaultInstance>;
}

export interface Deposit {
  name: "Deposit";
  args: {
    user: string;
    amount: BN;
    0: string;
    1: BN;
  };
}

export interface Withdraw {
  name: "Withdraw";
  args: {
    user: string;
    amount: BN;
    0: string;
    1: BN;
  };
}

type AllEvents = Deposit | Withdraw;

export interface DRCVaultInstance extends Truffle.ContractInstance {
  /**
   * See {IDRCVault-name}.
   */
  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * See {IDRCVault-drcAddress}.
   */
  drcAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * See {IDRCVault-totalAmountLocked}.
   */
  totalAmountLocked(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * See {IDRCVault-balanceOf}.
   */
  balanceOf(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * See {IDRCVault-holders}.
   */
  holders(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  /**
   * See {IDRCVault-deposit}.
   */
  deposit: {
    (
      account: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      account: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * See {IDRCVault-withdraw}.
   */
  withdraw: {
    (
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * See {IDRCVault-name}.
     */
    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * See {IDRCVault-drcAddress}.
     */
    drcAddress(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * See {IDRCVault-totalAmountLocked}.
     */
    totalAmountLocked(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * See {IDRCVault-balanceOf}.
     */
    balanceOf(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * See {IDRCVault-holders}.
     */
    holders(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

    /**
     * See {IDRCVault-deposit}.
     */
    deposit: {
      (
        account: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        account: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * See {IDRCVault-withdraw}.
     */
    withdraw: {
      (
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
