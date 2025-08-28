
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    address public buyer;
    address public seller;
    address public arbiter;

    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETE, DISPUTED }
    State public currentState;

    modifier onlyBuyer() {
        require(msg.sender == buyer, "Only buyer can call this");
        _;
    }

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "Only arbiter can call this");
        _;
    }

    constructor(address _buyer, address _seller, address _arbiter) {
        buyer = _buyer;
        seller = _seller;
        arbiter = _arbiter;
        currentState = State.AWAITING_PAYMENT;
    }

    function deposit() external payable onlyBuyer {
        require(currentState == State.AWAITING_PAYMENT, "Already paid");
        currentState = State.AWAITING_DELIVERY;
    }

    function confirmDelivery() external onlyBuyer {
        require(currentState == State.AWAITING_DELIVERY, "Cannot confirm");
        currentState = State.COMPLETE;
        payable(seller).transfer(address(this).balance);
    }

    function raiseDispute() external onlyBuyer {
        require(currentState == State.AWAITING_DELIVERY, "Invalid state");
        currentState = State.DISPUTED;
    }

    function resolveDispute(bool releaseToSeller) external onlyArbiter {
        require(currentState == State.DISPUTED, "No dispute raised");
        currentState = State.COMPLETE;
        if (releaseToSeller) {
            payable(seller).transfer(address(this).balance);
        } else {
            payable(buyer).transfer(address(this).balance);
        }
    }
}
