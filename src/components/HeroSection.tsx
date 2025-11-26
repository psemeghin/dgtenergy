import { createPortal } from "react-dom";

import Image from "next/image";
import LogoLoop from "./ui/logo-loop";

import Link from "next/link";
import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";

import billi from "@/assets/partners/logo-billi.svg";
import bnb from "@/assets/partners/logo-bnb.svg";
import cloudflare from "@/assets/partners/logo-cloudflare.svg";
import github from "@/assets/partners/logo-github.svg";
import gnosis from "@/assets/partners/logo-gnosis.svg";
import metamask from "@/assets/partners/logo-metamask.svg";
import oz from "@/assets/partners/logo-oz.svg";
import vercel from "@/assets/partners/logo-vercel.svg";

export default function HeroSection() {
  const [isOpen, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              A new way to walk through energy
            </h1>
            <p className="text-lg text-neutral-50 font-sans drop-shadow">
              Transforming real-world operations into transparent cycles that
              reveal the momentum of what's rising.
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
        logoHeight={24}
          logos={[
            {
              node: (
                <Link href="/">
                  <Image className="h-8 w-auto drop-shadow" src={billi} alt="billi" />
                </Link>
              ),
            },
            {
              node: (
                <Link href="/">
                  <Image className="h-8 w-auto drop-shadow" src={bnb} alt="bnb" />
                </Link>
              ),
            },
            {
              node: (
                <Link href="/">
                  <Image className="h-8 w-auto drop-shadow" src={cloudflare} alt="cloudflare" />
                </Link>
              ),
            },
            {
              node: (
                <Link href="/">
                  <Image className="h-8 w-auto drop-shadow" src={github} alt="github" />
                </Link>
              ),
            },
            {
              node: (
                <Link href="/">
                  <Image className="h-8 w-auto drop-shadow" src={gnosis} alt="gnosis" />
                </Link>
              ),
            },
            {
              node: (
                <Link href="/">
                  <Image className="h-8 w-auto drop-shadow" src={metamask} alt="metamask" />
                </Link>
              ),
            },
            {
              node: (
                <Link href="/">
                  <Image className="h-8 w-auto drop-shadow" src={oz} alt="oz" />
                </Link>
              ),
            },
            {
              node: (
                <Link href="/">
                  <Image className="h-8 w-auto drop-shadow" src={vercel} alt="vercel" />
                </Link>
              ),
            },
          ]}
          speed={50}
          gap={128}
        />
      </section>
      {mounted &&
        createPortal(
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
              <div className="font-sans lg:text-xl w-full max-w-2xl flex flex-col gap-4">
                <p>The energy world opens: step in.</p>
                <p>
                  Imagine walking into a vibrant market, full of movement, light
                  and new paths waiting to be explored. Every corner reveals a
                  fresh possibility, every cycle carries its own pulse. This is
                  the landscape where DGTEnergy comes to life.
                </p>
                <p>
                  Here, energy becomes experience. Technology becomes clarity.
                  And every participant finds a direct way into an environment
                  that grows, evolves and invites you to follow its rhythm.
                </p>
                <p>
                  Our partner Billi already sets the tone: real activity, real
                  people choosing better energy solutions, consistent
                  performance emerging month after month. It’s the kind of
                  momentum that inspires confidence and sparks curiosity.
                </p>
                <p>
                  DGT3 is your entry pass. With it, you tap into the heart of
                  this movement: real cycles, real data, real activity shaping
                  an ecosystem built with structure, rhythm and endless
                  possibility.
                </p>

                <p>
                  The future of energy is taking shape. It is dynamic,
                  transparent and full of pathways worth exploring.
                </p>
                <p>DGTEnergy. A new way to walk through energy.</p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
