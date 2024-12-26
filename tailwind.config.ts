import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#27D17F",
        "secondary": "#F5F5F5",
        "accent": "#7D7D7D",
        "background": "#0C0E10",
        "darkContainer": "#16181A",
        "darkContainer2": "#111315",
        "text": "#F7F7F8",
        "secondaryText": "#ABAFB4",
      }
    },
  },
  plugins: [],
};
export default config;
