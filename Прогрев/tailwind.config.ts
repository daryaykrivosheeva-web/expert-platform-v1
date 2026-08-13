import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F6F9F7",
        "bg-soft": "#EEF4F0",
        card: "#FFFFFF",
        ink: "#1F2B27",
        "ink-muted": "#55645C",
        accent: "#3C7A6A",
        "accent-dark": "#2C5C4F",
        "accent-soft": "#DBEAE3",
        border: "#DEE7E1",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        "8xl": "1040px",
      },
      boxShadow: {
        card: "0 12px 32px -18px rgba(31, 43, 39, 0.25)",
        "card-hover": "0 18px 40px -16px rgba(31, 43, 39, 0.32)",
        button: "0 14px 28px -12px rgba(44, 92, 79, 0.45)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
