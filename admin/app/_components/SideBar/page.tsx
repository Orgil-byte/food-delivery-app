import { Sidebar } from "@/components/ui/sidebar";
import { LayoutDashboard, TruckIcon } from "lucide-react";

export const SideBar = () => {
  return (
    <Sidebar className="bg-white py-9 px-5 w-51.25 flex flex-col gap-10">
      <div className="flex gap-2 bg-white items-center">
        <img
          className="w-10 h-10 object-cover"
          src="/side-bar/appLogo.svg"
          alt="app logo"
        />
        <div className="bg-white">
          <p className="font-semibold text-[18px] leading-7">NomNom</p>
          <p className="text-xs leading-4 text-[#71717A]">Swift delivery</p>
        </div>
      </div>

      <div className="w-41.25 h-26 flex flex-col gap-6 bg-white mt-10">
        <button className="bg-[#18181B] h-10 w-fit px-6 flex items-center gap-2.5 rounded-full">
          <LayoutDashboard strokeWidth={1} className="text-white" />
          <p className="text-white">Food menu</p>
        </button>
        <button className="bg-[#18181B] h-10 w-fit px-6 flex items-center gap-2.5 rounded-full">
          <TruckIcon strokeWidth={1} className="text-white" />
          <p className="text-white">Food menu</p>
        </button>
      </div>
    </Sidebar>
  );
};
