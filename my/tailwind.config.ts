import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        obsidian: "var(--color-obsidian)",
        graphite: "var(--color-graphite)",
        slate: "var(--color-slate)",
        iron: "var(--color-iron)",
        steel: "var(--color-steel)",
        fog: "var(--color-fog)",
        ash: "var(--color-ash)",
        mist: "var(--color-mist)",
        cloud: "var(--color-cloud)",
        paper: "var(--color-paper)",
        snow: "var(--color-snow)",
        ember: "var(--color-ember)",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        caption: ["12px", { lineHeight: "1.64" }],
        body: ["15px", { lineHeight: "1.45" }],
        "body-lg": ["18px", { lineHeight: "1.45" }],
        subheading: ["20px", { lineHeight: "1.5" }],
        "heading-sm": ["32px", { lineHeight: "1.5" }],
        heading: ["40px", { lineHeight: "1.28" }],
        "heading-lg": ["56px", { lineHeight: "1.28" }],
        display: ["64px", { lineHeight: "1.12" }],
      },
      borderRadius: {
        // Awesomic's geometry: precise/contained on interactive controls,
        // generous on containers. Pill (9999px) is reserved for nav CTAs only.
        card: "36px",
        icon: "40px",
        btn: "14px",
        badge: "12px",
        pill: "9999px",
      },
      boxShadow: {
        "btn-primary":
          "inset 0 0.5px 0 0 rgba(255,255,255,0.5), inset 0 9px 14px -5px rgba(117,123,133,0.4), 0 0 0 1.5px #2c2e34, 0 4px 6px 0 rgba(0,0,0,0.14)",
        menu: "0 4px 12px rgba(0,0,0,0.04)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 22s ease-in-out infinite",
        "aurora-slow": "aurora 30s ease-in-out infinite reverse",
        "draw-line": "drawLine 1.2s ease-out forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, 6%) scale(1.08)" },
          "66%": { transform: "translate(-3%, -4%) scale(0.96)" },
        },
        drawLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
