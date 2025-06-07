/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#f0efe9',
          200: '#e8e5dc',
          300: '#d5d0c2',
          400: '#beb6a3',
          500: '#a69e86',
          600: '#8c826c',
          700: '#766c5a',
          800: '#635a4d',
          900: '#534c42',
          950: '#2c2822',
        },
        accent: {
          50: '#f9f7f5',
          100: '#f2eee9',
          200: '#e3dacf',
          300: '#d4c3b0',
          400: '#c2a78e',
          500: '#b18e73',
          600: '#a07962',
          700: '#8d6753',
          800: '#775747',
          900: '#64493d',
          950: '#342621',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out forwards',
        'fade-in-slow': 'fadeIn 2s ease-in-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};