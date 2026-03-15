"use client";

import { Command } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CommandAccordion() {
  const commands = [
    { cmd: "$ npm install", desc: "Installation command" },
    { cmd: "$ npm start", desc: "Start development server" },
    { cmd: "$ npm build", desc: "Build for production" },
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {commands.map((item, index) => (
        <AccordionItem
          key={item.cmd}
          value={`item-${index}`}
          className="rounded border border-zinc-700 bg-zinc-900 px-4 dark:bg-zinc-950"
        >
          <AccordionTrigger className="py-3 font-mono text-white hover:no-underline">
            <Command className="mr-2 h-4 w-4" />
            {item.cmd}
          </AccordionTrigger>
          <AccordionContent className="font-mono text-sm text-zinc-300">
            {item.desc}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
