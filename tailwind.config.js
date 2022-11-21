/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        window: "rgb(var(--window-color) / <alpha-value>)",
        main: "rgb(var(--main-color) / <alpha-value>)",
        primary: "rgb(var(--primary-color) / <alpha-value>)",
        content: "rgb(var(--content-color) / <alpha-value>)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
