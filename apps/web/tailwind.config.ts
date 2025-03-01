import type { Config } from "tailwindcss";
import { baseConfig } from "@repo/tailwind-config";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}", ...baseConfig.content],
  theme: {
    ...baseConfig.theme,
  },
};

export default config;
