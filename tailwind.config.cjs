/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        balgin: ['Balgin', 'sans-serif'],
      },
      colors: {
        primary: '#E76469', // example
      },
    },
  },
  plugins: [],
}