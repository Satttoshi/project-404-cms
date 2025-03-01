import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

export default {
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL
  }
} satisfies Config;
