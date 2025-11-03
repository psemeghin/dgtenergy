# 00_Tokenomics Masternote  
  
#   
  
## 01_Token Identity  
  
• Official Token Name: DGT3Energy  
• Ticker: DGT3  
• Nature: Utility token — used for access, governance, staking, and protocol participation.  
• Primary Network: BNB Smart Chain (BEP-20) — Chain ID 56  
• Future Standards: ERC-20 (EVM) and SPL (for multichain expansion)  
• Total Supply: 1 000 000 000 DGT3 (fully minted at genesis; fixed supply)  
• Decimals: 18  
• Mint/Burn: No minting and no burning functions  
• Transferability: Enabled immediately after deployment. Note: While transfers are technically unrestricted at the token-contract level, platform policy enforces all compliant secondary liquidity exclusively through the /desk module until DAO authorization for broader listings (see §3.3 and §6). Emergency Exception: Token transferability may be temporarily paused only under the emergency scope described in §7.a, with public disclosure in /data; no policy-driven pauses are permitted.  
• Listing Policy: No public exchange listing initially planned; liquidity is provided via the /desk P2P module (escrowed, KYC-gated) until any DAO-approved listing or market-making arrangement.  
• Treasury Policy: Unsold tokens remain locked in treasury and can only be released according to predefined rounds and DAO-approved milestones.  
• Compliance: Utility-token framework under continuous legal review; KYC/AML may apply depending on jurisdiction and investor profile.  
• Verification: All contract sources publicly verified on BscScan at launch.  
  
**Contracts (BNB Mainnet)**  
**Token Contract – 0x4f9e03695e16ab7a9a0d5bae4db60231ae20cc62**  
**Token Sale Contract – 0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c**  
**Accepted Stablecoin (USDT BEP-20) – 0x55d398326f99059fF775485246999027B3197955**  
**Treasury Wallet – 0x<treasury_wallet>**  
**Management Fee Wallet – 0x<management_fee_wallet>**  
**Owner (Time-Locked Multisig, 2-of-3) – 0x<multisig_wallet> (scheduled activation Q4 2025)**  
**Deployer Wallet – 0x3d98385100DB2359e4953A61D11788B3f0e3225f**  
Note: Final treasury, management, and multisig addresses will be published in /data prior to the audit freeze, together with signed announcements and the migration/ownership transfer TX hashes.  
  
Active Public Sale  
Phase: Whitelist (Open)  
Price: 0.030 USDT / DGT3  
Target (Net to Treasury): 1 000 000 USDT  
Gross Collected (GM): ≈ 1 041 667 USDT  
Management Fee (4%): ≈ 41 667 USDT redirected automatically to managementFeeWallet  
Tokens Delivered: 34 722 222 DGT3  
Delivery: Tokens transferred instantly to connected wallet upon confirmation.  
  
**Operational Environment (Frontend Variables)**  
**NEXT_PUBLIC_CHAIN_ID=56**  
**NEXT_PUBLIC_USDT_ADDRESS=0x55d398326f99059fF775485246999027B3197955**  
**NEXT_PUBLIC_TOKEN_ADDRESS=0x4f9e03695e16ab7a9a0d5bae4db60231ae20cc62**  
**NEXT_PUBLIC_SALE_ADDRESS=0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c**  
**NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=a6bc7e0b017a6a0765d022bf838de533**  
  
Wallets Supported: MetaMask, WalletConnect, Trust Wallet, Coinbase Wallet  
Governance Entry Point: Snapshot (one-token-one-vote; future on-chain DAO)  
Security Posture: Ownable + Pausable sale contract; currently operated under a restricted deployer EOA with no minting or supply control. Transition to a time-locked multisig (2-of-3) is scheduled for Q4 2025. From that point forward, no EOA will retain unilateral authority; sensitive actions require 2-of-3 approvals and respect timelock parameters disclosed in /data.  
##   
## 02_Token Utility  
The DGT3Energy (DGT3) token is the utility backbone of the protocol — enabling participation, governance, transparency, and performance-linked allocations within the ecosystem.  
It provides holders with access to protocol tools, decision-making, and performance-linked distributions derived from verified energy operations.  
  
**Core Utilities**  
	1.	**Access:** Unlocks institutional dashboards, capital deployment data, governance docs, and reporting.  
	2.	**Governance:** One token = one vote via Snapshot (off-chain).  
	3.	**Staking:** Allows participation in performance-based USDT allocations anchored by real-world operations.  
	4.	**Desk / P2P Exchange:** Settlement asset within the /desk environment with KYC/AML escrow liquidity.  
	5.	**Transparency: **Every transaction and treasury movement verifiable on-chain through the /data dashboards.  
  
**Summary of Utility**  
	1.	Participation – Access to rounds and DAO voting.  
	2.	Staking Participation – Access to **variable, performance-linked** USDT distributions.  
	3.	Governance Rights – Vote, propose, delegate.  
	4.	Controlled Liquidity – Trading inside DApp only until DAO approves otherwise.  
	5.	Information Access – Dashboards and institutional metrics gated by ownership.  
  
**Utility Guidelines**  
  
• DGT3 does not represent ownership, equity, or debt.  
• Allocations are discretionary, **strictly conditional on verified positive operational results**, and performance-based. **No returns or fixed distributions are ever guaranteed.**  
• The token functions strictly as a utility and coordination tool.  
  
  
## 03_Sale Structure (Rounds)  
  
DGT-Energy adopts a two-phase distribution model for clarity and on-chain transparency. All contributions are processed by smart contracts that auto-split 96% to the treasury and 4% to the management wallet, delivering tokens instantly to the buyer.  
  
**Phase 1 – Whitelist (Open)**  
  
Incentive: early bird  
  
• Price: 0.030 USDT / DGT3  
• Target (Net to Treasury): 1 000 000 USDT  
• Gross Collected (GM): ≈ 1 041 667 USDT  
• Management Fee (4%): ≈ 41 667 USDT (to managementFeeWallet)  
• Tokens Delivered: 34 722 222 DGT3  
• Status: MOU signed  
• Delivery: Instant settlement to the connected wallet upon confirmation  
• Purpose: Early-bird allocation with preferential pricing prior to step-up rounds  
  
