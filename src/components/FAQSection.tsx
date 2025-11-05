// src/components/FAQSection.tsx
import { useState } from "react";

const faqs = [
  {
    question: "What is DGT-Energy?",
    answer:
      "DGT-Energy is a utility token anchored in real-world energy receivables, offering staking rewards and governance participation.",
  },
  {
    question: "Is DGT-Energy a security?",
    answer:
      "No. DGT-Energy is a utility token. It does not represent equity, debt or profit-sharing rights. It grants access to the ecosystem and governance participation.",
  },
  {
    question: "How do I participate in the token sale?",
    answer:
      "You can join the Seed Round via the Rounds page. Connect your wallet and follow the instructions for whitelist or direct purchase.",
  },
  {
    question: "How is the treasury managed?",
    answer:
      "The protocol treasury is controlled via smart contracts, with partial DAO oversight and predefined allocation rules.",
  },
  {
    question: "Can I stake DGT-Energy tokens?",
    answer:
      "Yes. Staking will be available in the official dApp. Rewards are distributed in USDT based on protocol performance.",
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
