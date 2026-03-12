import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const getFoods = async (c: AppContext) => {
  const db = getDrizzleDb(c.env.my_hono_db);
  const foods = await db.select().from(foodsTable).all();
  return c.json({ foods });
};
