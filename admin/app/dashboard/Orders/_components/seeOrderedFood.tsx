"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Order } from "@/lib/app-api-data-types";

type OrderMainContentsProps = {
  orders: Order;
};

export const SeeOrderedFood = ({ orders }: OrderMainContentsProps) => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ChevronDown className="h-4 w-4 cursor-pointer  text-zinc-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-65.75 h-fit opacity-100 bg-white rounded-md border-none p-3">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup
            className="flex flex-col gap-3"
            value={position}
            onValueChange={setPosition}
          >
            {orders.foodOrderItems.map((item) => {
              return (
                <DropdownMenuRadioItem
                  key={item.id}
                  className="p-0 flex items-center justify-between"
                  value="Ordered Food Infos"
                >
                  <div className="flex items-center gap-2.5">
                    {/* <img src="" alt="" /> */}
                    <div className="w-8 h-8 bg-gray-300 rounded-sm"></div>
                    <div className="text-sm">{item.food.foodName}</div>
                  </div>
                  <div className="text-sm">x {item.quantity}</div>
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
