"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TagBasedAccordion() {
  const items = [
    { tag: "Documentation", color: "bg-blue-100 text-blue-700" },
    { tag: "FAQ", color: "bg-green-100 text-green-700" },
    { tag: "Tutorial", color: "bg-purple-100 text-purple-700" },
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={item.tag}
          value={`item-${index}`}
          className="rounded-lg border border-zinc-200 px-4 dark:border-zinc-800"
        >
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex items-center gap-2">
              <span className={`rounded px-2 py-1 text-xs font-semibold ${item.color}`}>
                {item.tag}
              </span>
              <span>Question {index + 1}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>Detailed content for this section.</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
