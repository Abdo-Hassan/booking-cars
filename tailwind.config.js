/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#242731',
          dark: '#E0E4E7',
          grey: '#F5F4F6',
          main: '#A162F7',
        },
        secondary: {
          one: '#2884FF',
          two: '#F6CC0D',
          three: '#FF6370',
          four: '#70CF97',
          five: '#FF764C',
        },
      },
    },
  },
  plugins: [],
};
