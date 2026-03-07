"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function MinimalistDrawer() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full">
          <Menu className="mr-2 h-4 w-4" />
          Minimalist Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-center">
          <DrawerTitle>Menu Options</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-2 px-4 py-4">
          {["Home", "Profile", "Settings", "Help"].map((item) => (
            <button
              key={item}
              className="w-full rounded-lg px-4 py-3 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {item}
            </button>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