Whitelist Deployment Policy  
  
The Whitelist phase represents the only stage in which the net proceeds (NET) are not fully deployed into energy receivables.   
For transparency and auditability, the Treasury allocates the Whitelist NET as follows:  
- 50% directed to development, technical enhancement, and protocol infrastructure (non-productive capital; excluded from AUM and performance rate calculations);  
- 50% deployed into verified energy receivables under pre-signed Memoranda of Understanding (MoUs), forming the first productive cycle of the protocol.  
  
Deployment Confirmation (FDR) for the Whitelist phase is considered achieved once the energy-designated portion (50%) is fully deployed and disclosed in `/data` with contract references and transaction hashes.   
All staking tokens acquired during the Whitelist remain eligible under the same accrual rules and priority payment structure applied to all other phases.   
The early-bird incentive reflects this mixed allocation structure — rewarding early participants while maintaining the integrity of performance-linked distributions.  
  
  
**Phase 2 – Rounds (Progressive)**  
  
Incentive: step-up  
  
• Structure: 70 full sub-rounds with linear pricing from 0.0321 to 0.036273 USDT/DGT3.  
Price Function (deterministic): For rounds i = 1..70,  
priceᵢ = 0.0321 + (i - 1) * (0.036273 - 0.0321) / (70 - 1)  
All prices are stored and applied at 18-decimal precision on-chain; UI rounding is for display only.  
• Per-Round Treasury Target (NET): 497 000 USDT.  
• Per-Round Gross Collected (GM): 517 708.3333 USDT (reflecting the 4% split).  
• Management Fee (per round): 20 708.3333 USDT (4% of GM), automatically routed to managementFeeWallet.  
• Token Delivery: tokensᵢ = GMᵢ ÷ priceᵢ with priceᵢ following the linear ladder.  
– Round 1 (price 0.0321): ≈ 16 127 985 DGT3  
– Round 70 (price 0.036273): ≈ 14 272 554 DGT3  
• Aggregate Targets (subject to global allocation-cap):  
– Total NET (WL + 70 rounds): up to ≈ 35 790 000 USDT  
– Total GM (WL + 70 rounds): up to ≈ 37 281 250 USDT  
– Total Management Fee (WL + 70 rounds): ≈ 1 491 250 USDT (4% of GM)  
The sale auto-closes upon reaching the global allocation-cap of 1 000 000 000 DGT3, regardless of remaining rounds.   
  
Post-Deployment Staking Availability (Full-Deployment Rule): Staking accrual for tokens purchased in any phase (Whitelist or any Round) begins only after the Treasury publishes a Deployment Confirmation in /data stating that 100% of the NET proceeds for the relevant deployment lot have been fully deployed into verified energy operations. Holders may stake at any time, but purchases settled before this confirmation only begin accruing from the first eligibility snapshot (20th 00:00 UTC) that occurs after the Deployment Confirmation. If the confirmation is posted after the monthly snapshot, accrual starts in the subsequent cycle.  
  
**Price Precision: o**n-chain prices enforced at 18-decimal precision; UI values rounded for readability. UI submits the exact on-chain price and simulates gas prior to send; a pre-cap buffer prevents user-facing reverts at GMᵢ.  
Token Amount Rounding: the sale contract floors token amounts to 18 decimals to prevent over-issuance and cap breaches.  
Dust Policy: Any remainder created by flooring accumulates in the treasury and is never sold or distributed outside DAO-approved policies. /data reports cumulative dust per round.  
  
**Allocation-Cap Rule – **to preserve fixed supply, the sale contract halts allocations when 1 000 000 000 DGT3 have been allocated/transferred from the treasury.  
  
⸻  
  
**Capital Integrity & Transparency**  
  
100% of capital raised (net of the 4% management fee) is allocated directly to the treasury for verified energy operations. This ensures capital integrity and on-chain traceability.  
  
**Glossary — GM vs. NET**  
• Gross Collected (GM): total USDT paid by the buyer (100%).  
• Management Fee (4%): routed automatically to managementFeeWallet.  
• Net Treasury (NET): GM × 0.96 — effective capital used in verified operations.  
• Operational Costs (Pass-Through): when recognized at deployment, may be netted from the cycle’s deployment capital; when recognized at receipt, reduce the cycle’s distributable pool. Always disclosed in /data; no impact on token pricing or fixed supply.  
⸻  
  
**General Rules of Sale**  
1. On-chain Split & Token Calculation  
Each contribution is automatically split 96%/4% on-chain:  
• 96% → Treasury Wallet (operational capital)  
• 4% → Management Fee Wallet (protocol management fee)  
Tokens delivered = (USDT paid) ÷ price of the active phase.  
Note: Tokens are computed on 100% of the buyer’s gross contribution (GM); the 96%/4% split affects only fund routing.  
2.	Payment Asset: USDT (BEP-20).  
3. Liquidity Control: Tokens are tradable exclusively via the official /desk P2P module (escrowed, KYC-gated). No public orderbook or market-making is available. Any change requires explicit DAO approval. Policy Note: The token contract does not implement on-chain transfer restrictions; /desk exclusivity is a platform policy enforced by the DApp and KYC gating, not a protocol-level lock.  
4.	Compliance: KYC/AML may be required by round and jurisdiction.  
5.	Treasury Governance: unsold tokens remain locked until DAO-approved milestones.  
6.	Audit Cadence: independent audits post-launch and pre-milestone with public reports.  
7.	Per-Round Caps and Auto-Close: each sub-round enforces GMᵢ = 517 708.3333 USDT; any overflow reverts. FCFS Note: GMᵢ caps are enforced strictly (first-come, first-served). The UI pre-simulates transactions; overflow reverts by design.  
8. Allocation-Cap Enforcement: global cap 1 000 000 000 DGT3 (fixed genesis supply).  
9.	Price Ladder Determinism: linear from 0.0321 → 0.036273 (immutable).  
10.	Disclosure Consistency: public dashboards display GM, NET, price, tokens delivered, fees, and allocation-cap progress in real time.    
11. Operational Costs (Pass-Through): If unforeseen third-party costs arise at deployment or at receipt, they are recognized at cost and disclosed in /data. Token pricing and delivery remain unchanged (USDT paid ÷ price). Any impact occurs (i) by reducing the net capital allocated to energy deployment for the cycle and/or (ii) by reducing the distributable performance pool of the affected cycle.  
Governance Thresholds: Any new Operational Cost category > 0.25% of the cycle’s NET or any single invoice > 0.10% requires pre-disclosure in /data and external attestation (invoice and independent verification). Costs above 0.50% require DAO ratification prior to settlement, except in emergency (then disclosed within five business days).  
12. Full-Deployment Rule (FDR): Performance allocations for tokens purchased in any phase (Whitelist or any Round) accrue only after /data publishes a Deployment Confirmation that 100% of the cycle’s NET (after any recognized Operational Costs) has been deployed. The DApp reflects the active/inactive accrual status per cycle.  
  
