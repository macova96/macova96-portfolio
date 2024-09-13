import { firaCode } from '../ui/fonts';
import './globals.css';  // Tus estilos globales

export const metadata = {
  title: "Macova96 - Portfolio",
  description: "A simple Portfolio made with love",
};

// RootLayout con solo Fira Code
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
