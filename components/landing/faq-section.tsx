// File: components/landing/faq-section.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is Bilal UI free to use?",
    answer:
      "Yes, Bilal UI is completely free and open source. You can use it in personal and commercial projects without any restrictions.",
  },
  {
    question: "Do I need to install any dependencies?",
    answer:
      "Yes, Bilal UI is built on top of Tailwind CSS and Framer Motion. You'll need these in your project. Some components may also use Lucide React for icons.",
  },
  {
    question: "Can I use this with Next.js?",
    answer:
      "Absolutely! Bilal UI is optimized for Next.js and React server components. It works seamlessly with the App Router.",
  },
  {
    question: "How do I customize the components?",
    answer:
      "Since you copy the code directly, you have 100% control. You can modify the Tailwind classes, logic, or structure to fit your exact needs.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-zinc-50/50 dark:bg-black/50 border-y-2
    border-dashed border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <HelpCircle className="w-4 h-4" />
            <span>Got questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Everything you need to know about the library.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-lg transition-all duration-300",
                  isOpen
                    ? "bg-white dark:bg-zinc-900 shadow-xs"
                    : "hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50",
                )}
              >
                {/* Indicator Line */}
                <div
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 bg-purple-500 transition-all duration-300",
                    isOpen ? "opacity-100" : "opacity-0",
                  )}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span
                    className={cn(
                      "font-medium transition-colors duration-200",
                      isOpen
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-zinc-900 dark:text-zinc-100",
                    )}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-zinc-500 transition-transform duration-300",
                      isOpen
                        ? "rotate-180 text-purple-600 dark:text-purple-400"
                        : "group-hover:text-zinc-600 dark:group-hover:text-zinc-300",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-6 pb-6 pt-0 text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6 sm:pl-8 border-l border-zinc-100 dark:border-zinc-800 ml-0">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
