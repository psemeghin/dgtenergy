# 02_Sequence Diagram Pack  
  
  
  
**01. Token Purchase Sequence**  
  
```
@startuml
actor User
participant TokenSale
participant USDT
database Treasury
database MgmtSafe
participant Token

User -> USDT : approve(amount)
User -> TokenSale : buy(amount)

TokenSale -> USDT : transferFrom(User, TokenSale, amount)

TokenSale -> Treasury : transfer(96 percent)
TokenSale -> MgmtSafe : transfer(4 percent)

TokenSale -> Token : transfer(User, tokens)

TokenSale --> User : purchase confirmation

@enduml

```
  
  
⸻  
  
**02. Staking Distribution Sequence**  
  
```
@startuml
actor Executor
participant Staking
database Treasury
participant USDT
actor User

Executor -> Staking : triggerDistribution()

Staking -> Treasury : request pool amount
Treasury --> Staking : pool amount

Staking -> Staking : calculate rate
Staking -> User : transfer USDT allocation

Staking -> MgmtSafe : transfer administration fee

Staking --> Executor : distribution executed

@enduml

```
  
  
⸻  
  
**03. Escrow Settlement Sequence**  
  
```
@startuml
actor Seller
actor Buyer

participant Desk
participant USDT
participant Token

Seller -> Desk : createOrder()
Buyer -> Desk : acceptOrder()

Buyer -> USDT : approve(amount)
Buyer -> Desk : depositUSDT()

Seller -> Token : approve(amount)
Seller -> Desk : depositToken()

Desk -> Seller : releaseUSDT
Desk -> Buyer : releaseToken

Desk --> Buyer : settlement confirmation
Desk --> Seller : settlement confirmation

@enduml

```
  
  
