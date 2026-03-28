import { Top } from "./_components/top";
import { HeaderRow } from "./_components/headerRow";
import { DataRow } from "./_components/dataRow";
import { foodOrderApi } from "@/lib/api/admin-orders";

export const OrderMainContents = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-100 pt-6 pl-6 pr-10 pb-10">
      <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
        <Top />

        <div className="overflow-x-auto">
          <div className="text-sm">
            <HeaderRow />
            <DataRow />
          </div>
        </div>
      </div>
    </div>
  );
};
