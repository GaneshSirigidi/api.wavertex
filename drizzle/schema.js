import { pgTable, serial, varchar, timestamp, index, date } from "drizzle-orm/pg-core";
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
    groupId: serial("group_id").notNull().references(() => contactGroups.id),
}, (table) => {
    return {
        groupIdx: index("group_idx").on(table.groupId),
    };
});
