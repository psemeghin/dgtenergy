// src/pages/rounds.tsx
import Head from "next/head";
import { useAccount } from "wagmi";
import Link from "next/link";

export default function RoundsPage() {
  const { isConnected } = useAccount();

  return (
    <>
      <Head>
        <title>DGTEnergy — Token Sale Portal</title>
        <meta
          name="description"
          content="Participe da venda do token DGT-Energy. Etapas transparentes com acesso antecipado e vantagens para investidores estratégicos."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800 bg-white">
        {/* Hero Section com painel de compra */}
        <section className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            Participar da Venda de Tokens
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-6">
            Acompanhe as fases e oportunidades de compra do token DGT-Energy.
          </p>

          {/* Painel de Compra */}
          {isConnected ? (
            <div className="bg-gray-100 p-6 rounded-lg max-w-xl mx-auto shadow-md mb-6">
              <p className="mb-2 text-sm font-medium text-gray-700">
                Comprar Tokens DGT
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Use USDT (BEP-20) para adquirir seus tokens DGTEnergy.
              </p>
              <input
                type="number"
                placeholder="1000"
                className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300"
              />
              <div className="flex gap-4 justify-center">
                <button className="bg-yellow-400 hover:opacity-90 px-6 py-2 font-semibold rounded-md">
                  Aprovar
                </button>
                <button className="bg-green-500 hover:opacity-90 text-white px-6 py-2 font-semibold rounded-md">
                  Comprar
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              Conecte sua carteira para comprar tokens.
            </p>
          )}
        </section>

        {/* Progress Card da Etapa Ativa */}
        <section className="max-w-xl mx-auto mb-12">
          <div className="bg-white shadow p-6 border border-gray-200 rounded-lg">
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Etapa Atual: Whitelist
            </h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Objetivo:</strong> 350.000 USDT</li>
              <li><strong>Tokens disponíveis:</strong> 18.000.000</li>
              <li><strong>Preço por token:</strong> 0.030 USDT</li>
              <li><strong>Status:</strong> Aberta</li>
              <li><strong>Incentivo:</strong> Early Bird</li>
            </ul>
          </div>

          {/* Lâmina PDF */}
          <div className="text-center mt-4">
            <a
              href="/docs/LaminaExample1.pdf"
              className="text-blue-600 underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar Lâmina da Etapa
            </a>
          </div>
        </section>

        {/* Cards das Etapas */}
        <section className="mb-20">
          <div className="text-center mb-4">
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              As etapas Early Bird garantem tokens a preço fixo, valorização progressiva no mercado secundário (P2P), tokens bloqueados para estabilidade de preço, e conexão direta com contratos reais no setor energético.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Etapa 1 - Whitelist */}
            <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Whitelist (Aberta)</h3>
              <p className="text-sm text-gray-600 mb-4">
                Preço: <strong>0.030</strong> USDT/DGTE<br />
                Tokens: <strong>18.000.000</strong><br />
                Incentivo Early Bird
              </p>
              <Link href="/connect">
                <span className="inline-block bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:opacity-90">
                  Participar
                </span>
              </Link>
            </div>

            {/* Etapa 2 - Seed */}
            <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Seed (Em breve)</h3>
              <p className="text-sm text-gray-600 mb-4">
                Preço: <strong>0.036</strong> USDT/DGTE<br />
                Tokens: <strong>14.500.000</strong><br />
                Incentivo Early Bird
              </p>
              <span className="inline-block bg-yellow-400 font-semibold px-4 py-2 rounded-md cursor-default opacity-70">
                M.O.U. Assinado
              </span>
            </div>

            {/* Etapa 3 - Rounds */}
            <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Rounds (Aguardando)</h3>
              <p className="text-sm text-gray-600 mb-4">
                Preço: <strong>0.040</strong> USDT/DGTE<br />
                Tokens: Variável por rodada<br />
                Valor conforme contrato fechado
              </p>
              <span className="inline-block bg-gray-400 text-white font-semibold px-4 py-2 rounded-md cursor-default opacity-60">
                Em Hold
              </span>
            </div>
          </div>
        </section>

        {/* Conectar Carteira */}
        {!isConnected && (
          <section className="text-center mt-12">
            <p className="text-gray-500 text-sm">Conecte sua carteira para participar da compra de tokens.</p>
            <Link href="/connect">
              <span className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:opacity-90">
                Conectar Carteira
              </span>
            </Link>
          </section>
        )}
      </main>
    </>
  );
}
