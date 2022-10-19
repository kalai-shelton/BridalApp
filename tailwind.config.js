/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    },
    textColor: {
      primary: "#892CDC",
      secondary: "#E7D4FF",
      main: "#FFF3D3",
      white: "#FFFFFF",
      black: "#000000",
      logo_text:"#470086",
      primary_lite:"#E7D4FF",
    },

    backgroundColor: {
      primary: "#892CDC",
      secondary: "#E7D4FF",
      main: "#FFF3D3",
      white: "#FFFFFF",
      black: "#000000",
      primary_lite:"#E7D4FF",
      logo_text :"#470086"
    },
    fontSize: {
      42: "42px",
      '18':'18px',
      '14':'14px',
      '28':"28px",
      '32':"32px",
  
    },
    lineHeight: {
      '39': '39px',
      '51':'51px',
      '31':'31px',
      '34':'34px'
    },
    colors: {
      primary: "#892CDC",
      white: "#FFFFFF",
    },
    },
  },
  plugins: [],
}