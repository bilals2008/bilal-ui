"use client";

import * as React from "react";
import {
  addDays,
  differenceInCalendarDays,
  eachDayOfInterval,
  format,
  isBefore,
  isSameDay,
  startOfDay,
} from "date-fns";
import { AlertTriangle, CalendarRange, ChevronDown, Hotel, Sparkles } from "lucide-react";
import { type DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const MIN_NIGHTS = 2;
const MAX_NIGHTS = 10;

const presetNights = [3, 5, 7];

export function ConstrainedBookingDatePicker() {
  const [open, setOpen] = React.useState(false);
  const [range, setRange] = React.useState<DateRange | undefined>();
  const [feedback, setFeedback] = React.useState(
    `Pick a stay from ${MIN_NIGHTS}-${MAX_NIGHTS} nights.`,
  );
  const today = React.useMemo(() => startOfDay(new Date()), []);

  const blockedDates = React.useMemo(
    () => [addDays(today, 4), addDays(today, 9), addDays(today, 15)],
    [today],
  );

  const isBlockedDate = React.useCallback(
    (date: Date) => {
      const day = startOfDay(date);
      const isPastDate = isBefore(day, today);
      const isSunday = day.getDay() === 0;
      const isSoldOut = blockedDates.some((blocked) => isSameDay(blocked, day));
      return isPastDate || isSunday || isSoldOut;
    },
    [blockedDates, today],
  );

  const hasBlockedDayInRange = React.useCallback(
    (candidate: DateRange) => {
      if (!candidate.from || !candidate.to) return false;
      return eachDayOfInterval({ start: candidate.from, end: candidate.to }).some(isBlockedDate);
    },
    [isBlockedDate],
  );

  const findFirstAvailableRange = React.useCallback(
    (nights: number) => {
      for (let offset = 0; offset < 60; offset++) {
        const from = addDays(today, offset);
        const to = addDays(from, nights);
        const candidate = { from, to };
        if (!hasBlockedDayInRange(candidate)) {
          return candidate;
        }
      }
      return undefined;
    },
    [hasBlockedDayInRange, today],
  );

  const rangeLabel = React.useMemo(() => {
    if (!range?.from) return "Choose booking dates";
    if (!range.to) return format(range.from, "MMM d, yyyy");
    return `${format(range.from, "MMM d")} - ${format(range.to, "MMM d, yyyy")}`;
  }, [range]);

  const nights =
    range?.from && range?.to ? differenceInCalendarDays(range.to, range.from) : 0;

  const handleRangeChange = (nextRange: DateRange | undefined) => {
    if (!nextRange?.from) {
      setRange(nextRange);
      setFeedback(`Pick a stay from ${MIN_NIGHTS}-${MAX_NIGHTS} nights.`);
      return;
    }

    if (!nextRange.to) {
      setRange(nextRange);
      setFeedback("Now select your check-out date.");
      return;
    }

    const nextNights = differenceInCalendarDays(nextRange.to, nextRange.from);
    if (nextNights < MIN_NIGHTS || nextNights > MAX_NIGHTS) {
      setRange({ from: nextRange.from, to: undefined });
      setFeedback(`Stay length must be between ${MIN_NIGHTS} and ${MAX_NIGHTS} nights.`);
      return;
    }

    if (hasBlockedDayInRange(nextRange)) {
      setRange({ from: nextRange.from, to: undefined });
      setFeedback("Selected range includes blocked nights. Pick different dates.");
      return;
    }

    setRange(nextRange);
    setFeedback(`${nextNights} nights available.`);
  };

  const applyPreset = (nightsToStay: number) => {
    const next = findFirstAvailableRange(nightsToStay);
    if (!next) {
      setFeedback("No available range found in the next 60 days.");
      return;
    }
    setRange(next);
    setFeedback(`${nightsToStay} nights auto-selected.`);
  };

  return (
    <div className="w-full max-w-md rounded-xl border bg-card p-4 shadow-sm">
      <div className="space-y-3">
        <Label htmlFor="booking-range" className="text-sm font-semibold">
          Booking window
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="booking-range"
              variant="outline"
              className={cn(
                "w-full justify-start gap-2 text-left font-normal",
                !range?.from && "text-muted-foreground",
              )}
            >
              <CalendarRange className="size-4 text-teal-600" />
              <span>{rangeLabel}</span>
              <ChevronDown className="ml-auto size-4 opacity-60" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto space-y-3 p-3">
            <div className="flex items-center gap-2">
              {presetNights.map((preset) => (
                <Button
                  key={preset}
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="h-8"
                  onClick={() => applyPreset(preset)}
                >
                  {preset} Nights
                </Button>
              ))}
            </div>
            <Calendar
              mode="range"
              numberOfMonths={2}
              defaultMonth={range?.from ?? today}
              selected={range}
              min={MIN_NIGHTS}
              max={MAX_NIGHTS}
              disabled={[{ before: today }, { dayOfWeek: [0] }, ...blockedDates]}
              onSelect={handleRangeChange}
            />
          </PopoverContent>
        </Popover>

        <div className="rounded-md border bg-muted/40 p-2.5 text-xs text-muted-foreground">
          <p className="inline-flex items-center gap-2">
            <Sparkles className="size-3.5 text-teal-600" />
            {range?.from && range?.to
              ? `${nights} nights selected (${MIN_NIGHTS}-${MAX_NIGHTS} allowed)`
              : `Rules: Sundays and sold-out dates are blocked.`}
          </p>
          <p className="mt-1.5 inline-flex items-center gap-2">
            <AlertTriangle className="size-3.5 text-amber-500" />
            {feedback}
          </p>
          <p className="mt-1.5 inline-flex items-center gap-2">
            <Hotel className="size-3.5 text-teal-600" />
            Sold out on: {blockedDates.map((date) => format(date, "MMM d")).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
