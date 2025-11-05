# 00_Daap_Master_Note
#

# 01_Home Dapp V3

## 1.1 Objetivo da page/home
	•	Apresentar **DGT3Energy** como um projeto institucional de **utility token vinculado a ativos reais de energia**.
	•	Engajar e educar rapidamente novos visitantes sobre o propósito do protocolo.
	•	Direcionar usuários para **participar da rodada Whitelist (Seed)**.
	•	Comunicar **credibilidade, descentralização e utilidade real**, com linguagem institucional e tom inspiracional.
	•	Reforçar que a **transparência é verificável on-chain**.
##
## 1.2 Sessões da Página

### 1.2.1 Sessão: Hero Section — Conteúdo Final (V3)

**Objetivos: **
	•	Impactar visualmente com sofisticação e escala.
	•	Comunicar de forma instantânea o propósito e o diferencial da DGT3Energy.
	•	Conduzir o usuário com clareza para a próxima ação (**CTA /rounds**).
	•	Reforçar identidade institucional e Web3 com elegância e profundidade.

**Composição:**
	•	**Vídeo em loop sutil (.mp4 ou .webm)**: Terra à noite, pontos de luz interconectados em movimento contínuo e suave.

1. Título Principal
DGT3 — A New Gateway to Energy Finance

2. Subtítulo
Utility Token for Real-World Energy Assets

3. Mini-texto explicativo (3 linhas)
DGT3Energy é o elo entre o mundo físico da energia e o ecossistema digital da confiança.
Unimos dados reais, infraestrutura auditável e governança descentralizada para transformar energia em transparência verificável.
Um protocolo global, ancorado em utilidade, segurança e propósito.

4. Botões (lado a lado)
— Join the Seed → /rounds
— Leia nosso Manifesto → abre modal Lightbox (texto conteúdo dentro da Lightbox Modal)
De forma simples, todo o valor arrecadado na venda dos tokens é direcionado a **operações energéticas reais**, cuidadosamente estruturadas para gerar **resultados consistentes e previsíveis**.
Mesmo em um setor naturalmente volátil, como o de energia elétrica, a previsibilidade é garantida por **contratos de rendimento pré-estabelecido**, que asseguram estabilidade ao protocolo.

Atuamos em mercados com **taxas de juros competitivas**, selecionando apenas produtos submetidos a uma análise criteriosa de risco e adimplência.
Entre os modelos utilizados, destaca-se a **antecipação de recebíveis de energia**, mecanismo que permite retorno operacional elevado e **índices de inadimplência próximos de zero**.

**Fidelidade e utilidade no token.**

Cada token reflete diretamente a participação do comprador nas operações energéticas, com **governança transparente e livre negociação P2P** entre usuários.
Nosso propósito é que cada participante detenha um ativo digital sólido — um token com **valor intrínseco**, sustentado por fluxos reais de receita e pela **reaplicação constante do capital (reinvestimento)**.
O sistema de **staking** distribui resultados de forma proporcional, variável e auditável, reforçando o vínculo entre performance e valor do ativo.

O modelo da DGT3Energy foi desenhado para gerar valor **de forma sustentável, em curto, médio e longo prazo**, com total rastreabilidade.
A transparência é garantida por **auditorias independentes**, **assinaturas multisig**, **único mint controlado pela tesouraria** e ausência de **novos tokens ou burn** — um modelo 100% compatível com verificações públicas on-chain.


• Observações de posicionamento
— Título acima do horizonte do vídeo (entre o “Sol” e a Terra).
— Subtítulo logo abaixo do título.
— Mini-texto abaixo do subtítulo.
— Botões centralizados logo abaixo do mini-texto.

• Microcopy de acessibilidade
— Botão Manifesto: aria-label “Abrir manifesto institucional da DGT3Energy”.
— Botão Join the Seed: aria-label “Ir para a página de rounds para participar da Seed”.
— Garantir contraste AA no texto sobre o vídeo (usar overlay suave bg-black/40 se necessário).

• Interações (consistentes com o resto do app)
— Hover global: leve scale (105%) + opacity 90%.
— Foco visível nos botões (outline claro).
— Animação de entrada: fade + slide suave (300–500ms).

5. PartnerCarousel — faixa institucional de parceiros e menções.

Objetivo: Exibir de forma leve e contínua os logotipos de parceiros, apoiadores e referências de mídia, reforçando credibilidade e conexão global.
O componente é visualmente discreto e totalmente transparente para não interferir na leitura do conteúdo principal.

• Conteúdo (placeholder inicial)
Logos de parceiros e menções institucionais:
— Techopedia
— Analytics Insight
— Benzinga
— CryptoDaily
— Finbold
— TCU
— Cryptonews
— Coinspeaker
— Billi Capital
— Securitizadora (placeholder, substituível)

• Posição
— Fixado na parte inferior da Hero Section, sobre o vídeo de fundo.
— Alinhado horizontalmente, com leve espaçamento entre os logos.
— Ocupa cerca de 10 % da altura do vídeo ou 80 px fixos em desktop.

• Estilo visual
— Fundo: transparente (bg-transparent) ou leve gradiente translúcido (bg-white/5).
— Logos em branco monocromático (invert opacity-80), mantendo coerência institucional.
— Velocidade de rolagem suave: ciclo completo a cada 25–30 s.
— Espaçamento entre logos: 64–80 px.
— Hover: pausa da animação + aumento de opacidade.
— Efeito visual: loop infinito horizontal (animation: marquee linear infinite).

• Microcopy de acessibilidade
— Cada logo deve conter alt descritivo do parceiro ou veículo.
— A animação deve pausar quando o usuário interagir (hover, foco).
— Contraste mínimo AA sobre o vídeo de fundo.

• Interações (consistentes com o app)
— Hover global: opacidade passa de 80 % → 100 %.


• Animação (descrição técnica)
— Rolagem contínua da esquerda para a direita, com duplicação do conjunto de logos para manter o loop.
— CSS utilitário:
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
animate-marquee { animation: marquee 30s linear infinite; }

• Responsividade
— Desktop: altura 80 px, logos grandes (~36 px).
— Tablet: altura 64 px, espaçamento reduzido (~56 px).
— Mobile: altura 50 px, velocidade menor (45 s ciclo), logos com 28 px.

• Observações finais
— Deve ser carregado logo após os botões “Leia nosso Manifesto” e “Join the Seed”.
— Mantém coerência visual e reforça credibilidade institucional na primeira dobra.
— Pode futuramente sincronizar com API de parceiros para atualização dinâmica.


### 1.2.2 Sessão: About Us (V3)
• Objetivos
— Posicionar a DGT3Energy como infraestrutura de transparência e disciplina para mercados de energia em expansão.
— Explicar, de forma direta, que o protocolo se ancora em recebíveis energéticos verificados, com baixa inadimplência e alto compliance.
— Comunicar utilidade real (staking, governança e dados), sem conotação especulativa, em tom institucional e inspiracional.


1. Título da seção
Building the Bridge Between Energy and Web3

2. Microcopy comercial (opcional, abaixo do título)
Energy moves the world — DGT3Energy powers its trust.


3. Conteúdo (texto curto e direto - lembrar de sempre utilizar o inglês no DApp, traduzir fidedignamente)
A DGT3Energy conecta operações reais de energia a uma camada digital de confiança.
Diferente de modelos especulativos, o protocolo não tokeniza contratos: ancora-se em recebíveis energéticos verificados, oriundos de ambientes com baixa inadimplência, alto compliance e oportunidades crescentes.
Com utility token multichain, DAO híbrida e governança auditável, transforma fluxos operacionais em transparência on-chain — previsível, rastreável e global.
A DGT3Energy participa de contextos de transição e eficiência energética, apoiando iniciativas como modernização de infraestrutura, consumo sustentável, data centers e soluções de alta performance.

4. Cards / Tópicos visuais (4 colunas)
— Hybrid DAO Governance
Governança combinada: multisig institucional + participação via Snapshot, com validação por auditorias independentes.
— Verified Energy Receivables
Base em recebíveis energéticos verificados, de mercados com baixa inadimplência, alto compliance e oportunidades estruturadas.
— Performance Anchored in Expansion
Atuação em mercados energéticos em expansão (digitalização, transição verde, data centers, mobilidade), refletindo potencial operacional e previsibilidade.
— Global Utility Access
Utility token multichain que habilita staking, governança e dados públicos do protocolo — modelo universal, auditável e seguro.


• Design
— Grid responsivo: 2×2 no desktop; 1×4 no mobile.
— Cards: rounded-xl shadow-sm p-6 bg-white/80 backdrop-blur-sm hover:scale-105 hover:opacity-90 transition-transform.
— Ícones (SVG line): /icons/hybrid-dao.svg · /icons/verified-energy.svg · /icons/market-opportunities.svg · /icons/global-utility.svg.
— Tipografia: Space Grotesk (títulos), Inter (texto).
— Espaçamento vertical entre cards: 64 px desktop / 48 px mobile.

• Microcopy de acessibilidade
— Ícones com aria-hidden=“true” e títulos de card como elementos acessíveis.
— Texto com contraste AA; manter legibilidade em fundos claros (usar bg-white/80 + backdrop-blur-sm quando sobre imagem/vídeo).

• Observações de posicionamento
— Inserir esta sessão imediatamente após a Hero Section.
— Manter respiro generoso acima/abaixo para leitura confortável.
— Versão mobile prioriza empilhamento e legibilidade dos parágrafos curtos.


### 1.2.3 Sessão: Token Utility
• Objetivos
— Apresentar o token DGT3 como o ponto de acesso às funções centrais do protocolo.
— Demonstrar que a DGT3Energy opera em **mercados energéticos globais em expansão**, movidos pela transição energética e pelo crescimento da demanda por energia em setores como **data centers, mobilidade elétrica e infraestrutura digital**.
— Destacar que o protocolo atua sobre **operações estruturadas e fluxos contratuais verificados**, com **baixa inadimplência e alto compliance**, transformando a volatilidade natural da energia em **performance previsível, disciplinada e auditável**.

