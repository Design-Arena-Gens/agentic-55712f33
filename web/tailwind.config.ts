import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdf8f4",
          100: "#f8efe5",
          200: "#f0dfcb",
          300: "#e2c8a8",
          400: "#d2ae86",
        },
        brown: {
          50: "#f4ede7",
          100: "#e2d1c3",
          200: "#d5bba3",
          300: "#c5a27f",
          400: "#a87758",
          500: "#8b5e3c",
          600: "#70492d",
          700: "#5b3b24",
          800: "#442b1a",
          900: "#2f1b10",
          950: "#20100a",
        },
        tangerine: {
          100: "#ffe6cc",
          200: "#ffc999",
          500: "#ff8f33",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
