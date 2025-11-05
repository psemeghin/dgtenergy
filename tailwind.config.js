// /tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        // Cores institucionais
        energy: {
          green: "#86CB67", // Verde-energia
          blue: "#005F73", // Azul-pavão
          gray: "#2F3E46", // Cinza-mineral
          sand: "#A67F59", // Areia-dourada
        },
        petroleum: {
          50: "#e7fffd",
          100: "#c2fff9",
          200: "#8cfff4",
          300: "#3dffec",
          400: "#00ffe7",
          500: "#00f9ff",
          600: "#00c5e3",
          700: "#009bb5",
          800: "#007a90",
          900: "#005f73", // default
          950: "#004255",
        },
        graphite: {
          50: "#f3f8f8",
          100: "#dfecee",
          200: "#c3d9de",
          300: "#99bec7",
          400: "#689aa8",
          500: "#4d7f8d",
          600: "#436977",
          700: "#3b5763",
          800: "#364b54",
          900: "#2f3e46", // default
          950: "#1d292f",
        }
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      opacity: {
        85: "0.85",
        90: "0.90",
        95: "0.95",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      animation: {
        fade: "fade 1s ease-in-out",
        slowpulse: "pulse 4s ease-in-out infinite",
        slideup: "slideup 0.6s ease-out",
      },
      keyframes: {
        fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideup: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: true },
};
