"use client";

import { FoodCateg } from "@/lib/app-api-data-types";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useState } from "react";

type DeleteCategProps = {
  category: FoodCateg;
};

export const DeleteCateg = ({ category }: DeleteCategProps) => {
  const [loading, setLoading] = useState(false);

  const deleteCateg = async () => {
    setLoading(true);
    if (category.foods.length > 0) {
      window.alert("The Category has foods, To delete it remove foods first");
    }

    try {
      await fetch(`http://localhost:3001/foodCateg/${category.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={deleteCateg}
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
