/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // enable Just-In-Time mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



