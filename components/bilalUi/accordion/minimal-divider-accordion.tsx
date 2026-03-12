"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MinimalDividerAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {["One", "Two", "Three", "Four"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className="border-b border-zinc-300 py-4 last:border-b-0 dark:border-zinc-700"
        >
          <AccordionTrigger className="hover:no-underline">
            {title}
          </AccordionTrigger>
          <AccordionContent className="pt-3">Content for {title}.</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
