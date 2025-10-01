# dgtenergy
Multichain utility token protocol for decentralized access to real-world energy assets.
# DGTEnergy

## 🪙 Token DGT3
- **Ticker:** DGT3
- **Rede:** BNB Smart Chain (BEP-20)
- **Contrato do Token:** [0x4f9e03695e16ab7a9a0d5bae4db60231ae20cc62]([https://bscscan.com/token/0x...](https://bscscan.com/token/0x4f9e03695e16ab7a9a0d5bae4db60231ae20cc62))
- **Contrato de Venda (Token Sale):** [0x6a9b64d39cf2543f80c752a9670a8477c1a6db5c]
- **Total Supply:** 1.000.000.000 DGT3 (minted, fixed)
- **Rodadas Atuais:**
  - Whitelist: 0.030 USDT
  - Round 1: 0.0321 USDT
  - ...
- **Distribuição:** conforme [Tokenomics.md](./Tokenomics.md)

## 🌐 Frontend (DApp)
- Framework: `Next.js` + `TailwindCSS`
- Web3 Stack: `wagmi`, `RainbowKit`, `ethers.js`
- Deploy: [dgtenergy.vercel.app](https://dgtenergy.vercel.app)

## 📁 Estrutura do Repositório
- `/src/pages` – páginas do DApp
- `/src/components` – componentes reutilizáveis
- `/public/icons` – ícones e logotipo
- `/contracts/` – contratos `.sol` (token, sale, staking)
- `/scripts/` – scripts de deploy
- `/tests/` – testes dos contratos

## ⚙️ Contratos Inteligentes
- `DGT3Token.sol`
- `DGT3TokenSale.sol` – com lógica de rodadas e whitelist
- `Staking.sol` (em construção)
- Auditado por: [Tentando instalar o Slither]

## 📊 Tokenomics
Veja [Tokenomics.md](./Tokenomics.md) para o plano completo:
- Modelo Step-Up: 0.0321 → 0.0353 (33 rodadas)
- 1MM USDT por rodada
- Stake CDI + % (ver [Staking.md](./Staking.md))

## 🛠️ Setup Local
```bash
git clone [https://github.com/psemeghin/DGT-Energy-Vault.git](https://github.com/psemeghin/dgtenergy.git)
cd DGTEnergy
npm install
npm run dev

https://bscscan.com/token/0x4f9e03695e16ab7a9a0d5bae4db60231ae20cc62
