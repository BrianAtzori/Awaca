/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      'dosis': ['Dosis', 'sans-serif'],
      'lato':['Lato','sans-serif']
    },
    colors:{
      'palette-color-darker' : '#3c979f',
      'palette-color-dark': '#73b3b2',
      'palette-color-medium': '#aecfd0',
      'palette-color-light': '#bed9dd',
      'palette-color-lighter': '#deebec',
      'transparent': colors.transparent,
      'red': colors.red,
    }
  },
  plugins: [],
};
