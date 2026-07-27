/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F7F4EF",
        secondary: "#7C7669",
        tertiary: "#FFFFFF",
        ink: "#2D2A26",
        accent: "#3D8B7D",
        "accent-deep": "#2F6E63",
        "accent-soft": "#E4EFEA",
        line: "#E7E1D6",
      },
      boxShadow: {
        card: "0px 24px 60px -24px rgba(64, 54, 38, 0.18)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
