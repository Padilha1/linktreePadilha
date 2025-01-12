import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tema Dark
        dark: {
          text: "#FFFFFF",
          stroke: "#FFFFFF80",
          surface: {
            10: "#FFFFFF1A",
            5: "#FFFFFF0D",
            2: "#FFFFFF05",
          },
          highlight: "#FFFFFF33",
        },

        // Tema Light
        light: {
          text: "#000000",
          stroke: "#00000080",
          surface: {
            10: "#0000001A",
            5: "#0000000D",
            2: "#00000005",
          },
          highlight: "#0000001A",
        },
      },
      backgroundImage: {
        "bg-light": "url('/bg-desktop-light.jpg')",
        "bg-dark": "url('/bg-desktop.jpg')",
        "bg-dark-mob": "url('/bg-mobile.jpg')",
        "bg-light-mob": "url('/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