**Note on Mathematical Consistency** – Under the fixed 70-round schedule, token allocations approach the global cap. Auto-close preserves integrity while maintaining the pricing ladder.  
  
**Performance Visualization** – Dashboards (/data) display GM and NET separately. All yields and reinvestments are calculated over NET only. Investors receive tokens on 100% of GM; the 4% split affects internal routing.  
  
**Governance Note: The pricing ladder and round structure are hard-coded in the smart contract. No governance, multisig, or administrative function can alter these parameters post-deployment.**  
  
  
## 04_Governance & DAO Framework  
  
DGT-Energy adopts a **hybrid, progressively decentralized governance model** that balances operational discipline with community participation. The framework preserves the token’s **pure utility** nature while ensuring transparency and accountability.  
  
**Governance Model**  
  
• **Core Team (De Goat Capital):** technology, risk oversight, treasury operations, and regulatory compliance within predefined parameters.  
• **DAO Community:** proposals and voting on protocol evolution and transparency matters as decentralization advances.  
• **Legal Wrapper:** registered in a crypto-friendly jurisdiction to ensure continuity and enforceability of DAO processes.  
  
Governance powers expand over time, transitioning from a managed launch phase to broader token-holder participation.  
  
**Voting Mechanics**  
  
• **Principle:** one token = one vote.  
• **Phase 1:** Snapshot (off-chain) for fast, low-cost voting.  
• **Phase 2:** migration to on-chain governance once maturity thresholds are met.  
• **Lifecycle:** Discussion → Draft → Five-day vote → Execution.  
• **Delegation:** holders may delegate voting power to trusted representatives.  
  
**Treasury Governance**  
  
**• Owner Functions: **During the initial deployment phase, owner privileges remain under a restricted deployer account (EOA). Migration to a time-locked 2-of-3 multisig (Founder A, Founder B, independent institutional signer) is scheduled for Q4 2025, immediately after completion of the first independent audit and the Whitelist phase. After this transition, no EOA will retain unilateral control. All timelock parameters and signer addresses will be disclosed in /data. Interim Controls: Until multisig activation, any non-emergency owner action requires advance notice in /data (≥48h) and immediate post-action disclosure with transaction hash and rationale. Emergency pause actions are exempt from pre-notice but must be disclosed within 24h.  
Multisig Parameters  
	• Threshold: 2-of-3  
	• Sensitive Actions: pause/unpause, treasury release, limited configuration updates (subject to ≥48h timelock).  
Scope Limitation: “Configuration updates” are restricted to non-economic parameters such as UI endpoints, treasury whitelists, or emergency pause logic. They explicitly exclude any variable affecting the token’s economic invariants — including the price ladder, token supply, distribution mechanics, and fee percentages.   
The price ladder (0.0321 → 0.036273 USDT/DGT3) is immutable by design and enforced on-chain. No multisig, DAO, or owner function can modify the pricing logic after deployment.  
  
• **Visibility:** real-time public dashboards (balances, flows, fee tracking, cycle history).  
  
• **Spending Rules:** any movement of treasury funds must derive from predefined operational parameters or a DAO-approved budget/proposal.  
  
• **Treasury Segmentation:**  
– **Deployment Pool:** primary capital directed to verified energy receivables and contracts.  
– **Yield & Reward Pool:** funded by verified operational outcomes; used for staking distributions and/or DAO-approved reinvestment into (i) audited energy receivables and efficiency projects, (ii) reserve liquidity instruments disclosed in /data, and (iii) controlled acquisition of DGT3 tokens as an internal reinvestment mechanism.  
Such DGT3 acquisitions represent capital that remains fully productive within the protocol — they are held by the Treasury as operational assets and participate in staking on equal terms, with yields flowing back to the Treasury’s Yield & Reward Pool.   
These tokens are not used for speculative trading or market-making and do not affect the public price ladder or token supply.   
All treasury-held DGT3 balances and their staking yields are transparently published in /data, including transaction hashes and reinvestment rationale. Supply Accounting: Treasury-held DGT3 that is staked at the snapshot is counted in circulating supply for rate calculation. /data discloses treasury stake share and its share of distributions for each cycle.  
– **Reinvestment Reserve:** portion of verified results formed solely from the monthly excess above 1.2% after the priority threshold for stake distribution.  
These amounts are reinvested into audited energy operations and used to reinforce treasury liquidity and long-term sustainability. The policy and eligibility criteria are public and will be subject to DAO oversight starting in Phase 3 (DAO Maturity).  
– **Contingency Buffer:** limited reserve for stability and emergency response within the utility scope.  
  
• **Audit Process:** independent audits occur **immediately after launch** (per roadmap) and prior to major milestones; findings are published.  
  
  
  
**Scope & Safeguards**  
  
