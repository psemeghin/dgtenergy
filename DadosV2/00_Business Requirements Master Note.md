# 00_Business Requirements Master Note  
  
  
## RWA TOKENIZATION ACTORS  
This section outlines the various actors involved in the DGTEnergy Real-World Asset (RWA) tokenization ecosystem. These actors are categorized as either off-chain or on-chain, depending on their primary domain of interaction.  
  
## OFF-CHAIN ACTORS  
Off-chain actors are the individuals, entities, and systems that operate in the traditional, non-blockchain world. They are essential for the legal, physical, and financial aspects of RWA tokenization.  
	**1.	Asset Originator (Billi Energy)**  
Description: The owner of energy receivables who originates consumer financing contracts for migration to Brazil’s free electricity market (ACL).  
Responsibilities:  
• Proving ownership of energy receivables  
• Providing all necessary documentation (CCEE registrations, consumer credit analysis, MoU compliance)  
• Complying with legal and regulatory requirements (ANEEL, BACEN, CVM)  
• Maintaining <1.5% default rate target  
• Monthly CCEE settlement reporting to DGTEnergy Compliance Officer  
Role in Protocol: Originates energy receivables through consumer financing; provides verified consumer pipeline; manages CCEE (Câmara de Comercialização de Energia Elétrica) settlements; assigns receivables to Securitizadora for custody.  
Incentives:  
• Immediate liquidity for receivables via Swiss Holding capital deployment  
• Institutional validation enhancing brand credibility  
• Scale beyond traditional banking limits  
Punishments:  
• Loss of DGTEnergy capital access if defaults exceed 3%  
• Breach of MoU penalties  
• Reputational damage if operational performance deteriorates  
  
  
**	2.	Custodian (Securitizadora)**  
Description: A Brazilian regulated entity (securitization company) that holds legal title to energy receivables and safeguards the physical assets backing the protocol.  
Responsibilities:  
• Ensuring energy receivables are legally registered and segregated  
• Providing monthly proof of custody reports (published in /data)  
• Releasing BRL proceeds to Billi Brasil upon CCEE settlement  
• Maintaining custody ledger with anonymized consumer IDs  
• Holding E&O (Errors & Omissions) insurance for custody operations  
Role in Protocol:  
• Receives energy receivable assignments from Billi Brasil  
• Holds legal title to receivables on behalf of DGTEnergy (via Swiss Holding → Billi structure)  
• Issues custody receipts verifying asset existence and value  
• Releases settlement proceeds following CCEE payment confirmations  
Incentives:  
• Custody fees (0.1–0.3% of AUM annually, paid in BRL by Billi)  
• Institutional reputation as regulated custodian  
• Long-term partnership with growing protocol  
Punishments:  
• Legal liability if receivables misappropriated  
• Insurance claims and regulatory penalties  
• Loss of CVM registration (if applicable under Law 14.430/22)  
Custody Flow:  
  
Swiss Holding (USDT) → Fiat conversion → BRL → Billi Brasil → Consumer Financing  
                      ↓  
                  Receivables Assignment  
                      ↓  
                 Securitizadora (Custody)  
                      ↓  
                CCEE Settlement (BRL proceeds)  
                      ↓  
              Billi Brasil → Swiss Holding → USDT → Treasury.sol  
  
  
