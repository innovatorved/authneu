/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/SVG/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#0078a7',
          300: '#014f86',
        },
        secondary: {
          300: '#22333b',
        }
      },
      fontFamily: {
        primary: [ 'Arima Madurai', 'cursive' ],
      }
    },
  },
  plugins: [],
}