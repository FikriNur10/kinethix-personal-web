/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    animation: {
      marquee: "marquee 25s linear infinite",
      marquee2: "marquee2 25s linear infinite",
      spin: "spin 2s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "3.125rem",
      "5xl": "4.375rem",
      90: "5.625rem",
      100: "6.25rem",
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
      "3xl": "1600px",
      "4xl": "1920px",
      "5xl": "2560px",
    },
    scale: {
      150: "1.5",
      200: "2",
      300: "3",
    },
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      width: {
        600: "600px",
      },
      height: {
        600: "600px",
      },
    },
    dropShadow: {
      glow: ["0 0px 20px rgba(255,255, 255, 0.35)", "0 0px 65px rgba(255, 255,255, 0.2)"],
    },
  },
  plugins: [],
};
