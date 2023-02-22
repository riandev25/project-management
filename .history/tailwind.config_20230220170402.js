/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '380px',
      ...defaultTheme.screens,
    }
  },
  plugins: [require('@tailwindcss/typography')],
};