• **No DAO control over staking distribution ratios or approvals:** staking allocations are **fully automated in smart contracts** and operate outside DAO discretion.  
• **Quorums and Delays:** minimum quorum and execution delays to prevent rushed decisions.  
• **Emergency Controls:** temporary pause rights for critical security events, exercised under strict disclosure.  
• **Compliance:** continuous legal review to uphold utility-token classification (no profit rights, no equity/dividend features).  
  
**Governance Disclosures**  
  
• Public repository of governance framework, proposals, outcomes, and signer changes.  
• On-chain references for all executed actions and associated transaction hashes.  
  
  
## 05_Staking Parameters  
  
The staking mechanism is a **utility participation feature** that lets DGT3 holders connect their tokens to the protocol and take part in monthly **performance allocation** cycles.  
It is **not** an investment contract or interest-bearing activity; it is an on-chain utility executed entirely by smart contracts and designed for regulatory clarity.  
  
**Purpose**  
  
Staking enables DGT3 holders to participate in monthly **USDT (BEP-20) performance allocations** derived from verified operational outcomes of energy receivables managed within the protocol. Participation is open and voluntary, with **no lock-ups** or minimum duration.  
  
**Core Parameters**  
  
• **Distribution Asset:** USDT (BEP-20)  
• **Indicative Annual Distribution Range (net):** **Up to** 13–22% (variable, strictly performance-based, **non-guaranteed)**.  
• **Frequency:** Monthly (allocations are cumulative across cycles)  
• **Eligibility Date:** Wallets must be staked on the **20th of each month** (UTC 00:00) to qualify for that cycle. Note: Local times displayed in the DApp are for convenience only; eligibility is computed strictly at 00:00 UTC. Chain Semantics: Eligibility is determined by the first block with timestamp ≥ 00:00:00 UTC on the 20th. In case of reorgs, the final canonical block at ≥ 00:00:00 UTC prevails. Activation Condition — Full-Deployment Rule (FDR): Accruals are gated by a Deployment Confirmation in /data attesting that 100% of the NET for the relevant deployment lot has been fully deployed. If the confirmation is posted after the monthly eligibility snapshot, accrual begins with the next cycle. Applicability: The Full-Deployment Rule (FDR) applies to tokens purchased in any phase (Whitelist or any Round). Newly purchased tokens are not auto-staked; holders must opt in via the DApp. Purchases settled after the eligibility timestamp count toward the next cycle’s calculation.  
• **Program Launch:** **Q2 2026** (after the first capital-deployment cycle)  
• **Lock Mechanism:** **None** — staking remains open and flexible  
• **Calculation Method: **oken-based circulation model (one-token-one-unit). The protocol applies a uniform rate per token, ensuring that staking rewards are distributed proportionally to the number of DGT3 tokens staked — not to the USDT amount originally paid.  
Distribution Rate (per cycle): rate = distributable_pool ÷ total_tokens_staked_at_snapshot. Each token accrues the same share of the verified performance allocation, maintaining full on-chain auditability; unstaked treasury holdings are excluded.  
Operational Cost Pass-Through (Staking Impact): When valid Operational Costs arise in a given cycle, they are recognized at cost and (i) if incurred at deployment, are netted from the cycle’s deployment amount, reducing the productive base; and/or (ii) if incurred at receipt, reduce the cycle’s distributable pool prior to payout. No retroactive adjustments are made after a cycle closes, and no user wallet is ever debited.  
**Definition — Circulating Supply:** excludes treasury-locked and contract-reserved balances. Treasury-held DGT3 that is actively staked at the snapshot is included in circulating supply; treasury balances not staked remain excluded. /data publishes the authoritative figure.  
• **Early Exit:** Unstake any time; unstaked tokens do not qualify for the active cycle  
• **KYC/AML:** Only verified wallets interacting through the official DApp are eligible  
• **Governance Scope:** Staking parameters are encoded in smart-contract logic and **not subject to DAO control or manual approvals. Crucially, the logic only processes allocations when positive operational results are verified.**  
  
**Administrative Fee Structure**  
  
A fixed 0.33% monthly administration fee is calculated over the protocol’s total invested value (AUM) and accrued at the close of each monthly cycle. The fee is independent of performance results and does not vary with operational outcomes. It is deducted operationally prior to staking distribution, ensuring that the full productive capital deployed in energy operations remains unaffected. The deduction is executed by smart contract and automatically transferred to the managementFeeWallet, with all calculation references and transaction hashes published in /data for auditability. The indicative 13–22% annual distribution range is already presented net of this administration fee. AUM Reference: The AUM base is defined as the on-chain treasury balance snapshot at 00:00 UTC on the first day of each monthly cycle; no external valuation inputs are used. AUM Scope: The AUM base includes, as of the 00:00 UTC monthly snapshot, (i) Treasury.sol on-chain balances (net of the 4% sale routing), and (ii) protocol-owned, whitelisted on-chain escrow/receivable positions that represent deployed capital originating from the Whitelist and from any Round. Off-chain IOUs or non-whitelisted destinations are excluded. Each cycle, /data publishes the snapshot block number, a breakdown of component balances, and the list of active whitelisted receivable/escrow addresses (with links and transaction hashes).  
Anti-Gaming Rule: Transfers in/out within 12 hours before the snapshot that have the sole effect of inflating AUM and are reversed within 36 hours after the snapshot are disregarded for AUM purposes and disclosed in /data.  
  
**Distribution Source and Sustainability**  
  
Allocations are funded **exclusively** by verified cash flows from real-world energy operations; **no new tokens are minted**. Distributions draw from the **Yield & Reward Pool** within the treasury and remain **non-inflationary**.  
Because the calculation references **total circulating supply**, staking does not alter token scarcity or market dynamics.  
Each monthly cycle follows a distribution-priority policy targeting up to 1.2% of the net monthly result, processed only when a positive result is verified and subject to available distributable pool after any recognized Operational Costs. No distribution is guaranteed in any cycle.  
  
**Transparency and Reporting**  
  
