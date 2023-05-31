/** @type {import('tailwindcss').Config} */
const { fontFamily, screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        xl: "2.5rem",
        "2xl": "7.5rem",
      },
      screens: {
        ...screens,
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        primary: "#4D17E2",
        secondary: "#00BAFF",
        gray: "#7E8CAC",
        "dark-blue": "#0C145A",
        "light-gray": "#E7EAF5",
      },
    },
  },
  plugins: [],
};
