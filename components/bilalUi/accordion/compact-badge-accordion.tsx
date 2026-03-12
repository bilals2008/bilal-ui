"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CompactBadgeAccordion() {
  const badges = ["NEW", "HOT", "UPDATED"];

  return (
    <Accordion type="single" collapsible className="w-full">
      {["Feature Alpha", "Feature Beta", "Feature Gamma"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className="border-b py-2 last:border-b-0"
        >
          <AccordionTrigger className="py-2 hover:no-underline">
            <div className="flex w-full items-center justify-between pr-4">
              <span>{title}</span>
              <span className="rounded bg-slate-200 px-2 py-1 text-xs font-bold dark:bg-slate-700">
                {badges[index]}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            Quick info about this feature.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
