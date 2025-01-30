import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",    // Main Dark Blue
        accent: "#38BDF8",     // Cyber Blue
        highlight: "#14B8A6",  // Turquoise
        background: "#F1F5F9", // Soft Gray
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        manrope: ["var(--font-manrope)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins:[]
} satisfies Config;

