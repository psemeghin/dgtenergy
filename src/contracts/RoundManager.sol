// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RoundManager {
    struct Round {
        uint256 pricePerToken;
        uint256 startTime;
        uint256 endTime;
        bool isActive;
    }

    mapping(uint8 => Round) public rounds; // e.g., 0 = seed, 1 = round1...
    uint8 public currentRound;

    address public admin;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function setRound(uint8 roundId, uint256 price, uint256 start, uint256 end) external onlyAdmin {
        rounds[roundId] = Round({
            pricePerToken: price,
            startTime: start,
            endTime: end,
            isActive: false
        });
    }

    function activateRound(uint8 roundId) external onlyAdmin {
        currentRound = roundId;
        rounds[roundId].isActive = true;
    }

    function deactivateRound(uint8 roundId) external onlyAdmin {
        rounds[roundId].isActive = false;
    }

    function getActiveRound() external view returns (Round memory) {
        return rounds[currentRound];
    }
}