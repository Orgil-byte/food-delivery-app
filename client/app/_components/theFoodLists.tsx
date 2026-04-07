import { FoodsDataType } from "@/lib/api-data-types";
import { Plus } from "lucide-react";
import { FoodOrder } from "./foodOrder";

type FoodListsProps = {
  categoryFoods: FoodsDataType[];
};

export const FoodLists = ({ categoryFoods }: FoodListsProps) => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 xl:grid-cols-4">
        {categoryFoods.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[20px] p-4 overflow-hidden flex flex-col gap-5"
          >
            <div className="aspect-video w-full bg-neutral-500 relative rounded-xl">
              <img
                src={`${item.image}`}
                alt="food img"
                className="w-full h-full rounded-xl object-cover"
              />
              <FoodOrder />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="flex items-start justify-between gap-2">
                <span className="text-red-500 font-semibold text-[24px] leading-snug">
                  {item.foodName}
                </span>
                <span className="text-[#111] font-semibold text-[18px] whitespace-nowrap">
                  ${item.price}
                </span>
              </div>
              <span className="text-black font-normal text-sm leading-relaxed">
                {item.ingredients}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
