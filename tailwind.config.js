const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      black:{
        100:'#cecece',
        200:'#a1a1a1',
        300:'#767676',
        400:'#4f4f4f',
        500:'#282828',
        600:'#1e1e1e',
        700:'#0f0f0f'
      },
      gray:{
        400:'#f6f6f6',
        500:'#E3E3E3',
        600:'#cbcbcb'
      },
      skin:{
        200:'#f9f6f2',
        300:'#faeedf',
        400:'#fbe7ce',
        500:'#FCDDB8',
        600:'#fbd4a6',
        700:'#eebd82',
        800:'#EFAA56',
      },
      white:'#ffffff',
      red:colors.red
    },
    extend: {},
  },
  plugins: [],
}