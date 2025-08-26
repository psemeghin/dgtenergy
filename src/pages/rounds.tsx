// /src/pages/rounds.tsx
import Head from "next/head";

export default function RoundsPage() {
  return (
    <>
      <Head>
        <title>DGTEnergy — Token Sale Portal</title>
        <meta
          name="description"
          content="Participate in the DGTEnergy Token Sale. Transparent rounds with progressive valuation and real-world energy backing."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            DGTEnergy Token Sale Portal
          </h1>
          <p className="font-sans text-lg text-gray-500 mb-6">
            Progressive rounds with fixed supply and valuation step-up.
          </p>
          <div className="bg-energy-sand p-4 rounded-md inline-block text-sm font-medium text-white">
            Seed Round · Target: 420k USDT · Price: 0.036 USDT/DGTE
          </div>
        </section>

        {/* Token Sale Cards */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Seed */}
          <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-xl transition">
            <h2 className="font-display text-xl mb-2">Seed Round (Open)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Fixed price at <strong>0.036</strong> USDT/DGTE, targeting{" "}
              <strong>420k</strong> USDT. Unsold tokens remain locked.
            </p>
            <a
              href="/connect"
              className="inline-block mt-2 bg-energy-green text-black font-semibold px-4 py-2 rounded-md"
            >
              Join the Seed
            </a>
          </div>

          {/* Private */}
          <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-xl transition">
            <h2 className="font-display text-xl mb-2">Private Round (Upcoming)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Price step-up to <strong>0.038</strong> USDT/DGTE. Whitelist only.
              Strategic partner allocation.
            </p>
            <a
              href="#"
              className="inline-block mt-2 bg-energy-blue text-white font-semibold px-4 py-2 rounded-md"
            >
              Join Whitelist
            </a>
          </div>

          {/* Pre-Sale */}
          <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-xl transition">
            <h2 className="font-display text-xl mb-2">Pre-Sale (Planned)</h2>
            <p className="text-sm text-gray-600 mb-4">
              Public participation at <strong>0.041</strong> USDT/DGTE. Limited
              allocation. Compliance may apply.
            </p>
            <a
              href="#"
              className="inline-block mt-2 bg-energy-gray text-white font-semibold px-4 py-2 rounded-md"
            >
              View Details
            </a>
          </div>
        </section>

        {/* Step-Up Chart */}
        <section className="text-center mb-20">
          <h3 className="font-display text-2xl mb-2">Valuation Step-Up</h3>
          <p className="text-gray-500 mb-4">
            Early participants benefit from progressive increase.
          </p>
          <img
            src="/media/stepup_chart_placeholder.png"
            alt="Step-Up Price Chart"
            className="mx-auto max-w-md"
          />
        </section>
{/* Whitelist & Wallet Connect */}
<section className="max-w-3xl mx-auto mb-20">
  <h3 className="font-display text-2xl text-center mb-6">
    Private Round Whitelist & Wallet Access
  </h3>

  {/* Whitelist Form */}
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
    <h4 className="font-sans text-lg font-medium mb-4 text-gray-700">
      Join the Whitelist
    </h4>
    <form className="grid gap-4 md:grid-cols-2">
      <input
        type="text"
        placeholder="Full Name"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energy-green"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energy-green"
      />
      <select
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-energy-green col-span-2"
      >
        <option>Select Country</option>
        <option>Brazil</option>
        <option>Italy</option>
        <option>USA</option>
        <option>Germany</option>
        <option>Singapore</option>
        <option>Other</option>
      </select>
      <button
        type="submit"
        className="bg-energy-green text-black font-semibold px-6 py-2 rounded-md mt-2 hover:opacity-90 col-span-2"
      >
        Join Whitelist
      </button>
    </form>
  </div>

  {/* Wallet Connect Placeholder */}
  <div className="bg-gray-100 rounded-lg p-6 border border-gray-300 text-center">
    <h4 className="font-sans text-lg font-medium mb-2 text-gray-700">
      Connect Your Wallet
    </h4>
    <p className="text-sm text-gray-500 mb-4">
      This feature is currently in placeholder mode for the MVP. No wallet data is collected.
    </p>
    <button
      className="bg-energy-blue text-white font-semibold px-6 py-2 rounded-md hover:opacity-90"
    >
      Connect Wallet
    </button>
  </div>
</section>
        {/* Compliance Notes */}
        <section className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
          <p className="mb-2">
            <strong>Disclaimer:</strong> DGTEnergy is a utility token. It does not represent
            equity, debt or profit-sharing rights. Rewards via staking are discretionary and
            based on performance. Participation may require KYC/AML in some jurisdictions.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a href="/docs/whitepaper.pdf" className="underline text-energy-blue">
                Whitepaper
              </a>{" "}
              — Protocol Overview
            </li>
            <li>
              <a href="/docs/product1_factsheet.pdf" className="underline text-energy-blue">
                Product 1 Factsheet
              </a>{" "}
              — Energy Receivables
            </li>
            <li>
              <a href="/docs/tokenomics.pdf" className="underline text-energy-blue">
                Tokenomics
              </a>{" "}
              — Token structure & rounds
            </li>
            <li>
              <a href="/docs/legal_terms.pdf" className="underline text-energy-blue">
                Legal Terms
              </a>{" "}
              — Utility Token Disclaimers
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
