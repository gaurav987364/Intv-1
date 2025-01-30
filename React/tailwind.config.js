/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#3498db",
        secondary: "#e74c3c",
        success: "#2ecc71",
        info: "#34495e",
        warning: "#f1c40f",
        danger: "#e74c3c",
        light: "#f9f9f9",
        dark: "#34495e",
      }
    },
  },
  darkMode : "class",
  plugins: [],
}