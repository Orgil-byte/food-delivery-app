"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type ChangeDeliveryStateBtnProps = {
  selected: number[];
};

export const ChangeDeliveryStateBtn = ({
  selected,
}: ChangeDeliveryStateBtnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    if (selected.length >= 1) {
      setIsOpen(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <button
        type="button"
        onClick={openDialog}
        className={`h-9 rounded-full bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 transition-opacity 
          ${selected.length > 0 ? "opacity-100 cursor-pointer" : "opacity-20"}`}
      >
        Change delivery state
      </button>

      <DialogContent
        aria-describedby={undefined}
        className="sm:max-w-[384px] p-6 rounded-xl gap-6 opacity-100 bg-white"
      >
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-base font-semibold">
            Change delivery state
          </DialogTitle>
        </DialogHeader>
        <RadioGroup
          defaultValue="pending"
          className="flex items-center justify-between gap-2 py-2"
        >
          <div className="flex items-center">
            <RadioGroupItem
              value="delivered"
              id="delivered"
              className="sr-only"
            />
            <Label
              htmlFor="delivered"
              className="px-4 py-1.5 rounded-full border border-zinc-200 text-zinc-400 text-xs cursor-pointer hover:bg-zinc-100 transition-colors"
            >
              Delivered
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem value="pending" id="pending" className="sr-only" />
            <Label
              htmlFor="pending"
              className="px-4 py-1.5 rounded-full border border-zinc-200 text-zinc-400 text-xs cursor-pointer hover:bg-zinc-100 transition-colors"
            >
              Pending
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem
              value="cancelled"
              id="cancelled"
              className="sr-only"
            />
            <Label
              htmlFor="cancelled"
              className="px-4 py-1.5 rounded-full border border-zinc-200 text-zinc-400 text-xs cursor-pointer hover:bg-zinc-100 transition-colors"
            >
              Cancelled
            </Label>
          </div>
        </RadioGroup>

        <Button className="w-full bg-zinc-900 hover:bg-zinc-800 cursor-pointer text-white rounded-full h-10 font-medium">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};
