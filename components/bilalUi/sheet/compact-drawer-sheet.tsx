"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const actions = [
  { label: "Edit", icon: "Edit" },
  { label: "Duplicate", icon: "Copy" },
  { label: "Archive", icon: "Archive" },
  { label: "Delete", icon: "Delete", danger: true },
];

export function CompactDrawerSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          More
        </Button>
      </SheetTrigger>

      <SheetContent className="border-l border-border sm:w-72">
        <div className="space-y-2">
          {actions.map((action) => (
            <button
              key={action.label}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-all duration-150 ${
                action.danger
                  ? "hover:bg-red-50/50 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                  : "hover:bg-muted/50"
              }`}
            >
              <span>{action.icon}</span>
              {action.label}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

