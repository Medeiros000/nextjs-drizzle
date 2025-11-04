CREATE SCHEMA "nextjs_drizzle";
--> statement-breakpoint
CREATE TABLE "nextjs_drizzle"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
