/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        fadeIn2: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 1s ease-out"
      },
      colors: {
        dark: "#242424",
        orange: "#FFA500",
        white: "#FFFFFF",
        gray: "#333333"
      }
    }
  },
  plugins: []
}
