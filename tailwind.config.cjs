/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'color-landing': 'rgba(74, 102, 248, 0.67)'
      },
      backgroundImage: {
        'hero-pattern': "url('image2.svg')",
      }
    },
  },
  plugins: [],
}