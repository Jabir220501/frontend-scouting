/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '0': '0%',
        '25': '25%',
        '50': '50%',
        '75': '75%',
        '100': '100%',
      }
    },
  },
  plugins: [],
}