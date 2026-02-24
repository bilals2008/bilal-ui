"use client";

import { useMemo, useState } from "react";
import { addDays, format } from "date-fns";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type SubmitState = "idle" | "saving" | "done";

export function BasicDatePicker() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [state, setState] = useState<SubmitState>("idle");

  const dateLabel = useMemo(() => {
    if (!selectedDate) return "Pick a date";
    return format(selectedDate, "EEEE, MMM d");
  }, [selectedDate]);

  const canSubmit = Boolean(selectedDate && startTime && endTime) && state !== "saving";

  const pickDate = (offset: number) => {
    setSelectedDate(addDays(new Date(), offset));
    setOpen(false);
    setState("idle");
  };

  const handleSchedule = () => {
    if (!canSubmit) return;
    setState("saving");
    setTimeout(() => setState("done"), 1200);
  };

  return (
    <div className="w-full max-w-md rounded-xl border bg-card p-4 shadow-sm">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-semibold">Meeting date</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start gap-2 text-left font-normal",
                  !selectedDate && "text-muted-foreground",
                )}
              >
                <CalendarDays className="size-4 text-sky-500" />
                <span>{dateLabel}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-3">
              <div className="mb-3 flex items-center gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="h-8"
                  onClick={() => pickDate(0)}
                >
                  Today
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="h-8"
                  onClick={() => pickDate(1)}
                >
                  Tomorrow
                </Button>
              </div>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setOpen(false);
                  setState("idle");
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="start-time" className="text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock3 className="size-3.5" />
                Start
              </span>
            </Label>
            <Input
              id="start-time"
              type="time"
              value={startTime}
              onChange={(event) => {
                setStartTime(event.target.value);
                setState("idle");
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-time" className="text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock3 className="size-3.5" />
                End
              </span>
            </Label>
            <Input
              id="end-time"
              type="time"
              value={endTime}
              onChange={(event) => {
                setEndTime(event.target.value);
                setState("idle");
              }}
            />
          </div>
        </div>

        <Button className="w-full gap-2" onClick={handleSchedule} disabled={!canSubmit}>
          {state === "idle" && (
            <>
              <Sparkles className="size-4" />
              Schedule Meeting
            </>
          )}
          {state === "saving" && (
            <>
              <LoaderCircle className="size-4 animate-spin" />
              Saving...
            </>
          )}
          {state === "done" && (
            <>
              <CheckCircle2 className="size-4" />
              Scheduled
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