**	3.	Legal Counsel (External)**  
Description: Legal experts who structure the tokenization process to ensure compliance with all relevant laws and regulations across multiple jurisdictions.  
Responsibilities:  
• Drafting the legal framework for the token (utility classification)  
• Ensuring compliance with securities laws (CVM Brazil, MiCA EU, FINMA Switzerland)  
• Providing utility token classification opinions  
• Advising on cross-border legal issues (Swiss Holding structure, Brazil regulations)  
• Structuring Securitizadora custody agreements  
Role in Protocol: Provides legal opinions (CVM, MiCA, FINMA); structures entity registrations; drafts compliance framework and terms of service.  
Incentives:  
• Legal fees paid from Whitelist infrastructure allocation (~$100–200k)  
• Professional reputation in emerging RWA tokenization market  
Punishments:  
• Professional malpractice liability if legal structure fails  
• Reputational damage if regulatory issues arise  
  
  
**	4.	Compliance Officer (Internal)**  
Description: The individual or team responsible for ensuring that the tokenization process adheres to all relevant regulations, including KYC/AML.  
Responsibilities:  
• Implementing KYC/AML procedures (wallets >$1,000 USDT invested)  
• Monitoring transactions for suspicious activity  
• Reporting to regulatory authorities as required  
• Verifying Billi performance data (CCEE statements)  
• Reconciling Swiss Holding FX conversions (BRL → Fiat → USDT)  
• Publishing Full Deployment Reports (FDRs) in /data  
• Freezing non-compliant wallets  
Role in Protocol: Enforces KYC/AML rules; monitors platform activity; verifies monthly performance data; ensures Swiss Holding FX transparency; coordinates with Securitizadora for custody proof.  
Incentives:  
• Salary funded by management fees (4%)  
• Protocol long-term success reduces legal risk exposure  
Punishments:  
• Legal liability if compliance failures occur  
• Regulatory penalties to protocol  
• Personal reputational damage  
	  
  
	**5.	Regulator (CVM, BACEN, ANEEL, FINMA)**  
Description: The government or quasi-governmental bodies that oversee financial markets, banking, energy sectors, and ensure compliance with the law.  
Responsibilities:  
• Setting the rules for RWA tokenization  
• Granting licenses to operate (if applicable)  
• Enforcing penalties for non-compliance  
• Monitoring /data transparency dashboards  
• Investigating investor complaints  
Role in Protocol:  
• CVM (Brazil): Utility token classification oversight  
• BACEN (Brazil): FX controls, inbound capital flows (Swiss Holding → Brazil)  
• ANEEL (Brazil): Energy receivable assignment regulations  
• FINMA (Switzerland): Swiss Holding Fiat/crypto conversion compliance  
Incentives:  
• Public interest and market stability  
• Consumer and investor protection  
• Orderly development of tokenized RWA markets  
Punishments:  
N/A (enforcement authority, not participant)  
  
  
	**6.	Investor (DGT3 Token Holder)**  
Description: An individual or institution that purchases the RWA tokens.  
Responsibilities:  
• Complying with KYC/AML requirements (mandatory for participations ≥$1,000 USDT)  
• Managing their own private keys (self-custody)  
• Understanding the risks of utility token participation  
• Accepting variable, non-guaranteed on-chain allocations  
• Acknowledging dual FX risk (BRL/USD via Swiss Holding conversions)  
Role in Protocol: Provides USDT capital through token purchases; may stake for performance-linked on-chain allocations derived from verified energy operations.  
Incentives:  
• Variable on-chain allocations from verified energy performance (13–22% indicative range, non-guaranteed)  
• Access to transparent, audited RWA utility participation  
• Fixed supply (1 billion tokens, no dilution)  
• USDT distributions (no BRL exposure; Swiss Holding handles FX)  
Punishments:  
• Loss of capital if Billi defaults or protocol underperforms  
• Account freeze if KYC/AML violations detected (≥$1k)  
• No guaranteed allocations in any cycle  
• FX slippage risk (BRL → Fiat → USDT via Swiss Holding)  
  
  
	**7.	Auditor (External)**  
