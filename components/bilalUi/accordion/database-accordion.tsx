"use client";

import { Code, Database, Settings } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DatabaseAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {[
        { icon: Database, title: "Database" },
        { icon: Settings, title: "Configuration" },
        { icon: Code, title: "API Keys" },
      ].map((item, index) => {
        const Icon = item.icon;
        return (
          <AccordionItem
            key={item.title}
            value={`item-${index}`}
            className="rounded border border-zinc-200 px-4 dark:border-zinc-800"
          >
            <AccordionTrigger className="py-3 hover:no-underline">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>Configuration and setup details.</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
