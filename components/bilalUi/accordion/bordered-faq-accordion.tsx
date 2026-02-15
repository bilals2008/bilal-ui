// File: components/bilalUi/accordion/bordered-faq-accordion.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "customize",
    question: "Can I customize the styles?",
    answer:
      "Yes. Update Tailwind classes directly in the component and adjust spacing, colors, and typography for your brand.",
  },
  {
    value: "accessibility",
    question: "Is it accessible out of the box?",
    answer:
      "It uses the shared accordion primitives, so keyboard support and ARIA behavior are handled consistently.",
  },
  {
    value: "multiple",
    question: "Can I keep more than one item open?",
    answer:
      "Switch the accordion type to multiple if you want several sections expanded at the same time.",
  },
  {
    value: "production",
    question: "Is this suitable for production FAQs?",
    answer:
      "Yes. This variant is intentionally minimal and works well for docs pages, pricing FAQs, and support sections.",
  },
];

export default function BorderedFaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="customize"
      className="w-full rounded-xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950"
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.value}
          value={faq.value}
          className="rounded-lg px-2 data-[state=open]:bg-zinc-50 dark:data-[state=open]:bg-zinc-900/60"
        >
          <AccordionTrigger className="py-3 text-left text-zinc-900 hover:no-underline dark:text-zinc-100">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
