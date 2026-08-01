import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette: deep navy + soft grey accents
        navy: {
          50: "#f0f4fa",
          100: "#d9e2f1",
          200: "#b3c6e3",
          300: "#8da9d4",
          400: "#5d7faf",
          500: "#34588c",
          600: "#27456f",
          700: "#1d3454",
          800: "#142339",
          900: "#0d1826",
          950: "#080f1a",
        },
        grey: {
          50: "#f7f8fa",
          100: "#eef0f4",
          200: "#dfe3ea",
          300: "#c6cdd8",
          400: "#9ba6b8",
          500: "#6b7891",
          600: "#4f5a72",
          700: "#3a4259",
          800: "#262c3d",
          900: "#161a26",
        },
        accent: {
          DEFAULT: "#f0b429", // soft gold accent for CTAs
          dark: "#c8961a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
