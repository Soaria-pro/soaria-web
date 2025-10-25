/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // if you ever add a /pages dir
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "ui-sans-serif", "system-ui", "sans-serif"], 
        // uses your local Satoshi variable, fallback to system
      },
      colors: {
        background: "#16161A",
        foreground: "#D9D9E0",
        primary: "#7F5AF0",
        secondary: "#2CB67D",
        expressive: "#FF6B6B",
      },
      backgroundImage: {
        "rebel-pulse":
          "linear-gradient(116deg, #7F5AF0 0.32%, #2CB67D 73.64%)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};