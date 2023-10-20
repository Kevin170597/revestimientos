/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#77858f",
        "primary-light": "#8d9aa4",
        "bg-1": "#ededed",
        "font-black-1": "#787878",
        "font-white-1": "#fff",
        "font-white-2": "#d7d7d7"
      },
      boxShadow: {
        "1": "0px 1px 2px 0px rgba(0, 0, 0, 0.14)"
      }
    },
  },
  plugins: [],
}

