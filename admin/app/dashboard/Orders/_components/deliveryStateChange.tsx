"use client";

import { Order } from "@/lib/app-api-data-types";
import { ChevronUp, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

type DeliveryStateChangeProps = {
  orders: Order;
};

export const DeliveryStateChange = ({ orders }: DeliveryStateChangeProps) => {
  const [position, setPosition] = useState(orders.status);
  const [isOpen, setIsOpen] = useState(false);

  const updateStatus = async (status: string) => {
    try {
      await fetch(`/api/orders/${orders.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ status }),
      });
      setIsOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <span
          className={`inline-flex items-center gap-1.5 cursor-pointer text-sm rounded-full border ${
            orders.status === "PENDING"
              ? "border-red-500"
              : orders.status === "DELIVERED"
                ? "border-[#18BA51]"
                : "border-[#E4E4E7]"
          } px-3 py-1 text-sm font-semibold text-zinc-800`}
        >
          {orders.status}
          <span className="flex flex-col leading-none text-zinc-500">
            <ChevronUp className="h-2.5 w-2.5 -mb-0.5" />
            <ChevronDown className="h-2.5 w-2.5" />
          </span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 opacity-100 bg-white">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup
            className="flex flex-col gap-3"
            value={position}
            onValueChange={setPosition}
          >
            <DropdownMenuRadioItem
              onClick={() => updateStatus("DELIVERED")}
              className={`${position === "DELIVERED" ? "bg-zinc-100" : ""} rounded-full`}
              value="DELIVERED"
            >
              Delivered
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              onClick={() => updateStatus("PENDING")}
              className={`${position === "PENDING" ? "bg-zinc-100" : ""} rounded-full`}
              value="PENDING"
            >
              Pending
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              onClick={() => updateStatus("CANCELED")}
              className={`${position === "CANCELED" ? "bg-zinc-100" : ""} rounded-full`}
              value="CANCELED"
            >
              Canceled
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
