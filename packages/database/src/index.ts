import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

// export schemas
export * from "./schema.js";

// Load environment variables from the root .env file
dotenv.config({ path: "../../.env" });

// Make sure we have a DATABASE_URL
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// Create and export the database connection
const sql = neon(dbUrl);
export const db = drizzle({ client: sql });
