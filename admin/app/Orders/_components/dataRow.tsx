import { ChevronDown, ChevronUp } from "lucide-react";

export const DataRow = () => {
  const ADDRESS =
    "г. Москва, ул. Пушкина, дом 12, квартира 34, подъезд 2, этаж 5, Московская область, Российская Федерация, индекс 123456";

  return (
    <div className="flex justify-between border-b items-center border-zinc-100 bg-white text-zinc-600">
      <div className="flex items-center p-4 w-12 h-13">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-zinc-300"
          aria-label="Select row"
        />
      </div>
      <div className="flex items-center p-4 w-14 h-13">1</div>
      <div className="flex  items-center h-13 w-55 px-4">Test@gamil.com</div>
      <div className="flex items-center w-40 h-13 px-4">
        <span className="inline-flex items-center gap-1.5">
          2 foods
          <ChevronDown className="h-4 w-4  text-zinc-500" />
        </span>
      </div>
      <div className="flex  items-center w-40 h-13 px-4">2024/12/20</div>
      <div className="flex   items-center  font-medium w-40 h-13 px-4">
        $26.97
      </div>
      <div className="flex w-55 items-center px-4 py-2">
        <div className="w-full bg-zinc-100 px-3 py-2 text-xs text-zinc-700 line-clamp-2">
          {ADDRESS}
        </div>
      </div>
      <div className="flex  items-center w-40 h-13 px-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-zinc-800">
          Pending
          <span className="flex flex-col leading-none text-zinc-500">
            <ChevronUp className="h-2.5 w-2.5 -mb-0.5" />
            <ChevronDown className="h-2.5 w-2.5" />
          </span>
        </span>
      </div>
    </div>
  );
};
