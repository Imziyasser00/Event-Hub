/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7848F4",
        darkPrimary: "#582DC7",
        bgColor: "#F8F8FA",
        HeroBanner: "#10107B",
      }
    },
  },
  plugins: [],
}