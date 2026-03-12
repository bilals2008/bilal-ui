"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";

export function IconDotAccentAccordion() {
  const icons = [AlertCircle, CheckCircle2, Lightbulb];

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Alert", "Success", "Tip"].map((title, index) => {
        const Icon = icons[index];
        return (
          <AccordionItem
            key={title}
            value={`item-${index}`}
            className="rounded border border-zinc-200 px-4 dark:border-zinc-800"
          >
            <AccordionTrigger className="py-3 hover:no-underline">
              <div className="flex items-center gap-3">
                {Icon ? <Icon className="h-5 w-5" /> : null}
                <span>{title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ms-8">
              Information related to {title.toLowerCase()}.
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
