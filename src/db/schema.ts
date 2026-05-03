import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  tier: text("tier").$default(() => 'free'),
  campaignsThisMonth: integer("campaigns_this_month").$default(() => 0),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});