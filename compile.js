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
solc.loadRemoteVersion('v0.4.17+commit.bdeb9e52', function(err, solcSnapshot) {
    if (err) {
      console.log('Error occured!')
    } else {
        solcSnapshot.compile(source, 1); //code + number of contracts to compile

        console.log(solcSnapshot.compile(source, 1));
    }
  });