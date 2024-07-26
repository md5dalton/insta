/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050418",
        "very-dark-grey": "#0c0f14",
        "dark-grey": "#25282d",
      },
      container: {
        padding: '1rem',
      },
    }
  },
  plugins: [],
}
