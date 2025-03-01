import path from "path";
import type { Config } from "tailwindcss";
import { semantic as semanticColors } from "./colors.ts";

const uiPath = path.resolve(__dirname, "../../packages/ui/src");

type BaseConfig = Config & {
  content: string[];
};

export const baseConfig: BaseConfig = {
  content: [path.relative("./", uiPath) + "/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    colors: {
      ...semanticColors,
    },
  },
  plugins: [],
};