• All staking contracts and payments are **verifiable on-chain**  
• Dashboards present the **circulation-based rate**, cumulative allocations, and non-PII participant metrics in real time  
• Independent audits confirm operational data and contract correctness for each cycle (per roadmap cadence)  
  
**Legal and Compliance Disclaimer**  
  
The DGT3 staking process is a **utility-driven participation mechanism**, not a financial product or investment instrument.  
Allocations are variable, discretionary, and **entirely dependent on protocol performance.** **There is no guaranteed return, no fixed rate, and no guaranteed minimum distribution in any cycle.** The 1.2% figure refers only to an **internal allocation priority** and is strictly conditional upon positive results being verified.  
  
##   
##   
## 06_Economic Model  
  
The DGT-Energy economic model establishes a **transparent, utility-based framework** that connects tokenized participation to the real performance of the energy sector.  
It is designed to ensure **on-chain accountability, verifiable capital allocation, and zero dependence on speculative market behavior**. Distributions for a deployment lot commence only once the Full-Deployment Rule (FDR) is met and recorded in /data via a Deployment Confirmation.  
  
**1. Capital Framework**  
  
	1. Capital Inflow – Funds contributed through token purchases are automatically routed to the on-chain treasury. 100% of all proceeds — net of the disclosed 4% management fee — are allocated to verified energy operations, less any valid Operational Costs recognized at deployment (see §6.3).  
	2.	**Capital Deployment** – Treasury capital supports real, contract-based energy receivables and projects within pre-audited legal and compliance parameters.  
	3.	**Operational Result Cycle** – Verified operational outcomes flow back to the treasury and form the basis for periodic **performance-allocation cycles** executed via the staking mechanism. These allocations are automated and **not subject to DAO or team discretion**.  
  
  
**2. Distribution and Reinvestment Policy**  
  
The DGT-Energy distribution and reinvestment policy defines a transparent, auditable, and discipline-based model for the use of verified operational results.  
It ensures that returns from real-world energy operations are allocated fairly between participant rewards and treasury strengthening.  
  
**	**1.  Conditional Allocation Priority: Before any reinvestment occurs, the protocol establishes a **priority threshold** for distributions to staking participants. This threshold (up to 1.2%) is automatically processed by smart contracts **only when a positive operational result is verified.** **The existence of a positive operational result is not guaranteed in any cycle; therefore, no allocation, including the 1.2% threshold amount, is guaranteed.** This policy targets priority access for stakers to net positive results before any excess is used for long-term reinvestment, without guaranteeing distributions in any cycle.  
  
**	**2. Conditional Reinvestment Rule  
Reinvestment is only triggered **after the net monthly result exceeds 1.2%.**  
Accordingly:  
	•	Up to **1.2% per month** of net performance → distributed entirely to staking participants.  
	•	When monthly verified performance exceeds 1.2%, the excess portion may be either partially reinvested or 		partially distributed as additional staking rewards, depending on the protocol’s liquidity conditions and strategic 		needs. The Treasury, operating under multisig governance, determines the allocation ratio for each cycle and 			discloses it publicly in /data, together with transaction hashes and rationale. This flexible policy preserves capital 		integrity while allowing the protocol to strengthen treasury reserves or enhance staking rewards without altering the 	fixed-supply tokenomics.  
  
**	**3. Operational Split Structure  
The treasury contract automatically executes this split into two components:  
	•	**Staking Distribution Pool –** the portion used for monthly USDT allocations to wallets staked at the cycle’s eligibility date.  
	•	**Treasury Reinvestment Reserve –** the portion composed only of the excess above 1.2% per month, reallocated to reinforce on-chain capital, liquidity buffers, and future energy operations under audited conditions.  
Each cycle’s ratio is **published in /data before execution** and logged on-chain with a verifiable hash.  
No new tokens are minted; the entire process occurs within the existing fixed supply.  
  
**	**4. Economic and Legal Purpose  
This policy preserves predictability and long-term sustainability without accumulating unjustified reserves.  
Because allocations are operational, automatic, and performance-linked, DGT3 retains its **utility-token classification** — with no profit-sharing, debt, or equity features.  
  
Treasury-held DGT3 acquired through reinvestment is treated as productive capital within the staking framework; its yields are reintegrated into the Treasury’s performance cycle, maintaining economic neutrality and on-chain auditability.  
  
**3. Operational Cost Pass-Through (Risk Disclosed)**  
  
Definition. “Operational Costs” are unforeseen, third-party, external costs directly tied to capital deployment or to the receipt/settlement of operational results (e.g., banking/escrow fees, FX conversion, non-derivative hedging, local legal/tax withholding, notarization, registry, independent verification, chain gas for settlement). These costs are non-recurring by design, not margin, and carry no project markup.  
  
Principles.  
• Pass-through only, at cost; no markup and no spread.    
• Documented and invoice-backed; publicly disclosed per cycle in /data.    
• Non-overlap: Operational Costs do not duplicate the 4% management fee or the 0.33% monthly administration deduction.    
• Utility-aligned: no retroactive charges after a cycle is closed; no user wallet debits—effects occur solely via the cycle’s distributable pool.  
  
Timing and Accounting.  
• At Deployment: if incurred during capital deployment, the cost is recognized at that point and reduces the net productive capital for that cycle’s performance calculation.    
• At Receipt: if incurred upon receipt/settlement of results, the cost is recognized at settlement and reduces the cycle’s distributable performance before staking allocation.    
• Scope Boundary: statutory withholding taxes, when applicable, are treated as Operational Costs and disclosed as such.    
• Governance Notice: any new cost category or material deviation is disclosed in /data prior to or together with the cycle report; thresholds and templates are published in /data. Single-Recognition Rule: Each operational cost is recognized once per underlying event and may not be recorded both at deployment and at receipt for the same transaction.  
  
