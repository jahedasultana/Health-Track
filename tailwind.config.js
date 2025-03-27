/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 0 5px rgba(63, 142, 252, 0.3)',
      },
      colors: {
        primary: '#3F8EFC',
        secondary: '#87BFFF',
       
}
    },
  },
  plugins: [],
}

