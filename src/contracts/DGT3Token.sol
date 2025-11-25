// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DGT3Token is ERC20, Ownable {
    constructor() ERC20("DGT3Energy", "DGT3") Ownable(msg.sender) {
        _mint(msg.sender, 1_000_000_000 * 10 ** decimals());
    }
}