1. Título da Seção
Token Utility

2. Microcopy comercial (abaixo do título)
Structured energy. Transparent performance. Expanding opportunity.

3. Conteúdo (texto curto e direto)
O token DGT3 é o elo funcional entre a energia real e a governança digital da DGT3Energy.
Em um setor global em **plena expansão**, impulsionado pela **transição energética** e pela **digitalização acelerada da economia**, o protocolo opera com **disciplina institucional e rastreabilidade total**, convertendo a força dinâmica da energia em **performance verificável e previsível**.
A DGT3Energy atua sobre **operações estruturadas e recebíveis energéticos verificados**, garantindo **estabilidade operacional** mesmo em um mercado naturalmente volátil.
Cada token representa **utilidade real**, sustentada por **contratos auditáveis, baixa inadimplência e transparência on-chain**, em um modelo concebido para refletir **segurança, solidez e expansão sustentável**.

4. Cards / Tópicos Visuais (4 colunas)

— **Staking (FDR-based)**
Alocações proporcionais à performance verificada, sob a Full Deployment Rule.
A estrutura contratual e os recebíveis verificados proporcionam ciclos previsíveis e auditáveis, independentemente da volatilidade de preço.

— **Governance (Snapshot)**
Participação institucional e comunitária em decisões do protocolo, via DAO híbrida e multisig auditável.
Governança com transparência pública e rastreabilidade total das propostas.

— **Transparency & Data**
Dashboards públicos de tesouraria, staking e auditorias independentes.
Transparência que se traduz em confiança e disciplina operacional.

— **Desk (Compliant P2P & Escrow)**
Ambiente P2P seguro, com escrow e KYC, que promove **liquidez controlada e compatível com as regras de governança e integridade do protocolo**.

5.  Microcopy de impacto (abaixo dos cards)
“The energy that powers the world now powers trust.”

• Design
— Layout: grid responsivo (4 colunas no desktop / 1×4 no mobile).
— Cards: rounded-xl shadow-sm p-6 bg-white/85 backdrop-blur-sm hover:scale-105 hover:opacity-90 transition-transform duration-300.
— Ícones (SVG line): /icons/staking.svg · /icons/governance.svg · /icons/data-transparency.svg · /icons/desk-escrow.svg.
— Paleta: **Petroleum Blue #005F73**, **Graphite Gray #2F3E46**, **White #FAFAFA**.
— Tipografia: Space Grotesk (títulos) + Inter (texto).
— Espaçamento vertical: 64 px desktop / 48 px mobile.

• Microcopy de acessibilidade
— Títulos dos cards com leitura de voz habilitada (aria-label).
— Ícones com aria-hidden="true".
— Contraste AA garantido; usar bg-white/85 e backdrop-blur-sm para legibilidade sobre fundos escuros.

• Observações de posicionamento
— Inserir a sessão imediatamente após “Sobre o Projeto”.
— Servirá como ponte entre o conceito institucional e a aplicação prática do protocolo (Dashboard).
— O design deve transmitir sensação de **movimento estruturado**, como energia fluindo em equilíbrio.
— Evitar CTAs diretos; a seção comunica valor e propósito, não ação.


### 1.2.4 Sessão: Dashboard — Conteúdo Final (V3 Refinada e Equilibrada)
Objetivos
— Exibir de forma clara e elegante o estado atual do protocolo, com foco em dados verificados.
— Comunicar transparência, disciplina e rastreabilidade on-chain, sem poluição visual.
— Servir como transição entre “Token Utility” e o painel completo do /desk (Performance Analytics).

Título da Seção
Protocol Dashboard

Microcopy comercial (abaixo do título)
Real-time insights from verified energy-backed operations.
	1.	KPI Highlights (3 cards principais)
— Total Treasury Allocated (USDT)
Capital destinado a operações energéticas estruturadas e auditadas, com implantação confirmada (FDR).
Valores publicados apenas para contratos verificados on-chain.
Nota: placeholders até verificação oficial.

— DGT3 Tokens in Circulation
Quantidade de tokens efetivamente em circulação, excluindo tesouraria e alocações bloqueadas.
Indica evolução orgânica do ecossistema e das rodadas.

— Target Staking Performance (USDT)
Faixa referencial para ciclos de staking sob Full Deployment Rule (FDR).
Alocações variáveis e não garantidas: 13% a 22%, condicionadas à performance operacional verificada.
Resultados e hashes publicados em /data.
	2.	Performance Snapshot (mini-gráfico teaser do /desk)
