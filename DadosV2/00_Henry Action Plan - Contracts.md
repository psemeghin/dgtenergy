# 00_Henry Action Plan - Contracts  
  
  
**1. Purpose of this document**  
  
This document defines the concrete responsibilities and expected deliverables for Henry regarding:  
	•	Contract corrections and redeployment  
	•	Implementation of missing contracts required by the Tokenomics and Business Requirements  
	•	Alignment of on chain logic with the Institutional Tokenomics and Whitepaper  
  
Creation and configuration of multisig wallets will be handled by the core team and are explicitly out of scope for Henry.  
  
⸻  
  
**2. Scope**  
  
**2.1 In scope for Henry**  
	•	Review of current deployed contracts against the latest Tokenomics and Business Requirements  
	•	Design and implementation of new contracts required by the protocol  
	•	Refactor and redeployment of existing contracts that are structurally inconsistent with Tokenomics  
	•	Integration points between contracts (Token, TokenSale, Staking, EscrowDesk, Treasury, Compliance stack)  
	•	Security hardening of sale and coordination contracts  
	•	Documentation of contract behavior and events for audit and compliance  
  
**2.2 Out of scope for Henry**  
	•	Creation and configuration of Gnosis Safe multisig wallets  
	•	Off chain KYC and identity management operations  
	•	Off chain fiat flows and Swiss holding structure  
	•	Legal, regulatory or institutional approvals  
  
The code must be designed to integrate cleanly with these external components but not to implement them directly.  
  
⸻  
  
**3. Contracts that require Henry’s work**  
  
**3.1 Contracts to be created and deployed**  
  
These contracts are required by the Business Requirements and Tokenomics but are not yet implemented on chain.  
	1.	Staking.sol  
	2.	EscrowDesk.sol  
	3.	Treasury.sol (or a minimal on chain Treasury module that integrates with the Gnosis Safe)  
	4.	Reinvestment.sol (or a reinvestment module inside Treasury)  
	5.	Compliance.sol  
	6.	IdentityRegistry.sol  
  
These contracts must be implemented according to the functional descriptions below.  
  
**3.2 Contracts that must be redesigned and redeployed**  
  
These contracts exist in the current codebase but are inconsistent with the Institutional Tokenomics and must be replaced.  
	1.	DGT3Token.sol  
	2.	DGT3TokenSale.sol  
  
The current deployments are not aligned with the protocol design and must be fully corrected.  
  
⸻  
  
**4. Detailed responsibilities by contract**  
  
**4.1 DGT3Token.sol**  
  
Henry is responsible for:  
	•	Implementing a fixed supply BEP 20 token with total supply of 1,000,000,000 tokens minted at deploy  
	•	Adding a Pausable mechanism (OpenZeppelin style) for emergency scenarios  
	•	Implementing circulating supply tracking, with a function that returns circulating supply excluding:  
	•	Treasury balances  
	•	Contract owned technical balances  
	•	Adding a list of addresses excluded from circulation and events to track updates  
	•	Adding event hooks and internal structure to support anti gaming logic and future integration with Staking  
	•	Integrating with Compliance.sol for transfer checks if the final model uses a compliance hook  
	•	Emitting all events required for audit and compliance monitoring  
  
The objective is to ensure that the token matches the Tokenomics description and can be safely used by the Staking, EscrowDesk and Treasury logic.  
  
**4.2 DGT3TokenSale.sol**  
  
Henry is responsible for rewriting the sale contract to match the Institutional Tokenomics:  
	•	Implement a single sale flow with:  
	•	Whitelist phase  
	•	Seventy deterministic rounds, each with its own price and cap  
	•	Implement the 96 percent Treasury and 4 percent Management Fee split:  
	•	USDT routed to a Treasury wallet  
	•	USDT routed to a Management Fee wallet  
	•	Enforce the correct token allocations:  
	•	Whitelist allocation  
	•	Total sale allocation aligned with the Tokenomics  
	•	Implement the pricing ladder:  
	•	Starting at 0.0321 USDT and moving to 0.036273 USDT across 70 rounds  
	•	Price schedule must be deterministic and auditable  
	•	Enforce caps and anti whale protections:  
	•	Per round GM cap  
	•	Per address purchase limitations if required  
	•	Integrate with KYC logic via Compliance and IdentityRegistry:  
	•	Optional KYC under 1,000 USD cumulative  
	•	Mandatory KYC at or above the defined threshold  
	•	Route funds to the Treasury and Management Fee wallets instead of the owner address  
	•	Emit detailed events for purchases, round changes and funds routing  
  
