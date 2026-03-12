"use client";

import { Bookmark } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function BookmarkAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Save for Later", "Reference", "Archive"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className="rounded border border-zinc-200 px-4 dark:border-zinc-800"
        >
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" />
              <span>{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>{title} content goes here.</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
