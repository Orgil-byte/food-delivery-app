"use client";

import { Foods } from "@/lib/app-api-data-types";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useState } from "react";

type DeleteDishesProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  food: Foods;
};

export const DeleteDishes = ({ setOpen, food }: DeleteDishesProps) => {
  const [loading, setLoading] = useState(false);

  const deleteDishes = async () => {
    setLoading(true);
    try {
      await fetch(`/api/foods/${food.id}`, {
        method: "DELETE",
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
    <button
      onClick={deleteDishes}
      className="cursor-pointer w-10.5 h-10.5 border border-red-100 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
    >
      {loading ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <Trash2 className="w-5 h-5" />
      )}
    </button>
  );
};
