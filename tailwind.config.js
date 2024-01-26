/** @type {import('tailwindcss').Config} */
export default {
  "darkMode": 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        light: '#f6f8ff',
        'light-white': '#fefefe',
        'dark-blue': ' #2b3442',
        "light-blue": '#4b6a9b',
        "grey": "#697c9a",
        "primary": "#0079ff",
        "black-dark": '#141d2f',
        "md-purple": ' #c9ceda'
      },
      fontWeight: {
        700: '700'
      },
      colors: {
        light: '#f6f8ff',
        'light-white': '#fefefe',
        'dark-blue': ' #2b3442',
        "light-blue": '#4b6a9b',
        "grey": "#697c9a",
        "primary": "#0079ff",
        "black-dark": '#141d2f',
        "md-purple": ' #c9ceda'
      }
    },
  },
  plugins: [],
}