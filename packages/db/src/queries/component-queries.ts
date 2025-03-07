import { db } from '../db-connection';
import { components } from '../schema';
import { eq, inArray } from 'drizzle-orm';

/**
 * Fetch a single component by its ID
 * @param id The component ID
 * @returns The component or undefined if not found
 */
export async function getComponentById(id: string) {
  const results = await db
    .select()
    .from(components)
    .where(eq(components.id, id));

  // Return the first (and likely only) result or undefined
  return results[0];
}

/**
 * Fetch multiple components by their IDs
 * @param ids Array of component IDs to retrieve
 * @returns Array of component records
 */
export async function getComponentsByIds(ids: string[]) {
  if (!ids.length) {
    return [];
  }
  return db.select().from(components).where(inArray(components.id, ids));
}
