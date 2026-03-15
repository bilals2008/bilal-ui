"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SideLineAccordion() {
  const colors = [
    "border-l-4 border-l-blue-500",
    "border-l-4 border-l-green-500",
    "border-l-4 border-l-purple-500",
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Item One", "Item Two", "Item Three"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className={`rounded border border-zinc-200 px-4 dark:border-zinc-800 ${colors[index]}`}
        >
          <AccordionTrigger className="py-3 hover:no-underline">
            {title}
          </AccordionTrigger>
          <AccordionContent>Content aligned with left border accent.</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
