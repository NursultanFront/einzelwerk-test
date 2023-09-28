import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "text-xs": "0.75rem",
      "text-sm": "0.875rem",
      "text-base": "1rem",
      "text-lg": "1.125rem",
      "text-xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.5rem",
      "4xl": "1.5rem",
      "5xl": "2rem",
      "6xl": "2.5rem",
      "7xl": "5.625rem",
    },
  },
  plugins: [],
};
export default config;
