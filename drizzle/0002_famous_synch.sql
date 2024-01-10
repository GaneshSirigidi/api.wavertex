ALTER TABLE "contacts" DROP CONSTRAINT "contacts_group_id_contactGroups_id_fk";
--> statement-breakpoint
DROP INDEX IF EXISTS "group_idx";--> statement-breakpoint
ALTER TABLE "contacts" DROP COLUMN IF EXISTS "group_id";