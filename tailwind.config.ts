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
    borderColor: {
      "gray-100": "#F3F4F6",
      "gray-200": "#E5E7EB",
      "gray-400": "#9CA3AF",
      "gray-500": "#6B7280",
      "gray-700": "#374151",
      "blue-500": "#6366F1",
    },
    extend: {
      colors: {
        white: "#fff",
        "green-500": "#30D070",
        "gray-50": "#F9FAFB",
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-400": "#9CA3AF",
        "gray-500": "#6B7280",
        "gray-700": "#374151",
        "gray-900": "#111827",
        "gray-950": "#030712",
        "blue-500": "#6366F1",
        "blue-600": "#4F46E5",
      },
      backgroundColor: {
        "gray-100": "#F3F4F6",
      },
    },
  },
  plugins: [],
};
export default config;
