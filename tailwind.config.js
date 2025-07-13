/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // grayText: "#454545",
        grayTitle: "#BCBCBC",
        customBlue: "#6669F9",
      },
      fontFamily: {
        sans: ["sans"],
        sahelBold: ["sahelBold"],
      },
    },
  },
  plugins: [],
}