Componente: sparkline (área/spline) minimalista, com fundo translúcido.
Tabs (placeholders):
— Projected vs. Realized Performance (FDR cycles)
— Treasury Allocation by Category (recebíveis/contratos ativos)
— Staking Participation Over Time (#holders, % circulação)
Microcopy abaixo do gráfico:
Operational metrics verified through on-chain data. Explore full analytics in /desk.
    3. Rodapé da Seção (texto curto)
Metrics are published after independent verification. All data refers to structured, audited, and non-speculative energy operations.

Hierarquia e Layout
— Ordem visual: Título + microcopy → 3 KPI cards → espaçamento de 56–72 px → gráfico teaser centralizado (70% da largura) → microcopy contextual → rodapé da seção.
— Grid dos cards: 3 colunas (desktop), 2×2 (tablet), 1×3 (mobile).
— Gráfico: centralizado, altura 180–220 px (desktop) e 140 px (mobile).

Design
— Cards: rounded-xl border border-black/5 bg-white/80 backdrop-blur-sm shadow-sm p-6.
— Títulos dos KPIs: Space Grotesk semibold 18–20 px; valores 28–32 px com tabular-nums.
— Sparkline: linha em azul petróleo sutil; sem eixos/legendas; placeholder “Data under on-chain verification”.
— Paleta: Petroleum Blue #005F73, Graphite Gray #2F3E46, White #FAFAFA.
— Tipografia: Space Grotesk (títulos), Inter (texto).
— Espaçamento entre blocos: 64 px (desktop) / 48 px (mobile).

Interações
— Hover nos cards: leve scale (1.02) + shadow-md + transition.
— Focus visível com outline-offset-2.
— Skeleton loaders para valores enquanto dados carregam.
— Indicador de atualização: “Updated X min ago” discreto no canto inferior direito do bloco.

Acessibilidade
— Cada KPI em .
— Valores com aria-live=“polite” para atualizações.
— Gráfico com descrição alternativa: “Preview of verified performance cycles — full details in /desk”.
— Contraste AA assegurado em textos e indicadores.

Placeholders e Regras de Dados
— treasuryAllocated: soma de TXs com implantação confirmada (FDR confirmed).
— tokensInCirculation: totalSupply – treasuryBalance – lockedAllocations.
— stakingPerformance: faixa variável 13–22% sob FDR (não garantida).
Origem dos dados: registros on-chain e documentos publicados em /data. Proibido inserir valores manuais.



### 1.2.5 Sessão: Transparência e Governança
Objetivos
— Evidenciar governança híbrida, controles institucionais e prestação de contas pública.
— Mostrar como decisões, contratos e fluxos são documentados e verificáveis on-chain.
— Reforçar segurança operacional por meio de multisig, auditorias e programa CVD.

1. Título da Seção
Transparency & Governance

2. Microcopy institucional (abaixo do título)
Every decision traceable. Every transaction auditable. Public by design.


3. Proposal & Voting (Snapshot)
— Descrição curta: Propostas são discutidas em fórum, redigidas em rascunho e votadas por meio do sistema de governança. Um token = um voto, com possibilidade de delegação.
— Status (placeholder): “Next voting window: —”.


4.  Governance Framework (cards explicativos)

— **Ciclo de Propostas**
• Forum → Draft → Voting (5 dias) → Execution.
• Registro público de histórico e resultados.

— **Voting Mechanics**
• Um token equivale a um voto; delegação opcional; quórum e maioria definidos conforme diretrizes em /data.
• Processos de votação e resultados documentados e disponíveis publicamente.

— **Treasury Control**
• Multisig híbrido (ex.: 2-de-3 com time-lock para mudanças críticas).
• Endereços e transações de controle auditáveis e publicados em /data.

— **Safeguards**
• Mínimo de quórum, prazos de contestação, permissões e reputação de contribuidores.
• Execução condicionada a checagens automáticas e contratos verificados.


5. Public Integrity & Auditability (bloco de verificação)
**— Contracts Verified**
• Código-fonte e contratos auditáveis, com endereços públicos listados em /data.
— **Audits & Reports**
• Relatórios independentes, pareceres de segurança e documentação técnica versionada.
— **CVD Program**
• Programa de Divulgação Coordenada de Vulnerabilidades com canal de comunicação auditado.
— **Transparency Hub**
• Dashboards institucionais com dados de tesouraria, ciclos de staking (FDR) e registros de alocação.


Design
— Layout: grid responsivo 2×2 (desktop) / 1×4 (mobile) para os cards do Framework; blocos “Proposal & Voting” e “Public Integrity” em largura total.
— Cards e blocos: rounded-xl border border-black/5 bg-white/80 backdrop-blur-sm shadow-sm p-6.
— Títulos: Space Grotesk semibold 18–20 px; corpo: Inter 15–16 px, line-height 1.6.
— Espaçamento entre blocos: 64 px (desktop) / 48 px (mobile).
— Links textuais discretos apenas para seções internas (/data e /governance), sem ícones de saída.


Interações
— Hover suave nos cards: scale(1.02) + shadow-md + transition.
— Foco visível em todos os elementos interativos (outline-offset-2).
— Skeleton loaders nos blocos que dependem de dados dinâmicos (por exemplo, próximas janelas de votação).


Acessibilidade
— Cada bloco identificado semanticamente (role="region" e aria-label descritivo, ex.: “Governance voting information”).
— Todo texto principal é legível em leitores de tela sem depender de links externos.
— Nenhum elemento contém link direto para Snapshot ou plataformas de terceiros.
— Contraste AA garantido em textos e bordas.
— Ícones definidos com aria-hidden="true" para leitura limpa.
— Resultados e status exibidos também como texto, nunca apenas em ícones ou gráficos.


Observações de posicionamento
— Inserir esta sessão após o Dashboard e antes do Roadmap.
— Evitar CTAs ou links externos; priorizar o uso de textos informativos institucionais.
— Todos os endereços de contratos devem obedecer ao formato 0x[a-fA-F0-9]{40}.



### 1.2.6 Sessão: Roadmap
Objetivos
— Apresentar a evolução institucional e técnica do protocolo de forma cronológica, fluida e atrativa.
— Transmitir clareza e credibilidade sobre cada fase, com foco em transparência, auditoria e expansão sustentável.
— Aplicar uma experiência dinâmica semelhante à do *roadmap scroll* do Mutuum (scroll lateral animado, fluido e responsivo), mantendo coesão visual com o restante do DApp.


1. Título da Seção
DGTEnergy Roadmap

2. Microcopy institucional (abaixo do título)
Structured milestones building the world’s most transparent energy protocol.


Estrutura visual e dinâmica
Tipo de interação para 3. Conteúdo:
Scroll horizontal responsivo (como Mutuum.com), com efeito *fade-in* e *parallax suave* para cada etapa.
A linha do tempo será lateral esquerda, fixada verticalmente, e os blocos de conteúdo surgirão à direita conforme o usuário avança na rolagem.

Animações e efeitos sugeridos
— *fade-up + slide-right* (300 ms) para cada fase.
— Conectores laterais animados por gradiente leve da paleta institucional (azul petróleo → grafite).
— Fundo branco translúcido com leve *backdrop-blur* para destacar o conteúdo.

Código/estrutura sugerida
Container com scroll-snap-type: y mandatory; overflow-y: auto;
Cada fase com scroll-snap-align: start; flex: 0 0 80%; scroll-margin-top: 5vh;

3. Conteúdo (resumo comercial e institucional - abaixo da Microcopy)

**Phase 1 — Launch & Whitelist (Q4 2025)**
Deployment dos contratos DGT3Energy (BEP-20) e abertura do DApp completo.
Whitelist em **0.030 USDT/DGT3**, com foco em **validação on-chain, contratos auditados e estrutura de tesouraria vinculada a operações e reservas verificáveis.**
Meta: concluir whitelist com auditoria independente e primeiro FDR publicado.

**Phase 2 — Progressive Rounds & Institutional Expansion (Q4 2025 → Q2 2026)**
Rodadas progressivas sob modelo *step-up*, permitindo expansão institucional e governança auditável.
Cada rodada reflete a ampliação da tesouraria e o crescimento de contratos energéticos verificados.
Meta: ampliar a participação global mantendo integridade e transparência on-chain.

**Phase 3 — P2P Desk & Treasury Liquidity (Q1 2026)**
Lançamento do módulo /desk, ambiente de trocas P2P com escrow e controle de liquidez.
A tesouraria atua exclusivamente como compradora, garantindo liquidez ordenada e previsível.
Meta: consolidar mercado secundário institucional, seguro e transparente.

**Phase 4 — Staking Launch (Q2 2026)**
Ativação do módulo de staking sob a Full Deployment Rule (FDR).
Distribuições proporcionais à performance verificada, com todas as alocações publicadas on-chain.
Meta: iniciar ciclos mensais verificáveis de distribuição e performance.

**Phase 5 — Reinvestment & Treasury Growth (Q3–Q4 2026)**
Execução da Regra de Reinvestimento Condicional: excedentes de performance (≥ 1.2%) são reinvestidos ou redistribuídos conforme governança multisig.
Meta: fortalecer sustentabilidade da tesouraria, mantendo transparência e rastreabilidade integral.

**Phase 6 — Completion & Expansion (2027 +)**
Conclusão das 70 rodadas, atingindo o limite de 1 bilhão de DGT3 emitidos.
Manutenção de ciclos contínuos de staking, reinvestimento e auditoria.
Possível expansão para cadeias EVM compatíveis e novas jurisdições sob governança DAO.
Meta: consolidar a DGTEnergy como infraestrutura global de confiança e transparência energética.


** **Layout visual
— Linha do tempo lateral esquerda fixa, com marcadores animados conectando cada fase (efeito gradiente da paleta institucional).
— Cards de fases à direita: rounded-xl shadow-sm bg-white/80 backdrop-blur-sm border border-black/5 p-6 max-w-3xl.
— Títulos das fases: Space Grotesk 20–22 px; subtítulos Inter 15–16 px.
— Espaçamento vertical entre cards: 80 px (desktop) / 56 px (mobile).
— Fundo da seção com leve gradiente vertical em tons da paleta institucional (do azul petróleo ao cinza-claro).


Paleta de cores (branding)
Todas as cores devem respeitar a paleta oficial DGTEnergy:
— Petroleum Blue: #005F73
— Graphite Gray: #2F3E46
— White Neutral: #FAFAFA
— Accent tones: variações suaves dessas cores, com opacidade entre 60% e 85%.
Sem uso de cores externas.


Animações
— Rolagem suave com *scroll-snap* vertical.
— Cada card entra em *fade + slide* (transição 250–350 ms).
— Título da fase em destaque leve (azul petróleo 100%).
— Marcadores da linha do tempo acendem conforme a rolagem (variação entre #005F73 e #2F3E46).
Acessibilidade
— Cada fase definida como <section role="region" aria-label="Phase {n}: {título}">.
— Suporte completo à navegação por teclado (tabindex="0", setas ↑/↓).
— Contraste mínimo AA garantido entre texto e fundo.
— Elementos visuais não essenciais com aria-hidden="true".
— Animações discretas e não intrusivas (sem parallax abrupto).


### 1.2.7 Sessão: Perguntas Frequentes (FAQ)
Objetivo
— Remover barreiras de entrada, esclarecer dúvidas-chave e reforçar credibilidade com perguntas e respostas diretas, claras e compatíveis com o tom institucional do protocolo.
— Utilizar formato de *accordion* para leitura fluida, responsiva e acessível.

1. Título da Seção
Frequently Asked Questions (FAQ)

2. Microcopy institucional (abaixo do título)
Clarifying your participation in a transparent, energy-anchored protocol.

3. Perguntas e Respostas (formato simplificado)
	1.	O token DGT3 é uma ação ou título?
Resposta: Não. O DGT3 é um **utility token** que concede acesso às utilidades do protocolo — staking, governança e visibilidade de dados — e **não representa participação societária, dívida ou instrumento financeiro.**
	2.	Preciso passar por KYC para participar das rodadas?
Resposta: Somente se você participar de rodadas institucionais que requerem verificação de identidade segundo jurisdição aplicável. A participação em fases públicas pode não exigir KYC imediato, conforme o regulamento da rodada.
	3.	Em quais redes o token DGT3 estará disponível?
Resposta: Inicialmente na **BNB Smart Chain (BEP-20)**. A expansão para outras redes compatíveis com EVM e ambientes multichain está planejada conforme os marcos do roadmap.
	4.	Como são distribuídas as recompensas de staking?
Resposta: As recompensas são distribuídas em USDT conforme ciclos mensais. A elegibilidade depende da **Full Deployment Rule (FDR)** — somente alocações com implantação verificada participam. As alocações são **variáveis e não garantidas**.
	5.	Qual o nível de transparência e auditoria do protocolo?
Resposta: O protocolo publica **contratos verificados on-chain, auditorias externas**, endereços institucionais (tesouraria, multisig), e relatórios de alocação em /data. Todos os dados relevantes são públicos e rastreáveis.
	6.	Como funciona a negociação entre usuários (P2P)?
Resposta: O módulo /desk permitirá trocas peer-to-peer com escrow e compliance, sob política de liquidez ordenada. A tesouraria atua apenas como comprador para apoiar liquidez, não definir preço de mercado. (Em lançamento futuro)
	7.	Existe garantia de rentabilidade ou proteção contra volatilidade de mercado?
Resposta: Não. A energia é um setor com dinâmica própria. O diferencial da DGT3Energy é operar **sobre contratos estruturados** e fluxos verificáveis, o que reduz a exposição à volatilidade de preços — mas **não constitui garantia de retorno ou eliminação total de risco.**

Design
— Layout em **accordion** (HTML <details> <summary>).
— Tipografia: Inter 16 px, line-height 1.6.
— Espaçamento vertical entre itens: 48 px.
— Ícones simples de “+” para expandir, sem exageros gráficos.
— Contraste mínimo AA garantido.

Microcopy de acessibilidade
— Cada item com role="region" e aria-labelledby apontando ao summary.
— Botões de expandir/collapse com aria-expanded dinâmico.
— Leitores de tela leem pergunta + resposta ao abrir o item.

Observações de posicionamento
— Inserir esta sessão após o Roadmap.
— Evitar CTA direto; a função é informar e dar suporte institucional.
— Todos os termos devem seguir a linguagem oficial e evitar promessas de “rentabilidade garantida”.

Compliance & Disclaimer
DGTEnergy é um protocolo de utility token. A participação concede acesso às utilidades do protocolo — **staking, governança e dados públicos** — e não representa participação societária, dívida ou instrumento financeiro. Todas as alocações são **discricionárias, baseadas em performance verificada**, e **totalmente transparentes on-chain**.


# 02_Rounds Dapp V3

**Objetivo da /page/rounds**
	•	Exibir todas as **fases oficiais de distribuição do DGT3Energy (Whitelist + Progressive Rounds)**.
	•	Explicar a **lógica de progressão de preço** e a **estrutura de transparência** da captação.
	•	Comunicar escassez de forma institucional, **sem linguagem de investimento**.
	•	Permitir **integração de carteira, whitelist (quando aplicável)** e **participação direta** na rodada ativa.
	•	Servir como o **painel público oficial do ciclo de distribuição on-chain**, conectado à tesouraria e aos dados em /data.

**Sessões (em ordem)**
**1. Hero / Header da Rodada**

**Composição**
	•	**Título:** DGT3Energy Sales Portal
	•	**Subtítulo:** Transparent rounds, fixed supply, predictable pricing.
	•	**Banner:** imagem institucional ou vídeo curto (gradiente azul petróleo / branco, textura energética leve).
	•	**Rodada ativa:** Nome em destaque (ex: “Whitelist — Phase 1”).
	•	**Target:** “Goal: 1,000,000 USDT (NET)”
	•	**Preço:** “0.030 USDT/DGT3”
	•	**Progresso:** barra horizontal mostrando percentual GM/NET com legenda 96% Treasury / 4% Management.
	•	**CTA Primário:** “Join the Power of the Seed” → /rounds (mantém ambiguidade poética “seed = semente”)
	•	**CTA Secundário:** “Read Tokenomics” → /data

**Copy institucional (curta):**

“Early participation combines infrastructure development and verified energy deployments. Transparent, auditable, and fully on-chain.”

**Comportamento:**
	•	Responsivo (2 colunas desktop → 1 no mobile).
	•	Scroll suave até os cards das rodadas.
	•	Placeholder neutro para valores GM/NET (ligação posterior ao indexador).


**2. Cards das Rodadas (Grid institucional)**
**Grid layout:**
	•	**3 colunas desktop**, **1 coluna mobile**, cards padronizados (rounded-2xl shadow-sm p-8 bg-white).

**Whitelist (Open)**

“The entry point for early participants.
Fixed price **0.030 USDT/DGT3**, targeting **1,000,000 USDT NET**.
50 % allocated to protocol infrastructure and 50 % to verified energy receivables under signed MoUs.
Contributions route automatically: **96 % Treasury / 4 % Management Fee**, both publicly visible in /data.”

	•	**CTA:** “Join the Power of the Seed”
	•	**Status badge:** OPEN
	•	**Icon:** 🔑


**Progressive Rounds (Upcoming)**

“Seventy progressive rounds following the Whitelist, with predictable linear price evolution from **0.0321 → 0.036273 USDT**.
Each round capped at ≈ 517,708 USDT (GM) / 497,000 USDT (NET).
Opens sequentially, aligned with deployment confirmations (FDR).”

	•	**CTA:** “View Schedule”
	•	**Status badge:** COMING SOON
	•	**Icon:** 📈


# 03_Desk Dapp V3



**Objetivo da /page/desk:**
	•	Reunir, em um **único ambiente de rolagem contínua**, três das seguintes dimensões do protocolo:
**(1) Performance Analytics**, **(2) P2P Trading com escrow**, **(3) Staking sob FDR**.
	•	Reforçar **usabilidade, transparência e rastreabilidade** on-chain, com design limpo, institucional e leve.
	•	Servir como **hub operacional para as três funcionalidades acima** e pode interagir com o ecossistema do DGT3.
	•	Receber o usuário com um ambiente dinâmico, útil e conectado, que combina performance da carteira, projeções financeiras internas atuais e futuras e funcionalidades importantes como Staking, P2P, Gráficos com projeções.


**Sessões (estrutura de página única, em rolagem vertical)**
**1. Sessão: Intro (≈ 30% da altura total da página)**
**Objetivo: Impactar o usuário e manter a sensação de conectado com o mundo real, participamente ativo e atualizado com o mundo real**
**Composição:**
	•	**Título:** DGT3Energy Interactive Desk
	•	**Subtítulo:** Follow, trade and stake performance — all in one place.
	•	**Banner carrossel vertical** (lado direito):
	•	3 linhas com **manchetes de notícias financeiras** (Google News, categoria “energy market / digital assets”).
	•	Atualização automática (cada 30 segundos).
	•	Sempre em texto branco, sobre faixa azul-petróleo translúcida.
	•	**Botão principal:** Status da carteira segue a regra geral do site
	•	**Primeiro clique:** redireciona para onde definimos que será a conexão principal da carteira
	•	**Clique fora:** fecha o mini-painel.
	•	**Design:** Segue o padrão e a lógica universal do site/Dapp


**2. Sessão: Performance Analytics**
Visualizar de forma clara a performance comparativa do protocolo em relação a benchmarks reais, **com linguagem financeira proibida** (promessa de retorno, mantendo o marketing incisivo)
**Composição:**
	•	**Título:** “Protocol Performance Analytics”
	•	**Subtítulo:** “Compare DGT3 allocation trends with key market indices.”
	•	**Gráfico principal (tabs internas = 4 plots)**
Cada aba exibe **um gráfico distinto**, com placeholders neutros até dados reais:
	1.	**Projected Staking Allocation × Meses**
	•	Linha ascendente suave; legenda: “Variable, performance-linked allocations (non-guaranteed).”
	2.	**Capital Alocado × Capital Implantado (FDR)**
	•	Duas linhas (Treasury allocated vs Deployed under FDR).
	3.	**Índice de Performance DGT3 × Índice de Energia (IEE/IEB ou similar)**
	•	Base 100 normalizada; mostra correlação institucional com o setor.
	4.	**Índice Ouro (Gold) × Performance DGT3 (projected)**
	•	Base 100, mesma escala, **rótulo claro: “projection under verification.”**
	•	**Indicadores-chave (cards placeholders):**
	•	**Total Treasury Allocated (USDT)**
	•	**Verified Deployment (FDR %)**
	•	**Active Participants**
	•	**Transparency Ratio (% published on-chain)**
	•	**Copy institucional:**
“Transparency by design — follow verified allocations, on-chain performance and sector benchmarks in real time.”


**3. Sessão: P2P Trading & Escrow **
**Objetivo:**
Apresentar a estrutura da futura exchange interna — controlada, auditável, KYC-gated e operada com escrow inteligente.

**Composição:**
	•	**Título:** P2P Trading & Escrow
	•	**Subtítulo:** “Compliant, escrow-based peer-to-peer environment.”
	•	**Visual placeholder:**
	•	Imagem ilustrativa tipo order book (bids/asks) com ícones de cadeado e escudo.
	•	Badge “COMING SOON” centralizado.
	•	**Texto institucional:**
“DGTEnergy enables peer-to-peer trading with escrow, offering transparent and secure secondary liquidity for verified holders.”
	•	**Book de ordens (simulado):**
	•	Colunas: Price (USDT/DGT3) · Quantity · Type (Bid / Ask) · Status.
	•	Linhas em tons neutros (cinza claro).
	•	Nenhum dado real no MVP.
	•	**Botões:**
	•	**Post Order (disabled)**
	•	**Cancel (disabled)**
	•	**Rodapé da seção:**
“Treasury operates as buyer-only under price-floor policy. All trades remain on-chain and auditable.”


**4. Sessão: Staking Dashboard**
**Objetivo:**
Exibir o status de staking do usuário e o comportamento global do protocolo — sempre sob o princípio de performance variável e compliance total.

**Composição:**
	•	**Título:** Staking Dashboard (FDR-Linked)
	•	**Subtítulo:** Monitor staking participation and accrual cycles.
	•	**Painel do usuário:**
	•	Saldo DGT3 (placeholder)
	•	Staked amount
	•	Claimable USDT
	•	Status: *“Accrual pending FDR confirmation”*
	•	**Funções previstas:**
	•	Stake (disabled até FDR)
	•	Unstake (disabled)
	•	Claim Rewards (disabled)
	•	**Caixa informativa:**
“USDT allocations are performance-linked, variable, and non-guaranteed.
Distributions occur only after Full Deployment Rule confirmation.”
	•	**Gráfico:** “Staked Value Over Time” (placeholder)
	•	**KPIs (cards neutros):**
	•	Total Staked
	•	Rewards Distributed
	•	Active Participants
	•	Snapshot Date
	•	**Animação:** hover de brilho e contagem simulada.

#
# 04_Data Dapp V3


Sessão: Objetivo
	•	Centralizar documentação institucional, tokenomics, roadmap e transparência auditável.
	•	Exibir mini-dashboards com GM/NET, 4%, 0.33%, FDR e reinvestimentos (placeholders).

Sessão: Estrutura das Seções
	•	Tokenomics (card + gráfico pizza/SVG).
	•	Roadmap V3 (Phase 1 → Phase 6, curto).
	•	Transparency Dashboards (mini-cards).
	•	Quick Transparency Notes (bullets).
	•	Document Library (links com descrição curta).

Sessão: Tokenomics (conteúdo)
	•	Total Supply: 1,000,000,000 DGT3 (fixo).
	•	Network: BNB Smart Chain (BEP-20).
	•	Accepted Asset: USDT (BEP-20).
	•	Whitelist (Open): 0.030 USDT/DGT3; target 1,000,000 USDT (NET); routing 96% Treasury / 4% Management.
	•	Progressive Rounds: 70 sub-rodadas; 0.0321 → 0.036273 USDT; cap ≈ 517,708 GM / 497,000 NET por sub-rodada.
	•	Staking (FDR): alocações em USDT; variáveis e não garantidas; snapshot dia 20 00:00 UTC; admin 0.33% antes de cada ciclo.
	•	Treasury: tokens não vendidos locked; políticas de plataforma no /desk (token permanece transferível).

Sessão: Roadmap V3 (resumo)
	•	Phase 1: Launch & Whitelist (Q4 2025) — DApp live; 96/4 on-chain; CVD; multisig time-locked.
	•	Phase 2: Progressive Rounds (Q4 2025 → Q2 2026) — 70 rounds; publicação contínua de GM/NET/4%/0.33%/FDR em /data.
	•	Phase 3: P2P Desk (Q1 2026) — escrow + KYC; treasury buyer-only; price-floor ≥ próximo preço.
	•	Phase 4: Staking under FDR (Q2 2026) — ciclos mensais; accrual somente pós-FDR.
	•	Phase 5: Reinvestment (>1.2% verified performance) (Q3–Q4 2026) — parte reinveste/parte distribui; TX e racional publicados.
	•	Phase 6: Completion & Expansion (2027+) — supply concluído; expansão EVM sujeita à DAO.

Sessão: Transparency Dashboards (mini-cards; placeholders)
	•	GM Raised (round/total) — USDT.
	•	NET to Treasury (96%) — USDT.
	•	Management Fee (4%) — USDT.
	•	Admin Fee (0.33% mensal) — USDT.
	•	FDR Status por lote — Pending/Confirmed.
	•	Reinvestment Log — última ação + botão Copy TX.

Sessão: Quick Transparency Notes
	•	Documentação pública, auditável e versionada.
	•	Addresses e TX hashes publicados aqui em /data.
	•	Routing on-chain: 96% Treasury / 4% Management.
	•	Staking FDR-linked, alocações variáveis e não garantidas; admin 0.33% por ciclo.
	•	Tokens não vendidos locked na tesouraria.

Sessão: Document Library (descrições seguras)
	•	Whitepaper (PDF) — descrição completa: tokenomics, governança, compliance e roadmap.
	•	Product 1 Factsheet (PDF) — estrutura de recebíveis de energia; critérios de verificação; sem promessas.
	•	Legal Structure & Terms (PDF) — classificação utility, disclaimers, escopo jurisdicional.
	•	Smart Contract Audits (PDF) — relatórios independentes de segurança.
	•	DAO Governance Framework (PDF) — ciclo de propostas, quórum, salvaguardas e controles.

Sessão: Microcopy de Compliance (para a /data)
	•	“DGT3 é um utility token para acesso, governança e dados on-chain; não representa equity, dívida ou participação em lucros.”
	•	“As alocações são variáveis, ligadas à performance e não garantidas; accrual ocorre apenas após confirmação FDR.”
	•	“A participação pode requerer KYC/AML conforme jurisdição.”

Sessão: Componentes UI a usar
	•	Section (wrapper com título e descrição).
	•	Card (Tokenomics, Notes, Library).
	•	StatCard (mini-dashboards).
	•	ProgressBar (se aplicável a GM/NET).
	•	ButtonLink (PDFs e âncoras internas).
	•	Toast + CopyButton (TX hashes).

Sessão: Estados & Responsividade da /data
	•	Loading: skeletons nos cards e lista de documentos.
	•	Mobile: empilhar gráfico abaixo do card de Tokenomics; mini-dashboards 2×3.
	•	Acessibilidade: foco visível nos links de PDF; alt-text em ícones.


# 05_Governance Dapp V3


**05_Governance Dapp V3 — Definições de Instruções (Página /governance)**


**Objetivos da Página**

— Concentrar todo o fluxo de governança do protocolo (propostas, votação, resultados, execução e arquivo).
— Tornar o ciclo decisório verificável e auditável *end-to-end*, sem depender de textos externos para compreensão.
— Exibir, de forma clara e neutra, as salvaguardas institucionais (multisig, timelocks, quórum, delays, papéis).
— Servir como **hub de documentação de governança** (links internos para /data) e como ponte para o módulo de votação (Snapshot/contratos), mantendo linguagem estritamente institucional.


**Arquitetura de Informação (seções na página)**
	1.	Hero / Overview
	2.	Proposal Lifecycle (fluxo visual)
	3.	Voting Mechanics (regras)
	4.	Treasury Controls (multisig e timelocks)
	5.	Safeguards & Roles (salvaguardas e papéis)
	6.	Live / Recent Decisions (estado, agenda e resultados)
	7.	Documentation & Audit Trail (apontadores internos para /data)
	8.	Compliance & Legal Notes (microcopy fixo)


**1. Hero / Overview**

**Título:** Governance Portal
**Subtítulo:** Hybrid DAO governance with auditable decisions, multisig oversight and transparent execution.
**Microcopy:** Every decision traceable. Every transaction auditable. Public by design.

**Placeholders visuais (cards):**
— Active Proposals (—)
— Quorum Threshold (—)
— Voting Window (—)
— Execution Delay (—)

**Design:** bloco único, fundo claro, cards com rounded-xl shadow-sm. Sem CTA chamativo.


**2. Proposal Lifecycle (fluxo)**

**Fluxo padrão (texto + diagrama simplificado em linha):**
Forum → Draft → Voting (5 dias) → Queue → Execution (on-chain) → Archive

**Notas:**
— “Forum” e “Draft” são estágios de discussão/redação internos (sem link externo).
— “Voting” integra com o provedor de votação (Snapshot/contrato) via componente embutido somente após aprovação de segurança e compliance.
— “Queue/Execution” exibe hashes e eventos finais, com espelho de TX em /data.

**Microcopy de apoio:**
The entire lifecycle is documented and versioned. Results and execution proofs are published in /data.


**3. Voting Mechanics (regras)**

**Parâmetros sugeridos (DAO inicial, ajustáveis via proposta):**
— Modelo: one-token-one-vote (delegation supported).
— Quórum mínimo: 10 % do supply circulante.
— Maioria mínima: 51 % dos votos válidos.
— Duração padrão da votação: 5 dias (120h).
— Propostas críticas (tesouraria, auditoria): até 7 dias.
— Propostas de rotina (documentação ou ajustes operacionais): 3 dias.
— Delay/timelock: 24h antes da execução (cool-down).
— Snapshot block: definido no início da votação.
— Delegação: endereços públicos listados em /data.

**Tipos de proposta (exemplos):**
• Treasury movements (regras e finalidade)
• Protocol parameters (ajustes técnicos, taxas administrativas)
• Programas (CVD, auditorias independentes)
• Atualizações operacionais (Desk, FDR, reinvestimento)

**Observação:** todos os valores são lidos do documento “Governance Parameters” em /data; a UI apenas renderiza.


**4. Treasury Controls (multisig e timelocks)**

**Exibir, em cards de leitura:**
— Multisig institucional 2-de-3 com time-lock de 24h para alterações críticas.
— Papéis e limites: spending caps, daily limits, emergency pause (definidos em /data).
— Endereços públicos (tesouraria, multisig, administração) com padrão 0x[a-fA-F0-9]{40}.
— Provas de execução: links internos para /data com TX hashes e relatórios de reconciliação.

**Nota UI:** mostrar “Verified on-chain” apenas quando houver hash e carimbo de verificação.


**5. Safeguards & Roles**

**Salvaguardas:**
— Quórum mínimo e maioria qualificada conforme tipo de proposta.
— Delays e timelocks para execução.
— Anti-sybil: validação via delegação e Snapshot (assinatura EIP-712).
— Cada proposta deve conter rationale, impacto, riscos e plano de execução.

**Papéis (placeholders):**
— **Proposers:** membros com ≥ 0.1 % do supply ou delegação formal.
— **Delegates:** holders ativos com delegação; lista dinâmica em /data.
— **Multisig signers:** três endereços institucionais (core, jurídico, auditoria).
— **Auditors:** independentes, listados em /data (CVD partners).
— **Maintainers:** responsáveis por publicar hashes, relatórios e FDRs em /data.


**6. Live / Recent Decisions**

**Componentes:**
— Proposals (abertas): título, escopo, status, tempo restante, link interno “Ver detalhes”.
— Results (recentes): aprovado/reprovado, quórum atingido?, hash de execução, link interno para /data.
— Agenda: próxima janela de votação (placeholder).

**Regras:**
— Estados lidos do provedor de votação/contrato e espelhados em /data.
— Sem números absolutos sem fonte; placeholders até auditoria final.


**7. Documentation & Audit Trail**

**Lista de documentos hospedados em /data (links internos):**
— Governance Parameters (quórum, maioria, janelas, delegação).
— Treasury Policy & Limits (papéis, limites e procedimentos).
— Multisig Playbook (assinaturas, time-locks, rotinas).
— CVD Program (escopo, contato, triagem).
— External Audits (relatórios e pareceres independentes).
— Execution Records (FDRs, distribuições, reinvestimentos, TX hashes).

**Nota:** /governance não armazena PDFs; apenas referencia /data como fonte oficial.


**8. Compliance & Legal Notes**

**Texto fixo:**
DGTEnergy é um protocolo de utility token.
A participação concede acesso às utilidades do protocolo — **staking, governança e visibilidade de dados** — e não representa participação societária, dívida ou instrumento financeiro.
Todas as alocações são **discricionárias, baseadas em performance verificada** e **totalmente transparentes on-chain.**

**Política de linguagem:**
Evitar termos proibidos (profit, ROI, yield garantido, investimento, retorno, juros, ganho).


**Especificações de UX**

— Layout: duas colunas no desktop (conteúdo à direita, navegação à esquerda opcional); uma coluna no mobile.
— Componentes: rounded-xl shadow-sm bg-white/80 backdrop-blur-sm border border-black/5 p-6.
— Navegação interna: âncoras para cada seção; botão “voltar ao topo” fixo.
— Tipografia: Space Grotesk (títulos), Inter (texto).

**Acessibilidade:**
• Cada bloco com role="region" e aria-label descritivo.
• Resumo de proposta em texto.
• Foco visível, contraste AA, aria-live para atualizações.
• Ícones com aria-hidden="true".


**Observabilidade / Dados**

**Campos lidos dinamicamente:**
— proposals_open_count
— quorum_threshold_percent
— voting_window_days
— execution_delay_hours
— delegates_count e top_delegates[] (se aplicável)
— latest_results[] (id, título, quórum atingido, resultado, tx_hash, link interno para /data).


**Integrações Técnicas**

— Provedor de votação: Snapshot (space id: dgt3energy.eth) ou módulo on-chain compatível.
— Rede: BNB Smart Chain (Chain ID 56).
— Variáveis (.env):

NEXT_PUBLIC_CHAIN_ID=56
NEXT_PUBLIC_SNAPSHOT_SPACE=dgt3energy.eth
NEXT_PUBLIC_TREASURY_ADDRESS=0xDGT3TREASURY000000000000000000000000000001
NEXT_PUBLIC_MULTISIG_ADDRESS=0xDGT3MULTISIG000000000000000000000000000002
NEXT_PUBLIC_DOCS_BASE=/data


**CSP-V1 / Segurança e Verificação**

— Validar endereços com regex 0x[a-fA-F0-9]{40}.
— Exibir “Verified” apenas após confirmação no explorer.
— Bloquear embeds não autorizados.
— Carregar parâmetros de governança somente de /data (fonte única).
— Opcional: incluir verificação SHA-256 do bundle de regras exibido na UI.


**Microcopy Institucional**

— “Governance is cumulative and progressively decentralized. Decisions are documented, reviewed, and executed with transparent controls.”
— “Quorum and majority thresholds are defined in the Governance Parameters and may evolve via proposals.”
— “All execution records and transaction hashes are mirrored in /data.”


**Authorship Record**
SHA256: <preencher na exportação>
Generated by: Chili GPT (DGTEnergy Environment)
Approved by: De Goat Capital / DGTEnergy Core Team
Date:
Auth Level: Draft


# 06_Connect Dapp V3


**Objetivos da /page/connect**
— Centralizar o módulo de conexão de carteira, espelhando exatamente o comportamento já estável da /page/rounds.
— Oferecer visão técnica e institucional do status do usuário, com persistência de sessão em todo o DApp.
— Garantir segurança, acessibilidade e consistência visual com as demais páginas (branding e UX globais).

Premissas confirmadas
— Rede principal: BNB Smart Chain (Chain ID 56).
— Provedor: RainbowKit (wagmi + ethers).
— Espelhamento do módulo de conexão de /page/rounds para /page/connect (sem duplicar lógica; reutilizar contexto/estado global).
— Painel de status global presente em todas as rotas (header/right), mostrando 4 parâmetros: Wallet Address truncado, Network (BNB/56), Balance DGT3, Balance USDT.
— Uma sessão de login global, com session timeout (valor máximo possível).
— /page/rounds mantém conexão + módulo de venda; /page/connect é status e gestão de sessão.

Arquitetura de componentes
	1.	WalletContextProvider (global)
— Responsável por: provider, signer, endereço, chainId, estados (connecting/connected/disconnected), erros.
— Exposto via React Context para todas as rotas.
— Persistência: storage leve (sessionStorage/localStorage) para lembrar última carteira (opt-in do RainbowKit).
	2.	ConnectModule (mirrored)
— Reuso do mesmo componente usado em /page/rounds (import e props idênticas).
— Slots: botão “Connect Wallet”, seleção de provedor, feedback de estados.
	3.	GlobalConnectionStatus (header/right)
— Badge compacto com ícone + estado; clique expande dropdown com os 4 parâmetros e ações rápidas.
— Exibido em todas as páginas (_app.tsx).
	4.	WalletDashboard (na /page/connect)
— Cards com: Wallet Address, Network, Balance DGT3, Balance USDT.
— Ações: Disconnect, Copiar endereço, View on explorer (BNBScan), Navegação rápida (/rounds, /desk, /data, /governance).
	5.	BalancesService
— Hook/serviço para leitura de BEP-20: DGT3 e USDT.
— Debounce e cache curto (ex.: 15–30 s) para reduzir RPC calls.
— Erros apresentados como placeholders/skeleton, nunca como blocos críticos.
	6.	NetworkGuard
— Verifica se chainId é 56.
— Se não for, apresenta “Switch Network” com ação de troca via wallet; fallback com instruções manuais se a carteira não suportar auto-switch.

Fluxos funcionais (estado e eventos)
A. Conectar
— Clique em “Connect Wallet” → RainbowKit modal → usuário escolhe provedor → sucesso: connected com {address, chainId}.
— Se chainId ≠ 56, aciona NetworkGuard para “Switch to BNB (56)”.
— Ao conectar, GlobalConnectionStatus atualiza em todas as rotas.

B. Atualização de conta/rede
— accountsChanged: atualizar address, limpar caches de saldo, repintar UI.
— chainChanged: validar 56; se não, exibir banner de rede incorreta + botão “Switch”.
— disconnect: limpar sessão, storage local e retornar ao estado “No wallet connected”.

C. Sessão
— Uma sessão global para o DApp.
— Timeout: até 24 h de inatividade (quando suportado; caso contrário, manter persistência padrão do RainbowKit).
— Ao expirar: limpar caches, manter UI segura, apresentar modal: “Session expired… reconnect”.

D. Leitura de saldos
— Balance DGT3 e Balance USDT via balanceOf(address).
— Atualização programada (polling leve, ex.: 30 s) e on-focus/on-reconnect.
— Placeholders enquanto carrega, retry exponencial em erro de RPC.

E. Desconectar
— Ação “Disconnect Wallet” → confirma → limpa storage e contexto → estado global disconnected.


**Estrutura funcional**

**1. Hero / Overview**
— Título: *Wallet Connection Interface*
— Subtítulo: *Access protocol utilities and data visibility through a verified wallet session.*
— Microcopy: *Connect your EVM wallet to interact securely with DGTEnergy modules.*


**2. Módulo de Conexão (espelhamento da /page/rounds)**
— O módulo de conexão da /page/rounds será **espelhado integralmente** para a /page/connect.
— A funcionalidade base será idêntica: integração via **RainbowKit** (com wagmi + ethers).
— Mantém provedores já ativos (Metamask, WalletConnect, Rainbow, Trust, Coinbase Wallet).
— O espelhamento deve preservar:
• Estado de conexão global;
• Gerenciamento de sessão (contexto de wallet provider);
• Hooks e listeners para event changes (accountsChanged, chainChanged, disconnect).
— A /page/connect **não terá duplicação de lógica**, apenas o espelhamento do módulo e estado global (WalletContextProvider).

**Observação:** A função de venda de tokens permanece **exclusiva da /page/rounds**. A /page/connect é estritamente voltada ao status de conexão e painel informativo.


**3. Painel de Status (Wallet Dashboard)**
Após a conexão, exibir os seguintes **quatro parâmetros institucionais**:
	1.	**Wallet Address (truncado)**
— Exemplo: 0xABCD...1234
— Tooltip: “Connected wallet address.”
	2.	**Network**
— Valor fixo: *BNB Smart Chain (Chain ID 56)*
— Placeholder visual: logotipo + nome da rede.
	3.	**Balance DGT3**
— Exibe saldo do token de utilidade (placeholder, lido do contrato principal).
	4.	**Balance USDT**
— Exibe saldo USDT na carteira conectada (placeholder, leitura BEP-20).

**Comportamento Global (Global Connection Status)**
— Este painel poderá ser espelhado **em todas as páginas do DApp**, exibido no topo direito da interface (layout fixo, z-index: 40).
— Exibição mínima (ícone conectado + saldo resumido).
— Ao clicar, expande o painel completo com os quatro parâmetros.
— Responsivo (reduzido para dropdown no mobile).


**4. Persistência de Sessão (Session Timeout)**
— O DApp deve manter uma **única sessão de login global** (não há necessidade de reconectar em cada página).
— Adicionar *session timeout* automático (valor máximo permitido pelo RainbowKit).
— Revalidação automática ao detectar chainChanged ou accountChanged.
— Timeout sugerido: **até 24h de inatividade** (se tecnicamente possível).
— Mensagem institucional ao expirar a sessão:

“Session expired for security reasons. Please reconnect your wallet to continue.”


**5. Navegação e Funções Secundárias**
Após a conexão, o usuário visualiza um painel com acessos diretos:
— *Go to Rounds* → /rounds (compra e whitelist).
— *Go to Desk* → /desk (staking e P2P).
— *Go to Data* → /data (documentos e auditorias).
— *Go to Governance* → /governance (votação e propostas).

**Botão adicional:** *Disconnect Wallet* → confirma a desconexão e limpa cache local.


**6. UX / UI Institucional**
— Layout: cartões rounded-xl shadow-sm border border-black/5 bg-white/80 backdrop-blur-sm p-6.
— Tipografia: Space Grotesk (títulos), Inter (texto).
— Paleta: Petroleum Blue #005F73, Graphite Gray #2F3E46, White #FAFAFA.
— Interações: hover leve; foco visível; transições 200–300 ms.
— Estados:
• Disconnected: card neutro “No wallet connected”.
• Connecting: skeleton loaders + spinner discreto.
• Connected: exibir 4 parâmetros + ações.
• Balances loading: “Fetching balances…”
• Error: “We couldn’t fetch your data. Retrying…”
• Session expired: “Session expired for security reasons. Please reconnect your wallet to continue.”
• Wrong Network: banner com ação “Switch to BNB (56)”.
• Error RPC: microalerta inline + retry automático.
— GlobalConnectionStatus: badge compacto; onClick abre painel com 4 parâmetros e links.

Navegação pós-conexão (atalhos)
— /rounds — compra e whitelist (mantém módulo de conexão nativo da página).
— /desk — operações (staking e P2P).
— /data — documentos, auditorias, relatórios.
— /governance — propostas e votação.
— Disconnect — ação de logout seguro.

**7. Segurança e Compliance**
— Rede principal: **BNB Smart Chain (Chain ID 56)**.
— O DApp deve rejeitar carteiras de redes não compatíveis.
— Nenhum dado é armazenado fora da sessão local; sem transmissão de chaves.
— Banner institucional fixo no rodapé:

“The DGT3Energy protocol connects only verified EVM wallets. Wallet data is read-only and never stored or transmitted off-chain.”

Telemetria e diagnósticos (opcional, sem PII)
— Eventos básicos: connect, disconnect, wrong_network, switch_network_success, balances_loaded, rpc_error.
— Coleta anônima (sem endereço completo; hash irreversível opcional).
— Logs somente em memória/console em ambiente de dev; respeitar LGPD/GDPR.

Performance e resiliência
— Debounce/polling moderado para balances (≥ 30 s).
— Suspense/skeleton em vez de loading bloqueante.
— Retry exponencial em erro de RPC com backoff.
— Evitar redesenhos; memoização de saldos/decimais.

Fallbacks e compatibilidade
— Se a carteira não suportar auto-switch: exibir instruções passo a passo para adicionar BNB (56).
— Se o navegador bloquear pop-ups/modal: render fallback inline com provedor alternativo.
— Modo somente leitura: se desconectado, permitir navegação, mas bloquear ações operacionais.

**8. Acessibilidade e Padrões Globais**
— A /page/connect deve herdar o mesmo comportamento de foco, contraste e feedback auditivo do restante do DApp.
— aria-live em mensagens de status (Connected / Disconnected).
— Ícones com aria-hidden="true".
— Contraste AA garantido em todos os textos.
— Mantém consistência global: header fixo, comportamento de scroll e animações idênticas às demais páginas.


NEXT_PUBLIC_CHAIN_ID=56
NEXT_PUBLIC_WALLET_PROVIDER=rainbowkit
NEXT_PUBLIC_TREASURY_ADDRESS=0xDGT3TREASURY000000000000000000000000000001
NEXT_PUBLIC_MULTISIG_ADDRESS=0xDGT3MULTISIG000000000000000000000000000002
NEXT_PUBLIC_DOCS_BASE=/data

Segurança e compliance
— Nunca solicitar seed phrase; somente assinaturas padrão de carteira.
— Não armazenar chaves ou dados sensíveis no backend; uso local apenas.
— Validar endereços e respostas de RPC; tratar erros com segurança.
— Exibir aviso fixo: “Wallet data is read-only and never stored or transmitted off-chain.”
— Padrão DGTE: evitar qualquer linguagem de promessa/retorno; manter disclaimer do protocolo.

**Bibliotecas:**
— wagmi + RainbowKit + ethers.js
— React Context para persistência da conexão global (WalletContextProvider).


# 07_Header V3 — Definições de Instruções (Componente Global)

**Estrutura e Hierarquia**

**1. Container Principal**
— Limite máximo: max-w-7xl mx-auto.
— Padding horizontal: px-4.
— Padding vertical:
• Padrão: py-3 md:py-4.
• Ao rolar: py-2.
— Layout: flex items-center justify-between.

**2. Logomarca (lado esquerdo)**
— Ícone da marca (/icons/logo-icon.svg):
• Sempre visível.
• Link para /home.
• Tamanho: h-8 md:h-10 w-auto.
• aria-label="Ir para a Home (DGT3Energy)".
— Logotipo textual (/icons/logo-full.svg):
• Visível apenas em md e acima.
• Some suavemente ao rolar (opacidade 0 e escala 95%).
• Classes de transição: transition-all duration-300 will-change-transform.

**3. Navegação Principal (lado direito)**
— Exibida apenas em telas médias ou maiores (hidden sm:flex).
— Alinhada à direita (items-center justify-end).
— Itens de menu (rotas):
• /home — Home
• /rounds — Rounds
• /desk — Desk
• /data — Data
• /governance — Governance
• /connect — Connect
— Tipografia:
• Fonte: *Space Grotesk / Inter*, text-sm, font-sans.
• Cor padrão: branca.
• Hover: hover:text-petroleum-900 (azul-petróleo, cor institucional).
• Focus: anel de foco visível focus-visible:ring-2 focus-visible:ring-white/60.
• Padding: px-2 py-1 com rounded discreto.
— aria-label="Navegação principal" aplicado ao <nav>.


**Estilo e Branding**

— Cores seguem a paleta institucional:
• Azul Petróleo — #005F73
• Branco Neutro — #FAFAFA
• Cinza Grafite — #2F3E46
— Removido o amarelo (hover:text-yellow-400) da versão anterior.
— Efeito visual refinado (leve, institucional, elegante).
— O logotipo textual e o ícone possuem proporções fixas (sem deformações).


**Acessibilidade (A11Y)**

— role="banner" aplicado ao <header>.
— aria-label="Navegação principal" no <nav>.
— Focus visível em todos os links de navegação.
— Contraste AA garantido para todos os estados (normal, hover, focus).
— aria-hidden="true" aplicado a ícones puramente decorativos (se houver).
— Suporte a teclado completo: navegação por Tab, foco e retorno previsíveis.


**Responsividade**

— Desktop e tablet: navegação horizontal completa.
— Mobile: o menu é oculto (hidden sm:flex), aguardando futura implementação do menu colapsável.
— O logotipo ícone permanece visível em todas as resoluções.


**Microinterações**

— Animações:
• fade e scale em logotipo textual ao rolar.
• Hover suave em links (mudança de cor).
— Transições uniformes: duration-300 ease-in-out.
— Nenhum movimento brusco ou parallax.


**Estados visuais**

— **Topo (default):** transparente, sem borda, padding maior.
— **Scrolled (>10px):**
• Fundo translúcido preto.
• Borda inferior sutil.
• Logotipo textual some.
• Padding reduzido.
— **Hover/Focus:** mudança de cor para azul institucional.
— **Active route:** (implementação futura) destacar página ativa com text-petroleum-900 e sublinhado leve.


**Considerações técnicas**

— Implementação utiliza useState e useEffect para observar window.scrollY.
— O evento scroll é limpo no cleanup do hook.
— O header deve manter z-50 para sobrepor o vídeo/hero da página /home.
— A estrutura não depende de componentes externos (autônoma e compatível com Next.js).


**Compliance e Institucionalidade**

— Nenhum CTA comercial ou linguagem promocional.
— Mantém o foco em identidade, navegação e clareza.
— Integra-se visualmente com o Hero da /home, sobrepondo-se ao vídeo loop com contraste adequado.


**Resumo Final**

O **Header V3** da DGTEnergy é um componente global, institucional e responsivo, projetado para reforçar a identidade da marca e oferecer navegação clara, acessível e estável.
Ele se adapta dinamicamente à rolagem, mantém a transparência no topo e transmite a estética premium e confiável do protocolo — leve, auditável e coerente com a identidade V3.


# 08_Footer V3 — Definições de Instruções (Componente Global)

**Objetivo**

Padronizar o **Footer** do DApp DGTEnergy dentro do ambiente V3, com foco institucional, legal e de branding.
O componente deve reforçar credibilidade, conter todos os canais oficiais e abrigar o **disclaimer obrigatório** exigido nas diretrizes do projeto (conforme nota de Web2/Web3 e compliance).


**Estrutura e Hierarquia**

O Footer deve conter três blocos principais:
	1.	**Identidade Institucional**
— Nome e logomarca da DGTEnergy (texto simples ou SVG).
— Descrição institucional curta:
“A decentralized gateway to verified energy operations. Transparent, secure, and anchored in utility.”
— Links sociais oficiais:
• Telegram → https://t.me/DGTEnergy
• Discord → https://discord.gg/DGTEnergy
• X (Twitter) → https://x.com/DGTEnergy
• LinkedIn → https://linkedin.com/company/dgteenergy (opcional, placeholder).
— Ícones SVG minimalistas com foco em clareza, em text-petroleum-900 (azul petróleo).
	2.	**Bloco Institucional / Documentação**
— Título: “Institutional”
— Lista de links:
• Whitepaper → /docs/whitepaper.pdf
• Tokenomics → /docs/tokenomics.pdf
• Legal Terms → /docs/legal_terms.pdf
• Contact → mailto:info@dgte.energy
— Todos com hover:underline e aria-label descritivo.
	3.	**Disclaimer e Copyright (base inferior)**
— Linha divisória superior sutil (border-t border-white/10 mt-10 pt-6).
— Texto em text-xs text-center text-neutral-500.
— Conteúdo obrigatório (conforme diretriz DGTEnergy):
“DGTEnergy is a utility-token protocol. Participation grants access to protocol utilities only — staking, governance, and data visibility — and does not represent equity, debt, or financial instruments. All allocations are performance-based, discretionary, and fully transparent on-chain.”
— Abaixo do disclaimer, copyright dinâmico:
© {new Date().getFullYear()} DGTEnergy. All rights reserved.


**Estilo e Branding**

— Fundo: bg-neutral-950 (ou bg-black/95 com leve transparência).
— Texto principal: text-neutral-300.
— Títulos e logotipo: text-white.
— Hover de links: text-petroleum-900 (cor institucional).
— Layout:
• Grid responsivo grid-cols-1 md:grid-cols-2 lg:grid-cols-3.
• Padding vertical: py-10 md:py-14.
• Padding horizontal: px-6 md:px-12.
— Tipografia:
• *Space Grotesk* para títulos.
• *Inter* para corpo e links.


**Acessibilidade**

— role="contentinfo" aplicado ao <footer>.
— Ícones sociais com aria-label (“Visit our Telegram”, etc.).
— Links com foco visível (focus-visible:ring-2 ring-petroleum-900/60).
— Contraste mínimo AA em texto e ícones garantido.
— Texto de disclaimer semanticamente separado em <small> ou <p> com aria-label="Legal disclaimer".


**Responsividade**

— Colunas empilhadas em mobile (grid-cols-1).
— Distribuição em duas colunas no tablet e três no desktop.
— Texto centralizado abaixo de 768px.
— Espaçamento consistente (gap-10 md:gap-14).


**Microcopy Institucional**

**Descrição curta (corpo superior):**

“DGTEnergy bridges digital capital and real-world energy assets with transparency, governance, and verified performance.”

**Disclaimer (fixo, não suprimível):**

“DGTEnergy is a utility-token protocol. Participation grants access to protocol utilities only — staking, governance, and data visibility — and does not represent equity, debt, or financial instruments. All allocations are performance-based, discretionary, and fully transparent on-chain.”


**Resumo Final**

O **Footer V3** serve como encerramento institucional e legal do DApp.
Deve conter:
— Identidade visual coerente com o restante da marca;
— Links sociais e institucionais auditáveis;
— Disclaimer obrigatório com texto fixo;
— Layout fluido, responsivo e de alto contraste;
— Estrutura simples, segura e acessível, com foco em transparência e credibilidade.


**Authorship Record**
SHA256: <preencher na exportação>
Generated by: Chili GPT (DGTEnergy Environment)
Approved by: De Goat Capital / DGTEnergy Core Team
Date:
Auth Level: Draft


# 09_UI-UX V3 — Comportamento Global (Definições de Instruções)


**Objetivo**

Padronizar o comportamento visual, interações e acessibilidade em todo o DApp DGTEnergy, garantindo consistência institucional, previsibilidade de uso e coerência com o ecossistema V3.
A diretriz UI/UX global define o comportamento de todos os componentes — páginas, módulos e elementos dinâmicos — conforme o padrão institucional e de marca.

**Princípios de Design**

— Clareza antes de complexidade: conteúdo hierarquizado e legível.
— Consistência: todas as páginas compartilham o mesmo grid, tipografia, paleta e ritmo visual.
— Feedback imediato: ações respondem visualmente de forma sutil e precisa.
— Acessibilidade: aderência ao WCAG 2.1 nível AA.
— Performance e estabilidade: priorizar percepção de fluidez e carregamento progressivo.

**Grid, Container e Breakpoints**

— Largura máxima: max-w-7xl (≈1280 px).
— Padding horizontal: px-4 (mobile) / px-6 (tablet) / px-8 (desktop).
— Breakpoints (Tailwind padrão):
• sm: 640px
• md: 768px
• lg: 1024px
• xl: 1280px
• 2xl: 1536px
— Grid base: 12 colunas; empilhamento em grid-cols-1 no mobile.

**Paleta e Tokens de Cor**

— Primária: Petroleum Blue #005F73
— Texto principal: Graphite Gray #2F3E46
— Fundo claro: White Neutral #FAFAFA
— Sobreposição: bg-black/40 (overlay) e bg-black/80 (header scrolled)
— Bordas: border-black/5
— Estados interativos:
• Hover/foco: variação do primário (80–100%)
• Sucesso, alerta e erro: tons sutis, derivados da paleta, sem saturação excessiva

**Tipografia**

— Títulos: *Space Grotesk* (semibold).
— Corpo: *Inter* (regular ou medium).
— Tamanho base: 16 px (corpo).
— Subtítulos: 18–20 px.
— Títulos de seção: 28–40 px.
— Números: tabular-nums para KPIs e métricas.

**Espaçamento e Ritmo**

— Entre seções: 64 px (desktop) / 48 px (mobile).
— Entre título e conteúdo: 16–24 px.
— Cards: p-6 (desktop) / p-4 (mobile).
— Linhas de texto: leading-6 ou leading-7 (legibilidade ótima).

**Componentes Base**

**1) Cards**
— rounded-xl border border-black/5 bg-white/80 backdrop-blur-sm shadow-sm p-6.
— Hover: scale-[1.02] + shadow-md (200 ms).
— Foco: focus-visible:ring-2 ring-petroleum-900/60.

**2) Botões**
— Primário: fundo azul petróleo, texto branco, rounded-lg.
— Secundário: borda border-petroleum-900/50, texto primário.
— Fantasma: texto primário sem borda, hover:text-petroleum-900.
— Estados: disabled:opacity-50.
— Altura padrão: h-10; destaque: h-12.

