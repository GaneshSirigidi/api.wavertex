import { pgTable, serial, varchar, timestamp, date } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const contactGroups = pgTable("contactGroups", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name"),
	phone: varchar("phone"),
	gender: varchar("gender"),
	dob: date("dob"),
	marriageAnniversaryDay: date("marriage_anniversary_day"),
	status: varchar("status"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
});