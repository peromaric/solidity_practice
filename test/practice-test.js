const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); 
/* Web3 capitalized is a constructor function, instances
are created with web3 (uncapitalized) */
const web3 = new Web3(ganache.provider()); //connecting to ganache - local
const compiled_code = require('../compile.js');
_interface = compiled_code.abi;
_bytecode = compiled_code.evm.bytecode.object;

let accounts;
let inbox;
beforeEach( async () => {
    //get a list of all accounts
    accounts = await web3.eth.getAccounts();
  
    //use one of those accounts to deploy
    //the contract
    inbox = await new web3.eth.Contract(_interface)
        .deploy({ data: _bytecode})
        .send({ from: accounts[0], gas: '1000000' });
  });

  describe('Inbox', () => {
      it('deploys a contract', () => {
          assert.ok(inbox.options.address);
      });
      it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, 'Hello!');
      });
      it('able to modify the message', async () =>{
        await inbox.methods.setMessage('Bye!').send({ from: accounts[0]} );
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, 'Bye!');
      })
  });