**3) Links**
— Navegação: hover:text-petroleum-900; textos: hover:underline.
— Sempre com focus-visible e área de clique adequada.

**4) Inputs/Formulários**
— h-11, borda sutil, focus:ring-2 ring-petroleum-900/50.
— Placeholder acessível (contraste ≥4.5:1).
— Erro: borda suave e microcopy de contexto.

**5) Tabelas**
— Cabeçalho fixo; linhas alternadas bg-black/2.
— Texto numérico tabular.
— Scroll interno em mobile; sticky header em desktop.

**6) Abas e Accordions**
— Abas com indicador inferior ativo (border-b-petroleum-900).
— Accordions acessíveis (<details><summary>).

**7) Modais / Lightbox**
— Fundo bg-black/60 backdrop-blur-sm.
— Fechamento por ESC e clique externo.
— Foco aprisionado enquanto aberto; restaura foco no fechamento.

**8) Toasts / Alertas**
— Máximo simultâneo: 2.
— Posição: canto superior direito.
— Auto-fechamento: 4–6 s, pausado ao focar.
— aria-live="polite".

**Motion e Transições**

— Duração padrão: 200–300 ms (ease-in-out).
— Animações: fade e slide discretos.
— Preferência reduzida: respeitar prefers-reduced-motion.
— Evitar parallax e movimentos bruscos.