The current sale contract is not usable as is and must be replaced by a version aligned with the Institutional Tokenomics.  
  
**4.3 Staking.sol**  
  
Henry is responsible for implementing the staking contract that powers the coordination utility:  
	•	Model:  
	•	One token equals one unit of stake  
	•	No new tokens created, no synthetic emissions  
	•	Core features:  
	•	Stake and unstake functions for DGT3  
	•	Monthly snapshot mechanism around the defined date  
	•	Anti gaming logic aligned with the Business Requirements (for example, ignoring transfers near snapshot if needed, or delegating that to the token hook)  
	•	Ability to receive a distributable pool in USDT from Treasury  
	•	Per cycle accounting of:  
	•	Total staked  
	•	Pool size  
	•	Admin fee  
	•	Claim status per address  
	•	Admin fee:  
	•	Calculate and route the 0.33 percent administrative fee where defined in Tokenomics  
	•	Claims:  
	•	Allow participants to claim USDT based on their stake at snapshot time  
	•	Prevent double claiming per cycle  
	•	Events:  
	•	Stake, Unstake, CycleConfigured, CycleSnapshotted, PoolReceived, Claimed  
  
The implementation must preserve the compliance principle that these outputs are functional and not financial rights.  
  
**4.4 EscrowDesk.sol**  
  
Henry is responsible for implementing the P2P Desk contract that supports secondary transfers under protocol rules:  
	•	Function as an escrow based order book for DGT3  
	•	Support:  
	•	Order creation by sellers  
	•	Order cancellation by sellers  
	•	Order filling by buyers via USDT  
	•	Enforce:  
	•	Price floor based on the next public round price  
	•	Special purchase conditions for Treasury, including:  
	•	The ability to buy below the next round price within defined limits  
	•	A monthly cap on Treasury buys as a percentage of circulating supply  
	•	Integrate with Compliance and IdentityRegistry for:  
	•	KYC gating of both sellers and buyers  
	•	Emit detailed events for:  
	•	OrderCreated  
	•	OrderCancelled  
	•	OrderFilled  
  
The Desk must never violate the price floor logic defined by Tokenomics and must log all trades for audit.  
  
**4.5 Treasury.sol**  
  
Henry is responsible for implementing the Treasury contract or on chain module that:  
	•	Tracks deployed and received USDT per operational cycle  
	•	Integrates with De Goat Capital AG and off chain structure through explicit on chain records and references  
	•	Provides functions to:  
	•	Register deployments  
	•	Register performance inflows  
	•	Close cycles and compute:  
	•	Distributable pool to Staking  
	•	Reinvestable amount to Reinvestment  
	•	Transfers funds to:  
	•	Staking.sol as distributable pool  
	•	Reinvestment.sol for redeployment  
	•	Emits events for:  
	•	DeploymentRegistered  
	•	PerformanceRegistered  
	•	CycleClosed  
  
The Treasury must serve as a deterministic hub that other contracts can rely on for performance data.  
  
**4.6 Reinvestment.sol**  
  
Henry is responsible for implementing the reinvestment logic as a separate contract or module:  
	•	Receive reinvestable amounts from Treasury per cycle  
	•	Maintain parameters for:  
	•	Performance threshold  
	•	Split between operational redeployment and Desk related activity if applicable  
	•	Execute reinvestment actions:  
	•	Route USDT back to operational deployment endpoints  
	•	Optionally route USDT to Treasury or Desk related functions when buying back DGT3 through EscrowDesk  
	•	Emit events for:  
	•	ReinvestableRegistered  
	•	ReinvestmentExecuted  
  
