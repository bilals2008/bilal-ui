"use client";

import { useState } from "react";
import { Check, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const CITIES = [
  "New York, USA",
  "London, UK",
  "Tokyo, Japan",
  "Paris, France",
  "Sydney, Australia",
];

export function LocationPopover() {
  const [location, setLocation] = useState("New York, USA");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-48 justify-start gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="truncate text-sm">{location}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-1">
        <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Select location
        </p>
        {CITIES.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => setLocation(city)}
            className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            {city}
            {location === city ? <Check className="h-3.5 w-3.5 text-primary" /> : null}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
