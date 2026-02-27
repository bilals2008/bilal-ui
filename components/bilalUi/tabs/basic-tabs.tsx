"use client";

import React, { useState } from "react";
import {
  AnimatePresence,
  type MotionProps,
  motion,
  type Transition,
  type Variant,
} from "motion/react";

import { cn } from "@/lib/utils";

type TransitionPanelProps = {
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  activeIndex: number;
  variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

function TransitionPanel({
  children,
  className,
  transition,
  variants,
  activeIndex,
  ...motionProps
}: TransitionPanelProps) {
  return (
    <div className={cn("relative", className)}>
      <AnimatePresence
        initial={false}
        mode="popLayout"
        custom={motionProps.custom}
      >
        <motion.div
          key={activeIndex}
          variants={variants}
          transition={transition}
          initial="enter"
          animate="center"
          exit="exit"
          {...motionProps}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const ITEMS = [
  {
    id: "tokens",
    title: "Design Tokens",
    subtitle: "Consistent theming from one source",
    content:
      "Map your brand colors, radius scale, spacing, and typography tokens once and apply them across all components. Keep light/dark modes synced while avoiding manual style drift between pages.",
    highlights: [
      "Single token contract across components",
      "Theme-safe defaults for dark and light UI",
      "Fast handoff for product and design teams",
    ],
  },
  {
    id: "a11y",
    title: "Accessibility",
    subtitle: "Keyboard-first and screen-reader friendly",
    content:
      "Ship interfaces that work for every user by default. Focus states stay visible, controls stay reachable with keyboard navigation, and semantic structure improves assistive technology support.",
    highlights: [
      "Clear focus rings on interactive controls",
      "Semantic roles for tabs and tabpanels",
      "Readable hierarchy with strong contrast",
    ],
  },
  {
    id: "motion",
    title: "Motion System",
    subtitle: "Smooth transitions without visual noise",
    content:
      "Use subtle enter and exit animation to guide attention between tab panels. The motion is quick and purposeful, so content feels polished while staying fast and easy to scan.",
    highlights: [
      "Lightweight opacity and Y-axis transitions",
      "Blur-assisted state change for clarity",
      "Short timing tuned for responsive feel",
    ],
  },
];

export function BasicTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-2xl">
      <div
        role="tablist"
        aria-label="Bilal UI tabs overview"
        className="mb-4 flex flex-wrap gap-2"
      >
        {ITEMS.map(({ id, title }, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={id}
              id={`tabs-trigger-${id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`tabs-panel-${id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-primary bg-primary text-background"
                  : "border-transparent text-foreground hover:border-zinc-300 hover:bg-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              )}
            >
              {title}
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
        <TransitionPanel
          activeIndex={activeIndex}
          className="min-h-40"
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -40, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 40, filter: "blur(4px)" },
          }}
        >
          {ITEMS.map(({ id, subtitle, content, highlights }) => (
            <div
              key={id}
              id={`tabs-panel-${id}`}
              role="tabpanel"
              aria-labelledby={`tabs-trigger-${id}`}
              className="space-y-3"
            >
              <p className="text-base font-medium text-foreground">{subtitle}</p>
              <p className="text-sm text-muted-foreground">{content}</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {highlights.map((item) => (
                  <li key={item} className="list-inside list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
