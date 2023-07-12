const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      "exo-2": ["Exo 2", "sans-serif"],
    },
    extend: {
      colors: {
        primary: colors.gray,
      },
    },
  },
  plugins: [],
};
