
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract DGTEnergyStaking is Ownable, ReentrancyGuard {
    IERC20 public immutable dgtToken;
    IERC20 public immutable rewardToken;

    uint256 public rewardRatePerBlock;
    uint256 public lastUpdateBlock;

    mapping(address => uint256) public stakedAmount;
    mapping(address => uint256) public rewardDebt;
    mapping(address => uint256) public pendingRewards;

    uint256 public totalStaked;
    uint256 public accRewardPerToken; // scaled by 1e18

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event Claimed(address indexed user, uint256 amount);

    constructor(
        address _dgtToken,
        address _rewardToken,
        uint256 _rewardRatePerBlock
    ) {
        dgtToken = IERC20(_dgtToken);
        rewardToken = IERC20(_rewardToken);
        rewardRatePerBlock = _rewardRatePerBlock;
        lastUpdateBlock = block.number;
    }

    modifier updateReward(address user) {
        _updatePool();
        if (user != address(0)) {
            pendingRewards[user] = earned(user);
            rewardDebt[user] = (stakedAmount[user] * accRewardPerToken) / 1e18;
        }
        _;
    }

    function _updatePool() internal {
        if (block.number > lastUpdateBlock && totalStaked > 0) {
            uint256 blocks = block.number - lastUpdateBlock;
            uint256 reward = blocks * rewardRatePerBlock;
            accRewardPerToken += (reward * 1e18) / totalStaked;
        }
        lastUpdateBlock = block.number;
    }

    function earned(address user) public view returns (uint256) {
        uint256 currentAcc = accRewardPerToken;
        if (block.number > lastUpdateBlock && totalStaked > 0) {
            uint256 blocks = block.number - lastUpdateBlock;
            uint256 reward = blocks * rewardRatePerBlock;
            currentAcc += (reward * 1e18) / totalStaked;
        }
        return (stakedAmount[user] * currentAcc) / 1e18 - rewardDebt[user] + pendingRewards[user];
    }

    function stake(uint256 amount) external nonReentrant updateReward(msg.sender) {
        require(amount > 0, "Amount must be greater than 0");
        dgtToken.transferFrom(msg.sender, address(this), amount);
        stakedAmount[msg.sender] += amount;
        totalStaked += amount;
        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external nonReentrant updateReward(msg.sender) {
        require(amount > 0 && amount <= stakedAmount[msg.sender], "Invalid amount");
        stakedAmount[msg.sender] -= amount;
        totalStaked -= amount;
        dgtToken.transfer(msg.sender, amount);
        emit Unstaked(msg.sender, amount);
    }

    function claim() external nonReentrant updateReward(msg.sender) {
        uint256 reward = pendingRewards[msg.sender];
        require(reward > 0, "No rewards to claim");
        pendingRewards[msg.sender] = 0;
        rewardToken.transfer(msg.sender, reward);
        emit Claimed(msg.sender, reward);
    }

    function setRewardRate(uint256 _newRate) external onlyOwner {
        _updatePool();
        rewardRatePerBlock = _newRate;
    }
}
