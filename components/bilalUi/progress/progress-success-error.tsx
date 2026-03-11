"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function ProgressSuccessError() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const value =
    state === "loading" ? 60 : state === "success" ? 100 : state === "error" ? 40 : 0;
  const color =
    state === "success"
      ? "[&_[data-slot=progress-indicator]]:bg-emerald-500"
      : state === "error"
        ? "[&_[data-slot=progress-indicator]]:bg-red-500"
        : "";

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Progress value={value} className={cn(color)} />
      <div className="flex justify-center gap-2">
        <Button size="sm" variant="outline" onClick={() => setState("loading")}>
          Load
        </Button>
        <Button
          size="sm"
          className="bg-emerald-600 hover:bg-emerald-700"
          onClick={() => setState("success")}
        >
          Success
        </Button>
        <Button size="sm" variant="destructive" onClick={() => setState("error")}>
          Error
        </Button>
      </div>
    </div>
  );
}

