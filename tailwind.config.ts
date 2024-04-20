import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1200px",
      },
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
