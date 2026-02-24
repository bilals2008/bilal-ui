"use client";

import * as React from "react";
import { addDays, differenceInCalendarDays, format } from "date-fns";
import { CalendarRange, ChevronDown, Sparkles } from "lucide-react";
import { type DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const presets = [
  { label: "3 Nights", days: 3 },
  { label: "7 Nights", days: 7 },
  { label: "14 Nights", days: 14 },
];

export function DateRangePicker() {
  const [open, setOpen] = React.useState(false);
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const nights =
    range?.from && range?.to ? differenceInCalendarDays(range.to, range.from) : 0;

  const rangeLabel = React.useMemo(() => {
    if (!range?.from) return "Choose travel dates";
    if (!range.to) return format(range.from, "MMM d, yyyy");
    return `${format(range.from, "MMM d")} - ${format(range.to, "MMM d, yyyy")}`;
  }, [range]);

  const applyPreset = (days: number) => {
    const start = new Date();
    setRange({ from: start, to: addDays(start, days) });
  };

  return (
    <div className="w-full max-w-md rounded-xl border bg-card p-4 shadow-sm">
      <div className="space-y-3">
        <Label htmlFor="trip-range" className="text-sm font-semibold">
          Trip range
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="trip-range"
              variant="outline"
              className={cn(
                "w-full justify-start gap-2 text-left font-normal",
                !range?.from && "text-muted-foreground",
              )}
            >
              <CalendarRange className="size-4 text-violet-500" />
              <span>{rangeLabel}</span>
              <ChevronDown className="ml-auto size-4 opacity-60" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto space-y-3 p-3">
            <div className="flex items-center gap-2">
              {presets.map((preset) => (
                <Button
                  key={preset.label}
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="h-8"
                  onClick={() => applyPreset(preset.days)}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
            <Calendar
              mode="range"
              numberOfMonths={2}
              defaultMonth={range?.from}
              selected={range}
              onSelect={setRange}
            />
          </PopoverContent>
        </Popover>

        <div className="inline-flex items-center gap-2 rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
          <Sparkles className="size-3.5 text-violet-500" />
          {range?.from && range?.to ? `${nights} nights selected` : "Select check-in/check-out"}
        </div>
      </div>
    </div>
  );
}
