/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#5177FF",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
