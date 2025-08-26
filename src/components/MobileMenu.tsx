// src/components/MobileMenu.tsx
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path d="M6 18L18 6M6 6l12 12" /> // X
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" /> // ≡
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-10 right-0 w-48 bg-[#2F3E46] text-white rounded-md shadow-lg py-2">
          <Link href="/rounds">
            <a className="block px-4 py-2 hover:bg-[#005F73]">Rounds</a>
          </Link>
          <Link href="/desk">
            <a className="block px-4 py-2 hover:bg-[#005F73]">Desk</a>
          </Link>
          <Link href="/data">
            <a className="block px-4 py-2 hover:bg-[#005F73]">Data</a>
          </Link>
          <Link href="/governance">
            <a className="block px-4 py-2 hover:bg-[#005F73]">Governance</a>
          </Link>
          <Link href="/connect">
            <a className="block px-4 py-2 hover:bg-[#005F73]">Connect</a>
          </Link>
        </div>
      )}
    </div>
  );
}
