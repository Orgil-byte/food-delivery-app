import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#111111] border-b border-white/5 flex items-center justify-between py-3 px-22 min-h-17">
      <div className="flex items-center gap-3 cursor-pointer select-none">
        <img
          className="w-10 h-10 object-cover"
          src="/nav-logo/appLogo.svg"
          alt="app logo"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-[#EF4444] font-semibold text-[22px] tracking-tight">
            <span className="text-white">Nom</span>Nom
          </span>
          <span className="text-white text-[14px] font-normal tracking-wide">
            Swift delivery
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <div
          className="
          flex items-center gap-2 h-10 px-3.5
          rounded-full border border-white/10
          bg-white/3 cursor-pointer
          transition-all duration-200
          hover:border-white/25 hover:bg-white/[0.07]
        "
        >
          <MapPin size={15} className="text-[#e5272e] shrink-0" />
          <div className="flex items-baseline gap-1.5 whitespace-nowrap">
            <span className="text-white text-[12.5px] font-semibold">
              Delivery address:
            </span>
            <span className="text-[#777] text-[12.5px] font-normal">
              Add Location
            </span>
          </div>
          <ChevronRight size={14} className="text-[#666] ml-0.5 shrink-0" />
        </div>
        <div
          className="
          w-10 h-10 rounded-full
          flex items-center justify-center
          border border-white/10 bg-white/3
          cursor-pointer transition-all duration-200
          hover:border-white/25 hover:bg-white/8 hover:scale-105
        "
        >
          <ShoppingCart size={18} className="text-white" />
        </div>
        <div
          className="
          w-10 h-10 rounded-full
          flex items-center justify-center
          bg-[#e5272e] border border-[#e5272e]
          cursor-pointer transition-all duration-200
          hover:bg-[#ff3a41] hover:border-[#ff3a41] hover:scale-105
        "
        >
          <User size={18} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
