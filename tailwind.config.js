/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'backgroundImage': {
        'wallpaper': "url('/mac-bg.jpg')",
        'avatar': "url('/avatar.png')"
      }, 
      'colors': {
        'blur-base': '#A570BC',
        'login': '#D2A8EE',
        'avatar': '#D8D8D9'
      },
      'boxShadow': {
        macos: '1px 2px 20px rgb(0 0 0 / 20%)'
      },
      textShadow: {
        sm: '0 1px 2px #000000',
        DEFAULT: '1px 0px 5px #000000',
        lg: '0 8px 16px #000000',
      },
      keyframes: {
        wrong: {
          '0%': { transform: 'translateX(10px)' },
          '10%': { transform: 'translateX(-10px)' },
          '20%': { transform: 'translateX(10px)' },
          '30%': { transform: 'translateX(-10px)' },
          '40%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(-10px)' },
          '60%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0px)' },
        }
      },
      animation: {
        'wrong-password': 'wrong .7s linear',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
