import Header from '../components/Header'
import Navbar from '../components/Navbar'

import { firaCode } from '../ui/fonts';
import './globals.css';  // Estos son los estilos globales

export const metadata = {
  title: 'Macova 96',
  description: 'Portfolio de Macova 96',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
};

export default Layout;
