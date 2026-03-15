"use client";

import { FileQuestion } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function QuestionAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Why", "How", "When"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className="rounded border border-zinc-200 px-4 dark:border-zinc-800"
        >
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex items-center gap-2">
              <FileQuestion className="h-4 w-4" />
              <span>{title}?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>{title} explained in detail here.</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
