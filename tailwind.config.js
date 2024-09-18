/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bodyText: "#6B7280",
        primaryBg: "#04141D",
        secondaryGrey: "#778692",
        secondary: "#8AE5CF",
        footerBg: "#030E14",
      }
    },
  },
  plugins: [],
}