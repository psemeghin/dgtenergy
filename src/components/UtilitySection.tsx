// src/components/UtilitySection.tsx

import Image from "next/image";

const utilities = [
  {
    title: "Staking Rewards",
    description: "Earn variable returns in USDT, directly from real-world energy flows.",
    icon: "/icons/icon-staking.svg",
  },
  {
    title: "Treasury Access",
    description: "Track locked supply, protocol liquidity and token flow in real time.",
    icon: "/icons/icon-treasury-flow.svg",
  },
  {
    title: "Governance",
    description: "Propose and vote on key parameters via DGT DAO.",
    icon: "/icons/icon-dao-governance.svg",
  },
  {
    title: "Performance Dashboard",
    description: "Access analytics and KPIs anchored to energy receivables.",
    icon: "/icons/icon-performance-kpi.svg",
  },
  {
    title: "Token Utility",
    description: "Use DGT across our ecosystem, P2P, treasury and affiliate partners.",
    icon: "/icons/icon-token-utility.svg",
  },
  {
    title: "Real Assets",
    description: "Each token backed by exposure to receivables in real-world energy markets.",
    icon: "/icons/icon-energy-assets.svg",
  },
];

export default function UtilitySection() {
  return (
    <section id="utility" className="w-full bg-[#FAFAFA] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E46] mb-4 font-display">
          Utility-Driven Value
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore the real use cases of DGT-Energy in our decentralized ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {utilities.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 text-left border border-[#E5E7EB]"
            >
              <div className="w-12 h-12 mb-4">
                <Image src={item.icon} alt={item.title} width={48} height={48} />
              </div>
              <h3 className="text-xl font-semibold text-[#005F73] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
