// src/db-connection.ts

import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create and export the database connection
const sql = neon(dbUrl);
export const db = drizzle({ client: sql });
