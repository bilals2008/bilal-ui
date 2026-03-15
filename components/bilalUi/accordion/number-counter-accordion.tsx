"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function NumberCounterAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {["First", "Second", "Third", "Fourth"].map((item, index) => (
        <AccordionItem
          key={item}
          value={`item-${index}`}
          className="border-b last:border-b-0"
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white dark:bg-white dark:text-slate-900">
                {index + 1}
              </span>
              <span>{item} Step</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="ps-11">
            Description for step {index + 1}.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
