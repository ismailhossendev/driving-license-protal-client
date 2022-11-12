/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#3A4256",

          "neutral": "#1F2329",

          "base-100": "#FFFFFF",

          "info": "#3F91DE",

          "success": "#209D84",

          "warning": "#F3C144",

          "error": "#EE727D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
