import Header from '../components/Header'
import { firaCode } from '../ui/fonts';
import './globals.css';  // Estos son los estilos globales

export const metadata = {
  title: "Macova96 - Portfolio",
  description: "A simple Portfolio made with love",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col overflow-hidden">
        <Header />
          {children}
      </body>
    </html>
  );
};

export default Layout;
