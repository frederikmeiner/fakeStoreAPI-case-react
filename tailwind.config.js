/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1366': '1366px',
      },
      colors: {
        'custom-brown': '#3E362E'
      }
    },
  },
  plugins: [],
}

