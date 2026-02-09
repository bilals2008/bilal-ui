// File: components/bilalUi/accordion/accordion-with-badges.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Sparkles, LayoutGrid, Gauge } from "lucide-react";

export default function AccordionWithBadges() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="tokens"
      className="w-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-linear-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900/60 shadow-sm"
    >
      <AccordionItem value="tokens" className="px-4">
        <AccordionTrigger className="group hover:no-underline rounded-xl data-[state=open]:bg-emerald-50/60 dark:data-[state=open]:bg-emerald-900/10 px-3 py-3 transition-colors">
          <div className="flex w-full items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100/70 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                  Design tokens and theming
                </span>
                <Badge variant="stable" appearance="outline" size="xs">
                  Stable
                </Badge>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Centralize spacing, colors, and radius in one place.
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ms-12 text-zinc-600 dark:text-zinc-300">
          Tokens drive consistent UI across apps. Update your theme once and all
          components follow. Pair with CSS variables for instant light and dark
          mode switching.
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="updated" appearance="outline" size="xs">
              CSS Variables
            </Badge>
            <Badge variant="request" appearance="outline" size="xs">
              Tailwind v4
            </Badge>
            <Badge variant="legacy" appearance="outline" size="xs">
              Fallbacks
            </Badge>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="motion" className="px-4">
        <AccordionTrigger className="group hover:no-underline rounded-xl data-[state=open]:bg-amber-50/60 dark:data-[state=open]:bg-amber-900/10 px-3 py-3 transition-colors">
          <div className="flex w-full items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100/70 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                  Motion and micro-interactions
                </span>
                <Badge variant="new" appearance="outline" size="xs">
                  New
                </Badge>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Add polish without compromising performance.
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ms-12 text-zinc-600 dark:text-zinc-300">
          Use small, purposeful animations to guide attention. Keep durations
          short, limit overshoot, and avoid motion on every state change.
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="info" appearance="outline" size="xs">
              Motion One
            </Badge>
            <Badge variant="updated" appearance="outline" size="xs">
              Reduced Motion
            </Badge>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="layout" className="px-4">
        <AccordionTrigger className="group hover:no-underline rounded-xl data-[state=open]:bg-sky-50/60 dark:data-[state=open]:bg-sky-900/10 px-3 py-3 transition-colors">
          <div className="flex w-full items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100/70 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400">
              <LayoutGrid className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                  Layout density
                </span>
                <Badge variant="updated" appearance="outline" size="xs">
                  Updated
                </Badge>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Switch between compact and spacious modes.
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ms-12 text-zinc-600 dark:text-zinc-300">
          Start with a generous rhythm for marketing pages, then tighten the
          layout for data-heavy dashboards. Use consistent spacing scales across
          all components.
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="primary" appearance="outline" size="xs">
              Spacing Scale
            </Badge>
            <Badge variant="headless" appearance="outline" size="xs">
              Layout Grid
            </Badge>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="performance" className="px-4">
        <AccordionTrigger className="group hover:no-underline rounded-xl data-[state=open]:bg-slate-100/60 dark:data-[state=open]:bg-slate-800/30 px-3 py-3 transition-colors">
          <div className="flex w-full items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300">
              <Gauge className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                  Performance budgets
                </span>
                <Badge variant="alpha" appearance="outline" size="xs">
                  Alpha
                </Badge>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Track bundle size and keep UI snappy.
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ms-12 text-zinc-600 dark:text-zinc-300">
          Keep each UI block under a small, measurable budget. Lazy-load heavy
          examples and use RSC boundaries to reduce client payload.
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="new" appearance="outline" size="xs">
              Split Bundles
            </Badge>
            <Badge variant="version" appearance="outline" size="xs">
              React 19
            </Badge>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
