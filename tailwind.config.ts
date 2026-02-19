import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0A5CFF",
          dark: "#071533",
          light: "#F4F7FF"
        }
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 15% 20%, #E8EEFF 0%, #F4F7FF 36%, #FFFFFF 72%)"
      }
    }
  },
  plugins: []
};

export default config;
