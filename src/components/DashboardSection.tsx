// src/components/DashboardSection.tsx

import Image from "next/image";

const metrics = [
  {
    title: "Energy Receivables",
    value: "$24.5M",
    description: "Tokenized from real-world energy clients",
    icon: "/icons/icon-energy-assets.svg",
  },
  {
    title: "Total Supply",
    value: "1,000,000,000 DGT",
    description: "Fixed. No burn. No mint. 100% transparent.",
    icon: "/icons/icon-token-supply.svg",
  },
  {
    title: "Protocol Treasury",
    value: "$3.2M",
    description: "Locked assets across all rounds and LPs",
    icon: "/icons/icon-treasury-lock.svg",
  },
  {
    title: "Staking Yield",
    value: "15–30% APY",
    description: "Backed by performance of energy receivables",
    icon: "/icons/icon-staking-yield.svg",
  },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="w-full bg-[#2F3E46] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4 font-display">
          Protocol Metrics
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          A transparent and performance-anchored token economy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-[#334147] rounded-xl p-6 border border-[#4C5C64] text-left hover:shadow-md transition"
            >
              <div className="w-10 h-10 mb-4">
                <Image src={item.icon} alt={item.title} width={40} height={40} />
              </div>
              <h3 className="text-lg font-medium text-[#A67F59]">{item.title}</h3>
              <p className="text-2xl font-bold my-1">{item.value}</p>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
