// SPDX-License-Identifier: MIT
pragma solidity^0.7.1;


contract Inbox{
    string public message;

    constructor () {
        message = "Hello!";
    }

    function set_message(string memory newMessage) public{
        message = newMessage;
    }
}