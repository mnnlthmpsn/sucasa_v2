/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gotham'],
        gothamLight: ['Gotham-Light'],
        gothamBold: ['Gotham-Bold']
      },
      colors: {
        dark: '#171a20'
      }
    },
  },
  plugins: [],
}