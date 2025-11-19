# DGTEnergy - Comprehensive Business Requirements & User Stories

**Version:** 2.1
**Status:** Final / Ready for Development
**Based on:** V3 Whitepaper, Tech Spec, Tokenomics Extended, and Architecture Diagrams.

---

## 1. Executive Summary
This document defines the complete business requirements for the DGTEnergy protocol. It serves as the single source of truth for developers, QA engineers, and auditors. The protocol is a utility-token based coordination layer for verified energy operations, strictly separating on-chain coordination from off-chain financing.

---

## 2. Actors Definition

### 2.1. Off-Chain Actors (Human/Institutional)
These actors interact with the system interfaces (DApp, Wallets) or the physical world.

1.  **Participant (Investor/Staker):** Individual or entity holding DGT3 tokens for utility access. Subject to KYC.
2.  **Asset Originator (Billi Energy):** The verified energy operator originating receivables and managing consumer relationships.
3.  **Custodian (Securitizadora):** Regulated entity holding legal title to energy receivables off-chain.
4.  **Treasury (Multisig Committee):** 2-of-3 multisig (De Goat Capital AG) managing capital flows, FX conversions, and deployments.
5.  **Compliance Officer:** Internal role responsible for KYC validation, FX reconciliation, and publishing Full Deployment Reports (FDR).
6.  **Auditor:** External independent party verifying smart contracts and off-chain asset integrity.
7.  **Regulator:** Passive observer (CVM, FINMA, etc.) consuming transparency data.

### 2.2. On-Chain Actors (Smart Contracts/System)
These are autonomous agents enforcing protocol logic.

1.  **DGT3Token Contract:** BEP-20 token with fixed supply.
2.  **TokenSale Contract:** Manages token distribution, pricing ladder, and capital splitting.
3.  **Staking Contract:** Manages participation utility, snapshots, and verified distributions.
4.  **EscrowDesk Contract:** Facilitates compliant P2P secondary transfers.
5.  **IdentityRegistry:** Stores anonymized KYC proofs (Privacy-preserving).
6.  **Compliance Contract:** Enforces transfer rules and gating.
7.  **Reinvestment Module:** Deterministic logic for routing excess performance.

---

## 3. Lifecycle Workflows

This section maps the complete financial and operational journeys for the key actors.

### 3.1. Participant Lifecycle
1.  **Entry (Money In):** User purchases DGT3 via `TokenSale`.
    *   *Flow:* USDT → DGT3.
2.  **Utility (Holding):** User stakes DGT3 in `Staking` contract.
    *   *Flow:* DGT3 (Wallet) → DGT3 (Staking Contract).
3.  **Yield (Functional Output):** User receives verified distributions (if eligible).
    *   *Flow:* USDT (Performance Pool) → USDT (User Wallet).
4.  **Reversal (Liquidity Recovery):** User unstakes or cancels a P2P order.
    *   *Flow:* DGT3 (Contract) → DGT3 (User Wallet).
5.  **Exit (Money Out - Principal):** User sells DGT3 on `EscrowDesk`.
    *   *Flow:* DGT3 (User) → DGT3 (Buyer) AND USDT (Buyer) → USDT (User).

### 3.2. Treasury Lifecycle
1.  **Capital Inflow:** Receives 96% of TokenSale proceeds.
    *   *Flow:* TokenSale → Treasury Multisig.
2.  **Deployment (Off-Ramp):** Sends USDT to Swiss Holding for conversion to BRL.
    *   *Flow:* Treasury Multisig → Swiss Holding (Off-chain).
3.  **Operational Return (On-Ramp):** Receives USDT from Swiss Holding (Verified Results).
    *   *Flow:* Swiss Holding → Treasury Multisig.
4.  **Distribution Funding:** Funds the Staking Contract for the monthly cycle.
    *   *Flow:* Treasury Multisig → Staking Contract.
5.  **Reinvestment:** Deploys excess yields back to operations or buys DGT3.
    *   *Flow:* Treasury → Swiss Holding OR Treasury → EscrowDesk.

### 3.3. Asset Originator (Billi) Lifecycle
1.  **Onboarding:** Signs MoU and passes initial Audit.
2.  **Fiat Inflow:** Receives BRL capital from Swiss Holding.
3.  **Execution:** Deploys capital to Energy Consumers (ACL Migration).
4.  **Settlement:** Receives BRL settlement from CCEE/Consumers.
5.  **Return Outflow:** Sends BRL proceeds to Swiss Holding for repatriation.
6.  **Reporting:** Submits validated data for the Full Deployment Report (FDR).

