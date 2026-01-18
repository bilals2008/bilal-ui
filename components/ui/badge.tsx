// File: components/ui/badge.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  dotClassName?: string;
  disabled?: boolean;
}

export interface BadgeButtonProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeButtonVariants> {
  asChild?: boolean;
}

export type BadgeDotProps = React.HTMLAttributes<HTMLSpanElement>;

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap justify-center border border-transparent font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:-ms-px [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        new: "bg-[var(--color-success-accent,var(--color-green-500))] text-[var(--color-success-foreground,var(--color-white))]",
        soon: "bg-[var(--color-warning-accent,var(--color-yellow-500))] text-[var(--color-warning-foreground,var(--color-white))]",
        info: "bg-[var(--color-info-accent,var(--color-violet-500))] text-[var(--color-info-foreground,var(--color-white))]",
        outline:
          "bg-transparent border border-border text-secondary-foreground",
        updated: "bg-[var(--color-primary-accent,var(--color-blue-500))] text-[var(--color-primary-foreground,var(--color-white))]",
        lab: "bg-[var(--color-accent-accent,var(--color-pink-500))] text-[var(--color-accent-foreground,var(--color-white))]",
        featured: "bg-[var(--color-info-accent,var(--color-violet-500))] text-[var(--color-info-foreground,var(--color-white))]",
        request: "bg-[var(--color-primary-accent,var(--color-cyan-500))] text-[var(--color-primary-foreground,var(--color-white))]",
        wip: "bg-[var(--color-accent-accent,var(--color-fuchsia-500))] text-[var(--color-accent-foreground,var(--color-white))]",
        stable: "bg-[var(--color-success-accent,var(--color-teal-500))] text-[var(--color-success-foreground,var(--color-white))]",
        legacy: "bg-[var(--color-secondary-accent,var(--color-stone-500))] text-[var(--color-secondary-foreground,var(--color-white))]",
        headless: "bg-[var(--color-secondary-accent,var(--color-slate-500))] text-[var(--color-secondary-foreground,var(--color-white))]",
        alpha: "bg-[var(--color-warning-accent,var(--color-rose-500))] text-[var(--color-warning-foreground,var(--color-white))]",
        deprecated: "bg-[var(--color-destructive-accent,var(--color-red-600))] text-[var(--color-destructive-foreground,var(--color-white))]",
      },
      appearance: {
        default: "",
        light: "",
        outline: "",
        ghost: "border-transparent bg-transparent",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
      size: {
        lg: "rounded-md px-[0.5rem] h-7 min-w-7 gap-1.5 text-xs [&_svg]:size-3.5",
        md: "rounded-md px-[0.45rem] h-6 min-w-6 gap-1.5 text-xs [&_svg]:size-3.5 ",
        sm: "rounded-sm px-[0.325rem] h-5 min-w-5 gap-1 text-[0.6875rem] leading-[0.75rem] [&_svg]:size-3",
        xs: "rounded-sm px-[0.25rem] h-4 min-w-4 gap-1 text-[0.625rem] leading-[0.5rem] [&_svg]:size-3",
      },
      shape: {
        default: "",
        circle: "rounded-full",
      },
    },
    compoundVariants: [
      /* Light */
      {
        variant: "primary",
        appearance: "light",
        className:
          "text-[var(--color-primary-accent,var(--color-blue-700))] bg-[var(--color-primary-soft,var(--color-blue-50))] dark:bg-[var(--color-primary-soft,var(--color-blue-950))] dark:text-[var(--color-primary-soft,var(--color-blue-600))]",
      },
      {
        variant: "secondary",
        appearance: "light",
        className:
          "bg-secondary dark:bg-secondary/50 text-secondary-foreground",
      },
      {
        variant: "new",
        appearance: "light",
        className:
          "text-[var(--color-success-accent,var(--color-green-800))] bg-[var(--color-success-soft,var(--color-green-100))] dark:bg-[var(--color-success-soft,var(--color-green-950))] dark:text-[var(--color-success-soft,var(--color-green-600))]",
      },
      {
        variant: "soon",
        appearance: "light",
        className:
          "text-[var(--color-warning-accent,var(--color-yellow-700))] bg-[var(--color-warning-soft,var(--color-yellow-100))] dark:bg-[var(--color-warning-soft,var(--color-yellow-950))] dark:text-[var(--color-warning-soft,var(--color-yellow-600))]",
      },
      {
        variant: "info",
        appearance: "light",
        className:
          "text-[var(--color-info-accent,var(--color-violet-700))] bg-[var(--color-info-soft,var(--color-violet-100))] dark:bg-[var(--color-info-soft,var(--color-violet-950))] dark:text-[var(--color-info-soft,var(--color-violet-400))]",
      },
      {
        variant: "updated",
        appearance: "light",
        className:
          "text-[var(--color-primary-accent,var(--color-blue-700))] bg-[var(--color-primary-soft,var(--color-blue-50))] dark:bg-[var(--color-primary-soft,var(--color-blue-950))] dark:text-[var(--color-primary-soft,var(--color-blue-600))]",
      },
      /* Outline */
      {
        variant: "primary",
        appearance: "outline",
        className:
          "text-[var(--color-primary-accent,var(--color-blue-700))] border-[var(--color-primary-soft,var(--color-blue-100))] bg-[var(--color-primary-soft,var(--color-blue-50))] dark:bg-[var(--color-primary-soft,var(--color-blue-950))] dark:border-[var(--color-primary-soft,var(--color-blue-900))] dark:text-[var(--color-primary-soft,var(--color-blue-600))]",
      },
      {
        variant: "new",
        appearance: "outline",
        className:
          "text-[var(--color-success-accent,var(--color-green-700))] border-[var(--color-success-soft,var(--color-green-200))] bg-[var(--color-success-soft,var(--color-green-50))] dark:bg-[var(--color-success-soft,var(--color-green-950))] dark:border-[var(--color-success-soft,var(--color-green-900))] dark:text-[var(--color-success-soft,var(--color-green-600))]",
      },
      {
        variant: "soon",
        appearance: "outline",
        className:
          "text-[var(--color-warning-accent,var(--color-yellow-700))] border-[var(--color-warning-soft,var(--color-yellow-200))] bg-[var(--color-warning-soft,var(--color-yellow-50))] dark:bg-[var(--color-warning-soft,var(--color-yellow-950))] dark:border-[var(--color-warning-soft,var(--color-yellow-900))] dark:text-[var(--color-warning-soft,var(--color-yellow-600))]",
      },
      {
        variant: "info",
        appearance: "outline",
        className:
          "text-[var(--color-info-accent,var(--color-violet-700))] border-[var(--color-info-soft,var(--color-violet-100))] bg-[var(--color-info-soft,var(--color-violet-50))] dark:bg-[var(--color-info-soft,var(--color-violet-950))] dark:border-[var(--color-info-soft,var(--color-violet-900))] dark:text-[var(--color-info-soft,var(--color-violet-400))]",
      },
      {
        variant: "updated",
        appearance: "outline",
        className:
          "text-[var(--color-primary-accent,var(--color-blue-700))] border-[var(--color-primary-soft,var(--color-blue-100))] bg-[var(--color-primary-soft,var(--color-blue-50))] dark:bg-[var(--color-primary-soft,var(--color-blue-950))] dark:border-[var(--color-primary-soft,var(--color-blue-900))] dark:text-[var(--color-primary-soft,var(--color-blue-600))]",
      },
      {
        variant: "lab",
        appearance: "outline",
        className:
          "text-[var(--color-accent-accent,var(--color-pink-700))] border-[var(--color-accent-soft,var(--color-pink-100))] bg-[var(--color-accent-soft,var(--color-pink-50))] dark:bg-[var(--color-accent-soft,var(--color-pink-950))] dark:border-[var(--color-accent-soft,var(--color-pink-900))] dark:text-[var(--color-accent-soft,var(--color-pink-600))]",
      },
      {
        variant: "featured",
        appearance: "outline",
        className: "text-violet-700 border-violet-200 bg-violet-50 dark:bg-violet-950 dark:border-violet-900 dark:text-violet-600",
      },
      {
        variant: "request",
        appearance: "outline",
        className: "text-cyan-700 border-cyan-200 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-900 dark:text-cyan-600",
      },
      {
        variant: "wip",
        appearance: "outline",
        className: "text-fuchsia-700 border-fuchsia-200 bg-fuchsia-50 dark:bg-fuchsia-950 dark:border-fuchsia-900 dark:text-fuchsia-600",
      },
      {
        variant: "stable",
        appearance: "outline",
        className: "text-teal-700 border-teal-200 bg-teal-50 dark:bg-teal-950 dark:border-teal-900 dark:text-teal-600",
      },
      {
        variant: "legacy",
        appearance: "outline",
        className: "text-stone-700 border-stone-200 bg-stone-50 dark:bg-stone-950 dark:border-stone-900 dark:text-stone-600",
      },
      {
        variant: "headless",
        appearance: "outline",
        className: "text-slate-700 border-slate-200 bg-slate-50 dark:bg-slate-950 dark:border-slate-900 dark:text-slate-600",
      },
      {
        variant: "alpha",
        appearance: "outline",
        className: "text-rose-700 border-rose-200 bg-rose-50 dark:bg-rose-950 dark:border-rose-900 dark:text-rose-600",
      },
      {
        variant: "deprecated",
        appearance: "outline",
        className: "text-red-700 border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-900 dark:text-red-600",
      },
      /* Ghost */
      {
        variant: "primary",
        appearance: "ghost",
        className: "text-primary",
      },
      {
        variant: "secondary",
        appearance: "ghost",
        className: "text-secondary-foreground",
      },
      {
        variant: "new",
        appearance: "ghost",
        className: "text-[var(--color-success-accent,var(--color-green-500))]",
      },
      {
        variant: "soon",
        appearance: "ghost",
        className: "text-[var(--color-warning-accent,var(--color-yellow-500))]",
      },
      {
        variant: "info",
        appearance: "ghost",
        className: "text-[var(--color-info-accent,var(--color-violet-500))]",
      },
      {
        variant: "updated",
        appearance: "ghost",
        className: "text-[var(--color-primary-accent,var(--color-blue-500))]",
      },
      {
        variant: "lab",
        appearance: "ghost",
        className: "text-[var(--color-accent-accent,var(--color-pink-500))]",
      },
      { variant: "featured", appearance: "ghost", className: "text-violet-600" },
      { variant: "request", appearance: "ghost", className: "text-cyan-600" },
      { variant: "wip", appearance: "ghost", className: "text-fuchsia-600" },
      { variant: "stable", appearance: "ghost", className: "text-teal-600" },
      { variant: "legacy", appearance: "ghost", className: "text-stone-600" },
      { variant: "headless", appearance: "ghost", className: "text-slate-600" },
      { variant: "alpha", appearance: "ghost", className: "text-rose-600" },
      { variant: "deprecated", appearance: "ghost", className: "text-red-600" },

      { size: "lg", appearance: "ghost", className: "px-0" },
      { size: "md", appearance: "ghost", className: "px-0" },
      { size: "sm", appearance: "ghost", className: "px-0" },
      { size: "xs", appearance: "ghost", className: "px-0" },
    ],
    defaultVariants: {
      variant: "primary",
      appearance: "default",
      size: "md",
    },
  }
);

const badgeButtonVariants = cva(
  "cursor-pointer transition-all inline-flex items-center justify-center leading-none size-3.5 [&>svg]:opacity-100! [&>svg]:size-3.5! p-0 rounded-md -me-0.5 opacity-60 hover:opacity-100",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  size,
  appearance,
  shape,
  asChild = false,
  disabled,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? SlotPrimitive.Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, size, appearance, shape, disabled }),
        className
      )}
      {...props}
    />
  );
}

function BadgeButton({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof badgeButtonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? SlotPrimitive.Slot : "span";
  return (
    <Comp
      data-slot="badge-button"
      className={cn(badgeButtonVariants({ variant, className }))}
      role="button"
      {...props}
    />
  );
}

function BadgeDot({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge-dot"
      className={cn(
        "size-1.5 rounded-full bg-[currentColor] opacity-75",
        className
      )}
      {...props}
    />
  );
}

export { Badge, BadgeButton, BadgeDot, badgeVariants };
