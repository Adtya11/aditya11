ALTER TABLE "posts" ALTER COLUMN "likes" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "likes" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "likes" SET NOT NULL;