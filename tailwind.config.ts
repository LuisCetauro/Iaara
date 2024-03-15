import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      cor1: "#2200DB",
      cor2: "#B100DB",
      cor3: "#6A00DB",
      cor4: "#0025DB",
      cor5: "#DB00A6",
      cor6: "#9049DB",
      cor7: "#7d2ad5",
      cor8: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