Description: An independent third party that verifies the existence, value, and operational integrity of the underlying assets and smart contracts.  
Responsibilities:  
• Conducting regular smart contract audits (post-Whitelist, then periodically)  
• Reviewing treasury operations and FDR accuracy  
• Validating Swiss Holding FX conversion reconciliations  
• Publishing audit reports publicly in /data  
• Providing assurance to participants and regulators  
Role in Protocol: Validates smart contract logic, treasury flows, staking calculations, Securitizadora custody proofs, and Swiss Holding FX transparency.  
Incentives:  
• Audit fees (~$250k per comprehensive audit)  
• Professional reputation in RWA tokenization space  
Punishments:  
• Reputational damage if audit inadequate  
• Potential liability if vulnerabilities missed lead to losses  
  
  
**	8.	Brokerage/Exchange (Future, Phase 3)**  
Description: The platform where tokens may be bought and sold publicly (subject to DAO approval).  
Responsibilities:  
• Providing a liquid market for tokens (if DAO-approved listing occurs)  
• Ensuring fair and orderly trading  
• Complying with all relevant regulations in listing jurisdiction  
Role in Protocol: Secondary liquidity provider (future); currently all secondary transfers occur via /desk P2P module only.  
Note: No public exchange listing planned until Phase 3 (2027+) and requires explicit DAO approval.  
  
  
  
  
## ON-CHAIN ACTORS  
On-chain actors are the smart contracts and accounts that operate on the blockchain. They are responsible for the creation, management, and transfer of the RWA tokens.  
  
	**1.	Token Contract (DGT3Token.sol)**  
Description: The smart contract that represents the DGT3 utility token on BNB Smart Chain (BEP-20 standard).  
Responsibilities:  
• Minting tokens at genesis (1 billion fixed supply, no further minting)  
• Maintaining a record of token ownership (balances)  
• Processing transfers between wallets (subject to Compliance.sol checks)  
• Implementing emergency pause functionality (multisig-controlled)  
• Emitting transfer events for transparency  
Deployed Address (BNB Mainnet):  
0x4f9e03695e16ab7a9a0d5bae4db60231ae20cc62  
  
  
**	2.	Compliance Contract (Compliance.sol)**  
Description: The smart contract that enforces the compliance rules for the token.  
Responsibilities:  
• Checking if a transfer is allowed (pre-transfer hook)  
• Verifying KYC status via IdentityRegistry.sol  
• Freezing non-compliant accounts (Compliance Officer instruction)  
• Maintaining a whitelist of eligible participants  
• Enforcing /desk price floor rules (participants: ≥next round price; Treasury: ≥80%)  
Integration: Called by DGT3Token.sol before every transfer; blocks non-compliant transactions.  
  
  
**	3.	Identity Registry (IdentityRegistry.sol)**  
Description: The smart contract that stores the identity information (KYC attestations) of token holders.  
Responsibilities:  
• Linking wallet addresses to verified identities (privacy-preserving, no PII on-chain)  
• Verifying KYC/AML status (attested by KYC provider)  
• Providing identity verification status to Compliance.sol  
• Recording KYC tier levels (Tier 1: <$1k, Tier 2: ≥$1k, Tier 3: institutional >$500k)  
Privacy: Stores anonymized identity hashes only; full PII held by KYC provider off-chain.  
	4.	Token Sale Contract (TokenSale.sol)  
Description: The smart contract that manages the Whitelist and 70 progressive token sale rounds.  
Responsibilities:  
• Accepting USDT payments from participants  
• Calculating token amounts (USDT paid ÷ round price)  
• Automatic 96%/4% split: 96% NET → Treasury.sol, 4% → Management Fee Wallet  
• Enforcing per-round GM (Gross Market) caps  
• Enforcing global allocation-cap (1 billion tokens)  
• Auto-closing sales upon reaching allocation-cap  
• Instant token delivery to buyer wallet  
Deployed Address (BNB Mainnet):  
0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c  
  
  
**	5.	Treasury Contract (Treasury.sol)**  
Description: Multi-signature wallet (2-of-3) managing protocol capital and interfacing with Swiss Holding for Fiat conversions.  
Responsibilities:  
• Receiving 96% NET from TokenSale.sol (USDT)  
• Deploying USDT to Swiss Holding corporate account (off-chain bridge)  
• Recording all capital deployments with TX hashes in /data  
• Receiving performance proceeds (USDT, post-Swiss Holding conversion from BRL)  
• Transferring distributable pool to Staking.sol (monthly)  
• Executing reinvestments when monthly performance >1.2%  
• Maintaining 10% AUM liquidity buffer  
Off-Chain Integration (Swiss Holding Flow):  
  
DEPLOYMENT:  
Treasury.sol (USDT) → Swiss Holding → Fiat → BRL → Billi Brasil  
  
