/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta Violeta - Lightning Rose (Genshin Impact)
        primary: {
          50: '#FBDBFB',   // Rosa muy claro
          100: '#D4A7F9',  // Lavanda claro
          200: '#997BF8',  // Violeta claro brillante
          300: '#9563DE',  // Violeta brillante
          400: '#7559CB',  // Violeta medio
          500: '#5E3AA2',  // Violeta oscuro
          600: '#4C4C9C',  // Azul violáceo
          700: '#332063',  // Violeta muy oscuro
          800: '#2A1A52',  // Violeta ultra oscuro
          900: '#1F1340',  // Violeta negro
        },
        secondary: {
          50: '#F5E6FF',
          100: '#D4A7F9',
          200: '#997BF8',
          300: '#9563DE',
          400: '#7559CB',
          500: '#5E3AA2',
          600: '#4C4C9C',
          700: '#332063',
          800: '#2A1A52',
          900: '#1F1340',
        },
        violet: {
          light: '#D4A7F9',
          medium: '#7559CB',
          dark: '#332063',
          ultra: '#1F1340',
          bright: '#9563DE',
          lavender: '#997BF8',
        },
        accent: {
          pink: '#FBDBFB',
          rose: '#B6909E',
          taupe: '#8F716A',
        }
      },
      backgroundImage: {
        'gradient-violet-light': 'linear-gradient(135deg, #FBDBFB 0%, #D4A7F9 50%, #997BF8 100%)',
        'gradient-violet-dark': 'linear-gradient(135deg, #332063 0%, #2A1A52 50%, #1F1340 100%)',
        'gradient-navbar-light': 'linear-gradient(90deg, #9563DE 0%, #D4A7F9 100%)',
        'gradient-navbar-dark': 'linear-gradient(90deg, #332063 0%, #1F1340 100%)',
      }
    },
  },
  plugins: [],
}














