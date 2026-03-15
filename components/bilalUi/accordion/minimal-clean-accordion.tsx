"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MinimalCleanAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {["Question One", "Question Two", "Question Three"].map((question, index) => (
        <AccordionItem
          key={question}
          value={`item-${index}`}
          className="border-b border-zinc-200 dark:border-zinc-800"
        >
          <AccordionTrigger className="hover:no-underline">
            {question}
          </AccordionTrigger>
          <AccordionContent>
            This is the answer to {question}. Keep it simple and clean.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
