ALTER TABLE "posts" ADD COLUMN "tags" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "likes" integer NOT NULL;