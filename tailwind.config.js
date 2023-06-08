/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        text: {
          100: "#171717",
          200: "#939393",
          300: "#51B15C"
        },
        backgroundWhite: {
          100: "#FFFFFF",
          200: "#F7F7F7",
        },
        backgroundGreen: {
          100: "#51B15C0A",
          200: "#EEF7EF",
          300: "#51B15C",
        },
        backgroundRed:{
          100: "#FF1D1D"
        },
        backgroundBrown: {
          100: "#CF8812"
        }
      }
    },
  },
  plugins: [],
}

