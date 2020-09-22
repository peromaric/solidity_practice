/*  making use of built in standard library modules - require and path
    
    path builds a directory path from compile.js to practice.sol, using
    the path module there's cross-platform compatibility 

    reading the contents via FS (file system) module

    solc -> compile statement by using the solidity compiler
*/
const path = require('path');   
const fs = require('fs');
const solc = require('solc');


const practicePath = path.resolve(__dirname, 'contracts', 'practice.sol');
const source = fs.readFileSync(practicePath, 'utf8');

var input = {
  language: 'Solidity',
  sources: {
      'practice.sol' : {
          content: source
      }
  },
  settings: {
      outputSelection: {
          '*': {
              '*': [ 'abi', 'evm.bytecode' ]
          }
      }
  }
}; 

var output = JSON.parse(solc.compile(JSON.stringify(input)));

module.exports = output.contracts['practice.sol']['Inbox'];
