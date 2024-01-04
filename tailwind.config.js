/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'secondary-color': '#777777',
        'primary-color': '#32C0C0',
        'danger-color': '#E1341E',
        'horizontal-line-color':'#E5E5E5',
        'content-bg': '#F3F8F8',
        'input-bg': '#F5F5F5',
        'success-color': '#2A9554'
      },
      boxShadow: {
        'sidebar': '0px 20px 20px 10px rgba(133, 133, 133, 0.10)',
        'header': '0px 15px 10px 0px rgba(133, 133, 133, 0.05)',
        'listing-card': '0px 10px 25px 0px rgba(80, 80, 80, 0.15);',
      }
    },
  },
  plugins: [],
}