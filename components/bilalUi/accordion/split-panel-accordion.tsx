import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

const sections = [
  {
    value: "install",
    title: "Install and Setup",
    body: "Copy the component, keep your shared accordion primitives, and update only the style tokens you need.",
  },
  {
    value: "customize",
    title: "Theme Customization",
    body: "Adjust border, spacing, and typography classes to match your design system without changing structure.",
  },
  {
    value: "compose",
    title: "Composition",
    body: "Use this layout for docs and product pages where title scanning and detailed explanation should stay separate.",
  },
  {
    value: "ship",
    title: "Production Use",
    body: "The interaction pattern remains keyboard-friendly and stable because it still relies on shared accordion primitives.",
  },
];

export default function SplitPanelAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="install"
      className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      {sections.map((section) => (
        <AccordionItem
          key={section.value}
          value={section.value}
          className="grid grid-cols-1 gap-0 border-zinc-200 px-4 dark:border-zinc-800 md:grid-cols-[0.95fr_1.55fr] md:px-0"
        >
          <AccordionTrigger className="group py-2.5 text-left text-sm font-semibold text-zinc-900 hover:no-underline dark:text-zinc-100 md:px-6 [&>svg]:hidden">
            <span className="flex items-center gap-2">
              <span>{section.title}</span>
              <Plus className="h-3.5 w-3.5 text-zinc-500 transition-all duration-150 group-data-[state=open]:hidden dark:text-zinc-400" />
              <Minus className="hidden h-3.5 w-3.5 text-zinc-500 group-data-[state=open]:block dark:text-zinc-400" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:border-l md:border-zinc-200 md:px-6 md:pt-4 md:dark:border-zinc-800">
            {section.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
