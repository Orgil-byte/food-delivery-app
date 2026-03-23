"use client";
import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { LayoutDashboard, TruckIcon } from "lucide-react";

export const SideBar = () => {
  const [isActive, setIsActive] = useState("foodMenu");

  const btnColorChange = (buttonType: string) => {
    const base =
      "h-10 w-41.25 px-6 flex items-center gap-2.5 transition-all ease-out duration-300";
    const normal = "text-black bg-white";
    const active = "text-white bg-[#18181B] rounded-full";
    return `${base} ${isActive === buttonType ? active : normal}`;
  };

  const textIconColor = (buttonType: string) => {
    return isActive === buttonType ? "text-white" : "text-black";
  };

  return (
    <Sidebar
      collapsible="none"
      className="bg-white h-screen py-9 px-5 w-51.25 flex flex-col gap-10 border-none"
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
        <button
          onClick={() => setIsActive("foodMenu")}
          className={btnColorChange("foodMenu")}
        >
          <LayoutDashboard
            strokeWidth={1}
            className={textIconColor("foodMenu")}
          />
          <p className={"foodMenu"}>Food menu</p>
        </button>
        <button
          onClick={() => setIsActive("orders")}
          className={btnColorChange("orders")}
        >
          <TruckIcon strokeWidth={1} className={textIconColor("orders")} />
          <p className={textIconColor("orders")}>Orders</p>
        </button>
      </div>
    </Sidebar>
  );
};
