import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import icon from "@/assets/logo-icon.svg";
import Image from "next/image";

export default function RoadmapSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  const smooth = useSpring(height, { stiffness: 120, damping: 20 });

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col bg-neutral-50 py-2 text-gray-900 gap-8 lg:px-10 pl-10 pr-2 container mx-auto"
    >
      <motion.div
        className="absolute lg:left-1/2 lg:-translate-x-1/2 left-2 top-0 w-2 bg-petroleum-900 rounded-full"
        style={{ height: smooth }}
      >
        <div className="absolute bottom-0 bg-neutral-50 rounded-full -translate-x-1/2 left-1/2 lg:size-12 size-8">
          <Image src={icon} alt="DGT Icon" className="scale-125" />
        </div>
      </motion.div>
      <div className="flex justify-between">
        <div className="lg:flex hidden"></div>
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-white bg-petroleum-900 w-fit select-none">
            Phase 1
          </div>
          <h1 className="font-display text-2xl font-semibold">
            Launch & Whitelist (Q4 2025)
          </h1>
          <p>
            Deployment of all smart contracts (DGT3Token, TokenSale, Treasury)
            and DApp. Whitelist launch at 0.030 USDT/DGT3, with validation
            on-chain, contracts audited, and treasury structure linked to
            operations and verifiable reserves.
          </p>
          <p>
            <b>Meta:</b> Complete Whitelist with independent audit and first FDR
            published
          </p>
        </div>
      </div>
      <div className="flex justify-between lg:pr-0 pr-6">
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-petroleum-900 border border-petroleum-900 bg-transparent w-fit select-none">
            Phase 2
          </div>
          <h1 className="font-display text-2xl font-semibold">
            Progressive Rounds & Expansion (Q4 2025 → Q2 2026)
          </h1>
          <p>
            Progressive rounds under step-up model, enabling institutional
            expansion and auditable governance. Each round reflects treasury
            growth and verified energy contract expansion.
          </p>
          <p>
            <b>Meta:</b> Expand global participation while maintaining on-chain
            integrity and transparency.
          </p>
        </div>
        <div className="lg:flex hidden"></div>
      </div>

      <div className="flex justify-between">
        <div className="lg:flex hidden"></div>
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-petroleum-900 border border-petroleum-900 bg-transparent w-fit select-none">
            Phase 3
          </div>
          <h1 className="font-display text-2xl font-semibold">
            P2P Desk & Treasury Liquidity (Q1 2026)
          </h1>
          <p>
            Launch of <code>/desk</code> module — KYC-gated peer-to-peer
            environment with escrow and liquidity controls. Treasury acts
            exclusively as buyer, ensuring orderly and predictable secondary
            liquidity.
          </p>
          <p>
            <b>Meta:</b> Consolidate institutional secondary market — secure and
            transparent.
          </p>
        </div>
      </div>

      <div className="flex justify-between lg:pr-0 pr-6">
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-petroleum-900 border border-petroleum-900 bg-transparent w-fit select-none">
            Phase 4
          </div>
          <h1 className="font-display text-2xl font-semibold">
            Staking Launch (Q2 2026)
          </h1>
          <p>
            Activation of staking module under Full Deployment Rule (FDR).
            Performance-based allocations in USDT, proportional to verified
            Treasury operations, with all distributions published on-chain.
          </p>
          <p>
            <b>Meta:</b> Begin verifiable distribution and performance cycles.
          </p>
        </div>
        <div className="lg:flex hidden"></div>
      </div>

      <div className="flex justify-between">
        <div className="lg:flex hidden"></div>
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-petroleum-900 border border-petroleum-900 bg-transparent w-fit select-none">
            Phase 5
          </div>
          <h1 className="font-display text-2xl font-semibold">
            Reinvestment & Treasury Growth (Q3-Q4 2026)
          </h1>
          <p>
            Execution of Conditional Reinvestment Rule: verified excess &gt;1.2%
            reallocated or redistributed per multisig governance, maintaining
            transparency and capital integrity.
          </p>
          <p>
            <b>Meta:</b> Strengthen treasury sustainability while preserving
            traceability.
          </p>
        </div>
      </div>

      <div className="flex justify-between lg:pr-0 pr-6">
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-petroleum-900 border border-petroleum-900 bg-transparent w-fit select-none">
            Phase 6
          </div>
          <h1 className="font-display text-2xl font-semibold">
            Completion & Expansion (2027+)
          </h1>
          <p>
            Completion of 70 rounds (1B DGT3 supply cap). Ongoing staking,
            reinvestment, and audits. Potential DAO-approved exchange listings
            and multichain expansion under compliant jurisdictions.
          </p>
          <p>
            <b>Meta:</b> Consolidate DGTEnergy as global infrastructure for
            trust and energy transparency.
          </p>
        </div>
        <div className="lg:flex hidden"></div>
      </div>
    </section>
  );
}
