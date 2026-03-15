"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function FormPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Item
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <p className="mb-4 text-sm font-semibold">Create new item</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="popover-item-name" className="text-xs">
              Name
            </Label>
            <Input id="popover-item-name" placeholder="Enter name..." className="h-8 text-sm" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="popover-item-description" className="text-xs">
              Description
            </Label>
            <Input id="popover-item-description" placeholder="Optional..." className="h-8 text-sm" />
          </div>
          <div className="pt-1 flex gap-2">
            <Button size="sm" className="flex-1">
              Create
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
