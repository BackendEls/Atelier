import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        atelier: {
          bg: "#3C0016",
          text: "#F5EEE6",
          muted: "#D1C0A5",
          highlight: "#F92424",
          darkText: "#2A1A1A"
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "'Times New Roman'", "serif"],
        sans: ["'Inter'", "'Helvetica Neue'", "Arial", "sans-serif"]
      },
      boxShadow: {
        card: "0 30px 60px -35px rgba(0, 0, 0, 0.65)",
        lift: "0 30px 50px -35px rgba(0, 0, 0, 0.7)"
      }
    }
  },
  plugins: []
};

export default config;
