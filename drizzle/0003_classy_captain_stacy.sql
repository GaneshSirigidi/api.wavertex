ALTER TABLE "contacts" ADD COLUMN "group_id" serial NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "group_idx" ON "contacts" ("group_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "contacts" ADD CONSTRAINT "contacts_group_id_contactGroups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."contactGroups"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
