"use client";

import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";

export function ResponsiveMobileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 sm:gap-2">
          <SlidersHorizontal className="size-4" />
          <span className="hidden sm:inline">Edit Profile</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border sm:w-96">
        <SheetHeader>
          <SheetTitle className="text-base sm:text-lg">Edit Profile</SheetTitle>
          <SheetDescription className="text-xs sm:text-sm">
            Update your information
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-3 py-4 sm:space-y-4">
          <div>
            <Label htmlFor="name" className="text-xs sm:text-sm">
              Name
            </Label>
            <Input id="name" placeholder="Your name" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="email" className="text-xs sm:text-sm">
              Email
            </Label>
            <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
          </div>

          <div className="flex items-center justify-between rounded-md px-2 py-2 transition-colors duration-150 hover:bg-muted/50">
            <Label htmlFor="sheet-notifications" className="text-xs sm:text-sm">
              Email notifications
            </Label>
            <Switch id="sheet-notifications" />
          </div>
        </div>

        <SheetFooter className="flex-col gap-2 sm:flex-row">
          <SheetClose asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              Cancel
            </Button>
          </SheetClose>
          <Button className="w-full sm:w-auto">Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
