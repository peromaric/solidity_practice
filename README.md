# solidity_practice
Practicing using git while learning Solidity

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

Using my version instead of 'latest', "v0.4.17+commit.bdeb9e52": 
solc.loadRemoteVersion('latest', function(err, solcSnapshot) {
  if (err) {
    // An error was encountered, display and quit
  } else {
    // NOTE: Use `solcSnapshot` here with the same interface `solc` has
  }
});

There's another issue, however. When having node modules installed, VS studio extension
automatically ignores set global solidity version and uses the version from the modules.


