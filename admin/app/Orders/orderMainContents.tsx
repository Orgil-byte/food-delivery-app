import { Top } from "./_components/top";
import { HeaderRow } from "./_components/headerRow";
import { DataRow } from "./_components/dataRow";
import { Order } from "@/lib/app-api-data-types";

type OrderMainContentsProps = {
  ordersData: Order[];
};

export const OrderMainContents = ({ ordersData }: OrderMainContentsProps) => {
  return (
    <div className="w-full min-h-screen bg-neutral-100 pt-6 pl-6 pr-10 pb-10">
      <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
        <Top ordersData={ordersData} />

        <div className="overflow-x-auto">
          <div className="text-sm">
            <HeaderRow />
            <DataRow ordersData={ordersData} />
          </div>
        </div>
      </div>
    </div>
  );
};
