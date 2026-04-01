import { Edit2, X, LoaderCircle, UploadCloud } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FoodCateg, Foods } from "@/lib/app-api-data-types";
import { ChangeEventHandler } from "react";
import { DeleteDishes } from "./deleteDishes";

type UpdateDishesProps = {
  food: Foods;
  category: FoodCateg;
  categories: FoodCateg[];
};

export const UpdateDishes = ({
  food,
  category,
  categories,
}: UpdateDishesProps) => {
  const [foodName, setFoodName] = useState(food.foodName);
  const [dishCategory, setDishCategory] = useState(category.id);
  const [foodIngreds, setFoodIngreds] = useState(food.ingredients);
  const [foodPrice, setFoodPrice] = useState(String(food.price));
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // const router = useRouter(); Because it is not working due to dialog component or something else i don't know

  const onChangeFoodName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFoodName(event.target.value);
  };

  const onChangeDishCategory: ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    setDishCategory(Number(event.target.value));
  };

  const onChangeFoodIngreds: ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    setFoodIngreds(event.target.value);
  };

  const onChangeFoodPrice: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFoodPrice(event.target.value);
  };

  const upDateDishes = async () => {
    setLoading(true);
    try {
      await fetch(`/api/foods/${food.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          foodName,
          ingredients: foodIngreds,
          price: Number(foodPrice),
          foodCategoryId: dishCategory,
        }),
      });
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-11 h-11 rounded-full hover:bg-red-100 transition-colors bg-white flex justify-center items-center absolute top-17.5 left-47.5 cursor-pointer shadow-sm">
          <Edit2 strokeWidth={2} className="text-red-500" />
        </div>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="bg-white rounded-[20px] w-full max-w-118 p-6 shadow-xl gap-0 border-none"
      >
        <DialogHeader className="mb-6 flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Dish info
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-[110px_1fr] gap-y-4 items-start text-sm">
          <label className="text-gray-500 mt-2.5">Dish name</label>
          <input
            onChange={onChangeFoodName}
            type="text"
            defaultValue={food.foodName}
            className="border border-gray-200 rounded-lg px-3 py-2 w-full outline-none focus:border-gray-400 text-gray-900"
          />
          <label className="text-gray-500 mt-2.5">Dish category</label>
          <select
            onChange={onChangeDishCategory}
            defaultValue={category.id}
            className="border border-gray-200 rounded-lg px-3 py-2 w-full outline-none focus:border-gray-400 text-gray-900 bg-white"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={String(cat.id)}>
                {cat.categoryName}
              </option>
            ))}
          </select>
          <label className="text-gray-500 mt-2.5">Ingredients</label>
          <textarea
            onChange={onChangeFoodIngreds}
            defaultValue={food.ingredients}
            className="border border-gray-200 rounded-lg px-3 py-2 w-full h-22 resize-none outline-none focus:border-gray-400 text-gray-900 leading-relaxed"
          />
          <label className="text-gray-500 mt-2.5">Price</label>
          <input
            onChange={onChangeFoodPrice}
            type="number"
            defaultValue={food.price}
            className="border border-gray-200 rounded-lg px-3 py-2 w-full outline-none focus:border-gray-400 text-gray-900"
          />
          <label className="text-gray-500 mt-2.5">Image</label>
          <div className="flex flex-col gap-1.5 relative">
            <input
              type="file"
              className="w-full h-50 border border-dashed border-blue-200 bg-[#F8FAFC] rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-blue-50/50 transition-colors"
            />
            <UploadCloud className="h-5 w-5 text-gray-500 absolute bottom-[40%] left-[48%]" />
            <span className="text-[13px] text-gray-500 font-medium absolute bottom-[30%] left-[25%]">
              Choose a file or drag & drop it here
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <DeleteDishes setOpen={setOpen} food={food} />
          {/* Fixed: button was labelled "Add Dish" — now correctly says "Save changes" */}
          <button
            onClick={upDateDishes}
            className="bg-[#18181B] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-black transition-colors text-sm"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Save changes"
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
