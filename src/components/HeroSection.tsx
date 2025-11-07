import Image from "next/image";
import LogoLoop from "./ui/logo-loop";

import icon from '@/assets/logo-billi.svg'
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="h-[85svh] text-center flex flex-col items-center justify-between py-8 bg-gradient-to-b from-neutral-50 via-neutral-50 to-graphite-900">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full left-0 right-0 object-cover opacity-70 object-bottom"
      >
        <source src="/media/earth-moon-v2.mp4" type="video/mp4" />
        <source src="/media/earth-moon-v2.webm" type="video/webm" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      <div></div>
      <div className="relative flex flex-col gap-4 z-10 max-w-3xl px-6 items-center">
        <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white drop-shadow">
          A New Gateway to Energy Finance
        </h1>
        <p className="text-lg text-neutral-50 font-sans drop-shadow">
          Utility token for transparent access to verified energy operations —
          staking, governance, and on-chain data.
        </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
          <Link href="/rounds">
            <button className="inline-block hover:brightness-110 bg-petroleum-900 text-white font-semibold px-6 py-3 rounded-lg font-display w-52 transition-all">
              Join the Whitelist
            </button>
          </Link>
          <Link href="/data">
            <button className="inline-block bg-graphite-900/60 hover:bg-graphite-900/90 text-white font-semibold px-6 py-3 rounded-lg font-display w-52 transition-all">
              Read our Manifesto
            </button>
          </Link>
        </div>
      </div>
      <LogoLoop logos={[{node: <Link href="/" className="size-16 drop-shadow"><Image src={icon} alt="DGTEnergy symbol" /></Link>, }]} speed={50} gap={128} />
    </section>
  );
}
