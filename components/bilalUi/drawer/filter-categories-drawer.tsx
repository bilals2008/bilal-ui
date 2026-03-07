"use client";

import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function FilterCategoriesDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter By Category</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-3 px-4 py-4">
          {["Electronics", "Fashion", "Home & Garden", "Sports", "Books"].map(
            (category) => (
              <label
                key={category}
                className="flex cursor-pointer items-center rounded-lg border-2 border-gray-200 p-4 transition-colors hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-500"
              >
                <input type="radio" name="category" className="mr-3 h-4 w-4" />
                <span className="font-medium">{category}</span>
              </label>
            ),
          )}
        </div>
        <DrawerFooter>
          <Button className="w-full">Apply</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
