/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          50: '#f4fbf7',
          100: '#e5f6ed',
          200: '#ceeedc',
          300: '#a7dfc2',
          400: '#77c6a0',
          500: '#4fa980',
          600: '#398b65',
          700: '#2f6f52',
          800: '#295943',
          900: '#234a38',
          950: '#0f291e',
        },
        cream: {
          50: '#fffdfa',
          100: '#fef9f0',
          200: '#fcf2dd',
          300: '#fae6be',
        },
        milk: '#FFFFFF',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
