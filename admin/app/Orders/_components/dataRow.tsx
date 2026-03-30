import { Order } from "@/lib/app-api-data-types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SeeOrderedFood } from "./seeOrderedFood";

type OrderMainContentsProps = {
  ordersData: Order[];
};

export const DataRow = ({ ordersData }: OrderMainContentsProps) => {
  return ordersData.map((orders) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const dateObj = new Date(orders.createdAt);
    const theCreatedAtToReadable = dateObj.toLocaleDateString(
      undefined,
      options,
    );
    return (
      <div
        key={orders.id}
        className="flex justify-between border-b items-center border-zinc-100 bg-white text-zinc-600"
      >
        <div className="flex items-center p-4 w-12 h-13">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-zinc-300"
            aria-label="Select row"
          />
        </div>
        <div className="flex items-center p-4 w-14 h-13">{orders.id}</div>
        <div className="flex  items-center h-13 w-55 px-4">
          {orders.user.email}
        </div>
        <div className="flex items-center w-40 h-13 px-4 gap-8">
          <span className="inline-flex items-center gap-1.5">
            {orders.foodOrderItems.reduce(
              (sum, quantity) => sum + quantity.quantity,
              0,
            )}
            <div>foods</div>
          </span>
          <SeeOrderedFood ordersData={ordersData} />
        </div>
        <div className="flex  items-center w-40 h-13 px-4">
          {theCreatedAtToReadable}
        </div>
        <div className="flex   items-center  font-medium w-40 h-13 px-4">
          ${orders.totalPrice}
        </div>
        <div className="flex w-55 items-center px-4 py-2">
          <div className="w-full px-3 py-2 text-xs text-zinc-700 line-clamp-2">
            {orders.user.address}
          </div>
        </div>
        <div className="flex  items-center w-40 h-13 px-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-zinc-800">
            {orders.status}
            <span className="flex flex-col leading-none text-zinc-500">
              <ChevronUp className="h-2.5 w-2.5 -mb-0.5" />
              <ChevronDown className="h-2.5 w-2.5" />
            </span>
          </span>
        </div>
      </div>
    );
  });
};
