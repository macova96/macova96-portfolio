// Header.js
// Este componente maneja la barra de navegación del portafolio, utilizando enlaces para navegar entre páginas.

'use client';

import Link from 'next/link';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className='container justify-between max-w-6xl mx-auto md:flex'>
        <Link href="/">
          <h1 className="my-3 mx-5 text-6xl text-secondary font-bold text-center md:text-left">
            Macova
            <span className="text-accent">
              96
            </span>
          </h1>
        </Link>
        <div className="flex items-center justify-center gap-7">
          <Link href="https://github.com/Macova96">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </header >
  );
}

