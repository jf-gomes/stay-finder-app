/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        red: "#EF233C",
        darkRed: "#D80032",
        white: "#EDF2F4",
        gray: "#8D99AE",
        darkGray: "#2B2D42"
      },
      margin: {
        m6: -6
      }
    },
  },
  plugins: [],
}

