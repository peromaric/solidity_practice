# solidity_practice
practicing using git while learning about
smart contracts written in solidity

DOCUMENTING THE PROCESS:
USING VS CODE FOR EDITING!

1.) generated a new Node project, creating a package.json file, adding no specific information

Additional comments:
A bit confused with the git usage, managed to get it up and running properly in VS Code

2) installed a solidity compiler as an npm package using npm install --save solc

Additional comments:
Also created a compile.js which will be used to compile the solidity code. Not using the compiler 
that supplied in the VS extension for solidity, I have it installed for linting.
There's an issue with solidity + node modules. The tutorial I'm using uses 0.4.17. - trying to
somehow compile with that version. 
It needs these lines of code:
const path = require('path');   //file path
const fs = require('fs');       //source
const solc = require('solc');   //solidity module


const practicePath = path.resolve(__dirname, 'contracts', 'practice.sol');
const source = fs.readFileSync(practicePath, 'utf8');
Using my version instead of 'latest', "v0.4.17+commit.bdeb9e52":

solc.loadRemoteVersion('latest', function(err, solcSnapshot) {
  if (err) {
    // An error was encountered, display and quit
  } else {
    // NOTE: Use `solcSnapshot` here with the same interface `solc` has
  }
});

Except for that, turns out I have to change a couple of other things - compile.js should use different
syntax. Not going to follow the tutorial exactly how it's layed out, I'll just use the latest
versions!

3) TESTING SETUP : installed the following - npm install --save mocha ganache-cli web3

Additional comments:
npm install --global --production windows-build-tools  --> tutorial
suggests this for web3 on windows, not sure it's needed anymore
Using ganache for a local test network - deployment of bytecode
ABI fed into Web3, Mocha testing framework (added mocha in package.json)
under scripts->test
Run by typing "npm run test" in cmd

4) Mocha information
beforeEach for deploying a new contract,
it for manipulating and making assertions

beforeEach( async() => {                          //async + await, better than promises
  //get a list of all accounts
  accounts = await web3.eth.getAccounts()      

  //use one of those accounts to deploy
  //the contract
});

5) Attempting to connect to a test network using infura api, need to install truffle hd wallet provider

Additional comments:
npm install --save truffle-hdwallet-provider
Deprecated, going forward with it. constructor for HDwalletprovider takes two arguments,
acc mnemonic and url of what network to connect to - infura network ropsten link

6) CONTRACT DEPLOYED SUCESSFULLY! 
Link: https://ropsten.etherscan.io/address/0x23C80234102febDdCbf2d70A3DD676ff50ba0837

