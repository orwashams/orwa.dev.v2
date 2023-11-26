import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        encode: ["var(--font-encode-sans-condensed)"],
        hebrew: ["var(--font-amatic-sc)"],
        arabic: ["var(--font-arabic)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
