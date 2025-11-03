// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transferFrom(address from, address to, uint256 value) external returns (bool);
    function transfer(address to, uint256 value) external returns (bool);
}

contract DGTEnergyTokenSale {
    address public owner;
    IERC20 public token;
    IERC20 public usdt;
    uint256 public price; // price in USDT per token (example: 0.036 * 10^18)

    uint256 public tokensSold;
    bool public saleActive = true;

    event TokenPurchased(address indexed buyer, uint256 amount, uint256 cost);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(address _token, address _usdt, uint256 _price) {
        owner = msg.sender;
        token = IERC20(_token);
        usdt = IERC20(_usdt);
        price = _price;
    }

    function buyTokens(uint256 tokenAmount) external {
        require(saleActive, "Sale is not active");
        uint256 cost = (tokenAmount * price) / 1e18;
        require(usdt.transferFrom(msg.sender, address(this), cost), "USDT transfer failed");
        require(token.transfer(msg.sender, tokenAmount), "Token transfer failed");

        tokensSold += tokenAmount;
        emit TokenPurchased(msg.sender, tokenAmount, cost);
    }

    function setPrice(uint256 newPrice) external onlyOwner {
        price = newPrice;
    }

    function toggleSale(bool status) external onlyOwner {
        saleActive = status;
    }

    function withdrawFunds() external onlyOwner {
        usdt.transfer(owner, usdtBalance());
    }

    function withdrawUnsoldTokens() external onlyOwner {
        token.transfer(owner, tokenBalance());
    }

    function usdtBalance() public view returns (uint256) {
        return usdtBalanceOf(address(this));
    }

    function tokenBalance() public view returns (uint256) {
        return tokenBalanceOf(address(this));
    }

    function usdtBalanceOf(address account) internal view returns (uint256) {
        return usdt.balanceOf(account);
    }

    function tokenBalanceOf(address account) internal view returns (uint256) {
        return token.balanceOf(account);
    }
}
