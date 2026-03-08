"use client";

import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";

export function MinimalistSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Settings className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border/50 sm:w-80">
        <SheetHeader className="pb-4">
          <SheetTitle className="text-base">Settings</SheetTitle>
        </SheetHeader>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-md px-2 py-2 transition-colors duration-150 hover:bg-muted/50">
            <Label htmlFor="notifications" className="text-sm font-medium">
              Notifications
            </Label>
            <Switch id="notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between rounded-md px-2 py-2 transition-colors duration-150 hover:bg-muted/50">
            <Label htmlFor="analytics" className="text-sm font-medium">
              Analytics
            </Label>
            <Switch id="analytics" />
          </div>
        </div>

        <SheetFooter className="mt-6">
          <SheetClose asChild>
            <Button variant="outline" size="sm">
              Done
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

