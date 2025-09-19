/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
    extend: {
        fontSize: {
            '14px': '14px',
        },
        fontFamily: {
            sans: ['HK Grotesk', 'sans-serif'],
        },
        colors: {
            primary: '#008ECC', // Custom primary color
            secondary: '#666666', // Custom secondary color
            simple: '#000000',
        }
    },  
  },
  plugins: [],
 }