ALTER TABLE "assets" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "assets" CASCADE;--> statement-breakpoint
ALTER TABLE "page_components" ALTER COLUMN "position" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "page_components" ALTER COLUMN "position" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "page_components" ALTER COLUMN "position" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "page_components" DROP COLUMN "order";