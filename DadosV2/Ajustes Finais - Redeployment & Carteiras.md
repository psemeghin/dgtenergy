# Ajustes Finais - Redeployment & Carteiras  
  
  
## ANÁLISE TOKENOMICS vs CONTRATOS DEPLOYADOS  
## 1️⃣ CONTRATOS E CARTEIRAS QUE AINDA DEVEM SER CRIADOS  
**A) CONTRATOS AUSENTES (a serem desenvolvidos e deployados)**  
1. **Staking.sol**  
    * Status: Mencionado no tokenomics mas não presente nos arquivos  
    * Deploy previsto: Pré-Whitelist (Q4 2025), ativação em Q2 2026  
    * Funcionalidades necessárias:  
        * Snapshot mensal (dia 20, 00:00 UTC, primeiro bloco ≥ timestamp)  
        * FDR-gating (Full Deployment Rule)  
        * Taxa administrativa 0.33% AUM automática  
        * Cálculo one-token-one-unit sobre circulating supply  
        * Anti-gaming rule (transferências 12h antes/depois snapshot)  
        * Integração com Treasury para receber distributable pool  
        * Claim de rewards em USDT  
2. **EscrowDesk.sol**  
    * Status: Mencionado no tokenomics mas não presente nos arquivos  
    * Deploy previsto: Pré-Whitelist (Q4 2025), ativação em Q1 2026  
    * Funcionalidades necessárias:  
        * Escrow P2P para trading KYC-gated  
        * Price floor enforcement (mínimo = preço próxima rodada)  
        * Treasury exception (buyer-only, preços com deságio)  
        * Integração com sistema KYC (off-chain)  
        * Order book + matching engine  
3. **Treasury.sol**  
    * Status: Ausente, apenas endereço mencionado  
    * Tipo: Gnosis Safe 2-of-3 multisig  
    * Funcionalidades necessárias:  
        * Receber 96% NET do TokenSale  
        * Bridge com Swiss Holding (off-chain)  
        * Registro de deployments em /data  
        * Transferir distributable pool para Staking.sol  
        * Executar reinvestimentos (se performance >1.2%)  
        * Manter buffer de liquidez 10% AUM  
        * Participação opcional no staking (com tokens próprios)  
4. **Reinvestment.sol ou módulo dentro Treasury**  
    * Status: Lógica ausente  
    * Funcionalidades necessárias:  
        * Cálculo automático quando performance >1.2%  
        * Split entre productive reinvestment vs additional staking  
        * Registro de decisões em /data  
        * Execução de compras de DGT3 no mercado (quando aplicável)  
**B) CARTEIRAS QUE DEVEM SER CRIADAS**  
1. **Treasury Multisig (2-of-3)**  
    * Tipo: Gnosis Safe  
    * Signers: Karine Casali, Pedro Semeghini, Walter Corcione  
    * Threshold: 2-of-3  
    * Função: Gerenciar capital do protocolo (96% NET)  
2. **Management Fee Wallet (2-of-2)**  
    * Tipo: Gnosis Safe  
    * Signers: Karine Casali, Pedro Semeghini  
    * Threshold: 2-of-2  
    * Função: Receber 4% de taxa de gestão automaticamente  
3. **Time-Locked Multisig (Owner)**  
    * Tipo: Gnosis Safe com timelock  
    * Threshold: 2-of-3  
    * Ativação: Q4 2025  
    * Função: Substituir EOA deployer atual para operações sensíveis  
  
## 2️⃣ INCONSISTÊNCIAS E MECANISMOS A ADICIONAR NOS CONTRATOS EXISTENTES  
**A) DGT3Token.sol — CRÍTICO: REDEPLOY NECESSÁRIO**  
**INCONSISTÊNCIAS GRAVES:**  
1. **❌ Ausência de mecanismo de Emergency Pause**  
    * Tokenomics prevê: "Emergency Exception: Token transferability may be temporarily paused only under emergency scope (§11)"  
    * Contrato atual: Não implementa Pausable  
    * **Impacto:** Não há como pausar transferências em caso de exploit  
