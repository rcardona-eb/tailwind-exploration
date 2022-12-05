/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      navy: "#0e365a",
      "navy-dark": "#071c2e",
      blue: "#14599d",
      "blue-dark": "#0e3f70",
      green: "#00794a",
      "green-dark": "#00462b",
      red: "#b50853",
      "red-dark": "#701919",
      orange: "#c94100",
      purple: "#550dbb",
      "purple-dark": "#331f5f",
      yellow: "#ffc615",
      "yellow-light": "#fffbf4",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [
    require("./styles/plugins/buttons")({ sizes: ["xs", "sm", "lg", "xl"] }),
  ],
};