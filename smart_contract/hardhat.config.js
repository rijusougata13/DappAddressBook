// https://eth-ropsten.alchemyapi.io/v2/5nUdgjM7DoYVB1cmhKwsZmp4MCAripoE

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/N29Fl_OEmctPFVGXglpAYmlxF5S6NdDo',
      accounts:['bdee40ef59bfdfc4fcd2a720f9bcdd95e1148bbdf9dd9ba7393e2c42d51d01c6']
    }
  }
}