import { Calendar } from "lucide-react";

export const Top = () => {
  return (
    <div className="flex flex-wrap  items-center justify-between gap-4 border-b border-zinc-200 p-5">
      <div>
        <p className="text-xl font-bold text-zinc-900">Orders</p>
        <p className="mt-0.5 text-base font-medium text-zinc-500">32 items</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex h-9 items-center gap-2 rounded-full border border-zinc-200 px-4 text-sm text-zinc-700">
          <Calendar className="h-4 w-4  text-zinc-500" />
          <span>13 June 2023 - 14 July 2023</span>
        </div>
        <button
          type="button"
          className="h-9 rounded-full bg-zinc-900 opacity-20 px-4 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Change delivery state
        </button>
      </div>
    </div>
  );
};
