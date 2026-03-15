"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DarkCardAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Setup Guide", "Configuration", "Deployment"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className="rounded-lg border border-slate-700 bg-slate-900 px-4 dark:bg-slate-950"
        >
          <AccordionTrigger className="py-3 text-white hover:no-underline">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-slate-300">
            Complete detailed information here.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
