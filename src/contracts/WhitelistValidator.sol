// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract WhitelistValidator {
    address public owner;
    mapping(address => bool) private whitelist;

    event Whitelisted(address indexed account, bool status);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addToWhitelist(address account) external onlyOwner {
        whitelist[account] = true;
        emit Whitelisted(account, true);
    }

    function removeFromWhitelist(address account) external onlyOwner {
        whitelist[account] = false;
        emit Whitelisted(account, false);
    }

    function isWhitelisted(address account) public view returns (bool) {
        return whitelist[account];
    }

    function bulkAdd(address[] calldata accounts) external onlyOwner {
        for (uint256 i = 0; i < accounts.length; i++) {
            whitelist[accounts[i]] = true;
            emit Whitelisted(accounts[i], true);
        }
    }
}
