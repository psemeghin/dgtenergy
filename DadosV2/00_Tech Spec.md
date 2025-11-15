# 00_Tech Spec  
  
  
  
**01. Purpose and Scope**  
  
This document describes the complete technical architecture of the DGTEnergy protocol. It defines the smart contract modules, permission boundaries, data flows, internal safeguards, indexing requirements, and operational constraints that govern protocol execution.  
  
This document does not describe economic design, utilities, distributions, or token participation incentives. Those are defined in the Tokenomics V3 (Final Version).  
  
The Tech Spec provides auditors, engineers, and infrastructure teams with a single reference for all on chain logic, execution paths, and module interactions.  
  
⸻  
  
**02. System Overview**  
  
DGTEnergy operates on BNB Smart Chain and consists of four core modules:  
	1.	DGT3Token  
	2.	TokenSale  
	3.	Staking  
	4.	EscrowDesk  
	5.	Treasury Balances (held in multisig, not a contract)  
  
All modules operate under strict immutability rules. No contract contains mint or burn functions. No contract contains upgradable proxies. All contracts rely on explicit ownership transfer to a timelocked multisig for security.  
  
The system architecture is based on deterministic logic with no off chain dependency for state changes.  
  
⸻  
  
**03. Module Specifications**  
  
**03.1 DGT3Token**  
  
Standard: ERC 20  
Supply: 1,000,000,000  
Mint: None  
Burn: None  
Pausable: Emergency only  
Owner: Treasury multisig with 2 of 3 threshold  
Roles:  
• owner can pause or unpause  
• no ability to modify balances  
• no ability to restrict transfers  
  
Event Set:  
• Transfer  
• Approval  
• Paused  
• Unpaused  
  
Security Controls:  
• Uses OpenZeppelin audited patterns  
• No custom logic  
• Transfer always allowed unless paused under emergency  
  
⸻  
  
**03.2 TokenSale Contract**  
  
Purpose: Routing of USDT contributions, deterministic price enforcement, auto split, token delivery.  
  
Inputs:  
• USDT amount  
• buyer address  
• active round index  
  
Outputs:  
• Token transfer to buyer at deterministic price  
• 96 percent of USDT to treasury multisig  
• 4 percent of USDT to management fee safe  
  
Constraints:  
• GM cap per round  
• Price ladder defined at deployment  
• No ability to modify prices  
• No owner override for allocation cap  
• No whitelist logic on chain  
• FCFS enforced by GM cap  
  
Critical Invariants:  
• Allocation cap equals 1,000,000,000  
• Price ladder cannot be changed after deployment  
• All calculations use 18 decimal precision  
• All transfers revert if GM exceeds round cap  
  
Events:  
• TokensPurchased  
• RoundAdvanced  
• TreasuryTransfer  
• ManagementFeeTransfer  
  
Security Controls:  
• Reentrancy guard  
• Pausable  
• Rate limiting on buy path  
• Strict allowance and USDT balance checks  
  
⸻  
  
**03.3 Staking Contract**  
  
Purpose: Participation mechanism tied to circulating supply and verified operational results.  
  
State Variables:  
• stake balance per wallet  
• total staked  
• active accrual state  
• last snapshot block  
• admin fee accumulator  
• treasury share when staked  
  
Inputs:  
• stake  
• unstake  
• distribution trigger by authorized executor  
  
Outputs:  
• USDT transfer per wallet  
• administration fee routing  
  
Constraints:  
• No lock period  
• Eligibility only by timestamp threshold  
• Distribution cannot exceed available pool  
• Administrative fee computed over productive AUM  
• No modification of rate logic  
  
Events:  
• Staked  
• Unstaked  
• DistributionExecuted  
• AdminFeeCollected  
  
Security Controls:  
• Reentrancy guard  
• Pausable  
• Execution limited to authorized executor role  
  
⸻  
  
**03.4 EscrowDesk Contract**  
  
Purpose: KYC gated P2P escrow module for compliant transfers.  
  
State Variables:  
• order struct  
• buyer address  
• seller address  
• escrow USDT balance  
• escrow DGT3 balance  
  
Constraints:  
• Only KYC verified participants can create or match orders  
• Treasury can operate as buyer only  
• Settlement requires dual confirmation  
• Price floor enforced by DApp layer, not contract  
• No automated market making  
  
Events:  
• OrderCreated  
• OrderCancelled  
• OrderMatched  
• EscrowSettled  
  
Security Controls:  
• Reentrancy guard  
• Pausable  
• Escrow release requires proper signature paths  
  
⸻  
  
**04. Permission Architecture**  
  
**04.1 Ownership Structure**  
  
All contracts owned by Treasury multisig.  
Threshold: 2 of 3.  
Signers: Karine Casali, Pedro Semeghini, Walter Corcione.  
  
