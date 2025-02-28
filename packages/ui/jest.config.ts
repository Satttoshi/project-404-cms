import type { Config } from "@jest/types";
import mainConfig from "@repo/jest-config";

const config: Config.InitialOptions = {
  ...mainConfig,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"],
};

export default config;
