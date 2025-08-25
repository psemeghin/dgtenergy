import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="dark bg-[#0b0d0f] text-gray-100 min-h-screen">
      <Head>
        <title>DGT-Energy | A New Gateway to Energy Finance</title>
      </Head>

      <Header />

      {/* 1. Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center px-6">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-70">
          <source src="/earth-lights.webm" type="video/webm" />
        </video>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold">A New Gateway to Energy Finance</h1>
          <p className="mt-4 text-lg text-gray-300">Utility Token for Real-World Energy Assets</p>
          <a href="/rounds" className="mt-6 inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-lg">
            Join the Seed
          </a>
        </div>
      </section>

      {/* 2. Sobre o Projeto */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About the Project</h2>
        <p className="text-gray-300">
          DGT-Energy is a protocol that connects Web3 capital with real-world
          energy assets through a hybrid DAO model and transparent on-chain
          operations.
        </p>
      </section>

      {/* 3. Utilidade do Token */}
      <section id="utility" className="bg-gray-900 py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Token Utility</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded">Staking — Rewards in USDT</div>
          <div className="p-6 border rounded">Governance — Vote in DAO</div>
          <div className="p-6 border rounded">Access — Secure P2P Trading</div>
        </div>
      </section>

      {/* 4. Dashboard */}
      <section id="dashboard" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <p className="text-gray-300">Transparency in real time — see capital allocation and performance.</p>
      </section>

      {/* 5. Governança */}
      <section id="governance" className="bg-gray-900 py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Transparency & Governance</h2>
        <p className="text-center text-gray-300">Hybrid DAO · On-chain treasury · Audited contracts</p>
      </section>

      {/* 6. Roadmap */}
      <section id="roadmap" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Phase 0 – Foundation</li>
          <li>Phase 1 – Protocol Launch (Q3 2025)</li>
          <li>Phase 2 – Ecosystem Expansion</li>
          <li>Phase 3 – DAO Maturity</li>
        </ul>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="bg-gray-900 py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="border p-4 rounded">
            <summary>Is DGTEnergy a stock?</summary>
            <p>No. It is a utility token without equity or debt nature.</p>
          </details>
          <details className="border p-4 rounded">
            <summary>Do I need KYC?</summary>
            <p>Only for institutional rounds. Open access otherwise.</p>
          </details>
        </div>
      </section>

      <Footer />
    </div>
  );
}