2. **❌ Falta de integração com Staking**  
    * Tokenomics prevê: Snapshot automático, anti-gaming rule  
    * Contrato atual: ERC20 puro, sem hooks ou integrações  
    * **Impacto:** Staking não consegue detectar transferências críticas  
3. **❌ Ausência de controle de circulating supply**  
    * Tokenomics prevê: Cálculo de rate baseado em "total_circulating_supply" (exclui treasury locked + contract-reserved)  
    * Contrato atual: Não tem função para calcular circulating supply  
    * **Impacto:** Staking não consegue calcular rewards corretamente  
4. **❌ Falta de event tracking para compliance**  
    * Tokenomics prevê: KYC enforcement no DApp level  
    * Contrato atual: Sem events específicos para monitoramento  
    * **Impacto:** Dificulta auditoria e compliance tracking  
**MECANISMOS A ADICIONAR:**  
* Herdar Pausable do OpenZeppelin  
* Função emergencyPause() e emergencyUnpause() (onlyOwner)  
* Função getCirculatingSupply() que exclui treasury e reserved balances  
* Lista de endereços "excluded from circulation" (treasury, contratos, etc)  
* Events: CirculatingSupplyUpdated, ExcludedAddressAdded/Removed  
* Hook _beforeTokenTransfer para integração futura com anti-gaming  
  
**B) DGT3TokenSale.sol — CRÍTICO: MÚLTIPLAS INCONSISTÊNCIAS**  
**INCONSISTÊNCIAS ESTRUTURAIS:**  
1. **❌ Management Fee (4%) não implementada**  
    * Tokenomics prevê: 96% Treasury / 4% Management Fee automático  
    * Contrato atual: 100% vai para owner() (linha 61)  
    * **Impacto financeiro:** US$ 41,667 por Whitelist não está sendo roteado corretamente  
2. **❌ Estrutura de fases incorreta**  
    * Tokenomics prevê: Whitelist → 70 Progressive Rounds (não "Seed" + "Rounds")  
    * Contrato atual: enum com Whitelist, Seed, Rounds  
    * **Impacto:** Arquitetura incompatível com tokenomics  
3. **❌ Alocações de tokens incorretas**  
    * Tokenomics prevê Whitelist: 34,722,222 DGT3 (1M USDT NET @ 0.030)  
    * Contrato atual: 18,000,000 DGT3 (linha 18)  
    * **Impacto:** Defasagem de ~16.7M tokens  
4. **❌ Preços incorretos**  
    * Tokenomics prevê Whitelist: 0.030 USDT/DGT3  
    * Contrato atual: 0.03 ether (linha 14) — tecnicamente correto, mas...  
    * Tokenomics prevê Progressive Rounds: 0.0321 → 0.036273 (70 sub-rounds)  
    * Contrato atual: seedPrice = 0.036, roundsPrice = 0.04  
    * **Impacto:** Estrutura de pricing totalmente incompatível  
5. **❌ Ausência de Treasury multisig como destinatário**  
    * Tokenomics prevê: Funds vão para Treasury multisig  
    * Contrato atual: Funds vão para owner() (EOA temporário)  
    * **Impacto:** Centralização crítica até migração multisig  
6. **❌ Falta de rate limiter e FCFS cap**  
    * Tokenomics prevê: Rate limiter + FCFS cap de 517,708.33 USDT GM por sub-rodada  
    * Contrato atual: Compra ilimitada por transação  
    * **Impacto:** Risco de whale dominance  
7. **❌ Ausência de integração KYC**  
    * Tokenomics prevê: Verificação de threshold (cumulative <1k USD = optional, ≥1k = mandatory)  
    * Contrato atual: Nenhuma verificação  
    * **Impacto:** Compliance risk  
8. **❌ Falta de FDR-gating para delivery**  
    * Tokenomics prevê: "Tokens transferred instantly" mas staking só accrues após FDR  
    * Contrato atual: Transferência imediata incondicional  
    * **Impacto:** Não há flag de FDR no token  
