import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D9A441",
        charcoal: "#1B1B1B",
        night: "#111111",
        muted: "#A1A1A1",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        gold: "0 20px 60px rgba(217, 164, 65, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
