// File: components/bilalUi/button/gradient-border-button.tsx
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GradientBorderVariant = "primary" | "accent" | "callout" | "chart";
type AnimationType = "pulse" | "rotate" | "shimmer" | "none";

const gradientClasses: Record<GradientBorderVariant, string> = {
  primary: "from-blue-500 via-violet-500 to-purple-500",
  accent: "from-emerald-400 via-cyan-400 to-sky-500",
  callout: "from-amber-400 via-orange-400 to-rose-500",
  chart: "from-pink-400 via-purple-400 to-indigo-500",
};

const animationClasses: Record<AnimationType, string> = {
  pulse: "animate-pulse",
  rotate: "animate-spin",
  shimmer: "bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shimmer",
  none: "",
};

export function GradientBorderButton({
  children,
  className,
  variant = "primary",
  animation = "pulse",
  borderWidth = "p-[2px]",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: GradientBorderVariant;
  animation?: AnimationType;
  borderWidth?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex rounded-lg",
        borderWidth,
        "bg-gradient-to-r",
        gradientClasses[variant],
        animation !== "none" && animation !== "shimmer" && animationClasses[animation],
        "relative overflow-hidden",
        className
      )}
    >
      {animation === "shimmer" && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shimmer",
            "rounded-[inherit]"
          )}
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        />
      )}
      <Button
        variant="ghost"
        className={cn(
          "relative z-10 rounded-md bg-background text-foreground font-medium transition-all duration-300",
          "hover:bg-muted/80 hover:scale-[1.02] active:scale-[0.98]",
          "shadow-sm hover:shadow-md",
          "border-0",
          "px-6 py-2.5",
          animation === "none" && "hover:shadow-lg"
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