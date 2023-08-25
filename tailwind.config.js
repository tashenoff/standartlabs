/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.htm",
    "./partials/*.htm",
    "./layouts/*.htm",
    "./assets/css/*.scss",
    "./assets/css/*.css"
  ],

  theme: {

    container: {

      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundColor: ["group-hover"],
      divideColor: ['group-hover'],
      colors: {
        primary: '#212121',
        primaryLight: '#272f4a',
        secondary: '#FFD100',
        green: '#47E189',
        greenDark: '#42cf7e',
        black: '#333',
        white: '#fff',
        red: '#e045e6',
        gray: '#3B3D43',
        lightGray: '#EEF1F6',
        blueLight: '#3B3D43'
      }
    },

    zIndex: {
      '40': '40',
      '60': '60',
      '50': '50',
      '70': '70',
      '80': '80'
    },
  },
  plugins: [],
}