RETURN:  
Billi Brasil (BRL) → Swiss Holding → Fiat → USDT → Treasury.sol  
  
Multisig Signers: Karine (Founder A), Pedro (Founder B), Walter (Independent Board Member)  
  
  
**	6.	Staking Contract (Staking.sol)**  
Description: The smart contract that manages utility-based participation allocations for DGT3 holders.  
Responsibilities:  
• Recording monthly snapshots (20th 00:00 UTC, first block ≥ timestamp)  
• Calculating on-chain allocations based on verified performance (circulation-based rate)  
• Deducting 0.33% monthly admin fee automatically  
• Distributing USDT allocations proportionally to stakers  
• Enforcing FDR-gating (no accrual until 100% NET deployed and confirmed)  
• Emitting distribution events for /data transparency  
Distribution Currency: USDT only (participants never receive BRL; Swiss Holding handles all FX conversions).  
  
  
**	7.	Lending Pool (Future, if needed)**  
Description: A smart contract that allows users to lend and borrow against their tokens.  
Responsibilities:  
• Accepting deposits of tokens as collateral  
• Issuing loans collateralized by tokens  
• Managing interest rates dynamically  
• Executing liquidations if collateral value drops below threshold  
Status: Not planned for Phase 1–2; may be considered in Phase 3 (2027+) subject to DAO approval.  
  
  
**	8.	Auction Contract (Future, if needed)**  
Description: A smart contract that facilitates the sale of tokens through an auction process.  
Responsibilities:  
• Accepting bids from verified participants  
• Determining the winning bid  
• Transferring tokens to winner and payment to seller atomically  
Status: Not planned; /desk P2P escrow serves secondary liquidity function.  
  
  
**	9.	EscrowDesk Contract (EscrowDesk.sol)**  
Description: The smart contract that facilitates KYC-gated peer-to-peer DGT3 token trading within the /desk module.  
  
Responsibilities:  
• Escrowing DGT3 tokens from seller  
• Escrowing USDT from buyer  
• Enforcing price floor (participants: ≥next round price; Treasury: ≥80% next round)  
• Atomic settlement (simultaneous DGT3 ↔ USDT exchange)  
• Treasury buyer-only exception (max 1% circulating supply/month)  
• Disclosing all Treasury purchases in /data within 24h  
Liquidity Policy: All secondary transfers occur via /desk only (no public exchange) until DAO-approved listing (Phase 3).  
  
  
**10.	Oracle (Future, if needed)**  
Description: A service that provides real-world data to the smart contracts.  
Responsibilities:  
• Providing FX rate feeds (BRL/USD, USD/USDT) for on-chain calculations  
• Providing CCEE settlement confirmation data (if automated)  
• Triggering on-chain events based on real-world conditions  
• Tamper-proof data delivery with cryptographic attestation  
Status: Phase 1 uses manual data entry by Compliance Officer; Oracle automation considered for Phase 3 (2027+) to reduce operational overhead.  
  
  
**	11.	Bridge (Future, if multichain)**  
Description: A smart contract that facilitates the transfer of tokens between different blockchains.  
Responsibilities:  
• Locking tokens on source chain (BNB)  
• Minting wrapped tokens on destination chain (e.g., Ethereum, Polygon)  
• Burning wrapped tokens to unlock on original chain  
• Maintaining cross-chain balance reconciliation  
Status: Not planned; DGTEnergy is BNB Chain-only for Phase 1–2. Multichain expansion subject to DAO approval (Phase 3, 2027+).  
  
  
	**12.	Reinvestment Contract (Reinvestment.sol)**  
