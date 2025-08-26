import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none text-2xl"
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-lg z-50">
          <ul className="flex flex-col text-white text-sm font-sans p-2 space-y-2">
            <li><Link href="/home"><a onClick={toggleMenu}>Home</a></Link></li>
            <li><Link href="/rounds"><a onClick={toggleMenu}>Rounds</a></Link></li>
            <li><Link href="/desk"><a onClick={toggleMenu}>Desk</a></Link></li>
            <li><Link href="/data"><a onClick={toggleMenu}>Data</a></Link></li>
            <li><Link href="/governance"><a onClick={toggleMenu}>Governance</a></Link></li>
            <li><Link href="/connect"><a onClick={toggleMenu}>Connect</a></Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}
