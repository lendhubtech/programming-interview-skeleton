import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "var(--color-white)",
          "off-white": "var(--color-off-white)",
          "almost-white": "var(--color-almost-white)",
          "light-grey": "var(--color-light-grey)",
          "mid-grey": "var(--color-mid-grey)",
          stone: "var(--color-stone)",
          "dark-grey": "var(--color-dark-grey)",
          "almost-black": "var(--color-almost-black)",
          black: "var(--color-black)",
        },
        purple: {
          t3: "var(--color-purple-t3)",
          t2: "var(--color-purple-t2)",
          t1: "var(--color-purple-t1)",
          DEFAULT: "var(--color-purple)",
          s1: "var(--color-purple-s1)",
          s2: "var(--color-purple-s2)",
        },
        red: {
          t3: "var(--color-red-t3)",
          t2: "var(--color-red-t2)",
          t1: "var(--color-red-t1)",
          DEFAULT: "var(--color-red)",
          s1: "var(--color-red-s1)",
          s2: "var(--color-red-s2)",
        },
        blue: {
          t3: "var(--color-blue-t3)",
          t2: "var(--color-blue-t2)",
          t1: "var(--color-blue-t1)",
          DEFAULT: "var(--color-blue)",
          s1: "var(--color-blue-s1)",
          s2: "var(--color-blue-s2)",
        },
        green: {
          t3: "var(--color-green-t3)",
          t2: "var(--color-green-t2)",
          t1: "var(--color-green-t1)",
          DEFAULT: "var(--color-green)",
          s1: "var(--color-green-s1)",
          s2: "var(--color-green-s2)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
