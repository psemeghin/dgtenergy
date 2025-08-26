import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md px-4 py-3 shadow-sm flex justify-between items-center">
      <Link href="/home">
  <a>
    <img src="/logo/logo_icon.svg" alt="DGTEnergy Logo" className="h-8 w-auto" />
  </a>
</Link>
      <nav className="space-x-4 hidden md:block">
        <Link href="/rounds"><a>Rounds</a></Link>
        <Link href="/desk"><a>Desk</a></Link>
        <Link href="/data"><a>Data</a></Link>
        <Link href="/governance"><a>Governance</a></Link>
        <Link href="/connect"><a>Connect</a></Link>
      </nav>
    </header>
  );
};

export default Header;
