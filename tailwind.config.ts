import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Cormorant Unicase", "monospace"], // Add "title" and a fallback
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          "50": "#ffffe7",
          "100": "#feffc1",
          "200": "#fffd86",
          "300": "#fff441",
          "400": "#ffe60d",
          "500": "#ffd700",
          "600": "#d19e00",
          "700": "#a67102",
          "800": "#89580a",
          "900": "#74480f",
          "950": "#442604",
        },
      },
    },
  },
  plugins: [],
};
export default config;
