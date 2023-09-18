/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '3.125rem',
      '5xl': '4.375rem',
      '90' : '5.625rem',
      '100' : '6.25rem',
    },
    color: {
      background: "#F4E0B9",
    },
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    scale: {
      150: "1.5",
      200: "2",
      300: "3",
    },
    extend: {},
  },
  plugins: [],
};
