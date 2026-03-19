import express from "express";
import foodsRouter from "./routes/foods.routes";
import usersRouter from "./routes/users.routes";
import foodCategoryRouter from "./routes/foodsCateg.routes";
import foodOrderRouter from "./routes/food-order.routes";
import loginAuth from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/foodCateg", foodCategoryRouter);
app.use("/foods", foodsRouter);
app.use("/users", usersRouter);
app.use("/foodOrder", foodOrderRouter);
app.use("login", loginAuth);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
