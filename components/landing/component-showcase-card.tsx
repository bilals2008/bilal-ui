import AIInput_04 from "../placeholder/ai-input-04";
import Card08 from "../placeholder/card-08";
import Btn03 from "../placeholder/btn-03";
import { Btn14 } from "../placeholder/btn-14";
import Alert03 from "../placeholder/alert-03";
import { cn } from "@/lib/utils";

const cellClasses =
  "rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-zinc-300/80 dark:hover:border-zinc-700/80";

interface ComponentShowcaseCardProps {
  className: string;
}

export function ComponentShowcaseCard({
  className,
}: ComponentShowcaseCardProps) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center text-center mb-10">
        <span className="inline-flex items-center rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-600 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
          Live Previews
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-zinc-900 via-purple-500 to-rose-500 dark:from-white dark:via-purple-400 dark:to-rose-400 mt-4">
          Buttons, Inputs & More
        </h2>
        <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-rose-500 rounded-full mt-4" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
        {/* AI Input — large cell left side */}
        <div className={cn(cellClasses, "md:col-span-7 md:row-span-2 relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Input
          </div>
          <AIInput_04 />
        </div>

        {/* Card 08 — top right */}
        <div className={cn(cellClasses, "md:col-span-5 relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Card
          </div>
          <Card08 image="/card-08.png" />
        </div>

        {/* Buttons row */}
        <div className={cn(cellClasses, "md:col-span-4 relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Buttons
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap pt-4">
            <Btn03 />
            <Btn14 label="Submit" className="w-40" />
          </div>
        </div>

        {/* Alert — bottom right */}
        <div className={cn(cellClasses, "md:col-span-4 relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Alert
          </div>
          <Alert03 />
        </div>

        {/* Stat cell */}
        <div className={cn(cellClasses, "md:col-span-4 flex-col relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Library
          </div>
          <div className="flex flex-col items-center justify-center text-center pt-4">
            <span className="text-3xl font-black bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-rose-500 dark:from-purple-400 dark:to-rose-400">
              50+
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Production-ready components
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm font-bold text-center mt-10 bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-fuchsia-500 to-rose-500">
        + more available — every component is copy-paste ready
      </p>
    </div>
  );
}
