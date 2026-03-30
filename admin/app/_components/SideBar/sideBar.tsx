"use client";
import { usePathname } from "next/navigation"; // 1. Import this hook
import { Sidebar } from "@/components/ui/sidebar";
import { LayoutDashboard, TruckIcon } from "lucide-react";
import Link from "next/link";

export const SideBar = () => {
  const path = usePathname();

  const btnColorChange = (currentPath: string) => {
    const base =
      "h-10 w-41.25 px-6 flex items-center gap-2.5 transition-all ease-out duration-300 cursor-pointer";
    const normal = "text-black bg-white";
    const active = "text-white bg-[#18181B] rounded-full";
    return `${base} ${path === currentPath ? active : normal}`;
  };

  const textIconColor = (currentPath: string) => {
    return path === currentPath ? "text-white" : "text-black";
  };

  return (
    <Sidebar
      collapsible="none"
      className="min-h-dvh bg-white py-9 px-5 w-51.25 flex flex-col gap-10 border-none"
    >
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
        <Link href="/Dishes">
          <button className={btnColorChange("/Dishes")}>
            <LayoutDashboard
              strokeWidth={1}
              className={textIconColor("/Dishes")}
            />
            <p className={textIconColor("/Dishes")}>Food menu</p>
          </button>
        </Link>

        <Link href="/Orders">
          <button className={btnColorChange("/Orders")}>
            <TruckIcon strokeWidth={1} className={textIconColor("/Orders")} />
            <p className={textIconColor("/Orders")}>Orders</p>
          </button>
        </Link>
      </div>
    </Sidebar>
  );
};
