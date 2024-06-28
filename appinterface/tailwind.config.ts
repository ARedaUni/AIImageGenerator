import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
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
      boxShadow: {
        'rainbow': `0 0 2px red, 1px 1px 2px orange, 2px 2px 2px yellow, 
                   3px 3px 2px green, 4px 4px 2px blue, 5px 5px 2px indigo, 
                   6px 6px 2px violet`
      },
    },
  },
  plugins: [],
});
export default config;
