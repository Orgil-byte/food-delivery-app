"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FoodCateg } from "@/lib/app-api-data-types";
import { Edit2, LoaderCircle, X } from "lucide-react";
import { ChangeEventHandler, useState } from "react";

type UpdateCategProps = {
  category: FoodCateg;
};

export const UpdateCateg = ({ category }: UpdateCategProps) => {
  const [categoryName, setCategoryName] = useState(category.categoryName);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCategoryName(event.target.value);
  };

  const updateCateg = async () => {
    if (!categoryName.trim()) return;
    setLoading(true);
    try {
      await fetch(`/api/categories/${category.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ categoryName }),
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
      <DialogTrigger className="w-9 h-9 rounded-full bg-red-500 flex justify-center items-center cursor-pointer">
        <div className="w-10.5 h-10.5 rounded-lg border border-red-100 hover: bg-white flex justify-center items-center  cursor-pointer hover:bg-red-50 transition-colors">
          <Edit2 strokeWidth={2} className="text-red-500" />
        </div>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="w-115 h-68 p-6 bg-white rounded-2xl shadow-lg border-none gap-6 [&>button]:hidden"
      >
        <DialogHeader className="flex flex-row items-center justify-between p-0 space-y-0">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Change category name
          </DialogTitle>
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-900">
            Category name
          </label>
          <input
            type="text"
            placeholder="Type category name..."
            defaultValue={categoryName}
            onChange={onChange}
            className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-gray-400 transition-all"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={updateCateg}
            className="px-5 cursor-pointer bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Change name"
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
