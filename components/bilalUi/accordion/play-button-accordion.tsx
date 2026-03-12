"use client";

import { Play } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PlayButtonAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {["Intro Video", "Tutorial", "Demo"].map((title, index) => (
        <AccordionItem
          key={title}
          value={`item-${index}`}
          className="rounded border border-zinc-200 px-4 dark:border-zinc-800"
        >
          <AccordionTrigger className="py-3 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="rounded bg-slate-900 p-2 dark:bg-slate-800">
                <Play className="h-4 w-4 fill-white text-white" />
              </div>
              <span>{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="ms-14">
            Video details and description here.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
