"use client";

import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function InlineArrowAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Learn More", "See Details", "Discover"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className="rounded border border-zinc-200 px-4 dark:border-zinc-800"
        >
          <AccordionTrigger className="group py-3 hover:no-underline">
            <span className="flex items-center gap-2">
              {title}
              <ArrowRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
            </span>
          </AccordionTrigger>
          <AccordionContent>Expanded content with animated arrow indicator.</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
