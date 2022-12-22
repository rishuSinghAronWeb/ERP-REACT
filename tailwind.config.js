/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff6d00',
        secondary: '#B5224E',
        tertiary: '#fff0e5',
        black: '#333333',
        lght_pink: '#fff0f0',
        lght_blue: '#f6fdff'
      },
      zIndex:{
        '1':'1',
        '2':'2',
        '3':'3',
        '3':'3',
        '4':'4',
        '9':'9',
      },
      boxShadow: {
        'ctm_shadow': '0 18px 37.7px 15.3px rgb(0 0 0 / 7%)',
      },
      borderRadius:{
        '10px':'10px',
        '20px':'20px',
        '30px':'30px',
      },
      width:{
        '250px':'250px',
        '280px':'280px',
      },
      letterSpacing:{
        '6px':'6px',
        '7px':'7px',
      },
      maxWidth: {
        '110px': '110px',
        '120px': '120px',
        '150px': '150px',
        '192px': '192px',
        '200px': '200px',
        '215px': '215px',
        '233px': '233px',
        '370px': '370px',
        '1315px': '1315px',
        '470px': '470px',
        '270px': '270px',
        '280px': '280px',
        '500px': '500px',
        '580px': '580px',
        '790px': '790px',
      },
      height: {
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '50px': '50px',
        '62px': '62px',
        '70px': '70px',
        '100px': '100px',
        '480px': '480px',
      },
      minHeight: {
        '70px': '70px',
        '80px': '80px',
        '206px': '206px',
        '248px': '248px',
        '357px': '357px',
        '370px': '370px',
        '450px': '450px',
        '600px': '600px',
      },
      spacing:{
        '250px':'250px'
      },
      padding:{
        '250px': '250px'
      }
    },
  },
  plugins: [],
}
