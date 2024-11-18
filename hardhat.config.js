require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
      },
      {
        version: "0.7.6", // Supports contracts that need Solidity >=0.7.0 <0.8.0
      },
      {
        version: "0.6.12", // Supports contracts that need Solidity >=0.6.0 <0.7.0
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/FegBpCqlt9TGAFJP8Xkl6SF2bxY4Xadt",
      },
    },
  },
};