The reinvestment logic must never create financial promises and must stay fully consistent with the Tokenomics.  
  
**4.7 Compliance.sol**  
  
Henry is responsible for implementing the compliance contract that:  
	•	Checks transfer eligibility based on:  
	•	Wallet freeze flags  
	•	KYC tier  
	•	Sanction or block lists  
	•	Whitelisted system addresses  
	•	Exposes a function such as canTransfer(from, to, amount) for use by DGT3Token and other contracts  
	•	Manages:  
	•	Frozen status  
	•	Global whitelisting for system contracts and treasury  
	•	Integration with IdentityRegistry for KYC tiers  
	•	Emits events for:  
	•	Frozen, Unfrozen  
	•	Whitelisted, Unwhitelisted  
  
Compliance logic must be modular enough to evolve without redeploying the core token.  
  
**4.8 IdentityRegistry.sol**  
  
Henry is responsible for implementing an identity registry that:  
	•	Stores non personal information in the form of:  
	•	Identity hash  
	•	KYC tier  
	•	Validity flag  
	•	Allows only approved KYC admins to:  
	•	Set or update identity records  
	•	Revoke identities  
	•	Provides read functions for:  
	•	Checking if an address is verified  
	•	Retrieving its tier and validity state  
	•	Emits events for:  
	•	IdentitySet  
	•	IdentityRevoked  
  
No personal data should ever be stored on chain.  
  
⸻  
  
**5. Cross cutting requirements**  
  
For all contracts above, Henry should:  
	•	Use well known audited libraries, for example OpenZeppelin, wherever applicable  
	•	Implement Pausable and ReentrancyGuard in contracts that handle flows of USDT or DGT3  
	•	Emit detailed events to support auditability and traceability  
	•	Avoid any logic that can be interpreted as:  
	•	Profit guarantees  
	•	Yields  
	•	Redemption rights  
	•	Financial instruments  
	•	Document the contracts:  
	•	High level description  
	•	Key functions  
	•	Main events  
	•	Roles and permissions  
  
⸻  
  
**6. Phased delivery expectations**  
  
**Phase 1 – Critical for Whitelist (Q4 2025)**  
  
Henry’s responsibilities:  
	•	Redesign and prepare new versions of:  
	•	DGT3Token.sol  
	•	DGT3TokenSale.sol  
	•	Implement minimal but functional versions of:  
	•	Compliance.sol  
	•	IdentityRegistry.sol  
	•	Provide initial versions of:  
	•	Staking.sol (deployed but inactive until Q2 2026)  
	•	EscrowDesk.sol (deployed but inactive until Q1 2026)  
	•	Treasury.sol  
	•	Reinvestment.sol or equivalent module  
	•	Ensure all contracts compile, pass basic tests and are aligned with the Business Requirements and Tokenomics  
  
**Phase 2 – Activation (Q1–Q2 2026)**  
  
Henry’s responsibilities:  
	•	Support activation of EscrowDesk once P2P Desk is ready  
	•	Support activation of Staking after the first Full Deployment Rule cycle is completed  
	•	Refine Reinvestment logic as operational data is validated  
  
**Phase 3 – Post Whitelist Audit and Hardening (Q3–Q4 2026)**  
  
Henry’s responsibilities:  
	•	Support full audit review of the contracts and logic  
	•	Implement corrections required by external auditors, if any  
	•	Assist in preparing technical documentation for regulators and institutional reviewers  
  
⸻  
  
**7. Next steps for Henry**  
	•	Review this action plan and confirm technical feasibility and any open questions  
	•	Align with the core team on:  
	•	Final naming conventions  
	•	External addresses (Treasury, Management Fee, multisigs)  
	•	KYC integration approach  
	•	Start with:  
	•	Rewriting DGT3Token.sol and DGT3TokenSale.sol  
	•	Designing interfaces for Staking, EscrowDesk, Treasury, Reinvestment, Compliance and IdentityRegistry  
  
