/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#252525',
        'quiet-dark': '#464444',
        'so-dark': '#131313',
        light: '#f8fcff',
        'main-color': '#00fff2',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      dropShadow: {
        small: '0 3px 5px #000',
        text: '3px 3px 10px #00fff28f, -3px -3px 10px #00fff28f',
      },
      backgroundImage: {
        shinobu: "url('/background.jpg')",
      },
      screens: {
        mb: '480px',
        sm: '640px',
        md: '915px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