**MECANISMOS A ADICIONAR:**  
* Variável managementFeeWallet (address)  
* Split automático no buyTokens(): 96% → treasury, 4% → managementFeeWallet  
* Reestruturar enum SalePhase para Whitelist, Round1, Round2, ..., Round70  
* Array dinâmico roundPrices[] com ladder 0.0321 → 0.036273  
* Função calculateRoundPrice(uint256 roundNumber) com fórmula do ladder  
* Rate limiter: mapping(address => uint256) public lastPurchaseBlock  
* Per-round cap: mapping(uint256 => uint256) public roundCap  
* Integração com KYC oracle (off-chain → on-chain verification)  
* Função setTreasuryWallet() e setManagementWallet() (onlyOwner, one-time)  
* Event FundsRouted(address treasury, uint256 treasuryAmount, address mgmt, uint256 mgmtAmount)  
  
## 3️⃣ FUNCIONALIDADES CRÍTICAS AUSENTES EM AMBOS CONTRATOS  
1. **Pausable mechanism** (para ambos)  
2. **Reentrancy protection** (TokenSale.sol não usa ReentrancyGuard)  
3. **Whitelisting** (TokenSale.sol deveria ter fase Whitelist com addresses approved)  
4. **Emergency withdrawal** com timelock  
5. **Events detalhados** para auditoria (principalmente roteamento de fundos)  
6. **Integration points** para Staking e EscrowDesk (quando deployados)  
  
## ⚠️ ROADMAP DE AÇÕES NECESSÁRIAS  
**FASE 1 — CRÍTICO (Pré-Whitelist Q4 2025)**  
1. ✅ **Criar wallets multisig:**  
    * Treasury 2-of-3 (Gnosis Safe)  
    * Management Fee 2-of-2 (Gnosis Safe)  
    * Time-locked Owner 2-of-3  
2. 🔴 **Redeploy DGT3Token.sol** com:  
    * Pausable  
    * Circulating supply tracking  
    * Events compliance  
    * Anti-gaming hooks  
3. 🔴 **Redeploy DGT3TokenSale.sol** com:  
    * Management Fee 4% split  
    * 70 Progressive Rounds structure  
    * Pricing ladder correto  
    * Rate limiter + FCFS cap  
    * KYC integration hooks  
    * Treasury + Management wallets setters  
4. 🟡 **Deploy Staking.sol** (inativo até Q2 2026)  
5. 🟡 **Deploy EscrowDesk.sol** (inativo até Q1 2026)  
6. 🟡 **Deploy Treasury.sol** ou configurar Gnosis Safe com scripts  
**FASE 2 — Q1-Q2 2026**  
1. Ativar EscrowDesk  
2. Ativar Staking (após primeiro FDR)  
3. Implementar módulo de Reinvestment  
**FASE 3 — Q3-Q4 2026**  
1. Auditoria completa pós-Whitelist  
2. Migração de ownership para time-locked multisig  
3. Ativação de reinvestment automático  
  
Precisa que eu detalhe algum ponto específico ou já posso começar a preparar os códigos corrigidos dos contratos?  
  
Beleza, agora temos o BR correto na mesa. Vamos destrinchar isso direito.  
  
Vou separar em:  
	•	**A. Quais contratos precisam ser deployed (agora vs futuro)**  
	•	**B. O que precisa estar escrito no código de cada um (sem código, só especificação)**  
  
Tudo 100% aderente ao texto da nota que você colou.  
  
⸻  
  
**A. Contratos que precisam ser deployed**  
  
Pelo BR:  
  
**Núcleo Fase 1–2 (dev agora)**  
	1.	DGT3Token.sol  
	2.	Compliance.sol  
	3.	IdentityRegistry.sol  
	4.	TokenSale.sol  
	5.	Treasury.sol  
	6.	Staking.sol  
	7.	EscrowDesk.sol  
	8.	Reinvestment.sol  
  
**Fase futura (pode ser só desenhado / stub, não precisa deploy agora)**  
	9.	LendingPool.sol (opcional, Phase 3)  
	10.	Auction.sol (opcional, Phase 3)  
	11.	Oracle.sol (Phase 3, automação)  
	12.	Bridge.sol (Phase 3, multichain)  
  
