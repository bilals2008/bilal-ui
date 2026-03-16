import { Command, Plus, Search, SlidersHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Kbd } from "@/components/ui/kbd";

const shortcuts = [
  { label: "Search", keys: ["Ctrl", "K"], variant: "info", icon: Search },
  { label: "New Item", keys: ["Ctrl", "N"], variant: "new", icon: Plus },
  {
    label: "Filters",
    keys: ["Ctrl", "F"],
    variant: "preview",
    icon: SlidersHorizontal,
  },
  {
    label: "Command",
    keys: ["Ctrl", "Shift", "P"],
    variant: "pro",
    icon: Command,
  },
] as const;

export function BadgeShortcuts() {
  return (
    <div className="flex flex-wrap gap-3">
      {shortcuts.map(({ label, keys, variant, icon: Icon }) => (
        <Badge
          key={label}
          variant={variant}
          appearance="light"
          className="gap-2"
        >
          <Icon className="size-3.5" />
          <span>{label}</span>
          <span className="ml-1 inline-flex items-center gap-1">
            {keys.map((key) => (
              <Kbd
                key={`${label}-${key}`}
                className="h-4 min-w-4 px-1 text-[0.625rem] uppercase"
              >
                {key}
              </Kbd>
            ))}
          </span>
        </Badge>
      ))}
    </div>
  );
}
