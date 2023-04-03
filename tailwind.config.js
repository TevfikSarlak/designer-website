/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#030027',
      },
      fontFamily: {
        'sans': ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