Vou detalhar **os 8 principais** que precisam entrar no pipeline real de deploy.  
  
⸻  
  
**B. Especificação de cada contrato**  
  
**1. DGT3Token.sol (BEP-20, utilitário, supply fixo)**  
  
**O que o código precisa conter:**  
	•	**Configuração básica**  
	•	Nome, símbolo, decimais.  
	•	totalSupply fixo de 1.000.000.000 * 10^decimais.  
	•	Mint único no deploy para o endereço “treasury de emissão” (controlado por multisig ou equivalente).  
	•	**Estado (storage)**  
	•	balances[address] e allowances[address][spender].  
	•	Endereço do Compliance.sol.  
	•	Flag de paused e quem pode pausar (owner / multisig).  
	•	**Lógica de transferência com compliance**  
	•	Em transfer e transferFrom, antes de mexer em saldo:  
	•	Chamar algo como Compliance.canTransfer(from, to, amount) e reverter se não autorizado.  
	•	Bloquear transferências se paused == true (exceto talvez endereços de sistema, se definido).  
	•	**Funções administrativas**  
	•	pause() / unpause() controladas por owner/multisig.  
	•	setCompliance(address) para apontar para o contrato de compliance correto (com evento).  
	•	**Eventos**  
	•	Transfer, Approval padrão.  
	•	Paused, Unpaused.  
	•	ComplianceUpdated(address old, address new).  
	•	**Invariantes**  
	•	Supply nunca aumenta nem diminui (sem mint e burn públicos).  
	•	Nenhuma função muda preço, performance ou política econômica – token é neutro, só registra saldos.  
  
⸻  
  
**2. Compliance.sol (regra de quem pode mover o quê)**  
  
**O que o código precisa conter:**  
	•	**Estado**  
	•	Endereço do IdentityRegistry.  
	•	frozen[address] para marcar carteiras travadas.  
	•	globalWhitelist[address] para endereços de sistema (treasury, contratos, etc.).  
	•	(Opcional) Mapeamento de requisitos de tier por tipo de operação, ex.:  
	•	minTierForSale, minTierForDesk, minTierForStaking.  
	•	Flags para marcar carteiras sancionadas, se você quiser granular (ex.: sanctioned[address]).  
	•	**Funções core**  
	•	canTransfer(from, to, amount) returns (bool):  
	•	Verificar:  
	•	se from e to não estão congelados,  
	•	se from e to não estão marcados como sancionados, se existir essa lógica,  
	•	se atendem os requisitos de tier (via IdentityRegistry), exceto se estiverem em globalWhitelist.  
	•	freeze(address) / unfreeze(address) – para Compliance Officer.  
	•	setGlobalWhitelist(address, bool).  
	•	setIdentityRegistry(address).  
	•	**Integrações**  
	•	Chamado em toda transferência do DGT3Token.  
	•	Pode ser consultado pelo EscrowDesk, TokenSale, Staking para validar carteiras.  
	•	**Eventos**  
	•	Frozen(address), Unfrozen(address).  
	•	Whitelisted(address), Unwhitelisted(address).  
	•	**Regra de /desk**  
	•	BR diz que Compliance “enforces /desk price floor rules”.  
Implementação prática:  
	•	Ou o preço é verificado no próprio EscrowDesk,  
	•	Ou Compliance expõe função tipo validateDeskTrade(buyer, seller, price, isTreasury) que é chamada pelo EscrowDesk.  
	•	O mínimo é: Compliance precisa ter ao menos o gancho para validar elegibilidade de endereços para usar o /desk (tier + congelamento). O detalhe de preço pode ficar no EscrowDesk.  
  
⸻  
  
**3. IdentityRegistry.sol (hash KYC + tier)**  
  
