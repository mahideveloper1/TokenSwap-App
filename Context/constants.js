import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
import userStorgeData from "./UserStorageData.json";

//BOOTOKEN
export const BooTokenAddress = "0xdB05A386810c809aD5a77422eb189D36c7f24402";
export const BooTokenABI = booToken.abi;

//LIFE TOken
export const LifeTokenAddress = "0xbf2ad38fd09F37f50f723E35dd84EEa1C282c5C9";
export const LifeTokenABI = lifeToken.abi;

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0xD28F3246f047Efd4059B24FA1fa587eD9fa3e77F";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0x15F2ea83eB97ede71d84Bd04fFF29444f6b7cd52";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4";
export const IWETHABI = IWETH.abi;

//USER STORAGE DAta

export const userStorageDataAddrss =
  "0x0B32a3F8f5b7E5d315b9E52E640a49A89d89c820";
export const userStorageDataABI = userStorgeData.abi;
