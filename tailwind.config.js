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
        slate: '#4d5c60',
        charcoal: '#383838',
        amythest: '#525266',
        mist: '#d1e0de',
        keylime: '#eef4c',
      },
      fontFamily: {
        mono: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [],
};
