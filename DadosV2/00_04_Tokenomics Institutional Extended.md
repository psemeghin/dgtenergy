# 00_04_Tokenomics Institutional Extended  
  
  
  
**00. Executive Summary**  
  
DGTEnergy is a utility token protocol designed to provide transparent and auditable access to real energy operations. It enables participants to interact with verifiable operational outcomes through a neutral, automated, and compliance-aligned architecture. DGT3, the native utility token, grants access to protocol features including staking participation, governance visibility, and institutional dashboards. It does not represent ownership, equity, debt, or financial instruments.  
  
DGTEnergy partners with verified energy operators through pre-audited agreements. Its first deployment partner, Billi, operates a consumer energy financing model with more than two years of activity and historically low default rates. This provides a real economic foundation for utility participation without introducing financial promises or speculative expectations.  
  
Capital flows, operational results, and allocations are automated and fully traceable. The protocol is built to deliver institutional transparency and predictable operational discipline.  
  
  
  
**01. Problem Statement and Economic Rationale**  
  
Traditional access to operational energy markets is fragmented, opaque, and generally limited to institutional actors. Retail and Web3 participants rarely access verifiable information about deployment, receivable performance, or cash flow cycles.  
  
Energy receivables in Brazil and equivalent markets exhibit historically low default rates and predictable settlement structures. However, there is no transparent mechanism to allow permissioned, compliant participation in the operational side of these receivables without turning the structure into a financial instrument.  
  
DGTEnergy addresses this gap by delivering a utility-based participation framework that allows users to access protocol tools, governance structures, and visibility into real deployment cycles. All participation is utility-driven, rule based, and transparently anchored in operational data, without conferring financial rights or creating expectations of performance.  
  
  
  
**02. Token Identity**  
  
Official Name: DGT3Energy  
Ticker: DGT3  
Type: Utility token for protocol access, governance, and participation  
Network: BNB Smart Chain (BEP 20), Chain ID 56  
Supply: 1,000,000,000 DGT3, fully minted at genesis  
Mint or Burn: None  
Transferability: Enabled immediately at deployment; platform-level policy restricts compliant secondary activity to the P2P desk  
Compliance: Classified as a utility token under MiCA, FINMA, and CVM 188 23 guidelines  
Purpose: Access to protocol utilities and verifiable operational data  
  
The token is not backed by assets, does not represent ownership of receivables, and does not carry any income, dividend, or repayment rights. All distributions inside the protocol are functional outputs of participation and depend entirely on verified operational results.  
  
  
  
**03. Utility Framework**  
  
The DGT3 token unlocks protocol utilities organized in five functional layers:  
  
Access Utility  
Grants entry to institutional dashboards, deployment records, Full Deployment Reports, governance information, and protocol-level parameters.  
  
Governance Utility  
One token equals one vote inside an off chain governance environment. Governance decisions influence transparency, reporting, and non economic matters. Economic invariants cannot be altered.  
  
Staking Utility  
Enables participation in monthly utility distributions that depend entirely on verified operational outcomes. Participation requires meeting eligibility criteria and does not guarantee any results.  
  
P2P Utility  
Provides settlement access inside the KYC gated P2P desk. This environment allows compliant peer transfers inside a controlled ecosystem.  
  
Transparency Utility  
Allows visibility into all treasury flows, deployment events, fees, and operational results published in the data dashboards.  
  
Utility Guidelines  
The token does not convey equity, dividends, revenue share, profit, repayment rights, or any expectation of financial gain. Participation is functional and tied to protocol utilities only.  
  
  
  
**04. Economic Architecture Overview**  
  
**04.1 Capital Inflow**  
  
Participants acquire DGT3 using USDT. Smart contracts automatically route 96 percent of the amount to the treasury and 4 percent to the management fee wallet. Token delivery is instant and independent of the treasury’s operational state.  
  
**04.2 Deployment Pathway**  
  
Treasury capital is deployed into verified energy receivables under audited procedures. The first deployment partner, Billi, operates with historically low default rates and has a signed MoU with DGTEnergy. Only pre audited partners qualify for deployment.  
  
The Whitelist phase allocates 50 percent of NET to productive deployment in Billi receivables and 50 percent to infrastructure, including audit funding and compliance setup. All other phases deploy 100 percent of NET to verified energy operations.  
  
**04.3 Operational Result Flow**  
  
Operational results return to the treasury in USDT. These flows are independently verified and disclosed in Full Deployment Reports. Only verified results enter the performance engine. No discretionary adjustments are possible.  
  
**04.4 Money Flow Diagram (Figure 1)**  
  
```
PARTICIPANT (USDT)
        │
        ▼
TOKEN SALE CONTRACT
        │
        ├── 4% → MANAGEMENT FEE SAFE (2-of-2)
        │
        └── 96% → TREASURY MULTISIG (2-of-3)
                      │
                      ▼
            DEPLOYMENT POOL (TREASURY)
                      │
                      ▼
        VERIFIED ENERGY OPERATIONS (ex. Billi)
                      │
                      ▼
        OPERATIONAL RESULTS (USDT VERIFIED FDR)
                      │
                      ▼
          MONTHLY PERFORMANCE ENGINE
                      │
        ├── 0.33% ADMIN FEE → MANAGEMENT FEE SAFE
        │
        ├── UP TO 1.2% RESULT → STAKING DISTRIBUTION
        │
        └── EXCESS ABOVE 1.2%
                ├── OPTIONAL EXTRA DISTRIBUTION
                └── REINVESTMENT RESERVE
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
  STAKERS (20th UTC)       REINVESTMENT LOOP

```
  
  
⸻  
  
