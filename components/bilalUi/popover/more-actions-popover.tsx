"use client";

import { Copy, Link, MoreHorizontal, Share2, Star, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

const ACTIONS = [
  { icon: Star, label: "Star" },
  { icon: Copy, label: "Duplicate" },
  { icon: Share2, label: "Share" },
  { icon: Link, label: "Copy link" },
];

export function MoreActionsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-44 p-1" align="end">
        {ACTIONS.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
          >
            <Icon className="h-4 w-4 text-muted-foreground" />
            {label}
          </button>
        ))}
        <Separator className="my-1" />
        <button
          type="button"
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </PopoverContent>
    </Popover>
  );
}
