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
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGray: "#1C3F3A",
        white: "#FFFFFF",
        lightGreen: "#51817A",
        rgbaLightGreen: "rgba(81, 129, 122, 0.5)",
        black: "black",
        darkBlue: "#1777f2",
        lightBlue: "#56acee",
        blue: "#0076b2",
        purple: "#c837ab",
      },
      fontSize: {
        xl: "65px",
        lg: "45px",
        md: "35px",
        sm: "20px",
        xs: "15px",
      },
    },
  },
  plugins: [],
};
export default config;