Description: On-chain module that operationalizes the reinvestment logic defined in Tokenomics and Treasury policy, when verified monthly performance exceeds a defined threshold (e.g., 1.2% of deployed capital), without altering token supply or creating any financial guarantees.  
Responsibilities:  
• Receiving from Treasury.sol the USDT portion flagged as “reinvestable” once a cycle’s performance is validated and the FDR is complete  
• Routing reinvestable amounts according to policy, including:  
– Direct redeployment to Swiss Holding for new BRL-based operations with Billi  
– Optional secondary-market support via EscrowDesk, under strict treasury-buyer-only rules and caps  
• Registering all reinvestment operations (cycleId, amount, routing, references) for publication in /data  
• Enforcing protocol-defined caps (e.g., max 1% of circulating supply per month for secondary purchases)  
• Ensuring that no reinvestment flow conflicts with MiCA/FINMA/CVM utility-token classification  
Role in Protocol:  
Closes the loop between operational results and new cycles of deployment, increasing capital efficiency while maintaining full transparency and a strict utility-token posture. It acts as a deterministic policy executor, not as a discretionary asset manager.  
Incentives:  
• Improved long-term operational continuity  
• Reduced idle capital in Treasury  
• Greater stability and predictability of deployment cycles  
Punishments (for misconfiguration or misuse):  
• Temporary suspension of reinvestment functions  
• Mandatory manual review by Treasury multisig and Auditor  
• Potential removal or replacement of module via governance upgrade (when DAO phase is active)  
Integration:  
• Treasury.sol: calls Reinvestment.sol when performance of a cycle exceeds the 1.2% threshold and there is a defined reinvestment amount  
• EscrowDesk.sol: serves as the execution venue for any secondary-market DGT3 acquisitions performed by Treasury under the treasury-only buyer rule (≥80% of next-round price and within monthly caps)  
• /data: records all reinvestment events, cycle references, and routing decisions, allowing Regulators, Auditors, and Participants to verify reinvestment paths end-to-end  
Key Parameters (Policy-Level, not hard-coded percentages):  
• Performance threshold (e.g., 1.2% of deployed capital on a cycle)  
• Maximum secondary-market buyback cap (e.g., 1% of circulating supply per month)  
• Minimum treasury purchase price (e.g., ≥80% of next-round price from TokenSale ladder)  
  
Mathematical Logic (Conceptual):  
performance_rate = return_USDT / deployed_capital  
  
If performance_rate > 0.012 (1.2%), then:  
  
reinvestable_amount = return_USDT – (0.012 × deployed_capital)  
  
This reinvestable_amount can then be split according to predefined policy, for example:  
x% redeployed via Swiss Holding (operational reinvestment)  
y% used for secondary DGT3 acquisition (subject to caps and floor)  
Risk Considerations:  
• Brazil: FX rules and capital deployment oversight on BRL flows linked to reinvestment  
• USA: Avoid characterization as an actively managed product; module must remain rule-based and non-discretionary  
• Europe: MiCA scrutiny on treasury behaviors tied to underlying real-world performance  
• Israel: Cross-border reinvestment flows subject to AML/FX monitoring  
  
STAKEHOLDER INTERACTION FLOW  
  
[Investor] ──USDT──> [TokenSale.sol] ──96% NET──> [Treasury.sol (on-chain)]  
             │                              ↓  
             │                    [Multisig Approval]  
             │                              ↓  
             │                   [Swiss Holding (off-chain)]  
             │                              ↓  
             │                [USDT → Fiat Conversion]  
             │                              ↓  
             │                  [Fiat → BRL Transfer]  
             │                              ↓  
             │                    [Billi Brasil (BRL)]  
             │                              ↓  
             │              [Consumer Financing (85+ consumers)]  
             │                              ↓  
             │           [Receivables Assignment to Securitizadora]  
             │                              ↓  
             │                  [Securitizadora (Custody)]  
             │                              ↓  
             │                  [CCEE Settlement (BRL proceeds)]  
             │                              ↓  
             │                    [Billi Brasil receives BRL]  
             │                              ↓  
             │                  [BRL → Swiss Holding]  
             │                              ↓  
             │                  [BRL → Fiat → USDT Conversion]  
             │                              ↓  
             │                   [USDT → Treasury.sol]  
             │                              ↓  
             │          [Distributable Pool & Reinvestable Amount]  
             │                              ↓  
             │          [Staking.sol (distribution) + Reinvestment.sol]  
             │                              ↓  
             │              [USDT Rewards → Investor (Staker)]  
             │  
             └──4% Fee──> [Management Fee Wallet]  
  
