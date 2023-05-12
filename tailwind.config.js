/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "ui-sans-serif", "ui-system"],
      dm: ["DM Sans", "ui-sans-serif"],
    },
    extend: {
      colors: {
        dark: "#0D0E25",
        primary: "#FC881D",
      },
    },
  },
  plugins: [],
};
