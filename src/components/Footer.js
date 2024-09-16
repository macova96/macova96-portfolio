// Footer.js
// Este componente incluye enlaces a GitHub y LinkedIn en el footer de todas las páginas.

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        {/* Enlaces a perfiles de GitHub y LinkedIn */}
        <p>
          <a href="https://github.com/macova96" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a> |
          <a href="https://linkedin.com/in/macova96" target="_blank" rel="noopener noreferrer" className="hover:text-accent ml-2">
            LinkedIn
          </a>
        </p>
        {/* Derechos reservados */}
        <p className="mt-2">&copy; {new Date().getFullYear()} macova96. All rights reserved.</p>
      </div>
    </footer>
  );
}