### 3.4. Compliance Officer Lifecycle
1.  **Verification:** Validates User KYC data (Off-chain).
2.  **Registry Update:** Updates `IdentityRegistry` to allow/block wallets.
3.  **Audit:** Verifies Treasury vs. Billi reports and FX rates.
4.  **FDR Publication:** Toggles the "FDR Verified" flag on-chain to enable Staking Distributions.

---

## 4. User Stories & Acceptance Criteria

### 4.1. Token Sale & Distribution

#### Story 1: Participant Purchase
**As a** Participant,
**I want to** purchase DGT3 tokens with USDT,
**So that** I can access the protocol's utility layer.

**Acceptance Criteria:**
- [ ] **Input Validation:** System accepts only USDT (BEP-20).
- [ ] **Allowance Check:** Transaction reverts if User USDT allowance < Purchase Amount.
- [ ] **Price Precision:** System calculates DGT3 amount based on the *exact* price of the current active Round (e.g., Round 1 = 0.030 USDT).
- [ ] **Round Cap Enforcement:** Transaction reverts if the purchase would exceed the Gross Market (GM) cap for the current round.
- [ ] **Capital Split (Critical):**
    - [ ] 96% of USDT is transferred *immediately* to the Treasury Multisig address.
    - [ ] 4% of USDT is transferred *immediately* to the Management Fee Safe address.
- [ ] **Token Delivery:** DGT3 tokens are transferred to the Participant's wallet in the same atomic transaction.
- [ ] **Event Emission:** Contract emits `TokensPurchased(buyer, usdtAmount, tokenAmount, roundId)`.

#### Story 2: Round Progression
**As a** System,
**I want to** automatically advance to the next sale round,
**So that** the price ladder is enforced without manual intervention.

**Acceptance Criteria:**
- [ ] **Trigger:** When `soldAmount` == `roundCap` for Round *N*.
- [ ] **State Change:** Active Round Index increments to *N+1*.
- [ ] **Price Update:** System updates the active price to the predefined price for Round *N+1*.
- [ ] **Sold Out:** If Global Supply (1,000,000,000) is reached, the contract rejects all further purchase attempts.

---

### 4.2. Staking & Distribution

#### Story 3: Staking Tokens
**As a** Participant,
**I want to** stake my DGT3 tokens,
**So that** I am eligible for potential utility distributions.

**Acceptance Criteria:**
- [ ] **Input:** User calls `stake(amount)`.
- [ ] **Transfer:** DGT3 tokens are transferred from User to Staking Contract.
- [ ] **State Update:** User's `stakedBalance` and global `totalStaked` are incremented.
- [ ] **No Lock:** User can unstake at any time (no lock-up period enforced by contract).
- [ ] **Event:** Emit `Staked(user, amount)`.

#### Story 3b: Unstaking Tokens (Reversal)
**As a** Participant,
**I want to** unstake my DGT3 tokens,
**So that** I can retrieve my principal assets.

**Acceptance Criteria:**
- [ ] **Input:** User calls `unstake(amount)`.
- [ ] **Balance Check:** Transaction reverts if `amount` > User's `stakedBalance`.
- [ ] **Transfer:** DGT3 tokens are transferred from Staking Contract back to User.
- [ ] **State Update:** User's `stakedBalance` and global `totalStaked` are decremented.
- [ ] **Effect:** User immediately loses eligibility for the current cycle if unstaked before snapshot.
- [ ] **Event:** Emit `Unstaked(user, amount)`.

#### Story 4: Monthly Snapshot
**As a** System,
**I want to** record a snapshot of valid stakers,
**So that** distributions are allocated only to eligible participants.

**Acceptance Criteria:**
- [ ] **Timing:** Snapshot logic references the state at **00:00 UTC on the 20th day** of the month.
- [ ] **Eligibility:** Only wallets with `stakedBalance > 0` *at the exact block* of the snapshot are eligible for the current cycle.
- [ ] **Exclusion:** Tokens staked *after* the snapshot block are excluded from the current cycle's distribution.

#### Story 5: Distribution Execution
**As an** Executor (Authorized Role),
**I want to** trigger a monthly distribution based on verified performance,
**So that** staking participants receive their functional outputs.

**Acceptance Criteria:**
- [ ] **Pre-Condition (FDR):** Distribution transaction reverts if the "Full Deployment Report" (FDR) flag for the cycle is NOT set to `TRUE`.
- [ ] **Input:** Executor sends USDT amount (the "Performance Pool") to the contract.
- [ ] **Admin Fee:** System calculates **0.33%** of the Productive AUM (or defined base) and routes it to the Management Fee Safe.
- [ ] **Rate Calculation:** `DistributionRate = (PoolAmount - AdminFee) / TotalEligibleStaked`.
- [ ] **Push Mechanism:** System iterates through eligible stakers (or uses a pull pattern if gas limits require) to transfer USDT. *Note: Tech Spec specifies Push, but high user count may require Pull fallback.*
- [ ] **Event:** Emit `DistributionExecuted(cycleId, totalDistributed, rate)`.

