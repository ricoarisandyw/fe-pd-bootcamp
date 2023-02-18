/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'system': '#FFA48F'
      },
      colors: {
        'system': '#FFA48F',
        'error': "#EB5757"
      },
      fontFamily: {
        'inter': 'Inter',
        'avenir': 'Sen'
      },
      shadow: {
        card: '0px 4px 20px rgba(0, 0, 0, 0.05)'
      },
    },
  },
  plugins: [],
}
