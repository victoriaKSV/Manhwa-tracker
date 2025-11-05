/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'violet': {
          light: '#C4DCAC',
          bright: '#6ED5B6',
          lavender: '#4AA294',
        },
        'primary': {
          50: '#C4DCAC',
          100: '#6ED5B6',
          200: '#4AA294',
          300: '#21736A',
          400: '#143D37',
          500: '#143D37',
          600: '#143D37',
          700: '#143D37',
          800: '#143D37',
          900: '#143D37',
        },
        'accent': {
          rose: '#B86238',
        },
      },
    },
  },
  plugins: [],
}













