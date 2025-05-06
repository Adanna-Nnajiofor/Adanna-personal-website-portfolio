import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-start infinite",
        pulse: "pulse 4s ease-in-out infinite",
        ping: "ping 5s cubic-bezier(0, 0, 0.2, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gradient-light": "var(--gradient-light)",
        "gradient-dark": "var(--gradient-dark)",
      },
    },
  },
  plugins: [],
};

export default config;
