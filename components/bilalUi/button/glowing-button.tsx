// File: components/bilalUi/button/glowing-button.tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function hexToRgba(hex: string, alpha: number = 1): string {
  let hexValue = hex.replace("#", "");

  if (hexValue.length === 3) {
    hexValue = hexValue
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    console.error("Invalid hex color:", hex);
    return "rgba(0, 0, 0, 1)";
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Helper to check if string is hex
const isHex = (str: string) => /^#([0-9A-F]{3}){1,2}$/i.test(str);

export function GlowingButton({
  children,
  className,
  glowColor = "#a3e635",
  glowPosition = "right",
  variant = "solid",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowPosition?: "right" | "left" | "top" | "bottom";
  variant?: "solid" | "dot" | "gradient" | "dashed";
}) {
  const isGradient = !isHex(glowColor);

  // If it's a gradient, we use it directly. If hex, we convert.
  const glowColorValue = isGradient ? glowColor : hexToRgba(glowColor);
  const glowColorVia = isGradient ? "transparent" : hexToRgba(glowColor, 0.075);
  const glowColorTo = isGradient ? "transparent" : hexToRgba(glowColor, 0.2);

  const positionClasses = {
    right:
      "before:right-0 before:top-1/2 before:-translate-y-1/2 before:rounded-l hover:before:translate-x-full",
    left: "before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-r hover:before:-translate-x-full",
    top: "before:top-0 before:left-1/2 before:-translate-x-1/2 before:rounded-b hover:before:-translate-y-full",
    bottom:
      "before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:rounded-t hover:before:translate-y-full",
  };

  const variantClasses = {
    solid:
      glowPosition === "top" || glowPosition === "bottom"
        ? "before:w-[60%] before:h-1.25"
        : "before:h-[60%] before:w-1.25",
    gradient:
      glowPosition === "top" || glowPosition === "bottom"
        ? "before:w-[60%] before:h-1.25" // Reuse solid dimensions for gradient
        : "before:h-[60%] before:w-1.25",
    dot: "before:h-2 before:w-2 before:rounded-full!", // Small dot
    dashed:
      glowPosition === "top" || glowPosition === "bottom"
        ? "before:w-[80%] before:h-1 before:bg-transparent before:border-2 before:border-dashed before:border-(--glow-color)" // Dashed line
        : "before:h-[80%] before:w-1 before:bg-transparent before:border-2 before:border-dashed before:border-(--glow-color)",
  };

  return (
    <Button
      style={
        {
          "--glow-color": glowColorValue,
          "--glow-color-via": glowColorVia,
          "--glow-color-to": glowColorTo,
        } as React.CSSProperties
      }
      className={cn(
        "relative flex h-10 w-min items-center justify-center overflow-hidden rounded-md border border-r-0 bg-linear-to-t px-5! text-sm transition-colors duration-200",
        "border-zinc-100 from-white to-neutral-100 text-black hover:text-black/80 dark:border-zinc-800 dark:from-zinc-900 dark:to-neutral-800 dark:text-white dark:hover:text-white/80",
        // Only show gradient background (after) if it's NOT a complex gradient color, to avoid clashes
        !isGradient &&
          "z-20 after:absolute after:inset-0 after:rounded-[inherit] after:bg-linear-to-r after:from-transparent after:from-40% after:via-(--glow-color-via) after:via-70% after:to-(--glow-color-to) after:shadow-[rgba(255,255,255,0.15)_0px_1px_0px_inset]",
        "z-10 before:absolute before:transition-all before:duration-200",
        // Only apply standard shadow if NOT dashed and NOT gradient
        variant !== "dashed" &&
          !isGradient &&
          "before:bg-(--glow-color) before:shadow-[-2px_0_10px_var(--glow-color)]",
        // For gradient, use background but with a backup shadow or filter
        variant !== "dashed" &&
          isGradient &&
          "before:bg-(--glow-color) before:shadow-[0_0_10px_rgba(236,72,153,0.5)]",
        positionClasses[glowPosition],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Button>
  );
}
