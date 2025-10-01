module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#16161A",
        foreground: "#D9D9E0",
        primary: "#7F5AF0",
        secondary: "#2CB67D",
        expressive: "#FF6B6B",
      },
    },
  },
  plugins: [],
};