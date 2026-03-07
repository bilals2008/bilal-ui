"use client";

import { Globe, Lock, Menu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function CompactIconDrawer() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="py-3">
          <DrawerTitle className="text-sm">Quick Menu</DrawerTitle>
        </DrawerHeader>
        <div className="flex justify-around px-4 py-4">
          <button className="flex flex-col items-center gap-2 rounded-lg p-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span className="text-xs">Quick</span>
          </button>
          <button className="flex flex-col items-center gap-2 rounded-lg p-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <Globe className="h-6 w-6 text-blue-500" />
            <span className="text-xs">Web</span>
          </button>
          <button className="flex flex-col items-center gap-2 rounded-lg p-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <Lock className="h-6 w-6 text-green-500" />
            <span className="text-xs">Secure</span>
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
