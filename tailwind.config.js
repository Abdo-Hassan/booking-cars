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
        lighten: {
          one: '#A66FF0',
          two: '#FF7E861A',
          three: '#A162F71A',
          four: '#F6CC0D1A',
          five: '#E1DFA4',
          six: '#E3ECF1',
          seven: '#F4E3E5',
        },
      },
      fontFamily: {
        Raleway: ['DM Sans'],
      },
    },
  },
  plugins: [],
};
