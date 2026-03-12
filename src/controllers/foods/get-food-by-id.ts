import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";
import { eq } from "drizzle-orm";

export const getFoodById = async (c: AppContext) => {
  const id = Number(c.req.param("id"));
  const db = getDrizzleDb(c.env.my_hono_db);
  const food = await db
    .select()
    .from(foodsTable)
    .where(eq(foodsTable.id, id))
    .get();
  if (!food) return c.json({ error: "Food not found" }, 404);
  return c.json({ food });
};
