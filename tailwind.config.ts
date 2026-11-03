import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          dark: "#030303",
          light: "#fcfbf9",
        },
        surface: {
          DEFAULT: "var(--surface)",
          dark: "#0b0b0b",
          light: "#ffffff",
          hover: "#141414",
        },
        ink: {
          DEFAULT: "var(--ink)",
          dark: "#f1eee8",
          light: "#111111",
        },
        muted: {
          DEFAULT: "var(--muted)",
          dark: "#aaa9a4",
          light: "#666666",
        },
        line: "var(--line)",
        accent: {
          DEFAULT: "var(--blue)", // #ff8c59 in Sarthak-style palette
          hover: "#ff7438",
          dark: "#ff8c59",
          subtle: "rgba(255, 140, 89, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "DM Sans", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      letterSpacing: {
        eyebrow: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
