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
          DEFAULT: "#0B2C5E",
          light: "#1E4E8C",
          dark: "#143A6B",
          darker: "#0A2850",
          card: "#0F3260",
        },
        yellow: {
          DEFAULT: "#FFD700",
          light: "#FFE566",
          dark: "#E6B800",
        },
        // keep legacy aliases so existing class names keep working
        navy: {
          DEFAULT: "#0B2C5E",
          light: "#0F3260",
          dark: "#0A2850",
        },
        charcoal: "#143A6B",
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
          "linear-gradient(160deg, #0B2C5E 0%, #143A6B 60%, #0F3260 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #FFE566 0%, #FFD700 100%)",
        "navy-gradient":
          "linear-gradient(160deg, #0B2C5E 0%, #143A6B 60%, #0F3260 100%)",
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
