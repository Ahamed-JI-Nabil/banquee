/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        colors: {
          accent: "#5bb5a2",
          secondary: "#e8f2ee",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
