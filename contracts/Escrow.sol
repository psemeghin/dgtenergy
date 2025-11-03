// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract Escrow {
    address public owner;
    address public beneficiary;
    IERC20 public token; // Ex: USDT

    uint256 public totalDeposited;
    bool public released;

    event Deposited(address indexed from, uint256 amount);
    event Released(address indexed to, uint256 amount);
    event Cancelled(address indexed to, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(address _token, address _beneficiary) {
        require(_token != address(0), "Invalid token");
        require(_beneficiary != address(0), "Invalid beneficiary");
        owner = msg.sender;
        token = IERC20(_token);
        beneficiary = _beneficiary;
    }

    function deposit(uint256 amount) external {
        require(!released, "Funds already released");
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        totalDeposited += amount;
        emit Deposited(msg.sender, amount);
    }

    function release() external onlyOwner {
        require(!released, "Already released");
        uint256 balance = token.balanceOf(address(this));
        require(token.transfer(beneficiary, balance), "Transfer failed");
        released = true;
        emit Released(beneficiary, balance);
    }

    function cancel(address refundTo) external onlyOwner {
        require(!released, "Already released");
        uint256 balance = token.balanceOf(address(this));
        require(token.transfer(refundTo, balance), "Refund failed");
        released = true;
        emit Cancelled(refundTo, balance);
    }

    function balance() public view returns (uint256) {
        return token.balanceOf(address(this));
    }
}
