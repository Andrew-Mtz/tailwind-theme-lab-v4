import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        "text-secondary": "var(--color-text-secondary)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "primary-hover": "var(--color-primary-hover)",
        "secondary-hover": "var(--color-secondary-hover)",
        "on-primary": "var(--color-on-primary)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [],
};

export default config;
