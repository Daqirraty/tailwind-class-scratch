/** @type {import('tailwindcss').Config} */
import plugin from 'tw-elements/plugin.cjs';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F1CD76",
        secondary: "#D0A651",
        tertiary: "#FFECB2",
        boluColos: "#4B0983"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        heroBG: "url('/src/assets/hero.webp')",
        buttonTextBG: "linear-gradient(90deg, #f1cd76 2%, #ffecb2 42%, #d0a651 71%, #ffecb2 )",
        section2BG: "url('/src/assets/section2BG.webp')",
        cadburyPatternBg: "url('/src/assets/cadburyPatternBg.png')",
        irresistible: "url('/src/assets/Irresistible.webp')",
        bigWin: "url('/src/assets/bigWin.webp')",
        cadburyAndMore: "url('/src/assets/cadburyAndMore.png')",
        cadburyCaramel: "url('/src/assets/cadburyCaramel.webp')",
        cherylTiffin: "url('/src/assets/cherylTiffin.webp')",
      },
    },
  },
  plugins: [plugin],
  darkMode: "class"
}

