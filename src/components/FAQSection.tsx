// src/components/FAQSection.tsx
import { useState } from "react";

const faqs = [
  {
    question: "What is DGT-Energy?",
    answer:
      "DGTEnergy is a utility-token protocol connecting participants with verified energy receivables. Token holders access staking, governance, and transparency features — not equity or debt.",
  },
  {
    question: "Is DGT-Energy a security?",
    answer:
      "No. DGT3 is a utility token providing access to protocol features only — staking, governance, and data visibility. It does not represent equity, debt, or financial instruments.",
  },
  {
    question: "How do I participate in the token sale?",
    answer:
      "Connect your wallet at dgte.energy/rounds, complete KYC, approve USDT, and participate in the Whitelist (SAFT) or Progressive Rounds. All steps are outlined on-chain.",
  },
  {
    question: "How is the treasury managed?",
    answer:
      "The treasury is controlled by a 2-of-3 multisig (Karine + Pedro) with board oversight for divergence resolution. All movements are disclosed in /data with transaction hashes and verifiable proof.",
  },
  {
    question: "Can I stake DGT-Energy tokens?",
    answer:
      "Yes, once the Full Deployment Rule (FDR) is met for your purchase phase. Staking provides access to performance-based USDT distributions derived from verified energy operations.",
  },
  {
    question: "What are the risks?",
    answer:
      "DGT3 participation involves smart contract risk, regulatory uncertainty, execution risk, and market volatility. Allocations are variable and discretionary. Read full risk disclosure in /rounds.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAFAFA] text-energy-gray py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <ul className="space-y-6">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border border-neutral-300 rounded-lg bg-white shadow-md transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 font-sans text-left text-lg font-medium text-energy-gray focus:outline-none"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-neutral-600">
                  {faq.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
