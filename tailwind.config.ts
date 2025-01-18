export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          100: 'rgba(165, 42, 42, 0.3)',
          700: '#A52A2A',
        },
        cookie: {
          DEFAULT: '#D5A98E',
          hover: '#FFD900'
        }
      }
    },
  },
  plugins: [],
}

