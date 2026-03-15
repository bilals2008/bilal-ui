"use client";

import { useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const OPTIONS = ["React", "Vue", "Svelte", "Angular", "Solid", "Qwik", "Astro"];

export function SelectSearchPopover() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const filtered = OPTIONS.filter((option) => option.toLowerCase().includes(query.toLowerCase()));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-48 justify-between gap-2">
          {value || <span className="text-muted-foreground">Select framework</span>}
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2">
        <div className="mb-1 flex items-center gap-2 rounded border px-2 py-1">
          <Search className="h-3 w-3 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            className="flex-1 bg-transparent text-xs outline-none"
          />
        </div>
        {filtered.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setValue(option);
              setOpen(false);
            }}
            className="flex w-full items-center justify-between rounded px-2 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            {option}
            {value === option ? <Check className="h-3.5 w-3.5 text-primary" /> : null}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
