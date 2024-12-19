/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,jsx}", "./src/*.{html,jsx}"],
  theme: {
    fontFamily: {
      header: "Roboto, monospace",
      body: "Open Sans, monospace",
      fontSansSerif: "sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
