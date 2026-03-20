import express from "express";
import foodsRouter from "./routes/foods.routes";
import usersRouter from "./routes/users.routes";
import foodCategoryRouter from "./routes/foodsCateg.routes";
import foodOrderRouter from "./routes/food-order.routes";
import loginRouter from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/foodCateg", foodCategoryRouter);
app.use("/foods", foodsRouter);
app.use("/users", usersRouter);
app.use("/foodOrder", foodOrderRouter);
app.use("/users", loginRouter);

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
