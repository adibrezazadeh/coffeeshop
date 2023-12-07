/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode:"class",
  theme: {
  
    extend: {
      colors: {
        "brown":{
          900:"#634832",
          600:"#967259",
          300:"#DBC1AC",
          100:"#ECE0D1"
        }
      },
      boxShadow:{
        "normal": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
      },
      borderRadius:{
        "4xl":"2rem"
      },

      fontFamily:{
        "Danademibold" : "Dana Demibold",
        "Danamedium" : "Dana Medium",
        "Dana" : "Dana",
        "Morabbabold" : "Morabba Bold",
        "Morabbamedium" : "Morabba Medium",
        "Morabbalight" : "Morabba Light",
      },
      letterSpacing:{
        "tightest":"-0.065em"
      },
      spacing:{
        "30":"7.5rem",
        "25":"6.25rem",
        "50":"12.5rem"
      },
      container: {
        center:true,
        padding:{
          default:"1rem",
          lg:"0.625rem",

        }
      },
      backgroundImage :{
        "home-mobile":"url(../images/headerBgMobile.webp)",
        "home-desktop":"url(../images/headerBgDesktop.webp)",
      }
    },
    screens: {
      'xs':'480px',
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

    },
  },
  plugins: [
    function ({addVariant}){
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover');

    }
  ],
}

