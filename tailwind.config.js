const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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
