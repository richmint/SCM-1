require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.8",
  networks:{
  localhost: {
    url: "http://127.0.0.1:8545"
  },
  rinkeby: {
    url: "https://rinkeby.infura.io/v3/e6f36b7eca2a42c5ab2d5157740485e8", //Infura url with projectId
    accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"] // add the account that will deploy the contract (private key)
   }
  },
  paths:{
    artifacts: './react-admin/src/artifacts',
  }

};
