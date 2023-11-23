import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        encode: ["var(--font-encode-sans-condensed)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
