// File: components/bilalUi/button/sheen-button.tsx
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SheenTone = "mint" | "sunset" | "violet";

const toneClasses: Record<SheenTone, string> = {
  mint: "from-emerald-400/70 via-cyan-300/30 to-sky-400/70",
  sunset: "from-rose-400/70 via-amber-300/30 to-orange-400/70",
  violet: "from-indigo-400/70 via-violet-300/30 to-fuchsia-400/70",
};

export function SheenButton({
  children,
  className,
  tone = "mint",
  ...props
}: React.ComponentProps<"button"> & { tone?: SheenTone }) {
  return (
    <div
      className={cn(
        "inline-flex rounded-md bg-gradient-to-r p-[1px] shadow-sm",
        toneClasses[tone]
      )}
    >
      <Button
        variant="ghost"
        className={cn(
          "relative overflow-hidden rounded-[7px] bg-white/90 px-5 py-2 text-sm font-medium text-zinc-900 shadow-xs backdrop-blur-sm transition-colors hover:bg-white dark:bg-zinc-950/80 dark:text-zinc-100 dark:hover:bg-zinc-950",
          "before:absolute before:inset-y-0 before:left-[-120%] before:w-2/3 before:skew-x-[-20deg] before:bg-linear-to-r before:from-transparent before:via-white/60 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-[220%] dark:before:via-white/10",
          className
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </Button>
    </div>
  );
}
