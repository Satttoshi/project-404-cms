import type { Config } from "tailwindcss";
import { baseConfig } from "@repo/tailwind-config";

const config: Config = {
  ...baseConfig,
  content: [...baseConfig.content, "./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    ...baseConfig.theme,
  },
};

export default config;