#### Story 5b: Receiving Distributions (Passive Yield)
**As a** Participant,
**I want to** receive USDT distributions,
**So that** I realize the functional output of my participation.

**Acceptance Criteria:**
- [ ] **Automatic Receipt:** USDT balance of the Participant's wallet increases automatically upon `DistributionExecuted` (if Push).
- [ ] **Claim Option (Alternative):** If Push fails or is gas-limited, Participant calls `claim()` to retrieve pending USDT.
- [ ] **Verification:** Receipt event matches the calculated `DistributionRate * UserStakedAmount`.

#### Story 5c: Management Fee Inflow
**As a** Management Fee Wallet,
**I want to** receive the administration fee,
**So that** protocol operational costs are covered.

**Acceptance Criteria:**
- [ ] **Automatic Transfer:** 0.33% of the Performance Pool is transferred to the `ManagementFeeSafe` in the same transaction as the Distribution Execution.
- [ ] **Event:** Emit `AdminFeeCollected(amount)`.

---

### 4.3. Treasury & Operations

#### Story 6: Capital Deployment
**As a** Treasury (Multisig),
**I want to** withdraw USDT from the Treasury Wallet,
**So that** I can convert it to Fiat for off-chain energy financing.

**Acceptance Criteria:**
- [ ] **Permission:** Only the 2-of-3 Multisig (Karine, Pedro, Walter) can initiate outgoing transfers.
- [ ] **Transparency:** Transaction hash must be logged and referenced in the `/data` dashboard.
- [ ] **Destination:** Funds must flow to the approved Swiss Holding corporate account.

#### Story 6b: Receive Operational Returns
**As a** Treasury,
**I want to** receive USDT from Swiss Holding,
**So that** verified operational results are available for distribution or reinvestment.

**Acceptance Criteria:**
- [ ] **Inflow:** USDT arrives in the Treasury Multisig address.
- [ ] **Verification:** Amount matches the verified Full Deployment Report (FDR) for the cycle.
- [ ] **Event:** Off-chain logging required (no on-chain event for simple transfer, but must be tracked in /data).

#### Story 7: Reinvestment & Secondary Purchase
**As a** Treasury,
**I want to** acquire DGT3 on the EscrowDesk,
**So that** I can execute the Reinvestment Policy using excess performance yields.

**Acceptance Criteria:**
- [ ] **Venue Constraint:** Purchase MUST happen via `EscrowDesk` interaction (no generic DEX swaps).
- [ ] **Price Floor:** Purchase price must be **≥ 80%** of the *Next Round* price (from TokenSale ladder).
- [ ] **Volume Cap:** Total purchases in a month must NOT exceed **1%** of the Circulating Supply.
- [ ] **Source Funds:** Only "Reinvestable Reserves" (performance > 1.2%) can be used.

#### Story 7b: Emergency Pause
**As a** Treasury (Owner),
**I want to** pause all protocol contracts,
**So that** I can protect assets in the event of a security threat.

**Acceptance Criteria:**
- [ ] **Permission:** Only the Owner (Multisig) can call `pause()`.
- [ ] **Scope:** Triggers `Pausable` state on Token, Staking, Sale, and Desk contracts.
- [ ] **Effect:** All transfers, stakes, buys, and trades revert while paused.
- [ ] **Event:** Emit `Paused(account)`.

---

### 4.4. Secondary Market (EscrowDesk)

#### Story 8: Create Sell Order (P2P - Exit Listing)
**As a** Participant (Seller),
**I want to** list my DGT3 tokens for sale,
**So that** I can exit my position compliantly.

**Acceptance Criteria:**
- [ ] **KYC Check:** Contract calls `IdentityRegistry`. Transaction reverts if Seller is not KYC Verified.
- [ ] **Escrow:** DGT3 tokens are transferred from Seller to Escrow Contract (Locked).
- [ ] **Price Validation:** Listed price must be **≥ Compliance Price Floor** (e.g., Current Round Price).
- [ ] **Event:** Emit `OrderCreated(orderId, seller, amount, price)`.

#### Story 8b: Cancel Sell Order (Liquidity Recovery)
**As a** Participant (Seller),
**I want to** cancel my open sell order,
**So that** I can retrieve my tokens if they haven't been sold.

