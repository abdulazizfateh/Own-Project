
/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        e400: ['E400', 'sans-serif'],
        e600: ['E600', 'sans-serif'],
        p400: ['P400', 'sans-serif'],
        p700: ['P700', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
