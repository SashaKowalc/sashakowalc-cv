/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        yellow: "#FDE916",
        blue: "#043263",
        grey: "#707070"
      },
      fontFamily: {
        sans: ["Noto Sans", "'Open Sans'", "sans-serif"],
      }
    },
  },
  plugins: [],
}

