/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      height: {
        '86': '15.5rem',  // Adjust the value as needed
        '128': '20rem',   // Adjust the value as needed
      },
      colors: {  // Corrected key
        bgGray: "#212121",
        bgBlack: "#0F0F0F",
        bgOrange: "#FE7E21",
        bgDark:"#262626"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}