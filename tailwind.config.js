/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
    },
    screens: {     
      lg: '1280px',
      xl: '1440px',
      xxl: '1920px',
    },
    extend: {},
  },
  plugins: [],
}