"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function GradientBgAccordion() {
  const gradients = [
    "from-blue-500 to-purple-500",
    "from-green-500 to-cyan-500",
    "from-orange-500 to-red-500",
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Feature One", "Feature Two", "Feature Three"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className={`rounded-lg border-0 bg-gradient-to-r ${gradients[index]} overflow-hidden`}
        >
          <AccordionTrigger className="px-4 py-3 text-white hover:no-underline">
            {title}
          </AccordionTrigger>
          <AccordionContent className="bg-black/20 px-4 text-white">
            Detailed content with gradient background.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
