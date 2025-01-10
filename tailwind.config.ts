import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pear: {
          DEFAULT: "#C7EE4E",
          50: "#FCFEF6",
          100: "#F6FCE3",
          200: "#EAF9BE",
          300: "#DFF598",
          400: "#D3F273",
          500: "#C7EE4E",
          600: "#B7E91B",
          700: "#91BA12",
          800: "#69870D",
          900: "#415408",
          950: "#2D3A06",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
