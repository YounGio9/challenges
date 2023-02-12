/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow' : '#FFAB00',
        'marron' : '#430711',
        'custogrey': '#F3F2F2'
      },
      borderRadius: {
        'circle': '50%'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Untitled-7 2.png')",
      }
    },
  },
  plugins: [],
}
