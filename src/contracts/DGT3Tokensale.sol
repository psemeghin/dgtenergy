// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DGT3TokenSale is Ownable {
    enum SalePhase { None, Whitelist, Seed, Rounds }
    SalePhase public currentPhase = SalePhase.Whitelist;

    IERC20 public token;
    IERC20 public stablecoin;

    uint256 public whitelistPrice = 0.03 ether;  // 0.03 USDT
    uint256 public seedPrice = 0.036 ether;      // 0.036 USDT
    uint256 public roundsPrice = 0.04 ether;     // 0.04 USDT

    uint256 public whitelistTokens = 18_000_000 * 1e18;
    uint256 public seedTokens = 14_500_000 * 1e18;
    uint256 public roundsTokens = 0; // Definido depois pelo owner

    mapping(SalePhase => uint256) public tokensRemaining;

    event TokensPurchased(address indexed buyer, uint256 amount, SalePhase phase);

    constructor(
        address tokenAddress,
        address stablecoinAddress
    ) Ownable(msg.sender) {
        token = IERC20(tokenAddress);
        stablecoin = IERC20(stablecoinAddress);

        tokensRemaining[SalePhase.Whitelist] = whitelistTokens;
        tokensRemaining[SalePhase.Seed] = seedTokens;
    }

    function setPhase(SalePhase newPhase) external onlyOwner {
        currentPhase = newPhase;
    }

    function setRoundsTokens(uint256 amount) external onlyOwner {
        tokensRemaining[SalePhase.Rounds] = amount;
    }

    function setPrices(uint256 newWhitelistPrice, uint256 newSeedPrice, uint256 newRoundsPrice) external onlyOwner {
        whitelistPrice = newWhitelistPrice;
        seedPrice = newSeedPrice;
        roundsPrice = newRoundsPrice;
    }

    function buyTokens(uint256 usdtAmount) external {
        require(currentPhase != SalePhase.None, "Sale not active");
        require(usdtAmount > 0, "Amount must be > 0");

        uint256 price = getCurrentPrice();
        uint256 tokenAmount = (usdtAmount * 1e18) / price;

        require(tokensRemaining[currentPhase] >= tokenAmount, "Not enough tokens left in this phase");

        // Transfer USDT from buyer to owner (or address you definir)
        require(stablecoin.transferFrom(msg.sender, owner(), usdtAmount), "USDT transfer failed");

        // Transfer tokens from contract to buyer
        require(token.transfer(msg.sender, tokenAmount), "Token transfer failed");

        tokensRemaining[currentPhase] -= tokenAmount;

        emit TokensPurchased(msg.sender, tokenAmount, currentPhase);
    }

    function getCurrentPrice() public view returns (uint256) {
        if (currentPhase == SalePhase.Whitelist) return whitelistPrice;
        if (currentPhase == SalePhase.Seed) return seedPrice;
        if (currentPhase == SalePhase.Rounds) return roundsPrice;
        revert("Invalid phase");
    }

    function withdrawTokens(uint256 amount) external onlyOwner {
        token.transfer(owner(), amount);
    }

    function withdrawUSDT(uint256 amount) external onlyOwner {
        stablecoin.transfer(owner(), amount);
    }
}