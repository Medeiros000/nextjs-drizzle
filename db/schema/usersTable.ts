import { pgSchema, pgTable, serial, text } from "drizzle-orm/pg-core";

export const nextjs_drizzle = pgSchema("nextjs_drizzle");

export const usersTable = nextjs_drizzle.table("users", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	age: text("age").notNull(),
	email: text("email").notNull().unique(),
});
