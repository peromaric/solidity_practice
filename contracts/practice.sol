// SPDX-License-Identifier: MIT
pragma solidity^0.4.17;


contract Inbox{
    string public message;

    constructor (string initialMessage) public{
        message = initialMessage;
    }

    function set_message(string newMessage) public{
        message = newMessage;
    }
}