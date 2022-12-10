/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ["Roboto Mono", "monospace"]
      },
      colors: {
        darkSite: '#08080D'
      }
    },
  },
  plugins: [],
}