"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

export function SearchableDrawer() {
  const [search, setSearch] = useState("");

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <Search className="h-4 w-4" />
          Searchable
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter Products</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-4 px-4 py-4">
          <Input
            placeholder="Search filters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
          <div className="space-y-3">
            {["Electronics", "Clothing", "Books", "Sports"].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center rounded-lg border p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <input type="checkbox" className="mr-3" />
                {item}
              </label>
            ))}
          </div>
        </div>
        <DrawerFooter>
          <Button className="w-full">Apply Filters</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
