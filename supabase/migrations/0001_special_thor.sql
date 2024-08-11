ALTER TABLE "posts" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "thumbnail" text NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN IF EXISTS "created_at";