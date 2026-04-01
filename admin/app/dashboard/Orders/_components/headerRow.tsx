import { ChevronUp, ChevronDown } from "lucide-react";

export const HeaderRow = () => {
  return (
    <div className="flex justify-between border-b border-zinc-200 bg-[#F9FAFB] font-medium text-zinc-700">
      <div className="flex   items-center p-4 w-12 h-13" />
      <div className="flex   items-center p-4 w-14 h-13">№</div>
      <div className="flex  items-center h-13 w-55 px-4">Customer</div>
      <div className="flex items-center w-40 h-13 px-4">Food</div>
      <div className="flex items-center gap-1  w-40 h-13 px-4 justify-between">
        Date
        <span className="flex flex-col  text-zinc-400">
          <ChevronUp className="h-2.5 w-2.5 -mb-0.5" />
          <ChevronDown className="h-2.5 w-2.5" />
        </span>
      </div>
      <div className="flex   items-center  w-40 h-13 px-4">Total</div>
      <div className="flex  items-center  w-55 h-13 px-4">Delivery Address</div>
      <div className="flex  items-center gap-1  w-40 h-13 px-4">
        Delivery state
        <span className="flex flex-col leading-none text-zinc-400">
          <ChevronUp className="h-2.5 w-2.5 -mb-0.5" />
          <ChevronDown className="h-2.5 w-2.5" />
        </span>
      </div>
    </div>
  );
};
