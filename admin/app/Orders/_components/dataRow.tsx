import { Order } from "@/lib/app-api-data-types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SeeOrderedFood } from "./seeOrderedFood";
import { DeliveryStateChange } from "./deliveryStateChange";
import { Dispatch, SetStateAction } from "react";
import { Checkbox } from "@/components/ui/checkbox";

type OrderMainContentsProps = {
  ordersData: Order[];
  selected: boolean;
  setSelected: Dispatch<SetStateAction<boolean>>;
};

export const DataRow = ({
  ordersData,
  selected,
  setSelected,
}: OrderMainContentsProps) => {
  // const setSelectedOrders = () => {
  //   if (selected === false) {
  //     setSelected(true);
  //   } else if(         ){
  //     setSelected(true);
  //   }
  // };

  const ordersMainOrderedByDate = [...ordersData].sort(
    (acc, cumm) => +new Date(cumm.createdAt) - +new Date(acc.createdAt),
  );

  return ordersMainOrderedByDate.map((orders) => {
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
          <Checkbox
            id="terms-checkbox-basic"
            name="terms-checkbox-basic"
            className="data-[state=checked]:bg-black data-[state=checked]:text-white"
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
          <SeeOrderedFood orders={orders} />
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
          <DeliveryStateChange orders={orders} />
        </div>
      </div>
    );
  });
};
