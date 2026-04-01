"use client";
import { FoodCateg } from "@/lib/app-api-data-types";
import { LoaderCircle, Plus, UploadCloud, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChangeEventHandler, useState } from "react";

type AddDishesProps = {
  category: FoodCateg;
};

export const AddDishes = ({ category }: AddDishesProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodIngreds, setFoodIngreds] = useState("");
  const [loading, setLoading] = useState(false);

  const addDishes = async () => {
    if (!foodName.trim() || !foodPrice) return;
    setLoading(true);
    try {
      await fetch("/api/foods", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          foodName,
          ingredients: foodIngreds,
          price: Number(foodPrice),
          foodCategoryId: category.id,
        }),
      });
      setIsOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="w-67.5 h-60 border border-dashed border-red-500 rounded-[20px] flex flex-col justify-center items-center gap-4 cursor-pointer hover:bg-red-50/50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-red-500 flex justify-center items-center">
            <Plus strokeWidth={2} className="text-white h-5 w-5" />
          </div>
          <p className="text-center font-medium text-[14px] text-gray-900 leading-tight">
            Add new Dish to <br /> {category.categoryName}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="max-w-115 w-full p-6 bg-white rounded-2xl shadow-lg border-none flex flex-col gap-6 [&>button]:hidden"
      >
        <DialogHeader className="flex flex-row items-center justify-between p-0 m-0 space-y-0">
          <DialogTitle className="text-lg font-bold text-gray-900">
            Add new Dish to {category.categoryName}
          </DialogTitle>
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-[13px] font-medium text-gray-700">
                Food name
              </label>
              <input
                type="text"
                placeholder="Type food name"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-[13px] font-medium text-gray-700">
                Food price
              </label>
              <input
                value={foodPrice}
                onChange={(e) => setFoodPrice(e.target.value)}
                type="number"
                placeholder="Enter price..."
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-700">
              Ingredients
            </label>
            <textarea
              value={foodIngreds}
              onChange={(e) => setFoodIngreds(e.target.value)}
              placeholder="List ingredients..."
              rows={3}
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400 resize-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-medium text-gray-700">
              Food image
            </label>
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
        <div className="flex justify-end pt-1">
          <button
            onClick={addDishes}
            className="px-6 py-2.5 cursor-pointer bg-[#1A1A1A] text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Add Dish"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
