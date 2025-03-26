/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 0 5px rgb(253 150 120 / 15%)',
      },
      colors: {
        primary: '#3F8EFC',
        secondary: '#87BFFF',
       
}
    },
  },
  plugins: [],
}

