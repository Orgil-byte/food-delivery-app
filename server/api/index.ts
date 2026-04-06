import express from "express";
import foodsRouter from "../src/routes/foods.routes";
import usersRouter from "../src/routes/users.routes";
import foodCategoryRouter from "../src/routes/foodsCateg.routes";
import foodOrderRouter from "../src/routes/food-order.routes";
import loginRouter from "../src/routes/login.routes";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "https://admin-food-real-one.vercel.app",
      "http://localhost:3000/",
    ],
  }),
);

app.use(express.json());
app.use("/foodCateg", foodCategoryRouter);
app.use("/foods", foodsRouter);
app.use("/users", usersRouter);
app.use("/foodOrder", foodOrderRouter);
app.use("/users", loginRouter);

export default app;
