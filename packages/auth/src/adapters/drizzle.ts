// src/adapters/drizzle.ts

import { DrizzleAdapter } from '@auth/drizzle-adapter';
import type { Adapter } from 'next-auth/adapters';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

/**
 * Creates a Drizzle adapter for Auth.js using the project's PostgreSQL schema
 * @param db - Drizzle PostgreSQL database instance
 * @returns Configured Drizzle adapter for Auth.js
 */
export function createDrizzleAdapter(db: PostgresJsDatabase<any>): Adapter {
  if (!db) {
    throw new Error('No database connection provided to Drizzle adapter');
  }

  return DrizzleAdapter(db);
}
