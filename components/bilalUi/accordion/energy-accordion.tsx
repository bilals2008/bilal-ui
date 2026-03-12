"use client";

import { Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function EnergyAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Performance", "Speed", "Efficiency"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className="rounded border border-zinc-200 px-4 dark:border-zinc-800"
        >
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>{title} optimization details.</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
