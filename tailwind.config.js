/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000080', // Navy
        secondary: '#FFD700', // Gold
        accent: '#FFFDD0', // Cream
        highlight: '#8B0000', // Deep red
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
}

