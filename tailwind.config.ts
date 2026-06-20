import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#1877F2",
          light: "#2E89F5",
          dark: "#1464D8",
          darker: "#0E54B8",
          card: "#1260D0",
        },
        yellow: {
          DEFAULT: "#FFD700",
          light: "#FFE566",
          dark: "#E6B800",
        },
        // keep legacy aliases so existing class names keep working
        navy: {
          DEFAULT: "#1877F2",
          light: "#1260D0",
          dark: "#0E54B8",
        },
        charcoal: "#1464D8",
        gold: {
          DEFAULT: "#FFD700",
          light: "#FFE566",
          dark: "#E6B800",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "site-gradient":
          "linear-gradient(160deg, #1877F2 0%, #1464D8 60%, #1260D0 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #FFE566 0%, #FFD700 100%)",
        "navy-gradient":
          "linear-gradient(160deg, #1877F2 0%, #1464D8 60%, #1260D0 100%)",
      },
      boxShadow: {
        gold: "0 0 28px rgba(255, 215, 0, 0.45)",
        "gold-sm": "0 0 14px rgba(255, 215, 0, 0.30)",
        "blue-inner": "inset 0 0 60px rgba(0,0,0,0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 14px rgba(255,215,0,0.4)" },
          "50%": { boxShadow: "0 0 28px rgba(255,215,0,0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
