import { useId } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectWithOverlappingLabel() {
  const id = useId();

  return (
    <div className="group relative w-full max-w-xs">
      <label
        htmlFor={id}
        className="bg-background text-foreground absolute top-0 left-2 z-10 block -translate-y-1/2 px-1 text-xs font-medium group-has-disabled:opacity-50"
      >
        Country
      </label>
      <Select defaultValue="new-york">
        <SelectTrigger id={id} className="w-full dark:!bg-background">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="duration-300 data-[state=open]:zoom-in-100">
          <SelectItem value="new-york">New York</SelectItem>
          <SelectItem value="london">London</SelectItem>
          <SelectItem value="tokyo">Tokyo</SelectItem>
          <SelectItem value="paris">Paris</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