**05. Distribution Model**  
  
**05.1 Whitelist Phase**  
  
Whitelist participants access preferential pricing at 0.030 USDT per DGT3.  
NET allocation for Whitelist is divided into two components:  
  
50 percent productive deployment into Billi receivables  
Included in AUM  
Counts toward FDR  
Visible in dashboards  
  
50 percent infrastructure and audit  
Not included in AUM  
Funds legal, security, and operational setup  
  
All Whitelist allocations follow the same utility rules and do not create differences in staking behaviour or governance.  
  
**05.2 Progressive Rounds**  
  
Seventy rounds are executed in a deterministic ladder ranging from 0.0321 to 0.036273 USDT per DGT3.  
Each round enforces a fixed GM cap and calculates tokens based on exact on chain price precision.  
  
The sale closes automatically once the global supply of 1,000,000,000 DGT3 is allocated.  
  
**05.3 NET and GM Definitions**  
  
GM is the full USDT amount paid.  
NET is GM multiplied by 0.96.  
All performance and deployment metrics refer to NET.  
Token delivery always uses GM for calculation.  
  
  
  
**06. Staking Framework**  
  
Staking is a utility participation mechanism. It is not an investment. There is no guaranteed distribution, and no financial expectations are created.  
  
Participation Rules  
Eligibility snapshot occurs on the twentieth day of each month at 00:00 UTC.  
Tokens must be staked before the snapshot.  
No lock in period exists.  
Unstaking removes eligibility for that cycle.  
Accrual only begins after a Full Deployment Report confirming that 100 percent of NET for the applicable deployment lot has been deployed.  
  
Distribution Logic  
One token equals one unit of participation.  
The distribution rate is calculated as the distributable pool divided by circulating supply.  
Only staked tokens receive distributions.  
Treasury tokens only participate when staked.  
  
Administration Fee  
A 0.33 percent monthly administration fee is calculated over productive AUM and deducted before any distribution. This fee does not reduce operational deployment.  
  
Compliance Conditions  
All staking participation follows KYC AML rules where applicable.  
No staking incentives are guaranteed.  
  
  
  
**07. Reinvestment Policy**  
  
Utility distributions prioritize up to 1.2 percent of verified monthly operational results.  
When results exceed this range, the excess is allocated between optional additional distribution and the Reinvestment Reserve.  
  
Reinvestment strengthens future deployment capacity and does not change token supply.  
No new tokens are minted.  
No redistribution mechanisms modify circulating supply.  
  
All reinvestment decisions follow transparency rules and are reported in the data dashboards.  
  
  
  
**08. Treasury and Fee Structure**  
  
The treasury operates with full segmentation:  
  
Deployment Pool  
Capital directed to energy receivables.  
  
Yield and Reward Pool  
Captures verified operational outcomes used for staking participation.  
  
Reinvestment Reserve  
Formed exclusively from results above the 1.2 percent threshold.  
  
Contingency Buffer  
Limited emergency reserve under predefined utility conditions.  
  
Fee System  
4 percent management fee collected at sale.  
0.33 percent administration fee applied monthly.  
All fees are fully traceable in dashboards.  
  
  
  
**09. Governance Interaction Limits**  
  
Governance influences transparency and procedural matters but cannot modify economic invariants.  
  
Immutable Parameters  
Total supply  
Price ladder  
Distribution mechanics  
Administration fee  
Management fee  
Deployment rules  
FDR structure  
  
Governance may recommend, but cannot enforce, changes to the economic architecture.  
Operational control resides in the multisig structure with strict scope limitations.  
  
  
  
**10. Compliance and Legal Positioning**  
  
DGT3 is a utility token under MiCA, FINMA, and CVM 188 23 guidance.  
It does not meet characteristics of securities or financial instruments.  
  
Key Legal Characteristics  
No expectation of profit  
No revenue rights  
No dividends  
No ownership  
No common enterprise  
Automated execution  
KYC AML enforcement at the application layer  
  
DGTEnergy publishes legal opinions and compliance statements for audit purposes.  
  
  
  
  
**11. Risk Disclosures**  
  
Participants face operational risks, settlement delays, and regulatory uncertainties.  
Receivable performance, while historically strong with low Billi default rates, is not guaranteed.  
Distributions depend entirely on verified operational results.  
No cycle guarantees distribution.  
No financial returns are promised or implied.  
  
Treasury capital is deployed under strict due diligence, but external counterparties may face operational or market challenges.  
  
  
  
**12. Transparency Framework**  
  
DGTEnergy operates with continuous disclosure through the data dashboards.  
  
Dashboards include  
Treasury balances  
Deployment history  
Full Deployment Reports  
Staking cycles and snapshots  
Distribution calculations  
Fee routing  
Reinvestment activity  
  
Independent audits confirm contract correctness and operational data prior to major milestones.  
  
All contract addresses and relevant transactions are verifiable on chain.  
  
  
  
**13. Final Institutional Disclaimer**  
  
DGTEnergy is a utility token protocol. Participation grants access to protocol utilities including staking, governance, and data visibility. DGT3 does not represent equity, debt, or financial instruments. All allocations are discretionary, utility based, and dependent exclusively on verified operational results. No distributions are guaranteed. No financial rights or expectations are created. All activity is executed through automated smart contracts within a transparent and audit ready framework.  
  
