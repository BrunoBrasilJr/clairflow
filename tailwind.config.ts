import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-2": "var(--border-2)",

        text: "var(--text)",
        "text-2": "var(--text-2)",
        "text-3": "var(--text-3)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",

        "ink-10": "var(--ink-10)",
        "primary-10": "var(--primary-10)",
        "secondary-10": "var(--secondary-10)",
        "accent-10": "var(--accent-10)",
      },
      backgroundImage: {
        mesh: "var(--grad-soft)",
        cta: "var(--grad-cta)",
      },
      boxShadow: {
        "soft-sm": "var(--shadow-sm)",
        "soft-md": "var(--shadow-md)",
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
      },
    },
  },
  plugins: [],
};

export default config;
