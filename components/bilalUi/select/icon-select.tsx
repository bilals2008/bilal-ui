"use client";

import * as React from "react";
import { BriefcaseBusiness, Megaphone, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategoryOption = {
  value: string;
  label: string;
  icon: LucideIcon;
  colorClass: string;
};

const categories: CategoryOption[] = [
  {
    value: "design",
    label: "Design",
    icon: Palette,
    colorClass: "text-violet-500",
  },
  {
    value: "marketing",
    label: "Marketing",
    icon: Megaphone,
    colorClass: "text-amber-500",
  },
  {
    value: "business",
    label: "Business",
    icon: BriefcaseBusiness,
    colorClass: "text-cyan-500",
  },
];

export function IconSelect() {
  const [value, setValue] = React.useState<string>("design");
  const selected = categories.find((item) => item.value === value);
  const SelectedIcon = selected?.icon;

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-56">
        <div className="flex items-center gap-2">
          {SelectedIcon && (
            <SelectedIcon className={`size-4 ${selected?.colorClass}`} />
          )}
          <SelectValue placeholder="Select a category" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <SelectItem key={category.value} value={category.value}>
              <span className="flex items-center gap-2">
                <Icon className={`size-4 ${category.colorClass}`} />
                <span>{category.label}</span>
              </span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
