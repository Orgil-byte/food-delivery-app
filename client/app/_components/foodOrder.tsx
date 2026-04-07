import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export const FoodOrder = () => {
  return (
    <Dialog>
      <DialogTrigger className="absolute bottom-6 transition-transform duration-150 hover:scale-110 right-6 w-11 h-11 rounded-full bg-white flex justify-center items-center cursor-pointer">
        <Plus strokeWidth={2} size={16} className="text-red-500" />
      </DialogTrigger>
      <DialogContent className=""></DialogContent>
    </Dialog>
  );
};