Management fee wallet controlled by 2 of 2: Karine Casali and Pedro Semeghini.  
  
**04.2 Allowed Owner Actions**  
  
Native to contracts:  
• pause  
• unpause  
  
Forbidden Owner Actions:  
• modifying supply  
• adjusting prices  
• adjusting distribution mechanics  
• changing allocation caps  
• altering staking formula  
• altering admin fee percentage  
• creating or destroying tokens  
• bypassing GM caps  
• overriding FDR  
  
All forbidden actions revert or do not exist in code.  
  
⸻  
  
**05. Data Flow Specification**  
  
**05.1 Sale Path**  
  
buyer → TokenSale → USDT split → Treasury and Management Safe → Token transfer  
  
Intermediate checks:  
• allowance  
• round cap  
• price precision  
• revert on oversubscription  
  
**05.2 Deployment Confirmation (FDR)**  
  
FDR is stored off chain in /data and mirrored by event signatures.  
No on chain dependency for operational verification.  
Staking contract activates accrual only after FDR flag is toggled by authorized role.  
  
**05.3 Staking Distribution Flow**  
	1.	executor triggers distribution  
	2.	contract checks pool  
	3.	calculates rate = pool / circulating supply  
	4.	allocates per wallet based on staked tokens  
	5.	transfers USDT  
	6.	routes admin fee  
	7.	emits DistributionExecuted  
  
**05.4 Escrow Settlement Flow**  
	1.	seller lists order  
	2.	buyer accepts  
	3.	buyer deposits USDT to escrow  
	4.	seller transfers tokens to escrow  
	5.	both conditions met  
	6.	release function triggers USDT to seller and DGT3 to buyer  
	7.	emits EscrowSettled  
  
⸻  
  
**06. Execution Roles**  
  
executor  
• triggers distribution events  
• defined at contract deployment  
• cannot modify parameters  
  
owner  
• controls emergency functions only  
  
treasury multisig  
• receives treasury funds  
• no automated contract interaction by design  
  
KYC operator  
• off chain layer enforcing gating  
  
⸻  
  
**07. Security Model**  
  
Layers:  
  
Smart Contract Layer  
• Non upgradable  
• Ownable  
• Pausable  
• Reentrancy guard  
• Deterministic logic  
• Fully verified source code  
  
Multisig Layer  
• Hardware wallet enforced  
• Two signer quorum  
• Timelocked actions when applicable  
  
DApp Layer  
• KYC gating  
• Price floor enforcement for P2P desk  
• Transaction simulation  
• Risk prompts  
  
Monitoring Layer  
• Automated event watchers  
• Treasury balance monitors  
• Transaction alert systems  
  
Audit Layer  
• Internal audit pre Whitelist  
• Third party audit post Whitelist  
• Public disclosure of findings  
  
⸻  
  
**08. Indexer and Infrastructure Requirements**  
  
Recommended stack:  
• Light indexer for staking events  
• BNB RPC with archival mode for snapshot consistency  
• Event mirroring into append only database  
• Automated reconciliation scripts for:  
• sale events  
• staking distributions  
• multisig transfers  
• escrow settlements  
  
Data Dashboard Requirements:  
• Query treasury multisig balance  
• Query USDT movements  
• Query round progress  
• Query FDR status  
• Query staking cycles  
  
⸻  
  
**09. Invariants and Safety Guarantees**  
	1.	Token supply is always 1,000,000,000.  
	2.	Price ladder cannot change after deployment.  
	3.	No contract can mint or burn tokens.  
	4.	Treasury is the only receiver of 96 percent NET flow.  
	5.	Management safe always receives 4 percent.  
	6.	Distribution pool cannot exceed verified input.  
	7.	Staking cannot distribute without active FDR flag.  
	8.	Escrow cannot release assets without conditions satisfied.  
	9.	Owner cannot change economic parameters.  
	10.	All sensitive actions require multisig signatures.  
  
⸻  
  
**10. Compliance Boundaries**  
  
The Tech Spec must never include:  
• financial expectations  
• projections  
• return metrics  
• economic incentives  
• marketing claims  
• forward looking promises  
  
The Tech Spec only covers code, modules, execution rules, and verification pathways.  
  
⸻  
  
**11. Summary**  
  
This Technical Specification defines the core architecture and on chain behaviour of the DGTEnergy protocol. It operates under deterministic logic, strict immutability, transparent permissions, and institutional grade security controls. All economic behaviour is defined in the Tokenomics V4 and not duplicated in this document.  
  
⸻  
  
**12. Compliance Notice**  
  
DGTEnergy is a utility token protocol. Participation grants access to protocol utilities only including staking, governance, and data visibility and does not represent equity, debt, or financial instruments. All allocations are performance based, discretionary, and fully transparent on chain.  
  
⸻  
  
