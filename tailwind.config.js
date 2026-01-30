// tailwind.config.js - Add custom colors
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: '#eff6ff',
          500: '#1e40af',
          600: '#1d4ed8',
          900: '#1e1b4b'
        }
      }
    }
  },
  plugins: []
}