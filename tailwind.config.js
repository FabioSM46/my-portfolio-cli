const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      margin: {
        "5%": "5%",
        "5rem": "5rem",
      },
      fontFamily: {
        "ubuntu-mono": ["Ubuntu Mono", "monospace"],
        caveat: ["Caveat", "script"],
      },
      colors: {
        primary: colors.gray,
      },
    },
  },
  plugins: [],
};
