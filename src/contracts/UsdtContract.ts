import { ethers } from "ethers";
import { BaseInterface, Erc20 } from "./interfaces";
import { getUsdtAbi } from "./utils/getAbis";
import { getUsdtAddress } from "./utils/getAddress";

export default class UsdtContract extends Erc20 {
  approve(_contractAddress: any, arg1: number) {
    throw new Error('Method not implemented.');
  }
  constructor(provider: ethers.providers.Web3Provider) {
    super(provider, getUsdtAddress(), getUsdtAbi());
  }
}