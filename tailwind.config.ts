import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.625rem"],
      xl: ["1.25rem", "1.875rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["2rem", "2.5rem"],
      "4xl": ["2.5rem", "2.75rem"],
      "5xl": ["3rem", "3.5rem"],
      "6xl": ["4rem", "4.5rem"],
      "7xl": ["5.625rem", "6rem"],
    },
  },
  plugins: [],
};
export default config;