**Acessibilidade (A11Y)**

— Contraste AA mínimo garantido.
— Foco visível em todos os elementos interativos.
— aria-live para estados dinâmicos (conexão, carregamento, erro).
— Ícones decorativos com aria-hidden="true".
— Teclado funcional (Tab, Shift+Tab, Enter, Esc).
— Linguagem simples, sem jargões não explicados.

**Estados de Dados**

— **Loading:** skeleton loaders (linhas ou blocos compatíveis com layout).
— **Empty:** mensagem clara + CTA sugerida.
— **Error:** microcopy objetiva + botão “Retry”.
— **Placeholder:** usar “Data under on-chain verification” quando não houver dados públicos.

**Camadas e Hierarquia Visual**

— Header: z-50
— GlobalConnectionStatus: z-40
— Modais/Lightbox: z-50+
— Toasts: z-50+
— Dropdowns e menus: z-30

**Componente Global — Status de Conexão**

— Presente em todas as rotas (canto superior direito).
— Mostra: Wallet, Network, Balance DGT3 e USDT.
— Estados: Connected, Disconnected, Wrong Network, Loading.
— Timeout global (máx. suportado); reconexão em accountChanged/chainChanged.
— Banner de rede incorreta: “Switch to BNB (56)”.

**Regras de Conteúdo**

