// SPDX-License-Identifier: MIT
pragma solidity^0.7.1;


contract Inbox{
    string public message;

    constructor () {
        message = "Hello!";
    }

    function setMessage(string memory newMessage) public{
        message = newMessage;
    }
}