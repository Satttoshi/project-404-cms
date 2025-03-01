# Database Package

This package provides a shared database layer for the monorepo using Drizzle ORM with Neon PostgreSQL. It includes schema definitions, database connection utilities, and migration tools.

## Setup

This package is configured to use a Neon PostgreSQL database. Make sure you have the following environment variable in your root `.env` file:

```
DATABASE_URL=postgres://username:password@hostname:port/database
```

## Schema

The database schema is defined in the `schema.ts` file. It includes tables for website pages, UI components, and uploaded assets.
An example schema is provided below:

```typescript
import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const mySchema = pgSchema("my_schema");
export const colors = mySchema.enum('colors', ['red', 'green', 'blue']);

export const mySchemaUsers = mySchema.table('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  color: colors('color').default('red'),
});
```

## Commands

### Build

Compiles TypeScript files:

```bash
pnpm build
```

### Development Mode

Watches for changes and recompiles:

```bash
pnpm dev
```

### Generate Migrations

Creates SQL migration files based on schema changes:

```bash
pnpm generate
```

This command analyzes your schema and generates migration files in the `./drizzle` directory, which track changes to your database schema over time.

### Push Schema to Database

Applies the schema directly to the database:

```bash
pnpm push
```

Use this during development to quickly update the database schema without running migrations. Not recommended for production environments.

### Studio

Opens Drizzle Studio, a visual database browser:

```bash
pnpm studio
```

This command starts a local server where you can browse and edit your database tables.

## Usage in Applications

To use this package in your Next.js applications, import the database connection and schema:

```typescript
import { db, pages, components, assets } from '@repo/db';

// Example: Query pages
async function getPages() {
  const allPages = await db.select().from(pages);
  return allPages;
}

// Example: Insert a page
async function createPage(title, slug) {
  const result = await db.insert(pages).values({
    title,
    slug,
    published: false
  }).returning();
  
  return result[0];
}
```

## TypeScript Support

All database operations are fully typed, providing autocomplete and type safety throughout your application.
