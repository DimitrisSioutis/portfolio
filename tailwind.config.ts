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
      },
      boxShadow: {
        'custom': 'rgba(56, 189, 248, 0.25) 0px 2px 4px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
  },
  plugins: [],
};
export default config;