**O que o código precisa conter:**  
	•	**Estrutura de dados**  
	•	struct IdentityRecord { bytes32 identityHash; uint8 tier; bool isValid; }  
	•	mapping(address => IdentityRecord) identities.  
	•	Lista de endereços com permissão de escrita – ex.: kycAdmins[address].  
	•	**Funções de escrita**  
	•	setIdentity(wallet, hash, tier, isValid) – só para KYC admin/Compliance.  
	•	revokeIdentity(wallet) – marcar isValid = false.  
	•	setKycAdmin(address, bool).  
	•	**Funções de leitura**  
	•	getIdentity(wallet) (hash, tier, isValid).  
	•	isVerified(wallet) (bool).  
	•	getTier(wallet) (uint8).  
	•	**Eventos**  
	•	IdentitySet(wallet, hash, tier, isValid).  
	•	IdentityRevoked(wallet).  
	•	**Restrições**  
	•	Nenhuma PII on-chain, só hash.  
	•	Não pode haver função que derive dados pessoais a partir do hash.  
  
⸻  
  
**4. TokenSale.sol (Whitelist + 70 rounds, 96/4, cap, FCFS)**  
  
**O que o código precisa conter:**  
	•	**Estado**  
	•	Endereço do DGT3Token.  
	•	Endereço do token USDT.  
	•	Endereço do Treasury.  
	•	Endereço da ManagementFeeWallet (4%).  
	•	Estrutura:  
	•	struct Round { uint256 price; uint256 gmCap; uint256 gmSold; bool active; }.  
	•	mapping(uint256 => Round) rounds para 1..70.  
	•	uint256 totalTokensSold.  
	•	uint256 constant MAX_SUPPLY = 1_000_000_000 * 10**decimals.  
	•	Algum estado de “round atual” ou lógica para iterar rounds em sequência.  
	•	**Inicialização**  
	•	Preencher a price ladder 0.0321 → 0.036273 exatamente conforme fórmula.  
	•	Definir gmCap de cada round.  
	•	Trancar futuras alterações de preço (ou limitar a apenas pausar round, nunca baixar preço).  
	•	**Função de compra principal**  
	•	buy(uint256 usdtAmount):  
	•	Verificar KYC (via Compliance/IdentityRegistry se quiser).  
	•	Identificar round ativo.  
	•	Checar se gmSold + usdtAmount <= gmCap.  
	•	Calcular tokens: tokens = usdtAmount / price.  
	•	Checar totalTokensSold + tokens <= MAX_SUPPLY.  
	•	USDT.transferFrom(buyer, address(this), usdtAmount).  
	•	Split 96/4:  
	•	netToTreasury = usdtAmount * 96 / 100.  
	•	feeToMgmt = usdtAmount - netToTreasury.  
	•	Enviar USDT:  
	•	transfer(Treasury, netToTreasury).  
	•	transfer(ManagementFeeWallet, feeToMgmt).  
	•	Transferir DGT3 do estoque do contrato para o comprador.  
	•	**Admin**  
	•	Ativar/desativar rounds.  
	•	Ajustar gmCap *antes* de começar a vender (se previsto).  
	•	Pausar vendas (emergência).  
	•	**Eventos**  
	•	TokensPurchased(buyer, roundId, usdtAmount, tokens).  
	•	RoundOpened, RoundClosed.  
	•	**Invariantes**  
	•	Preço de cada round não muda depois de inicializado.  
	•	Sem função de “resgate”, “promessa de performance” etc. – só venda primária de utility.  
  
⸻  
  
**5. Treasury.sol (hub on-chain de capital + ciclo + ponte Reinvestment/Staking)**  
  
