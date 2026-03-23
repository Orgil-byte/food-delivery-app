import { DishesCategory } from "./FoodMenu/category";
import { FoodLists } from "./FoodMenu/foodLists";

const Dishes = () => {
  return (
    <div className="w-full h-screen pl-6 pt-6 pr-10 flex flex-col gap-6">
      <DishesCategory />
      <FoodLists />
    </div>
  );
};

export default Dishes;