**Acceptance Criteria:**
- [ ] **Ownership:** Transaction reverts if caller is not the Order Owner.
- [ ] **Status Check:** Transaction reverts if Order is already `FILLED` or `CANCELLED`.
- [ ] **Refund:** DGT3 tokens are transferred from Escrow Contract back to Seller.
- [ ] **State Update:** Order marked `CANCELLED`.
- [ ] **Event:** Emit `OrderCancelled(orderId)`.

#### Story 9: Fill Order (P2P - Exit Realization)
**As a** Participant (Buyer),
**I want to** purchase a listed order,
**So that** I can acquire tokens from another user.

**Acceptance Criteria:**
- [ ] **KYC Check:** Contract calls `IdentityRegistry`. Transaction reverts if Buyer is not KYC Verified.
- [ ] **Payment:** Buyer sends USDT to Escrow Contract.
- [ ] **Atomic Swap:**
    - [ ] USDT is sent to Seller.
    - [ ] DGT3 is sent to Buyer.
- [ ] **State Update:** Order is marked `FILLED`.
- [ ] **Event:** Emit `OrderMatched(orderId, buyer, seller, amount, price)`.

---

### 4.5. Compliance & Identity

#### Story 10: Identity Verification
**As a** Compliance Officer,
**I want to** update the KYC status of a wallet,
**So that** the user can access gated features (Staking, Desk).

**Acceptance Criteria:**
- [ ] **Privacy:** No PII (Name, ID number) is stored on-chain. Only a boolean status or hash.
- [ ] **Permission:** Only the authorized `KYC_OPERATOR` role can update statuses.
- [ ] **Tiers:** System supports tiers (e.g., Tier 1 < $1k, Tier 2 ≥ $1k).
- [ ] **Block:** System can set status to `BLACKLISTED`, preventing all transfers for that address.

#### Story 10b: Blacklist Wallet
**As a** Compliance Officer,
**I want to** blacklist a wallet involved in illicit activity,
**So that** they cannot transfer tokens or interact with the protocol.

**Acceptance Criteria:**
- [ ] **Permission:** Only `KYC_OPERATOR` or `COMPLIANCE_ROLE`.
- [ ] **Effect:** Calls to `Compliance.sol` revert for this address.
- [ ] **Scope:** Blocks Transfer, Stake, Unstake, Sell, and Buy.

#### Story 11: Set FDR Status
**As a** Compliance Officer,
**I want to** toggle the "FDR Verified" flag for a cycle,
**So that** the system knows the operational results are valid for distribution.

**Acceptance Criteria:**
- [ ] **Permission:** Only authorized Compliance role.
- [ ] **Input:** Cycle ID and Status (TRUE/FALSE).
- [ ] **Effect:** Staking Contract allows `triggerDistribution()` for this cycle ONLY if status is TRUE.
- [ ] **Event:** Emit `FDRStatusUpdated(cycleId, status)`.

---

### 4.6. Asset Originator (Billi)

#### Story 12: Submit Operational Data
**As an** Asset Originator,
**I want to** submit validated performance data to the Compliance Officer,
**So that** the Full Deployment Report can be generated.

**Acceptance Criteria:**
- [ ] **Content:** Must include CCEE settlement proofs, delinquency rates, and total BRL returns.
- [ ] **Timing:** Must be submitted before the monthly verification cutoff.
- [ ] **Verification:** Data must match the BRL funds received by Swiss Holding.

---

## 5. Non-Functional Requirements

### 5.1. Security
- **Reentrancy:** All functions handling fund transfers must utilize `nonReentrant` modifiers.
- **Pausability:** All contracts must inherit `Pausable`. Only the `Owner` (Treasury Multisig) can trigger pause/unpause.
- **Access Control:** Use OpenZeppelin `AccessControl` for role management (e.g., `EXECUTOR_ROLE`, `KYC_ROLE`).

### 5.2. Immutability
- **Fixed Supply:** No `mint()` or `burn()` functions exist in the compiled bytecode of `DGT3Token`.
- **Price Ladder:** The array of prices for the 70 rounds is hardcoded or set once at deployment and explicitly immutable thereafter.

### 5.3. Transparency
- **Event Logging:** Critical actions (Purchase, Stake, Distribute, Reinvest) must emit indexed events to allow subgraphs/indexers to build the `/data` dashboard.
- **Verification:** Source code must be verified on BscScan immediately upon deployment.

---

## 6. System Constraints (Invariants)
1.  **Global Supply Cap:** `totalSupply` <= 1,000,000,000 DGT3.
2.  **Treasury Split:** Treasury ALWAYS receives exactly 96% of Gross Market sales.
3.  **Snapshot Timing:** Staking eligibility is ALWAYS determined by the 20th day logic.
4.  **Execution Gating:** No staking distribution can occur without a prior FDR flag.
