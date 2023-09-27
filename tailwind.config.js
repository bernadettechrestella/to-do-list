/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#888888',
      'red': '#ED4C5C',
      'green': '#00A790',
      'semiGray': '#F4F4F4',
      'blueSky': '#16ABF8',
      'very-high': '#ED4C5C',
      'high': '#F8A541',
      'medium': '#00A790',
      'low': '#428BC1',
      'very-low': '#8942C1',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

