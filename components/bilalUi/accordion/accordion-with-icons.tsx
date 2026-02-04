// File: components/bilalUi/accordion/accordion-with-icons.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, Layers, Zap, Palette } from "lucide-react";

export default function AccordionWithIcons() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="free"
      className="w-full border rounded-lg px-0 overflow-hidden"
    >
      <AccordionItem value="free" className="border-b px-4">
        <AccordionTrigger className="group hover:no-underline hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 px-2 rounded-md transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">
              Is Bilal UI free to use?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ms-12 mt-2 text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed">
          Yes, Bilal UI is completely free and open source. You can use it in
          personal and commercial projects without any restrictions.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="dependencies" className="border-b px-4">
        <AccordionTrigger className="group hover:no-underline hover:bg-blue-50/50 dark:hover:bg-blue-900/10 px-2 rounded-md transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Layers className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">
              Do I need to install any dependencies?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ms-12 mt-2 text-blue-600 dark:text-blue-400 font-medium leading-relaxed">
          Yes, Bilal UI is built on top of Tailwind CSS and Framer Motion.
          You&apos;ll need these in your project. Some components may also use
          Lucide React for icons.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="nextjs" className="border-b px-4">
        <AccordionTrigger className="group hover:no-underline hover:bg-yellow-50/50 dark:hover:bg-yellow-900/10 px-2 rounded-md transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">
              Can I use this with Next.js?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ms-12 mt-2 text-yellow-600 dark:text-yellow-400 font-medium leading-relaxed">
          Absolutely! Bilal UI is optimized for Next.js and React server
          components. It works seamlessly with the App Router.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="customization" className="px-4 border-b-0">
        <AccordionTrigger className="group hover:no-underline hover:bg-purple-50/50 dark:hover:bg-purple-900/10 px-2 rounded-md transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Palette className="w-5 h-5 text-purple-500" />
            </div>
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">
              How do I customize the components?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ms-12 mt-2 text-purple-600 dark:text-purple-400 font-medium leading-relaxed">
          Since you copy the code directly, you have 100% control. You can
          modify the Tailwind classes, logic, or structure to fit your exact
          needs.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
