// File: components/bilalUi/select/select-status.tsx
"use client";

import { useId, useState } from "react";
import { CircleIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const statuses = [
  { value: "in-progress", label: "In Progress", color: "text-violet-500" },
  { value: "pending", label: "Pending", color: "text-amber-500" },
  { value: "completed", label: "Completed", color: "text-emerald-500" },
  { value: "cancelled", label: "Cancelled", color: "text-slate-500" },
  { value: "rejected", label: "Rejected", color: "text-red-500" },
];

export function SelectStatus() {
  const id = useId();
  const [value, setValue] = useState("in-progress");
  const selectedStatus = statuses.find((item) => item.value === value);

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Status</Label>

      <Select value={value} onValueChange={setValue}>
        <SelectTrigger id={id} className="w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2">
          {selectedStatus && (
            <CircleIcon className={`size-2 fill-current ${selectedStatus.color}`} />
          )}
          <SelectValue />
        </SelectTrigger>

        <SelectContent align="start">
          {statuses.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              <div className="flex items-center gap-2">
                <CircleIcon className={`size-2 fill-current ${status.color}`} />
                <span className="truncate">{status.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
