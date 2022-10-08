/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    colors: {
    'white': '#f0fdf4',
    'green': '#74C69D',
    'gray': '#e5e7eb',
    'grayer': '#9ca3af',
    'neutral': '#171717',
    'black' : '#1c1917'
  },
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
      }
    },
  },
  plugins: [],
}
