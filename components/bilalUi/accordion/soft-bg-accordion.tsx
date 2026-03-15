"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SoftBgAccordion() {
  const bgs = [
    "bg-blue-50 dark:bg-blue-950/30",
    "bg-green-50 dark:bg-green-950/30",
    "bg-purple-50 dark:bg-purple-950/30",
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Section A", "Section B", "Section C"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className={`rounded-lg border border-zinc-200 px-4 dark:border-zinc-800 ${bgs[index]}`}
        >
          <AccordionTrigger className="py-3 hover:no-underline">
            {title}
          </AccordionTrigger>
          <AccordionContent>Content with soft background color.</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
