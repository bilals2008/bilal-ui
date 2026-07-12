import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.ComponentProps<"span"> {
  /** Use the brand gradient (rose → fuchsia → purple). */
  variant?: "brand" | "brand-reverse" | "brand-dark-only";
}

const brandGradient =
  "bg-linear-to-r from-rose-500 via-fuchsia-500 to-purple-500 " +
  "dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400";

const brandReverseGradient =
  "bg-linear-to-r from-purple-500 via-fuchsia-500 to-rose-500 " +
  "dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400";

export function GradientText({
  variant = "brand",
  className,
  children,
  ...props
}: GradientTextProps) {
  const gradient =
    variant === "brand-reverse" ? brandReverseGradient : brandGradient;

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        gradient,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
