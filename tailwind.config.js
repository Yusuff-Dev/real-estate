/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': {'min': '360px'},

      'md': {'min': '768px'},

      'lg': {'min': '1024px'},

      'fx': {'min': '1480px'}
    },

    extend: {
      fontFamily: {
        'Belleza': ["Belleza", "system-ui", "sans-serif"],
        "Jost": ["Jost", "sans-serif"],
        "Bellefair": ["Bellefair", "serif"],
      },

      colors: {
        'white': '#fff',
        'beigie-120': '#B48C76',
        'beigie-100': '#E1AF93',
        'beigie-70': '#EAC7B4',
        'beigie-40': '#F3DFD4',
        'black': '#333',
        'black-60': '#858585',
        'black-20': '#D6D6D6',
        'label': '#B3B3B3',
        'stroke': '#EAEAEA',
        'grey': '#F7F7F7',
        'blue': '#EDF3F5',
        'red': '#FF4F4F',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'sm': '20px'
      },
    },
  },
  plugins: [],
};