Effect on Tokenomics.  
• Token Pricing: unaffected. Tokens are always delivered as (USDT paid) ÷ (active phase price).    
• Staking Distributions: the distributable pool for a cycle may be reduced by valid Operational Costs recognized in that cycle.    
• Supply: fixed supply unchanged; no minting or burning occurs due to operational costs.  
• Deployment Capital: valid Operational Costs may be netted against the capital to be deployed in energy operations for the cycle (recognized at deployment), thereby reducing the productive base for that cycle’s performance.  
  
Governance Thresholds. Any new Operational Cost category > 0.25% of the cycle’s NET or any single invoice > 0.10% requires pre-disclosure in /data and external attestation (invoice and independent verification). Costs above 0.50% require DAO ratification prior to settlement except in emergency (then disclosed within 5 business days).  
Threshold Denominator: “cycle NET” refers to NET measured at the same 00:00 UTC snapshot used for AUM; the snapshot block number is published in /data.  
Snapshot Alignment: Threshold calculations reference the same 00:00 UTC monthly snapshot used for AUM; the snapshot block number is published in /data.  
  
**4. Step-Up and Performance Model**  
  
DGT-Energy’s operating structure relies on **predefined step-up pricing** and **contractual performance spreads** from verified energy-receivable agreements.  
The protocol captures predictable spreads between acquisition and settlement values, ensuring all inflows originate from **audited contractual activity**, not market speculation.  
All calculations and payment flows are handled automatically by smart contracts, preserving a deterministic and transparent value cycle.  
  
**5. Staking Integration**  
  
Staking functions as a utility-level participation process. Distributions follow a circulation-based calculation: the total distributable pool for each cycle is divided by the total circulating supply of DGT3, establishing a uniform rate applied to staked balances at the eligibility date. The staking logic operates entirely on-chain and remains outside DAO authority. A fixed 0.33% monthly administration fee is calculated over AUM and deducted before staking distribution (already netted in the 13–22% range); it does not reduce treasury capital deployed in energy operations.  
  
**6. Peer-to-Peer (P2P) Desk**  
  
Primary Liquidity Channel: Until any DAO-approved listing, all secondary transfers of DGT3 occur through the /desk P2P module only. The /desk provides escrowed, KYC-gated transfers inside the DApp and does not constitute market-making or a continuous price quote service.  
P2P Pricing Policy and Treasury Exception  
  
P2P Price Floor (Participants): Within the `/desk` module, peer-to-peer listings and trades by independent participants are not permitted below the price of the next scheduled round. The DApp enforces this floor as a platform policy (KYC-gated), preserving the integrity of the public price ladder.  
  
Treasury Exception (Buyer-Only, Discounted Bids): The Treasury may participate exclusively as a buyer and is allowed to post discounted purchase bids below the next round price to facilitate orderly secondary liquidity. This exception applies only to Treasury buy operations; the Treasury does not sell tokens via `/desk`. Discounted bids by the Treasury are discretionary, volume-unlimited, not guaranteed, and always disclosed in `/data` with transaction hashes, timestamps, and pricing references.  
  
Integrity & Fairness Safeguards: The Treasury exception does not alter the on-chain price ladder or round pricing, does not constitute market-making, and does not set a public reference price. All other participants remain bound by the P2P price floor (no listing or execution below the next round price).  
While not guaranteed, this mechanism is designed to support liquidity formation and contribute to a sustainable secondary market within the compliant, KYC-gated `/desk` ecosystem.  
  
Regulatory Scope: /desk operates exclusively with on-chain assets; no custody of fiat; counterparties are KYC-gated; jurisdictional exclusions apply where P2P escrow may be deemed a regulated money-transmission activity. Policy Note: The token contract does not implement on-chain transfer restrictions; /desk exclusivity is a platform policy enforced by the DApp and KYC gating, not a protocol-level lock. Unauthorized Pools: The protocol monitors for third-party liquidity pools. If detected, /data publishes an advisory and risk assessment; no official market-making or liquidity support is provided without explicit DAO authorization.  
  
**7. Transparency and Accountability**  
  
• All treasury operations, staking cycles, and /desk transactions are traceable on-chain.  
• Independent third-party audits validate smart-contract logic and treasury allocations.  
• Activity reports and treasury balances are publicly accessible through institutional dashboards.  
• /desk does not provide continuous price quotes; transfers occur on demand with escrow settlement and KYC-gated counterparty matching.  
  
**8. Legal and Structural Integrity**  
  
The model adheres to utility-token classification principles: **no expectation of profit from the efforts of others; no equity/dividend rights; automated, utility-based allocations; independent governance and staking functions.**  
Through this architecture, **DGT3Energy remains a pure utility token**, enabling verifiable on-chain participation in a transparent, legally robust ecosystem.  
  
  
07_Smart Contracts Overview  
  
  
All protocol operations run via **immutable smart contracts** on **BNB Smart Chain (BEP-20)**. Design principle: **Code as Governance** — operational rules are embedded in code to minimize discretion and support the utility-token framework.  
  
**1. Core Contracts**  
  
**a. DGT3Token.sol**  
• Fixed supply: 1 000 000 000 DGT3 (non-mintable, non-burnable)  
• Transferability enabled at deployment  
• Ownable, Pausable for security controls  
• Sources publicly verified on BscScan at launch  
• Pause Scope (Token): Pause is restricted to emergency response for critical security events (e.g., detected exploit). It cannot be used to enforce liquidity policy or to alter the price ladder. Any token-level pause requires /data pre/post disclosure and is governed by the same timelock/multisig controls as other sensitive actions.  
  
  
**b. DGT3TokenSale.sol**  
• USDT (BEP-20) payments  
• Multi-phase pricing with per-round GM caps; instant token delivery; automatic 96%/4% cash split; global allocation-cap enforcement and auto-close.  
• Pausable, ReentrancyGuard, and rate-limiting safeguards  
  
**c. Staking.sol**  
• Participation mechanism with **circulation-based** USDT distributions  
• Fixed 0.33% monthly administration fee (AUM-based), deducted before distribution (already netted in the 13–22% range)  
• No lock-in; eligibility = staking status on the **20th** of each month  
• Operates autonomously — **not subject to DAO or team discretion**  
  
