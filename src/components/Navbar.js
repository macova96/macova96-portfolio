//Navbar.js
'use client';

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 w-full flex justify-center items-center">
      <div className="inline-flex justify-center items-center text-xl text-white gap-4 px-4 py-1 
        rounded-full bg-amythest/15 backdrop-blur-sm">
        <ul className="flex flex-row gap-4">
          <li><Link href="/">.contact</Link></li>
          <li><Link href="/">.about</Link></li>
          <li><Link href="/">.projects</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
