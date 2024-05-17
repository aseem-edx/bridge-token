import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PK = vars.get('PK')

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    "arbitrum-sepolia": {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      accounts: [PK]
    },
    "bsc-testnet": {
      url: "https://data-seed-prebsc-2-s1.binance.org:8545/",
      accounts: [PK]
    }
  }
};

export default config;
