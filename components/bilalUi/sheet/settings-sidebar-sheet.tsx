"use client";

import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const items = [
  { label: "Account", icon: "User" },
  { label: "Preferences", icon: "Settings" },
  { label: "Privacy", icon: "Lock" },
  { label: "Billing", icon: "Card" },
];

export function SettingsSidebarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <Settings className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border sm:w-80">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex items-center gap-2">
            <Settings className="size-5" />
            Settings
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-1">
          {items.map((item) => (
            <button
              key={item.label}
              className="w-full rounded-md px-3 py-2 text-left text-sm transition-all duration-150 hover:translate-x-1 hover:bg-muted/60"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8 border-t border-border/50 pt-4">
          <SheetClose asChild>
            <Button variant="outline" size="sm" className="w-full">
              Close
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

