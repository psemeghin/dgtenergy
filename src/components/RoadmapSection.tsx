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
      className="relative flex flex-col bg-gray-50 py-2 text-gray-900 gap-8 lg:px-10 pl-10 pr-2 container mx-auto"
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
          <h1 className="font-display text-2xl font-semibold">Launch & Whitelist (Q4 2025)</h1>
          <p>
            Deployment dos contratos DGT3Energy (BEP-20) e abertura do DApp
            completo. Whitelist em <b>0.030 USDT/DGT3</b>, com foco em{" "}
            <b>
              validação on-chain, contratos auditados e estrutura de tesouraria
              vinculada a operações e reservas verificáveis.
            </b>
          </p>
          <p>
            <b>Meta:</b> concluir whitelist com auditoria independente e
            primeiro FDR publicado.
          </p>
        </div>
      </div>
      <div className="flex justify-between lg:pr-0 pr-6">
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-white bg-petroleum-900 w-fit select-none">
            Phase 2
          </div>
          <h1 className="font-display text-2xl font-semibold">
            Progressive Rounds & Institutional Expansion (Q4 2025 → Q2 2026)
          </h1>
          <p>
            Rodadas progressivas sob modelo <i>step-up</i>, permitindo expansão
            institucional e governança auditável. Cada rodada reflete a
            ampliação da tesouraria e o crescimento de contratos energéticos
            verificados.
          </p>
          <p>
            <b>Meta:</b> ampliar a participação global mantendo integridade e
            transparência on-chain.
          </p>
        </div>
        <div className="lg:flex hidden"></div>
      </div>

      <div className="flex justify-between">
        <div className="lg:flex hidden"></div>
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-white bg-petroleum-900 w-fit select-none">
            Phase 3
          </div>
          <h1 className="font-display text-2xl font-semibold">P2P Desk & Treasury Liquidity (Q1 2026)</h1>
          <p>
            Lançamento do módulo <code>/desk</code>, ambiente de trocas P2P com
            escrow e controle de liquidez. A tesouraria atua exclusivamente como
            compradora, garantindo liquidez ordenada e previsível.
          </p>
          <p>
            <b>Meta:</b> consolidar mercado secundário institucional, seguro e
            transparente.
          </p>
        </div>
      </div>

      <div className="flex justify-between lg:pr-0 pr-6">
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-white bg-petroleum-900 w-fit select-none">
            Phase 4
          </div>
          <h1 className="font-display text-2xl font-semibold">Staking Launch (Q2 2026)</h1>
          <p>
            Ativação do módulo de staking sob a{" "}
            <b>Full Deployment Rule (FDR)</b>. Distribuições proporcionais à
            performance verificada, com todas as alocações publicadas on-chain.
          </p>
          <p>
            <b>Meta:</b> iniciar ciclos mensais verificáveis de distribuição e
            performance.
          </p>
        </div>
        <div className="lg:flex hidden"></div>
      </div>

      <div className="flex justify-between">
        <div className="lg:flex hidden"></div>
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-white bg-petroleum-900 w-fit select-none">
            Phase 5
          </div>
          <h1 className="font-display text-2xl font-semibold">
            Reinvestment & Treasury Growth (Q3–Q4 2026)
          </h1>
          <p>
            Execução da <b>Regra de Reinvestimento Condicional:</b> excedentes
            de performance (≥ 1.2%) são reinvestidos ou redistribuídos conforme
            governança multisig.
          </p>
          <p>
            <b>Meta:</b> fortalecer sustentabilidade da tesouraria, mantendo
            transparência e rastreabilidade integral.
          </p>
        </div>
      </div>

      <div className="flex justify-between lg:pr-0 pr-6">
        <div className="lg:w-2/5 flex flex-col gap-2">
          <div className="text-xs rounded-full py-0.5 px-2 text-white bg-petroleum-900 w-fit select-none">
            Phase 6
          </div>
          <h1 className="font-display text-2xl font-semibold">Completion & Expansion (2027 +)</h1>
          <p>
            Conclusão das 70 rodadas, atingindo o limite de 1 bilhão de DGT3
            emitidos. Manutenção de ciclos contínuos de staking, reinvestimento
            e auditoria. Possível expansão para cadeias EVM compatíveis e novas
            jurisdições sob governança DAO.
          </p>
          <p>
            <b>Meta:</b> consolidar a DGTEnergy como infraestrutura global de
            confiança e transparência energética.
          </p>
        </div>
        <div className="lg:flex hidden"></div>
      </div>
    </section>
  );
}
