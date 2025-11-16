# 01_Architecture Diagram Pack  
  
  
  
  
**01. System Architecture Diagram**  
  
```
@startuml
rectangle "DGTEnergy Protocol" {

  rectangle "DGT3Token" as Token
  rectangle "TokenSale" as Sale
  rectangle "Staking" as Stake
  rectangle "EscrowDesk" as Desk

  database "Treasury Multisig (2 of 3)" as Treasury
  database "Management Fee Safe (2 of 2)" as MgmtSafe

  Token --> Sale
  Sale --> Treasury : 96 percent USDT
  Sale --> MgmtSafe : 4 percent USDT
  Sale --> Token : token transfer

  Stake --> Treasury : verified input
  Desk --> Treasury : settlement flows

}
@enduml

```
  
  
⸻  
  
**02. Permission Architecture Diagram**  
  
```
@startuml
actor "Owner (Multisig 2 of 3)" as Owner
actor "Executor" as Exec
actor "KYC Operator" as KYC

Owner --> Token : pause or unpause
Owner --> Sale : pause or unpause
Owner --> Stake : pause or unpause
Owner --> Desk : pause or unpause

Exec --> Stake : trigger distribution
KYC --> Desk : verify participants

@enduml

```
  
  
⸻  
  
**03. Data Flow Architecture Diagram**  
  
```
@startuml
actor Buyer
actor Seller

participant TokenSale
participant Desk
database Treasury
database MgmtSafe
participant Token

Buyer --> TokenSale : USDT payment
TokenSale --> Treasury : 96 percent
TokenSale --> MgmtSafe : 4 percent
TokenSale --> Token : token delivery

Seller --> Desk : create order
Buyer --> Desk : match order
Desk --> Seller : USDT release
Desk --> Buyer : DGT3 release

@enduml

```
  
  