— Nenhum número ou KPI manual; dados sempre de origem /data ou on-chain.
— Linguagem neutra e institucional.
— Proibidos: *profit, ROI, yield, investment, return, interest, gain, guaranteed income.*
— Permitidos: *operational result, verified performance, protocol distribution, performance output.*
— Sempre incluir rótulo ou contexto para métricas (“Performance verificada em /data”).

**Padrões de Página (herdados)**

— Header global (V3) com transparência e shrink on scroll.
— Footer global (V3) com disclaimer obrigatório.
— Hero Sections com contraste (overlay preto translúcido).
— Estrutura: título claro + microcopy curto + CTA ou link contextual.
— Sessões: separadas visualmente por espaçamento, não por linhas duras.

**Ergonomia Mobile**

— Áreas clicáveis ≥ 44×44 px.
— Navegação por polegar (ações principais acessíveis).
— Tipografia ≥ 16 px.
— Textos curtos, organizados em blocos e listas.
— Scroll fluido, sem animações excessivas.

**Performance e Resiliência**

— Lazy-load de imagens e gráficos; priority apenas em logotipos.
— Debounce ≥15 s para polling on-chain.
— Retry exponencial em falhas RPC.
— Skeletons e espaços reservados para evitar saltos visuais.
— Minimizar reflows e manter altura constante nos blocos.

