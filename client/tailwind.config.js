/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundImage: {
      'gradient-to-r': 'linear-gradient(to right, #FF4B2B, #FF416C)',
    },
    transitionProperty: {
      'transform': 'transform',
    },
    transitionDuration: {
      '80': '80ms',
    },
    transitionTimingFunction: {
      'ease-in': 'ease-in',
    },},
  },
  plugins: [],
}