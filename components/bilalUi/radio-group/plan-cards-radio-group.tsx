import { Gem, Rocket, ShieldCheck } from "lucide-react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const items = [
  {
    id: "plan-starter",
    title: "Starter Kit",
    desc: "Core tools for early-stage projects.",
    price: "Free",
    icon: Rocket,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  {
    id: "plan-growth",
    title: "Growth Suite",
    desc: "Built for teams shipping weekly.",
    price: "$24/mo",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: "plan-premium",
    title: "Premium Scale",
    desc: "Priority support and advanced controls.",
    price: "$59/mo",
    icon: Gem,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
];

export function PlanCardsRadioGroup() {
  return (
    <RadioGroup defaultValue="plan-growth" className="grid max-w-sm gap-2">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Label
            key={item.id}
            htmlFor={item.id}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-lg border p-4 shadow-xs transition-all",
              "hover:bg-accent has-data-checked:bg-accent"
            )}
          >
            <div className={`rounded-lg p-1.5 ${item.bg}`}>
              <Icon className={item.color} />
            </div>

            <div className="flex w-full items-start justify-between gap-2">
              <div className="grid gap-1.5">
                <p className="font-medium leading-none">{item.title}</p>
                <p className="text-xs font-normal text-muted-foreground">
                  {item.desc}
                </p>
              </div>
              <span className="text-xs font-normal text-muted-foreground">
                {item.price}
              </span>
            </div>

            <RadioGroupItem value={item.id} id={item.id} />
          </Label>
        );
      })}
    </RadioGroup>
  );
}
