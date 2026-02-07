// File: components/bilalUi/accordion/basic-accordion.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BasicAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="free"
      className="w-full border rounded-lg px-4"
    >
      <AccordionItem value="free">
        <AccordionTrigger>Is Bilal UI free to use?</AccordionTrigger>
        <AccordionContent>
          Yes, Bilal UI is completely free and open source. You can use it in
          personal and commercial projects without any restrictions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="dependencies">
        <AccordionTrigger>
          Do I need to install any dependencies?
        </AccordionTrigger>
        <AccordionContent>
          Yes, Bilal UI is built on top of Tailwind CSS and Framer Motion.
          You&apos;ll need these in your project. Some components may also use
          Lucide React for icons.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="nextjs">
        <AccordionTrigger>Can I use this with Next.js?</AccordionTrigger>
        <AccordionContent>
          Absolutely! Bilal UI is optimized for Next.js and React server
          components. It works seamlessly with the App Router.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="customization">
        <AccordionTrigger>How do I customize the components?</AccordionTrigger>
        <AccordionContent>
          Since you copy the code directly, you have 100% control. You can
          modify the Tailwind classes, logic, or structure to fit your exact
          needs.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
