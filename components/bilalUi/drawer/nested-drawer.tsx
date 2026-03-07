"use client";

import { ChevronRight, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function NestedDrawer() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <Menu className="h-4 w-4" />
          Nested Nav
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Nested Navigation</DrawerTitle>
        </DrawerHeader>
        <nav className="space-y-1 p-4">
          {["Products", "Services", "Resources"].map((item) => (
            <div key={item}>
              <button
                onClick={() => setExpanded(expanded === item ? null : item)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span>{item}</span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${expanded === item ? "rotate-90" : ""}`}
                />
              </button>
              {expanded === item && (
                <div className="ml-4 mt-1 space-y-1">
                  {["Option 1", "Option 2", "Option 3"].map((sub) => (
                    <button
                      key={sub}
                      className="w-full rounded px-4 py-2 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
