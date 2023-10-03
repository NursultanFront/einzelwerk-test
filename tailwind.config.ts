import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
      "8xl": ["10rem", "90%"],
    },
    borderColor: {
      "gray-100": "#F3F4F6",
      "gray-200": "#E5E7EB",
      "gray-400": "#9CA3AF",
      "gray-500": "#6B7280",
      "gray-700": "#374151",
      "blue-500": "#6366F1",
      "blue-600": "#4F46E5",
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
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
        "error-color": "#FF2525",
      },
      backgroundColor: {
        "gray-100": "#F3F4F6",
        "header-color": "rgba(3, 7, 18, 0.72)",
      },
      keyframes: {
        "back-to-back": {
          "0%": { "background-position": "0 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0 50%" },
        },
      },
      animation: {
        gradient: "back-to-back 10s ease infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-footer-gradient": {
          background:
            "linear-gradient(145deg, rgba(255, 255, 255, 1) 59%, rgba(102, 102, 255, 1) 78%, rgba(106, 96, 241, 1) 93%)",
          "background-size": "200% 200%",
        },
        ".dots-main": {
          background: "#fff",
          opacity: "0.24",
          width: "48px",
          height: "8px",
          borderRadius: "20px",
        },
        ".dots-main--active": {
          background: "#fff",
          opacity: "1",
          width: "80px",
          height: "8px",
          borderRadius: "20px",
        },
      });
    }),
  ],
};
export default config;
