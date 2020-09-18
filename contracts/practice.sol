// SPDX-License-Identifier: MIT
pragma solidity^0.4.17;

contract Inbox{
    string public message;

    function Inbox(string initialMessage) public{
        message = initialMessage;
    }

    function set_message(string newMessage) public{
        message = newMessage;
    }

    function get_message() public view returns(string){
        return message;
    }
}