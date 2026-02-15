import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "performance",
    question: "How does this help visual hierarchy?",
    answer:
      "Each entry gets a gradient rail that makes scanning easier while keeping content density low and readable.",
    railClass: "from-sky-500 to-cyan-400",
  },
  {
    value: "branding",
    question: "Can I map rails to product categories?",
    answer:
      "Yes. You can assign rail palettes per category or status to create a stronger visual grouping system.",
    railClass: "from-emerald-500 to-lime-400",
  },
  {
    value: "motion",
    question: "Does the open state animate?",
    answer:
      "The rail subtly expands when open and the panel keeps the default accordion motion for smooth transitions.",
    railClass: "from-amber-500 to-orange-400",
  },
  {
    value: "usage",
    question: "Where should I use this variant?",
    answer:
      "Use it in FAQ blocks, feature explainers, and onboarding docs where quick scanability matters.",
    railClass: "from-fuchsia-500 to-rose-400",
  },
];

export default function GradientRailAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="performance"
      className="w-full space-y-2"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="rounded-xl border border-zinc-200 bg-white px-4 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <AccordionTrigger className="[&[data-state=open]_.rail]:h-7 [&[data-state=open]_.rail]:opacity-100 py-4 text-left text-zinc-900 hover:no-underline dark:text-zinc-100">
            <div className="flex items-start gap-3">
              <span
                className={`rail mt-0.5 h-5 w-1 rounded-full bg-gradient-to-b ${item.railClass} opacity-70 transition-all duration-300`}
              />
              <span>{item.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
