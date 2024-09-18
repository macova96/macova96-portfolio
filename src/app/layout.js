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
      <body className="{firaCode.className}">
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default Layout;
