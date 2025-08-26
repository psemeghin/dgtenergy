// src/pages/desk.tsx
import MetaHead from "../components/MetaHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function DeskPage() {
  const [activeTab, setActiveTab] = useState<"staking" | "p2p" | "analytics">("staking");

  return (
    <>
      <MetaHead />
      <Header />
      <main className="bg-[#FAFAFA] text-gray-900 py-20 px-6 scroll-smooth">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-center mb-4">
            DGTEnergy Desk
          </h1>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-2xl mx-auto font-sans">
            All your decentralized finance tools in one place: Stake, trade, and analyze performance with full transparency.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-10 gap-4">
            {["staking", "p2p", "analytics"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-energy-blue text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {tab === "staking" && "Staking"}
                {tab === "p2p" && "P2P Trading"}
                {tab === "analytics" && "Analytics"}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            {activeTab === "staking" && (
              <>
                <h2 className="text-2xl font-semibold mb-4 font-display">
                  Stake Your DGTEnergy
                </h2>
                <p className="text-sm text-gray-600 mb-6 font-sans">
                  Earn USDT rewards based on protocol performance. Your tokens remain liquid — no lock-up required.
                </p>
                <div className="text-center text-gray-400 font-mono">
                  {/* Future: integrate wagmi + staking data */}
                  [ Connect your wallet to access staking features ]
                </div>
              </>
            )}

            {activeTab === "p2p" && (
              <>
                <h2 className="text-2xl font-semibold mb-4 font-display">
                  Peer-to-Peer Trading & Escrow
                </h2>
                <p className="text-sm text-gray-600 mb-6 font-sans">
                  Trade DGTEnergy tokens directly with other users using on-chain escrow protection.
                </p>
                <div className="text-center text-gray-400 font-mono">
                  [ Coming soon: P2P order book and transaction flow ]
                </div>
              </>
            )}

            {activeTab === "analytics" && (
              <>
                <h2 className="text-2xl font-semibold mb-4 font-display">
                  Protocol Analytics
                </h2>
                <p className="text-sm text-gray-600 mb-6 font-sans">
                  Real-time transparency: track KPIs, staking yield, treasury allocation and protocol health.
                </p>
                <div className="text-center text-gray-400 font-mono">
                  [ Charts and metrics coming soon ]
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
