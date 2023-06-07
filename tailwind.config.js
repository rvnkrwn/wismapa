/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*{js,jsx,ts,tsx,css,html}",
    "./src/**/*{js,jsx,ts,tsx,css,html}",
    "./src/**/**/*{js,jsx,ts,tsx,css,html}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
