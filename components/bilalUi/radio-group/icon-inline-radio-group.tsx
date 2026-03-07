// File: components/bilalUi/radio-group/icon-inline-radio-group.tsx
import { Brush, LayoutGrid, Sparkles } from "lucide-react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const modes = [
  {
    value: "creative",
    id: "mode-creative",
    label: "Creative",
    icon: Sparkles,
    iconClass: "text-violet-500",
  },
  {
    value: "layout",
    id: "mode-layout",
    label: "Layout",
    icon: LayoutGrid,
    iconClass: "text-cyan-500",
  },
  {
    value: "branding",
    id: "mode-branding",
    label: "Branding",
    icon: Brush,
    iconClass: "text-amber-500",
  },
];

export function IconInlineRadioGroup() {
  return (
    <RadioGroup defaultValue="layout" className="flex items-center gap-5">
      {modes.map((mode) => {
        const Icon = mode.icon;

        return (
          <div key={mode.value} className="flex items-center gap-2">
            <RadioGroupItem value={mode.value} id={mode.id} />
            <Label htmlFor={mode.id} className="flex cursor-pointer items-center gap-2">
              <Icon className={`size-4 ${mode.iconClass}`} />
              <span>{mode.label}</span>
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}
