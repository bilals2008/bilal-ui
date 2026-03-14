"use client";

import { useState } from "react";
import { Check, Filter, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const OPTIONS = ["Design", "Engineering", "Marketing", "Product", "Sales"];

export function FilterPopover() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (option: string) =>
    setSelected((state) =>
      state.includes(option) ? state.filter((value) => value !== option) : [...state, option],
    );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
          {selected.length > 0 ? (
            <Badge className="ml-1 h-5 px-1.5 text-xs">{selected.length}</Badge>
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2">
        <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Department
        </p>
        {OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            <div
              className={cn(
                "flex h-4 w-4 items-center justify-center rounded border transition-colors",
                selected.includes(option) ? "border-primary bg-primary" : "border-border",
              )}
            >
              {selected.includes(option) ? (
                <Check className="h-3 w-3 text-primary-foreground" />
              ) : null}
            </div>
            {option}
          </button>
        ))}
        {selected.length > 0 ? (
          <>
            <Separator className="my-1" />
            <button
              type="button"
              onClick={() => setSelected([])}
              className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Clear filters
            </button>
          </>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}
