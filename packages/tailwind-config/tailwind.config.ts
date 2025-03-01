import type { Config } from "tailwindcss";
import { semantic as semanticColors } from "./colors.ts";

type BaseConfig = Config & {
  content: string[];
};

export const baseConfig: BaseConfig = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      ...semanticColors,
    },
  },
  plugins: [],
};
