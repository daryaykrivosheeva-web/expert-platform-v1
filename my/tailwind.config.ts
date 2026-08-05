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
        concrete: "var(--color-concrete)",
        "ash-gray": "var(--color-ash-gray)",
        bone: "var(--color-bone)",
        smoke: "var(--color-smoke)",
        graphite: "var(--color-graphite)",
        steel: "var(--color-steel)",
        charcoal: "var(--color-charcoal)",
        ink: "var(--color-ink)",
        obsidian: "var(--color-obsidian)",
        volt: "var(--color-volt)",
        ultraviolet: "var(--color-ultraviolet)",
        vermillion: "var(--color-vermillion)",
      },
      fontFamily: {
        heading: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        hand: ["var(--font-hand)", "cursive"],
      },
      borderRadius: {
        // Osmo's two-family radius system: SHARP for content tiles, EXTREME
        // for anything interactive/circular. Existing `rounded-3xl` (cards)
        // and `rounded-2xl` (icon frames) usages across components pick
        // these up automatically — see radius philosophy in DESIGN.md.
        xl: "2px",
        "2xl": "160px",
        "3xl": "5px",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(0, 0, 0, 0.08)",
        card: "0 1px 0 rgba(0, 0, 0, 0.04)",
        lift: "4px 4px 0 0 var(--color-ink)",
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
