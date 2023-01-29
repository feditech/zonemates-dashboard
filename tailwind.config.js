/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');
module.exports = {
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#081B33",
      secondary:"#105E26",
      crayola: "#F6C760",
      white: '#ffffff',
      black: '#000000',
      red:'#FF0000',
      blue:'#3C43F2',
      lightblue:'#DEEFF6',
      purple:'#B100CD',
      lightgrey:'#F0F0F0',
      grey:'#767676',
      darkgrey:'#132743B2',
      starRatingfillColor:'#E67136',
      text: {
        DEFAULT: "#00000",
        light: "#6C7281",
      },
      light: {
        DEFAULT: "#FAFBFC",
        lighter: "#F3F4F6",
      },
    },
    extend: {},
  },
  plugins: [],
}

