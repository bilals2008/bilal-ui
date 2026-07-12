import AIInput_04 from "../placeholder/ai-input-04";
import Card08 from "../placeholder/card-08";
import Btn03 from "../placeholder/btn-03";
import { Btn14 } from "../placeholder/btn-14";
import Alert03 from "../placeholder/alert-03";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/gradient-text";

const cellClasses =
  "rounded-2xl border border-border/70 bg-background/60 p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-border/80";

interface ComponentShowcaseCardProps {
  className: string;
}

export function ComponentShowcaseCard({
  className,
}: ComponentShowcaseCardProps) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center text-center mb-10">
        <span className="inline-flex items-center rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground backdrop-blur-sm">
          Live Previews
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground via-purple-500 to-rose-500 dark:via-purple-400 dark:to-rose-400 mt-4">
          Buttons, Inputs & More
        </h2>
        <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-rose-500 rounded-full mt-4" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
        {/* AI Input — large cell left side */}
        <div className={cn(cellClasses, "md:col-span-7 md:row-span-2 relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            Input
          </div>
          <AIInput_04 />
        </div>

        {/* Card 08 — top right */}
        <div className={cn(cellClasses, "md:col-span-5 relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            Card
          </div>
          <Card08 image="/card-08.png" />
        </div>

        {/* Buttons row */}
        <div className={cn(cellClasses, "md:col-span-4 relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            Buttons
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap pt-4">
            <Btn03 />
            <Btn14 label="Submit" className="w-40" />
          </div>
        </div>

        {/* Alert — bottom right */}
        <div className={cn(cellClasses, "md:col-span-4 relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            Alert
          </div>
          <Alert03 />
        </div>

        {/* Stat cell */}
        <div className={cn(cellClasses, "md:col-span-4 flex-col relative overflow-hidden group")}>
          <div className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            Library
          </div>
          <div className="flex flex-col items-center justify-center text-center pt-4">
            <GradientText className="text-3xl font-black">50+</GradientText>
            <span className="text-xs text-muted-foreground mt-1">
              Production-ready components
            </span>
          </div>
        </div>
      </div>

      <GradientText className="text-sm font-bold text-center mt-10">+ more available — every component is copy-paste ready</GradientText>
    </div>
  );
}
