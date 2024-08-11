CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"content" text NOT NULL,
	"description" text NOT NULL,
	"thumbnail" text NOT NULL,
	"updated_at" timestamp NOT NULL
);
