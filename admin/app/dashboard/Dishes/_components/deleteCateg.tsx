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
    if (category.foods.length > 0) {
      window.alert(
        "This category has dishes. Remove all dishes first before deleting the category.",
      );
      return;
    }

    setLoading(true);
    try {
      await fetch(`/api/categories/${category.id}`, {
        method: "DELETE",
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