[Compliance Officer] ──Verifies Performance + FX──> [Treasury.sol] ──FDR Published──> [/data]  
                    ↓  
           [Securitizadora Custody Reports] ──Monthly Verification──> [/data]  
  
[Auditor] ──Reviews Contracts, Treasury, Swiss Holding FX──> [Audit Report] ──Published──> [/data]  
  
[Regulator (CVM, BACEN, ANEEL, FINMA)] ──Monitors──> [/data + Legal Opinions]  
  
⸻  
  
# BUSINESS REQUIREMENTS – USER STORIES   
  
Below are the complete User Stories for each actor in the DGTEnergy ecosystem.  
Each User Story includes:  
• Interaction with the system  
• Design decisions  
• Incentives & punishments (game theory)  
• Mathematical formulas  
• Pre-state / post-state  
• Risk analysis (Brazil / USA / Europe / Israel)  
  
This ensures auditability, transparency, and strict utility-token compliance.  
  
⸻  
**	1.	Asset Originator (Billi) — User Story**  
  
Interaction With the System  
Billi originates consumer financing contracts, performs ACL migration, and assigns CCB/NC receivables to the Securitizadora.  
Billi sends:  
• credit analysis  
• ACL conversion documents  
• CCEE statements  
• default reports  
• monthly settlement data to the Compliance Officer and Custodian.  
Design Decisions  
• Default rate target <1.5%  
• All receivables legally assigned before deployment  
• No on-chain privileges to preserve MiCA/FINMA/CVM utility classification  
• Mandatory full documentation prior to capital deployment  
Game-Theory Incentives  
Incentives:  
• Liquidity cycles  
• Reputation and institutional alignment  
• Operational scale  
Punishments:  
• Deployment freeze if defaults >3%  
• MoU penalties  
• Partnership downgrade  
Mathematical Rules  
default_rate = defaults / total_contracts  
Eligibility: default_rate ≤ 0.015  
net_performance = (settlement – costs) / deployed_capital  
Pre-State  
• ACL migration approved  
• CCB/NC executed  
• CCEE registration active  
Post-State  
• Receivables assigned to custody  
• Deployment eligible  
• FDR can be issued  
Risk Analysis  
Brazil: CCEE rule changes  
USA: risk of security reclassification  
Europe: MiCA interpretation  
Israel: FX monitoring  
  
⸻  
**	2.	Custodian (Securitizadora) — User Story**  
  
Interaction  
Receives, segregates, and legally holds receivables; issues custody reports used in FDRs.  
Design Decisions  
• All custody operations remain off-chain  
• Mandatory monthly custody proof for every deployment cycle  
Game-Theory  
Incentives: custody revenue  
Punishments: regulatory liability  
Formula  
value = Σ(cf_t / (1+r)^t)  
Pre-State  
Receivables endorsed by Billi  
Post-State  
Custody receipts → Compliance → Treasury → FDR  
Risks  
Brazil: CVM securitization oversight  
USA: custody interpretation  
EU: segregation strictness  
Israel: data protection  
  
⸻  
**	3.	Legal Counsel — User Story**  
  
Interaction  
Builds and validates utility-token classification, cross-border compliance, and legal structure.  
Design Decisions  
• No financial rights  
• Off-chain capital flows isolated  
• Utility-token structure immutable  
Game-Theory  
Incentives:  
• Long-term mandate with DGTEnergy  
• Reputation as reference counsel in RWA structures  
Punishments:  
• Professional liability if misclassification is established  
• Loss of credibility with regulators and institutional partners  
Formula  
U = Σ(utility_i × w_i) – Σ(financial_j × p_j)  
Risks  
Brazil: CVM position shifts  
USA: Howey Test  
Europe: MiCA  
Israel: token regulatory posture  
  
