const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        "70vw": "70vw",
      },
      margin: {
        "5%": "5%",
        "5rem": "5rem",
        "100vh": "100vh",
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
