// Header.js
// Este componente maneja la barra de navegación del portafolio, utilizando enlaces para navegar entre páginas.

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-secondary py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo o nickname*/}
        <div className="text-2xl font-bold">
          <Link href="/">macova96</Link>
        </div>
        {/* Navegación */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/projects" className="hover:text-accent">Projects</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-accent">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-accent">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

