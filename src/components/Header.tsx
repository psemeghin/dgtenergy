// src/components/Header.tsx
import Link from "next/link";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

import { StaggeredMenu } from "@/components/ui/staggered-menu";
import icon from "@/assets/logo-icon.svg";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Rounds", ariaLabel: "Rounds", link: "/rounds" },
  { label: "desk", ariaLabel: "Desk", link: "/desk" },
  { label: "data", ariaLabel: "Data", link: "/data" },
  { label: "governance", ariaLabel: "Governance", link: "/governance" },
  { label: "connect", ariaLabel: "Connect", link: "/connect" },
];

const socialItems = [
  { label: "Telegram", link: "https://t.me/DgtEnergy" },
  { label: "X (Twitter)", link: "https://x.com/DgtEnergy" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex flex-col ${
        scrolled
          ? "bg-neutral-50/60 backdrop-blur-lg supports-[backdrop-filter]:bg-neutral-50/60 shadow-sm"
          : "bg-neutral-50/60"
      }`}
    >
      <div className="mx-auto container px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            aria-label="DGTEnergy — Home"
            className="flex items-center gap-2"
          >
            <Image src={icon} alt="DGTEnergy symbol" className="size-12" />
            <h1
              className={`hidden lg:flex text-lg transition-all duration-300 text-petroleum-900 font-display font-bold ${
                scrolled ? "opacity-0" : "opacity-100 scale-100"
              }`}
            >
              DGTEnergy
            </h1>
          </Link>
        </div>

        <div className="flex items-center lg:gap-6">
          <nav className="flex items-center gap-5 text-sm font-display text-graphite-900 font-semibold">
            <Link
              href="/rounds"
              className="hover:text-petroleum-900 hover:opacity-90 transition"
            >
              Rounds
            </Link>
            <Link
              href="/desk"
              className="hover:text-petroleum-900 hover:opacity-90 transition"
            >
              Desk
            </Link>
            <Link
              href="/data"
              className="hover:text-petroleum-900 hover:opacity-90 transition"
            >
              Data
            </Link>
            <Link
              href="/governance"
              className="hover:text-petroleum-900 hover:opacity-90 transition"
            >
              Governance
            </Link>
            <Link
              href="/connect"
              className="hover:text-petroleum-900 hover:opacity-90 transition"
            >
              Connect
            </Link>
          </nav>

          <div className="relative lg:flex hidden">
            <ConnectButton
              label="Connect Wallet"
              accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
              showBalance={false}
              chainStatus="icon"
            />
          </div>
          <div className="items-center justify-center hidden">
            <StaggeredMenu
              position="right"
              items={menuItems}
              isFixed={true}
              socialItems={socialItems}
              displaySocials
              menuButtonColor="#fff"
              openMenuButtonColor="#fff"
              changeMenuColorOnOpen={true}
            />
          </div>
        </div>
      </div>
      <div
      className="absolute top-full right-0 lg:hidden flex items-center justify-center p-4 transition-all duration-500 data-[scrolled=true]:-top-full data-[scrolled=true]:opacity-0"
      data-scrolled={scrolled}>
        <ConnectButton
          label="Connect Wallet"
          accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
          showBalance={false}
          chainStatus="icon"
        />
      </div>
    </header>
  );
}
