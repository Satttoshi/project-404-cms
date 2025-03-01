import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { pages } from "./schema.js";

// Load environment variables directly in this file as well
dotenv.config({ path: "../../.env" });

async function testConnection() {
  try {
    const dbUrl = process.env.DATABASE_URL;
    console.log("Database URL exists:", !!dbUrl);

    if (!dbUrl) {
      throw new Error("DATABASE_URL environment variable is not set");
    }

    // Create a connection here instead of importing
    const sql = neon(dbUrl);
    const db = drizzle({ client: sql });

    // Try to query the database
    console.log("Testing database connection...");
    const result = await db.select().from(pages).limit(1);
    console.log("Connection successful!");
    console.log("Query result:", result);
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

testConnection().then((success) => {
  if (success) {
    console.log("Database is properly configured!");
  } else {
    console.log("Please check your database configuration.");
  }
});
