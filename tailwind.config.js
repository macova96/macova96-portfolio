/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#141414', //negro
        secondary: '#f5f3f5', //blanco
        accent: '#d7263d', //rojo
        neutral: '#abacad', //gris
      },
      fontFamily: {
        mono: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [],
};
