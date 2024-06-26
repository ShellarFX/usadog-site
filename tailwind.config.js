import {nextui} from '@nextui-org/theme'
import { darkColors, lightColors } from './theme/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {colors: lightColors},
      dark: {colors: darkColors},
    },
  }),],
}
