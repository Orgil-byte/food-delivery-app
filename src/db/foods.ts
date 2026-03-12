import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const foodsTable = sqliteTable("foods_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
});
