/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultConfig");
// console.log({...defaultTheme?.colors})
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#081B33",
        secondary: "#105E26",
        starRatingfillColor: "#E67136",
        text: {
          DEFAULT: "#00000",
          light: "#6C7281",
        },
        light: {
          DEFAULT: "#FAFBFC",
          lighter: "#F3F4F6",
        },
      },
    },
  },
  plugins: [],
};
