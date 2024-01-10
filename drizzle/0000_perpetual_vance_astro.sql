CREATE TABLE IF NOT EXISTS "contactGroups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"phone" varchar,
	"gender" varchar,
	"dob" date,
	"marriage_anniversary_day" date,
	"group_id" serial NOT NULL,
	"status" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "group_idx" ON "contacts" ("group_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "contacts" ADD CONSTRAINT "contacts_name_contactGroups_id_fk" FOREIGN KEY ("name") REFERENCES "public"."contactGroups"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
