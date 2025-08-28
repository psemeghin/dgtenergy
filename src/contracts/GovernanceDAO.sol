// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract GovernanceDAO {
    struct Proposal {
        string description;
        uint256 voteCount;
        uint256 deadline;
        bool executed;
    }

    IERC20 public governanceToken;
    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public votes;

    uint256 public quorum; // mínimo de votos para aprovar (ex: 1000 tokens)

    address public owner;

    constructor(address _token, uint256 _quorum) {
        governanceToken = IERC20(_token);
        quorum = _quorum;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    function createProposal(string calldata _description, uint256 _duration) external {
        proposals[proposalCount] = Proposal({
            description: _description,
            voteCount: 0,
            deadline: block.timestamp + _duration,
            executed: false
        });
        proposalCount++;
    }

    function vote(uint256 proposalId) external {
        require(block.timestamp < proposals[proposalId].deadline, "Voting ended");
        require(!votes[proposalId][msg.sender], "Already voted");

        uint256 voterWeight = governanceToken.balanceOf(msg.sender);
        require(voterWeight > 0, "No voting power");

        proposals[proposalId].voteCount += voterWeight;
        votes[proposalId][msg.sender] = true;
    }

    function execute(uint256 proposalId) external onlyOwner {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.executed, "Already executed");
        require(block.timestamp >= proposal.deadline, "Voting still ongoing");
        require(proposal.voteCount >= quorum, "Quorum not met");

        proposal.executed = true;
    }

    function setQuorum(uint256 newQuorum) external onlyOwner {
        quorum = newQuorum;
    }
}