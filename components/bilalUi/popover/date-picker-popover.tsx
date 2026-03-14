"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function DatePickerPopover() {
  const [date, setDate] = useState("");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-44 justify-start gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          {date || <span className="text-muted-foreground">Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <p className="mb-3 text-sm font-semibold">Select date</p>
        <input
          type="date"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <div className="mt-3 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() => setDate(new Date().toISOString().split("T")[0] ?? "")}
          >
            Today
          </Button>
          <Button size="sm" variant="outline" className="flex-1" onClick={() => setDate("")}>
            Clear
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