**d. Treasury.sol**  
• Receives **96%** of sale inflows automatically  
• Segmented pools: **Deployment Pool**, **Yield & Reward Pool**, **Contingency Buffer**  
• Outgoing transfers only to whitelisted, pre-audited partner channels  
• Public balance visibility via /data dashboards  
  
**e. EscrowDesk.sol**  
• KYC-verified, escrow-protected P2P transfers within the DApp  
• Funds remain in escrow until settlement conditions are met  
• Maintains compliant liquidity inside a closed ecosystem  
  
**2. Security Architecture**  
  
• **Audit schedule:** independent audits **immediately after launch** (roadmap) — scope: source verification, logic integrity, treasury reconciliation  
• **Open verification:** all sources **publicly verified on BscScan at launch**  
• Reentrancy protection; access control with multisig time-locks  
• Fail-safe pause for contingencies; comprehensive event logging  
• Official Addresses (/data): treasuryWallet, managementFeeWallet, multisig owners — published with transaction hashes of fee routing.  
• Coordinated Vulnerability Disclosure (no public monetary rewards): scope, intake channel (security@dgte.energy), PGP key, and signed advisories are published in /data; an external security researcher is engaged under contract.  
  
**3. Upgrade and Governance Policy**  
  
• Contracts are **non-upgradable** to preserve immutability and regulatory certainty  
• New features require **fresh deployments** subject to DAO approval  
• Migrations follow transparent on-chain reporting with independent validation post-redeployment  
  
**4. Compliance and Audit Assurance**  
  
• Audits occur **post-activation** to validate contracts in real conditions; findings are publicly disclosed  
• Periodic re-audits ahead of major DAO or staking milestones  
  
**5. Summary**  
  
The contract suite provides **trustless automation, transparency, and audit-ready traceability** for every protocol operation, ensuring institutional-grade reliability in line with utility-token principles.  
##   
##   
## 08_Technical Infrastructure  
  
  
The DApp is engineered for institutional reliability, clear UX, and full on-chain transparency. The stack prioritizes **security, performance, and compliance** with a minimal, auditable surface.  
  
**Application Stack**  
  
• Node.js 20.19.5 • Next.js 15.5.2 (App Router) • TypeScript 5.9.2  
• Tailwind CSS 3.4.1 • @tanstack/react-query 5.87.1 • react-icons 4.12.0  
  
**Web3 Stack**  
  
• wagmi 2.16.9 • viem 2.37.4 • ethers 6.15.0 • rainbowkit 2.2.8  
• Primary Network: BNB Smart Chain (Chain ID **56**)  
• Payment Asset: USDT (BEP-20)  
• **Contract Addresses (BNB Mainnet):**  
– Token: **0x4f9e03695e16ab7a9a0d5bae4db60231ae20cc62**  
– Token Sale: **0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c**  
– USDT: **0x55d398326f99059fF775485246999027B3197955**  
• WalletConnect Project ID: **a6bc7e0b017a6a0765d022bf838de533**  
• Governance Entry Point: Snapshot (read-only; future on-chain DAO)  
  
**DApp Architecture & Pages**  
  
• **/home** — overview, key disclosures, live round status  
• **/rounds** — pricing, allocation progress, purchase flow  
• **/desk** — KYC-gated P2P escrow with on-chain receipts  
• **/data** — dashboards for treasury, staking cycles, fee tracking  
• **/governance** — proposals (Snapshot), framework, voting records  
• **/connect** — wallet connect, KYC/AML onboarding, account settings  
All critical actions emit **on-chain events** and show transaction hashes inline.  
  
**Hosting & Delivery**  
  
• Vercel (immutable builds, edge network) • Primary domain: **https://dgte.energy**  
• Next/Image optimization; HTTP caching; ISR for non-sensitive reads  
• CI/CD with protected branches, required checks, reproducible builds  
  
**Backend & Data Services**  
  
• Minimal REST for KYC/AML orchestration, whitelist checks, dashboard aggregation  
• PostgreSQL or MongoDB with append-only audit tables, UTC timestamps  
• Light indexers for BNB events (purchases, staking payouts, fee transfers), idempotent replays  
  
**Security Controls**  
  
• HSTS, CSP (nonces), X-Frame-Options, Referrer-Policy, X-Content-Type-Options  
• Wallet auth + server session binding; scoped, time-boxed KYC tokens  
• Rate limiting, backoff, CAPTCHA on sensitive routes  
• Encrypted secrets; least-privilege access; typed ABIs; TX simulation; reorg-aware confirms  
• Structured logs (PII-safe), tamper-evident storage; uptime/latency SLOs with alerts  
• CVD process wired into ops: intake triage runbooks, severity mapping, patch release playbooks, and advisory publication workflow (no public bounties).  
  
**Privacy & Compliance**  
  
• KYC/AML via provider-agnostic attestations (DApp stores proofs/tokens, not documents)  
• Data minimization; consent-based analytics (opt-out honored)  
• Jurisdictional gates per round where required  
  
**Performance & Accessibility**  
  
• TTI < 2.5s on mid-tier devices; JS < 250KB gz per route  
• Hybrid SSR/ISR; minimal client components on critical paths  
• WCAG 2.1 AA targets; keyboard navigation; focus management; high-contrast tokens  
  
  
**Test & Audit Readiness**  
  
• Unit, integration, and E2E tests (headless wallet mocks)  
• Static analysis, tree-shaking, bundle diffs  
• **Post-launch audit (roadmap):** independent review of contract code, API surface, and event reconciliation; public disclosure of findings  
  
##   
## 09_Transparency & Security  
  
DGT-Energy is built on **verifiable transparency**, **defense-in-depth security**, and **clear public disclosures**.  
• On-chain first: sale splits, treasury movements, staking allocations, fee transfers are all on-chain.  
• Public dashboards show GM, NET, 4% management fee, 0.33% admin deduction, and allocation-cap progress.  
• Liquidity: provided exclusively via the /desk P2P module (escrowed, KYC-gated). No market-making and no liquidity guarantee.  
• Vulnerability Disclosure: Coordinated Vulnerability Disclosure (CVD) with public scope and contact from day one — no public monetary rewards. An external security researcher is engaged under contract to proactively review the codebase and disclosures.  
  
