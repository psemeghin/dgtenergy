// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staking is Ownable {
    IERC20 public stakingToken;
    IERC20 public rewardToken;

    uint256 public rewardRate; // rewards per second
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;

    mapping(address => uint256) public balances;
    uint256 public totalSupply;

    constructor(address _stakingToken, address _rewardToken, uint256 _rewardRate) {
        stakingToken = IERC20(_stakingToken);
        rewardToken = IERC20(_rewardToken);
        rewardRate = _rewardRate;
        lastUpdateTime = block.timestamp;
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;
        if (account != address(0)) {
            rewards[account] = earned(account);
            userRewardPerTokenPaid[account] = rewardPerTokenStored;
        }
        _;
    }

    function rewardPerToken() public view returns (uint256) {
        if (totalSupply == 0) return rewardPerTokenStored;
        return rewardPerTokenStored + (rewardRate * (block.timestamp - lastUpdateTime) * 1e18 / totalSupply);
    }

    function earned(address account) public view returns (uint256) {
        return (balances[account] * (rewardPerToken() - userRewardPerTokenPaid[account]) / 1e18) + rewards[account];
    }

    function stake(uint256 amount) external updateReward(msg.sender) {
        require(amount > 0, "Cannot stake 0");
        stakingToken.transferFrom(msg.sender, address(this), amount);
        balances[msg.sender] += amount;
        totalSupply += amount;
    }

    function withdraw(uint256 amount) public updateReward(msg.sender) {
        require(amount > 0, "Cannot withdraw 0");
        balances[msg.sender] -= amount;
        totalSupply -= amount;
        stakingToken.transfer(msg.sender, amount);
    }

    function getReward() public updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        if (reward > 0) {
            rewards[msg.sender] = 0;
            rewardToken.transfer(msg.sender, reward);
        }
    }

    function setRewardRate(uint256 _rate) external onlyOwner {
        rewardRate = _rate;
    }

    function withdrawRewards(uint256 amount) external onlyOwner {
        rewardToken.transfer(owner(), amount);
    }
}