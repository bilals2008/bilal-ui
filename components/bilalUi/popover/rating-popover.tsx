"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const LABELS = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

export function RatingPopover() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Star className="h-4 w-4" />
          {rating > 0 ? `${rating}/5` : "Rate this"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-52 flex-col items-center gap-3">
        <p className="text-sm font-semibold">How was your experience?</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(value)}
            >
              <Star
                className={cn(
                  "h-7 w-7 transition-colors",
                  (hover || rating) >= value
                    ? "fill-amber-400 text-amber-400"
                    : "text-muted-foreground",
                )}
              />
            </button>
          ))}
        </div>
        {rating > 0 ? <p className="text-xs text-muted-foreground">{LABELS[rating]}</p> : null}
        <Button size="sm" disabled={rating === 0} className="w-full">
          Submit
        </Button>
      </PopoverContent>
    </Popover>
  );
}
