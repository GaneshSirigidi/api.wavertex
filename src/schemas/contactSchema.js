import { date, index, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
export const contactGroups = pgTable('contactGroups', {
    id: serial('id').primaryKey(),
    title: varchar('name'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
export const contacts = pgTable('contacts', {
    id: serial('id').primaryKey(),
    name: varchar('name'),
    phone: varchar('phone'),
    gender: varchar('gender'),
    dob: date('dob'),
    marriage_anniversary_day: date('marriage_anniversary_day'),
    group_id: serial('group_id').references(() => contactGroups.id).notNull(),
    status: varchar('status'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
}, (table) => {
    return {
        groupIdx: index("group_idx").on(table.group_id)
    };
});
