// File: components/bilalUi/alert/alert-variants.tsx
"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  [
    "relative w-full text-sm border has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] grid-cols-[0_1fr] grid gap-y-0.5 items-center [&>svg:not([class*=size-])]:size-4",
    "has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3",
    "has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start",
    "has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5",
    "rounded-lg",
    "px-3.5",
    "py-2",
    "has-[>svg]:gap-x-2.5",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "border-[var(--callout-error-border)] bg-[var(--callout-error-bg)] text-[var(--callout-error-text)] [&>svg]:text-[var(--callout-error-icon)]",
        info: "border-[var(--callout-info-border)] bg-[var(--callout-info-bg)] text-[var(--callout-info-text)] [&>svg]:text-[var(--callout-info-icon)]",
        success:
          "border-[var(--callout-success-border)] bg-[var(--callout-success-bg)] text-[var(--callout-success-text)] [&>svg]:text-[var(--callout-success-icon)]",
        warning:
          "border-[var(--callout-warning-border)] bg-[var(--callout-warning-bg)] text-[var(--callout-warning-text)] [&>svg]:text-[var(--callout-warning-icon)]",
        notification:
          "border-[var(--border)] bg-background/60 backdrop-blur-md shadow-lg dark:bg-card/40 border-l-4 border-l-primary",
        invert:
          "border-invert bg-invert text-invert-foreground [&_[data-slot=alert-description]]:text-invert-foreground/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed opacity-90",
        className,
      )}
      {...props}
    />
  );
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn(
        "flex gap-1.5 max-sm:col-start-2 max-sm:mt-2 max-sm:justify-start sm:col-start-3 sm:row-start-1 sm:justify-end sm:self-center",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, AlertAction };