**Compliance e Disclaimer (Globais)**

— Footer com disclaimer completo obrigatório:

“DGTEnergy is a utility-token protocol. Participation grants access to protocol utilities only — staking, governance, and data visibility — and does not represent equity, debt, or financial instruments. All allocations are performance-based, discretionary, and fully transparent on-chain.”
— Em módulos de staking ou performance:
“Alocações variáveis e não garantidas, vinculadas à performance verificada e publicadas em /data.”
— Endereços on-chain validados com regex 0x[a-fA-F0-9]{40} antes de exibição.

**Boas Práticas de Código (UI/UX)**

— Componentes puros; hooks limpos e autocontidos.
— Tokens de cor e espaçamento padronizados (Tailwind ou CSS Vars).
— Sem valores hardcoded repetidos.
— Estados e efeitos limpos em useEffect.
— next/image para imagens raster, SVG inline para ícones.
— Responsividade e acessibilidade verificadas a cada build.

**Checklist de Qualidade**

✔ Contraste AA e foco verificados.
✔ Responsividade testada em breakpoints (sm → 2xl).
✔ Skeletons ativos em estados de carregamento.
✔ Nenhum número manual em KPIs.
✔ Microcopy de compliance presente.
✔ Header e Status não sobrepõem conteúdos interativos.
✔ Desempenho auditado em Lighthouse (nota mínima 90).
