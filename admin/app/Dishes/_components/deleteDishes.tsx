"use client";

import { Foods } from "@/lib/app-api-data-types";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type DeleteDishes = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  food: Foods;
};

export const DeleteDishes = ({ setOpen, food }: DeleteDishes) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const deleteDishes = async () => {
    setLoading(true);

    try {
      await fetch(`http://localhost:3001/foods/${food.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.refresh;
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
