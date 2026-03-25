"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { X, Plus, LoaderCircle } from "lucide-react";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export const AddCateg = () => {
  const [categoryName, setCategoryName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (
    event,
  ) => {
    setCategoryName(event.target.value);
  };

  const addCategory = async () => {
    setLoading(true);
    const category = {
      categoryName: categoryName,
    };

    try {
      await fetch("http://localhost:3001/foodCateg", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(category),
      });

      setIsOpen(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-9 h-9 rounded-full bg-red-500 flex justify-center items-center cursor-pointer">
        <Plus strokeWidth={2} className="text-white h-4 w-4" />
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="w-115 p-6 bg-white rounded-2xl shadow-lg border-none gap-6 [&>button]:hidden"
      >
        <DialogHeader className="flex flex-row items-center justify-between p-0 space-y-0">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Add new category
          </DialogTitle>
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Category name
          </label>
          <input
            type="text"
            placeholder="Type category name..."
            value={categoryName}
            onChange={onChange}
            className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-gray-400 transition-all"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={addCategory}
            className="px-5 cursor-pointer py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Add category"
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
