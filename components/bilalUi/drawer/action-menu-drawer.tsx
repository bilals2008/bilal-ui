"use client";

import { Heart, MoreVertical, Share2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function ActionMenuDrawer() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <MoreVertical className="h-4 w-4" />
          Actions
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Item Actions</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-2 px-4 py-4">
          <button className="flex w-full items-center rounded-lg px-4 py-3 text-green-600 transition-colors hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950">
            <Heart className="mr-3 h-5 w-5" />
            Add to Favorites
          </button>
          <button className="flex w-full items-center rounded-lg px-4 py-3 text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950">
            <Share2 className="mr-3 h-5 w-5" />
            Share
          </button>
          <button className="flex w-full items-center rounded-lg px-4 py-3 text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950">
            <X className="mr-3 h-5 w-5" />
            Delete
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
