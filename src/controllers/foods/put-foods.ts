import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";
import { eq } from "drizzle-orm";

export const putFood = async (c: AppContext) => {
  const id = Number(c.req.param("id"));
  const { title } = await c.req.json();
  const db = getDrizzleDb(c.env.my_hono_db);
  const updated = await db
    .update(foodsTable)
    .set({ title })
    .where(eq(foodsTable.id, id))
    .returning()
    .get();
  if (!updated) return c.json({ error: "Food not found" }, 404);
  return c.json({ food: updated });
};
