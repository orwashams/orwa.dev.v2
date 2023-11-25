import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        encode: ["var(--font-encode-sans-condensed)"],
        hebrew: ["var(--font-noto-sans-hebrew)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
