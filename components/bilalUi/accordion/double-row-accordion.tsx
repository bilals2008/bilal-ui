"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DoubleRowAccordion() {
  const items = [
    { title: "Primary", subtitle: "Description" },
    { title: "Secondary", subtitle: "More details" },
    { title: "Tertiary", subtitle: "Additional info" },
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          value={`item-${index}`}
          className="rounded border border-zinc-200 px-4 dark:border-zinc-800"
        >
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex flex-col gap-1 text-left">
              <span className="font-semibold">{item.title}</span>
              <span className="text-xs text-zinc-500">{item.subtitle}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>Expanded content section.</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
