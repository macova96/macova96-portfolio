//Navbar.js
'use client';

import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
        <ul>
          <li><Link href="/">.contact</Link></li>
          <li><Link href="/">.about</Link></li>
          <li><Link href="/">.projects</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
