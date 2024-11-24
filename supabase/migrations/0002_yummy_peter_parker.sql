ALTER TABLE "posts" ALTER COLUMN "tags" SET DEFAULT '{}'::jsonb;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "tags" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "likes" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "likes" SET DEFAULT '0';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "likes" DROP NOT NULL;