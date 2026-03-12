import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";
import { eq } from "drizzle-orm";

export const deleteFood = async (c: AppContext) => {
  const id = Number(c.req.param("id"));
  const db = getDrizzleDb(c.env.my_hono_db);
  const deleted = await db
    .delete(foodsTable)
    .where(eq(foodsTable.id, id))
    .returning()
    .get();
  if (!deleted) return c.json({ error: "Food not found" }, 404);
  return c.json({ deleted });
};
