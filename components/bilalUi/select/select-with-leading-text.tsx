// File: components/bilalUi/select/select-with-leading-text.tsx
import { useId } from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectWithLeadingText() {
  const id = useId();

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor={id}>Ride of Choice</Label>
      <Select defaultValue="tesla-model-s">
        <SelectTrigger id={id} className="w-full">
          <span className="flex items-center gap-2">
            Your Wheels: <SelectValue />
          </span>
        </SelectTrigger>
        <SelectContent align="start" className="duration-300 data-[state=open]:zoom-in-100">
          <SelectItem value="tesla-model-s">Tesla Model S</SelectItem>
          <SelectItem value="bmw-m4">BMW M4</SelectItem>
          <SelectItem value="audi-r8">Audi R8</SelectItem>
          <SelectItem value="lamborghini-huracan">Lamborghini Huracan</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
