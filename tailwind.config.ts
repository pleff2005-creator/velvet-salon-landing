import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Палитра: вино + костяной + графит
        bone: {
          DEFAULT: "#f5f2ef",
          2: "#ece6e0",
          3: "#e2d9d1",
        },
        ink: {
          DEFAULT: "#211d1c",
          soft: "#6b615d",
        },
        wine: {
          DEFAULT: "#7b3f4e",
          deep: "#623240",
          tint: "#efe4e6",
        },
        paper: "#fbfaf9",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(53,35,40,.45)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16,1,0.3,1)",
      },
      keyframes: {
        fade: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fade: "fade .5s cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;