**O que o código precisa conter:**  
	•	**Estado**  
	•	Endereço do USDT.  
	•	Endereço do Staking.  
	•	Endereço do Reinvestment.  
	•	Endereços que podem operar (assumindo que o 2-of-3 multisig é feito via Safe externa, o contrato vai só aceitar chamadas do multisig).  
	•	Estrutura de ciclo:  
	•	struct Cycle { uint256 deployed; uint256 received; uint256 distributablePool; uint256 reinvestableAmount; bool fdrCompleted; bool finalized; }  
	•	mapping(uint256 => Cycle) cycles.  
	•	Regras de liquidez (ex., guardar 10% AUM) como lógica de checagem antes de enviar fundos para Swiss Holding.  
	•	**Funções principais**  
	•	registerDeployment(cycleId, amount, offchainRef):  
	•	Registrar quanto foi “deployado” (associado a um TX on-chain de saída para wallet do Swiss Holding / bridge).  
	•	registerPerformanceInflow(cycleId, amount, offchainRef):  
	•	Registrar quanto voltou em USDT.  
	•	closeCycleAndSplit(cycleId):  
	•	Calcular:  
	•	performanceRate = received / deployed.  
	•	Separar distributablePool vs reinvestableAmount conforme política (1,2% threshold).  
	•	Enviar distributablePool para Staking.  
	•	Enviar reinvestableAmount para Reinvestment.  
	•	Marcar finalized = true.  
	•	setStaking(address), setReinvestment(address).  
	•	**Eventos**  
	•	DeploymentRegistered(cycleId, amount, offchainRef).  
	•	PerformanceRegistered(cycleId, amount, offchainRef).  
	•	CycleClosed(cycleId, distributablePool, reinvestableAmount).  
	•	**Invariantes**  
	•	Nenhuma saída de USDT para carteiras pessoais.  
	•	Sempre há referência off-chain (offchainRef) ligando FDR, custody, FX.  
  
⸻  
  
**6. Staking.sol (one-token-one-unit, snapshot, 0,33%)**  
  
**O que o código precisa conter:**  
	•	**Estado**  
	•	Endereço de DGT3Token.  
	•	Endereço do USDT.  
	•	Endereço que recebe admin fee (infra/audit wallet).  
	•	Estrutura de stake:  
	•	stakes[address].amount.  
	•	Estrutura de ciclo de staking:  
	•	struct StakeCycle { uint256 totalStaked; uint256 distributablePool; uint256 adminFee; uint256 snapshotTimestamp; bool fdrApproved; bool finalized; }.  
	•	mapping(uint256 => StakeCycle) e mapping(address => mapping(uint256 => bool)) claimed.  
	•	**Funções de staking**  
	•	stake(amount):  
	•	Transfere DGT3 do usuário para o contrato.  
	•	Atualiza stakes[user].amount.  
	•	unstake(amount):  
	•	Atualiza stake e devolve DGT3.  
	•	Elegibilidade é por snapshot, então sair depois do snapshot não tira o direito daquela rodada.  
	•	**Gestão do ciclo**  
	•	snapshot(cycleId):  
	•	Só pode ser chamado em janela próxima do dia 20 00:00 UTC (ou livre mas com timestamp registrado).  
	•	Grava totalStaked naquele momento.  
	•	configureCycle(cycleId, distributablePool, aum):  
	•	Chamado pela Treasury.  
	•	Calcula adminFee = aum * 33 / 10000.  
	•	Define distributablePool líquido.  
	•	Marca finalized = true.  
	•	approveFDR(cycleId):  
	•	Chamado por Compliance/Treasury.  
	•	Marca fdrApproved = true e libera claim.  
	•	**Claim**  
	•	claim(cycleId):  
	•	Requer finalized + fdrApproved.  
	•	Calcula:  
	•	share = stakes[user].amount * distributablePool / totalStaked.  
	•	Transfere USDT ao usuário.  
	•	Marca claimed[user][cycleId] = true.  
	•	**Eventos**  
	•	Staked, Unstaked.  
	•	CycleSnapshotted, CycleConfigured, CycleFdrApproved.  
	•	Claimed.  
	•	**Invariantes**  
	•	Nenhuma redistribuição de DGT3.  
	•	Nenhum mecanismo que pareça “garantia de taxa”; é sempre pool / totalStaked.  
  
⸻  
  
**7. EscrowDesk.sol (P2P + floor + treasury-only buyer)**  
  