⸻  
**	4.	Compliance Officer — User Story**  
Interaction  
Coordinates KYC/AML, verifies FX and operational data, publishes FDRs.  
Design Decisions  
• Identity hashes only  
• Compliance.sol enforces transfer eligibility  
Game-Theory  
Incentives:  
• Reduced enforcement risk  
• Clear governance trail  
Punishments:  
• Personal and institutional penalties for compliance failures  
• Loss of confidence from regulators and auditors  
Formula  
fx_delta = |actual – expected| ≤ tolerance  
Risks  
Brazil: COAF  
USA: OFAC  
EU: GDPR  
Israel: AML  
  
⸻  
**	5.	Regulator — User Story**  
  
Interaction  
Monitors /data and legal documents, does not interact directly with contracts.  
Design Decisions  
• All relevant information (FDRs, audits, legal opinions) exposed in /data  
• No privileged “backdoor” access to protocol state  
Game-Theory  
Incentives:  
• Market integrity and consumer protection  
• Efficient supervisory process via transparent data  
Punishments:  
• Enforcement actions (fines, injunctions) if non-compliance detected  
• Tighter scrutiny and reporting obligations  
Formula  
RAI = verified_disclosures / required_disclosures = 1  
  
⸻  
**	6.	Participant (DGT3 Holder) — User Story**  
  
Interaction  
Buys DGT3, stakes voluntarily, uses /desk for P2P trades.  
Design Decisions  
• Self-custody only (no centralized custody by protocol)  
• Optional staking (no auto-stake)  
• P2P transfers gated by Compliance and price-floor rules  
Game-Theory  
Incentives:  
• Access to transparent, rule-based utilities  
• Ability to enter/exit positions via /desk under predictable constraints  
Punishments:  
• Loss of eligibility if KYC/AML not completed where required  
• No participation in a given cycle if not staked at snapshot  
• Exposure to FX and performance variability  
Formula  
tokens = GM / price  
Risks  
Brazil: taxation  
USA: classification  
EU: consumer protection  
Israel: trading restrictions  
  
⸻  
**	7.	Auditor — User Story**  
  
Interaction  
Audits contracts, FX flows, custody proofs, deployment cycles.  
Design Decisions  
• Read-only access, no control rights over contracts  
• All reports hashed and referenced in /data  
Game-Theory  
Incentives:  
• High-value mandates  
• Reputation as independent, rigorous assessor  
Punishments:  
• Liability if gross negligence established  
• Loss of credibility with institutional clients  
Formula  
ADI = Σ(discrepancy × severity) → must equal 0  
  
⸻  
**	8.	Treasury — User Story**  
  
Interaction  
Handles NET, deployments, validated returns, cycle finalization.  
Design Decisions  
• 2-of-3 multisig  
• Strict separation between on-chain records and off-chain banking  
• Reinforcement of policy (liquidity buffer, reinvestment thresholds)  
Game-Theory  
Incentives:  
• Protocol continuity and solvency  
• Transparent operations reduce funding and regulatory friction  
Punishments:  
• Emergency pause or governance intervention if discrepancies appear  
• Heightened auditor and regulator scrutiny  
Formulas  
deployed_capital = NET – operational_costs  
return_USDT = settlement – inbound_costs  
  
⸻  
**	9.	Staking — User Story**  
  
Interaction  
One-token-one-unit, snapshot at 20th 00:00 UTC, admin fee 0.33%.  
Design Decisions  
• No lock-up; eligibility determined strictly by snapshot  
• FDR must exist before cycle is active  
Game-Theory  
Incentives:  
• Clear, rule-based access to distributions  
• Predictable monthly cadence  
Punishments:  
• Zero allocation if user is not staked at snapshot  
• No guarantee of any minimum distribution  
Formulas  
rate = pool / total_staked  
admin_fee = AUM × 0.0033  
  
⸻  
**	10.	TokenSale — User Story**  
  
Interaction  
Executes progressive rounds, instant delivery, 96/4 split.  
Design Decisions  
• Immutable price ladder  
• Global hard cap on token supply  
• First-come-first-served within each round  
Game-Theory  
Incentives:  
• Transparent price discovery  
• Equal rules for all participants  
Punishments:  
• Transactions revert when caps are exceeded  
• No special pricing or off-chain allocation from the contract side  
Formula  
price_i = 0.0321 + (i–1)(0.036273–0.0321)/69  
  