Rounds may auto-close early upon reaching the global allocation-cap (1 000 000 000 DGT3), even if the planned round count is not fully executed.  
  
**9.1 Transparency Principles**  
  
• On-chain first: sale splits, treasury movements, staking allocations, fee transfers are all on-chain and referenceable by TX hash  
• Single source of truth: dashboards mirror contract state (no off-chain recalculation)  
• Plain-English disclosures: 96%/4% split; circulation-based staking rate; 0.33% monthly admin deduction  
• DAO records: framework, proposals, and results are permanently accessible  
  
**9.2 Public Dashboards (/data)**  
  
• Treasury overview; sale progress; staking cycles and cumulative distributions; fee transparency (4% management; 0.33% admin); audit/status reports  
• Deployment Status (FDR): per-cycle “Deployment Confirmation” with timestamp, NET amount deployed (Whitelist and all applicable Rounds), referenced contracts/agreements, and accrual flag (active/inactive) indicating whether the current cycle accrues. Whitelist Disclosure Note — The `/data` dashboard identifies the Whitelist phase as a dual-purpose allocation: 50% development (non-productive, excluded from AUM) and 50% verified energy deployment (productive, counted in AUM).   
The FDR confirmation and staking accrual reference only the energy-deployed component.   
Both allocations are tracked with independent transaction hashes and full disclosure to preserve audit continuity.  
• Reinvestment policy visibility — display of the priority stake threshold (up to 1.2% per month).  
• Historical registry of monthly allocations, reserve ratios, and DAO-ratified adjustments (Phase 3 onward).  
• Round-by-Round Ledger: per-round GM cap, NET realized, token count, and management-fee tracking (4%) with on-chain TX links; allocation-cap progress bar with auto-close condition.  
• Liquidity Card (/desk): status of P2P availability, escrow queue depth, average settlement times, and a reminder that liquidity is provided via KYC-gated P2P only (no orderbook, no market-making).  
• Security Advisories: signed advisories for fixed issues (CVD) with timelines, severity, remediation notes, commit diffs, and TX hashes; researcher attribution when applicable and authorized.  
• Administration Fee Ledger: displays the monthly AUM reference, 0.33% calculation amount, and the on-chain transaction hash of each fee transfer to the management wallet.  
  
**9.3 Reporting Cadence**  
  
• Monthly: staking cycle report (inputs, circulation snapshot, payout proofs)  
• Quarterly: treasury overview consistent with utility scope  
• Reinvestment Statement: summary of average distribution ratios, treasury reserve formation, and verified compliance with the 1.2% threshold rule.  
• Event-driven: contract migration notices, deprecations, roadmap updates  
  
**9.4 Security Controls**  
  
• Contract-level: Ownable, Pausable, ReentrancyGuard, strict parameter bounds, event emission on critical paths  
• Keys: multisig + time-lock; least-privilege ops keys  
• Runtime: CSP nonces, HSTS, origin pinning, typed ABIs, pre-TX simulation, reorg-aware confirms  
• Data: PII minimization, encrypted secrets, hashed identifiers, append-only audit tables  
• Monitoring: chain watchers, anomaly detection on treasury flows, alerting SLAs  
  
**9.5 Incident Response**  
  
• Triage/containment SLAs; user comms (banner + status page + signed announcement)  
• On-chain mitigations (pause where applicable) with TX links  
• Public post-mortems with timeline, root cause, and remediation checklist  
  
**9.6 Audit & Assurance (Post-Launch)**  
  
• Timing: independent audits **immediately after launch** per roadmap  
• Coordinated Vulnerability Disclosure (no public monetary rewards): the protocol operates a CVD program with a published scope and intake channel. Valid reports are acknowledged and handled under responsible disclosure — without public bounties or monetary rewards.  
• External Security Researcher (contracted): a specialist is under contract from day one to perform ongoing reviews of contract logic, sale math (96%/4%), staking flows, and treasury reconciliation, in addition to the independent audit.  
• Intake & Safe Harbor: researchers can submit findings via security@dgte.energy (PGP key published in /data). Good-faith research under the CVD scope is authorized; non-exploitive testing and privacy-preserving methods are required.  
• Triage & Disclosure: initial triage within 3 business days; remediation timeline based on severity; coordinated public disclosure after fix and deploy; advisories are posted in /data with commit and TX references.  
• Scope: contract logic, invariants, sale math (96%/4%), staking (circulation-based), admin deduction (0.33%), treasury reconciliation  
• Disclosure: full reports in /data with issue tracking and fix verification  
• Re-audits: before major governance milestones or staking parameter updates  
  
**9.7 Privacy & Compliance**  
  
• KYC/AML attestations (no document storage); jurisdictional participation gates as required  
• Consented analytics only; opt-out honored; data export/delete subject to lawful retention  
  
**9.8 Risk Management (Utility-Aligned)**  
  
• Counterparty/contract checks for energy receivables; ongoing verification of operational results  
• Internal liquidity: /desk escrow with KYC for orderly, compliant transfers  
• Operational: infra SLOs, backups, DR plans; quarterly tabletop exercises  
• Disclosure: conservative language — **no profit promises; allocations variable and utility-based**  
  
**9.9 User Safeguards**  
  
• Clear receipts: gross input, 96%/4% split, circulation snapshot, admin deduction, payout TX  
• Self-custody by default; no custodial balances  
• Signed, verifiable announcements; official addresses list  
  
**9.10 Summary**  
  
Transparency is **verifiable (on-chain)**, **continuous (dashboards + reports)**, and **actionable (incident response + audits)**.  
Security is enforced by **immutable code, principled key management, and monitored operations** — fully consistent with a **pure utility-token** design and global compliance expectations.  
