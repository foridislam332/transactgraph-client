/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'monFont': ['"Montserrat", sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#0F52BA'
      },
      backgroundColor: {
        'navBg': 'rgba(255, 255, 255, 0.9)',
        'overlay': 'rgba(0, 0, 0, 0.7)',
        'aboutOv': 'rgba(255, 255, 255, 0.92)',
      }
    },
  },
  plugins: [],
}
