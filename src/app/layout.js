import Header from '../components/Header'
import Footer from '../components/Footer'
import { firaCode } from '../ui/fonts';
import './globals.css';  // Estos son los estilos globales

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="{firaCode.className}">
        <div className="flex flex-col min-h-screen">
          {/* Header en la parte superior de todas las páginas */}
          <Header />

          {/* Contenido principal, dinámico según la página */}
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>

          {/* Footer en la parte inferior de todas las páginas */}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
