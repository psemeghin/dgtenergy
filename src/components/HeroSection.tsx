import { createPortal } from "react-dom";

import Image from "next/image";
import LogoLoop from "./ui/logo-loop";

import icon from "@/assets/logo-billi.svg";
import Link from "next/link";
import { useState } from "react";
import { XIcon } from "lucide-react";

export default function HeroSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="h-[85svh] text-center flex flex-col items-center justify-between py-8 bg-gradient-to-b from-neutral-50 via-neutral-50 to-graphite-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full left-0 right-0 object-cover object-bottom"
        >
          <source src="/media/earth.mp4" type="video/mp4" />
          <source src="/media/earth-moon-v2.webm" type="video/webm" />
          Seu navegador não suporta vídeo HTML5.
        </video>
        <div className="w-full h-16"></div>
        <div className="relative flex flex-col gap-16 z-10 max-w-3xl px-6 items-center">
          <div className="flex flex-col items-center justify-center gap-4 drop-shadow-[0_0_3px_rgba(0,0,0,0.75)]">
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white drop-shadow">
              A New Gateway to Energy Finance
            </h1>
            <p className="text-lg text-neutral-50 font-sans drop-shadow">
              Utility token for transparent access to verified energy operations
              — staking, governance, and on-chain data.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
            <button
              className="inline-block bg-graphite-900/60 hover:bg-graphite-900/90 text-white font-semibold px-6 py-3 rounded-lg font-display w-52 transition-all"
              onClick={() => {
                setOpen(true);
              }}
            >
              Read our Manifesto
            </button>
            <Link href="/rounds">
              <button className="inline-block hover:brightness-110 bg-petroleum-900 text-white font-semibold px-6 py-3 rounded-lg font-display w-52 transition-all">
                Join the Whitelist
              </button>
            </Link>
          </div>
        </div>
        <LogoLoop
          logos={[
            {
              node: (
                <Link href="/" className="size-16 drop-shadow">
                  <Image src={icon} alt="DGTEnergy symbol" />
                </Link>
              ),
            },
          ]}
          speed={50}
          gap={128}
        />
      </section>
      {createPortal(
        <div
          data-open={isOpen}
          className="fixed inset-0 flex items-center justify-center p-2 lg:p-8 bg-black/30 pointer-events-none z-50 opacity-0 data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto transition-all"
        >
          <div className="relative flex flex-col items-center justify-start py-12 lg:py-4 lg:justify-center overflow-auto gap-8 bg-graphite-900 rounded-lg p-4 lg:p-8 w-full h-full text-neutral-50 text-center">
            <button
              className="fixed right-6 top-6 lg:right-12 lg:top-12"
              onClick={() => {
                setOpen(false);
              }}
            >
              <XIcon />
            </button>
            <h1 className="font-display text-4xl font-semibold w-full max-w-2xl">
              Our Manifesto
            </h1>
            <p className="font-sans w-full max-w-2xl flex flex-col gap-4">
              <p>
                The energy sector is shifting quickly. Demand grows, markets
                expand and new possibilities appear every day. Yet access
                remains limited by legacy systems, opaque workflows and outdated
                structures that hold progress back. DGTEnergy was created to
                remove these barriers with transparency, technology and
                disciplined execution. We view energy not as a restricted domain
                but as a global field of opportunity. We connect international
                capital to real operational activity in emerging markets. Our
                team, partners and architecture position us to scale with
                precision.
              </p>
              <p>
                We believe energy, finance and technology must be simple,
                verifiable and grounded in fact.
              </p>
              <p>We believe trust is earned through evidence, not narrative.</p>
              <p>
                Our first partner Billi Energy has financed energy transitions
                for more than two years with exceptional consistency. This is
                not theory. This is not an experiment. This is a functioning
                protocol rooted in real operational delivery. Brazil's energy
                market transformation will generate exceptional opportunities:
                ninety million consumers accessing competitive electricity
                markets. Two hundred sixty billion reais in financing demand. We
                are constructing the infrastructure connecting this demand to
                international capital. Exceptional opportunities demand
                exceptional execution. Our founders bring decades of financial
                expertise. DGTEnergy unites world-class professionals, a robust
                operational network and transparent on-chain architecture.
                Participation is shaped by real operational evidence,
                transparent processes and a framework designed for institutional
                rigor. The next era of energy requires clarity, speed and
                institutional reliability. We are building the infrastructure
                that makes this future accessible. We believe in building what
                comes next. Join us. Disclaimer — Compliance Notice DGTEnergy is
                a utility-token protocol. Participation grants access to
                protocol utilities only including staking, governance and data
                visibility and does not represent equity, debt or financial
                instruments. All allocations are performance based,
                discretionary and fully transparent on chain.
              </p>
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
