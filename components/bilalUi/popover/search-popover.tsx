"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const RESULTS = ["Dashboard", "Analytics", "Users", "Settings", "Billing", "Reports"];

export function SearchPopover() {
  const [query, setQuery] = useState("");
  const results = RESULTS.filter((result) => result.toLowerCase().includes(query.toLowerCase()));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-48 justify-start gap-2 text-muted-foreground">
          <Search className="h-4 w-4" />
          Search...
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2">
        <div className="mb-2 flex items-center gap-2 rounded-md border px-2 py-1">
          <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            placeholder="Search pages..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>
        {results.map((result) => (
          <button
            key={result}
            type="button"
            className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            {result}
          </button>
        ))}
        {results.length === 0 ? (
          <p className="py-3 text-center text-xs text-muted-foreground">No results found</p>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}
