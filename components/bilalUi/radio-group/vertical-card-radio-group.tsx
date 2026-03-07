"use client";

import { useId } from "react";
import { Brush, LayoutTemplate } from "lucide-react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const services = [
  {
    value: "brand",
    title: "Brand Sprint",
    description: "Identity, direction, and visual tone.",
    icon: Brush,
    tone: "bg-sky-500/10 text-sky-500",
  },
  {
    value: "product",
    title: "Product UI",
    description: "Screen system for web or mobile apps.",
    icon: LayoutTemplate,
    tone: "bg-orange-500/10 text-orange-500",
  },
];

export function VerticalCardRadioGroup() {
  const id = useId();

  return (
    <RadioGroup
      defaultValue="brand"
      className="w-full max-w-sm justify-items-center gap-3 sm:grid-cols-2"
    >
      {services.map((service) => {
        const Icon = service.icon;
        const radioId = `${id}-${service.value}`;

        return (
          <Label
            key={service.value}
            htmlFor={radioId}
            className="border-input relative flex w-full max-w-44 cursor-pointer flex-col items-center gap-3 rounded-md border p-5 shadow-xs transition"
          >
            <div className="flex w-full flex-col gap-8 text-start">
              <div className="flex w-full items-center justify-between gap-2">
                <div className={`rounded-md p-1.5 ${service.tone}`}>
                  <Icon className="size-4" />
                </div>
                <div className="rounded-full bg-background p-px">
                  <RadioGroupItem
                    id={radioId}
                    value={service.value}
                    aria-describedby={`${radioId}-description`}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-base font-medium">{service.title}</span>
                <p
                  id={`${radioId}-description`}
                  className="text-xs text-muted-foreground"
                >
                  {service.description}
                </p>
              </div>
            </div>
          </Label>
        );
      })}
    </RadioGroup>
  );
}
