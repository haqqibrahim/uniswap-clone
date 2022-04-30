require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/e1XWs9BNLtbs7kczeEZzhr1iyiBcZfww",
      accounts: [
        'fdc7d297b427a4707553173bb25f75b9e2968646be3ad6d911b69d6b1c844489'
      ]
    }
  }
};
