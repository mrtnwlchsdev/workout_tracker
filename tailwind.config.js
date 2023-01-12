/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'at-light-green': '#44ba9f',
        'light-grey': '#f1f1f1'
      }
    },
  },
  plugins: [],
}
