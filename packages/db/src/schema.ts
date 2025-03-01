import { pgTable, serial, text, timestamp, json, boolean, uuid } from "drizzle-orm/pg-core";

// Pages table - represents website pages
export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  content: json("content").default({}),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

// Components table - reusable components for the CMS
export const components = pgTable("components", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // header, footer, section, etc.
  content: json("content").default({}),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

// Assets table - for managing uploaded files/images
export const assets = pgTable("assets", {
  id: uuid("id").defaultRandom().primaryKey(),
  filename: text("filename").notNull(),
  url: text("url").notNull(),
  size: text("size"),
  mimeType: text("mime_type"),
  alt: text("alt"),
  createdAt: timestamp("created_at").defaultNow()
});
