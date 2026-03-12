import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const postFood = async (c: AppContext) => {
  const { title } = await c.req.json();
  const db = getDrizzleDb(c.env.my_hono_db);
  const newFood = await db
    .insert(foodsTable)
    .values({ title })
    .returning()
    .get();
  return c.json({ food: newFood }, 201);
};
