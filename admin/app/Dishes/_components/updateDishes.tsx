import { Edit2 } from "lucide-react";

export const UpdateDishes = () => {
  return (
    <div className="w-11 h-11 rounded-full bg-white flex justify-center items-center absolute top-17.5 left-47.5 cursor-pointer">
      <Edit2 strokeWidth={2} className="text-red-500" />
    </div>
  );
};
