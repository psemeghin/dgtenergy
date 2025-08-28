// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenSale is Ownable {
    IERC20 public token;
    address public treasury;
    uint256 public price; // preço do token em wei (ex: 0.036 USDT equiv. a 36000000 se 6 decimais)
    uint256 public tokensSold;

    event TokensPurchased(address indexed buyer, uint256 amount, uint256 value);

    constructor(address _token, address _treasury, uint256 _price) {
        require(_token != address(0), "Invalid token address");
        require(_treasury != address(0), "Invalid treasury address");
        require(_price > 0, "Price must be greater than 0");
        token = IERC20(_token);
        treasury = _treasury;
        price = _price;
    }

    function buyTokens(uint256 amount) external {
        require(amount > 0, "Amount must be > 0");

        uint256 cost = amount * price / 1e18;
        require(token.balanceOf(address(this)) >= amount, "Insufficient tokens for sale");
        require(token.transferFrom(msg.sender, treasury, cost), "USDT transfer failed");
        require(token.transfer(msg.sender, amount), "Token transfer failed");

        tokensSold += amount;

        emit TokensPurchased(msg.sender, amount, cost);
    }

    function withdrawUnsoldTokens() external onlyOwner {
        uint256 balance = token.balanceOf(address(this));
        require(token.transfer(owner(), balance), "Withdraw failed");
    }

    function updatePrice(uint256 newPrice) external onlyOwner {
        require(newPrice > 0, "Price must be > 0");
        price = newPrice;
    }
}
