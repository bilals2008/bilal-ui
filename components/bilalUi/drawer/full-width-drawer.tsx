"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function FullWidthDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <Menu className="h-4 w-4" />
          Full Width
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-screen sm:w-96">
        <DrawerHeader className="border-b">
          <div className="flex items-center justify-between">
            <DrawerTitle>Navigation</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <nav className="space-y-1 p-4">
          {["Dashboard", "Products", "Analytics", "Reports", "Settings"].map(
            (item) => (
              <button
                key={item}
                className="group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span>{item}</span>
                <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            ),
          )}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