⸻  
**	11.	EscrowDesk — User Story**  
  
Interaction  
P2P desk with escrow, price floor, treasury-only exception.  
Design Decisions  
• Only KYC-verified wallets can list and take orders  
• Price floor tied to current/next-round reference  
• Treasury can buy at a controlled discount, with monthly cap  
Game-Theory  
Incentives:  
• Compliant secondary liquidity  
• Mitigation of disorderly discount trades  
Punishments:  
• Orders rejected if below floor  
• Desk access can be restricted if abuse or non-compliance is detected  
Formula  
min_participants = next_round_price  
min_treasury = next_round_price × 0.80  
  
⸻  
	**12.	Identity Registry — User Story**  
  
Interaction  
Stores KYC hashes, exposes tier and validity.  
Design Decisions  
• No PII on-chain  
• Only KYC providers and Compliance can modify records  
Game-Theory  
Incentives:  
• Verified wallets gain access to full protocol utilities  
Punishments:  
• Wallet can be marked invalid, restricting transfers and utilities  
Formula  
identity_hash = SHA256(KYC_data)  
Risks  
Brazil: LGPD  
USA: CCPA and other privacy rules  
EU: GDPR  
Israel: local privacy regulations  
  
⸻  
**	13.	Oracle — User Story**  
  
Interaction  
(Phase 3) Provides FX and settlement data.  
Design Decisions  
• Not used in Phase 1–2; manual input remains primary source  
• Any future Oracle must provide attestations and redundancy  
Game-Theory  
Incentives:  
• Protocol reliance and long-term integration  
Punishments:  
• Replacement by governance if feeds are unreliable or manipulated  
Formula  
fx_rate = price_feed × attestation_factor  
Risks  
• Data manipulation  
• Regulatory constraints on financial data providers  
  
⸻  
	**14.	Reinvestment Contract — User Story**  
  
Interaction  
Treasury forwards reinvestable USDT (excess above 1.2% verified performance) to Reinvestment.sol, which routes capital according to fixed policy:  
• Operational reinvestment via Swiss Holding  
• Secondary reinforcement via EscrowDesk (treasury-only, price ≥80% next-round, ≤1% circ. supply per month)  
Design Decisions  
• No discretionary execution  
• No supply or governance changes  
• Deterministic, rule-based module  
• Must not imply income or returns  
• Must remain compliant under MiCA, FINMA, CVM  
Game-Theory  
Incentives:  
• Capital efficiency  
• Stable deployment throughput  
Punishments:  
• Reinvestment freeze → audit review  
• Removal or reconfiguration by governance in DAO phase  
Math Rules  
performance_rate = return_USDT / deployed_capital  
If performance_rate > 0.012:  
reinvestable_amount = return_USDT – (0.012 × deployed_capital)  
treasury_buy_min = next_round_price × 0.80  
secondary_cap = circulating_supply × 0.01  
Pre-State  
FDR validated; cycle finalized; Treasury has received return.  
Post-State  
Reinvestment executed; routing logged; /data updated.  
Risks  
Brazil: FX intervention risk  
USA: avoid fund characterization  
EU: MiCA treasury behavior scrutiny  
Israel: cross-border internal controls  
  
⸻  
  
# SYSTEM DIAGRAMS  
  
**Operational Flow**  
  
Investor → TokenSale → Treasury → Swiss Holding → Billi → Consumer → Securitizadora → CCEE → Swiss Holding → Treasury → Staking + Reinvestment → Investor  
  
**Compliance Flow**  
  
KYC Provider → IdentityRegistry → Compliance.sol → TokenSale / Staking / Desk  
  
**Desk Flow**  
  
Seller DGT3 → Escrow → Buyer USDT → Price Floor → Atomic Swap → Logs  
  
**Reinvestment Flow**  
  
Treasury → Reinvestment → (Swiss Holding deployment OR EscrowDesk Treasury-buy) → /data  