**O que o código precisa conter:**  
	•	**Estado**  
	•	Endereço do DGT3Token.  
	•	Endereço do USDT.  
	•	Endereço do Treasury.  
	•	Endereço do Compliance.  
	•	struct Order { uint256 id; address seller; uint256 amountDgt; uint256 pricePerUnit; bool treasuryOnly; bool active; }.  
	•	mapping(uint256 => Order) e contador de IDs.  
	•	currentNextRoundPrice (referência de floor).  
	•	treasuryMonthlyCap (1% circulating supply por mês); storage para quanto o treasury já comprou no mês.  
	•	**Funções de criação / cancelamento de ordem**  
	•	createOrder(amountDgt, pricePerUnit, treasuryOnly):  
	•	Verifica KYC seller via Compliance.  
	•	Verifica que pricePerUnit >= currentNextRoundPrice se não for treasuryOnly.  
	•	Transfere DGT3 do seller para o contrato (escrow).  
	•	Registra ordem.  
	•	cancelOrder(orderId):  
	•	Só seller, se active.  
	•	Devolve DGT3.  
	•	**Função de compra**  
	•	buy(orderId, usdtAmount):  
	•	Verifica KYC buyer via Compliance.  
	•	Se buyer != Treasury:  
	•	order.treasuryOnly == false.  
	•	pricePerUnit >= currentNextRoundPrice.  
	•	Se buyer == Treasury:  
	•	pricePerUnit >= currentNextRoundPrice * 80 / 100.  
	•	comprado_pelo_treasury_no_mes + order.amountDgt <= treasuryMonthlyCap.  
	•	Escrow:  
	•	USDT.transferFrom(buyer, seller, usdtAmount).  
	•	DGT3 do contrato para buyer.  
	•	Marca active = false.  
	•	**Admin**  
	•	setNextRoundPrice(price).  
	•	setTreasuryMonthlyCap(amount).  
	•	**Eventos**  
	•	OrderCreated, OrderCancelled, OrderFilled.  
	•	**Invariantes**  
	•	Nenhuma negociação abaixo de floor para participantes.  
	•	Treasury só compra dentro dos limites de preço/cap.  
  
⸻  
  
**8. Reinvestment.sol (regra 1,2% + split + desk)**  
  
**O que o código precisa conter:**  
	•	**Estado**  
	•	Endereço do USDT.  
	•	Endereço do Treasury.  
	•	Endereço do EscrowDesk.  
	•	Estrutura:  
	•	struct ReinvestmentCycle { uint256 cycleId; uint256 reinvestableAmount; uint256 toOperations; uint256 toDesk; bool executed; }  
	•	mapping(uint256 => ReinvestmentCycle) cycles.  
	•	Parâmetros de política:  
	•	performanceThresholdBps (ex.: 120 = 1,2%).  
	•	treasuryDeskCapBps (1% circ. supply – embora supply circ. esteja no token/treasury, aqui você guarda só o cap e lê o circulating).  
	•	minTreasuryDeskPriceFactor (80% do próximo round).  
	•	**Funções principais**  
	•	registerReinvestable(cycleId, reinvestableAmount, performanceRate):  
	•	Só Treasury pode chamar.  
	•	Verifica performanceRate > threshold.  
	•	Grava reinvestableAmount.  
	•	executeReinvestment(cycleId, opsShareBps, deskShareBps):  
	•	Só Treasury / multisig.  
	•	Garante que opsShareBps + deskShareBps == 10000.  
	•	Calcula:  
	•	toOperations = reinvestableAmount * opsShareBps / 10000.  
	•	toDesk = reinvestableAmount * deskShareBps / 10000.  
	•	Para toOperations:  
	•	Transfere USDT para a wallet/bridge de Swiss Holding (endereço definido).  
	•	Para toDesk:  
	•	Pode:  
	•	Ou transferir USDT para Treasury e Treasury executa compra via EscrowDesk.  
	•	Ou chamar função específica no EscrowDesk se você quiser uma integração mais direta.  
	•	Marca executed = true.  
	•	**Eventos**  
	•	ReinvestableRegistered(cycleId, amount, performanceRate).  
	•	ReinvestmentExecuted(cycleId, toOperations, toDesk).  
	•	**Invariantes**  
	•	Sempre dependente do Treasury (nada é automático sem chamada explícita).  
	•	Não mexe com DGT3 diretamente, só com USDT.  
	•	Não altera regras de supply, preço on-chain ou staking; só roteia capital conforme política.  
  
