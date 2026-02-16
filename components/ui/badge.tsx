// File: components/ui/badge.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  dotClassName?: string;
  disabled?: boolean;
}

export interface BadgeButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLDivElement>,
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
        soft: "gap-x-1.5 rounded-full bg-teal-100 px-3 py-1.5 text-xs font-medium text-teal-800 dark:bg-teal-500/20 dark:text-teal-400",
        new: "bg-[var(--color-success-accent,var(--color-green-500))] text-[var(--color-success-foreground,var(--color-white))]",
        soon: "bg-[var(--color-warning-accent,var(--color-yellow-500))] text-[var(--color-warning-foreground,var(--color-white))]",
        info: "bg-[var(--color-info-accent,var(--color-violet-500))] text-[var(--color-info-foreground,var(--color-white))]",
        outline:
          "bg-transparent border border-border text-secondary-foreground",
        updated:
          "bg-[var(--color-primary-accent,var(--color-blue-500))] text-[var(--color-primary-foreground,var(--color-white))]",
        lab: "bg-[var(--color-accent-accent,var(--color-pink-500))] text-[var(--color-accent-foreground,var(--color-white))]",
        featured:
          "bg-[var(--color-info-accent,var(--color-violet-500))] text-[var(--color-info-foreground,var(--color-white))]",
        request:
          "bg-[var(--color-primary-accent,var(--color-cyan-500))] text-[var(--color-primary-foreground,var(--color-white))]",
        wip: "bg-[var(--color-accent-accent,var(--color-fuchsia-500))] text-[var(--color-accent-foreground,var(--color-white))]",
        stable:
          "bg-[var(--color-success-accent,var(--color-teal-500))] text-[var(--color-success-foreground,var(--color-white))]",
        legacy:
          "bg-[var(--color-secondary-accent,var(--color-stone-500))] text-[var(--color-secondary-foreground,var(--color-white))]",
        headless:
          "bg-[var(--color-secondary-accent,var(--color-slate-500))] text-[var(--color-secondary-foreground,var(--color-white))]",
        alpha:
          "bg-[var(--color-warning-accent,var(--color-rose-500))] text-[var(--color-warning-foreground,var(--color-white))]",
        deprecated:
          "bg-[var(--color-destructive-accent,var(--color-red-600))] text-[var(--color-destructive-foreground,var(--color-white))]",
        version:
          "bg-[var(--color-info-accent,var(--color-indigo-500))] text-[var(--color-info-foreground,var(--color-white))]",
        beta: "bg-[var(--color-warning-accent,var(--color-amber-500))] text-[var(--color-warning-foreground,var(--color-white))]",
        experimental:
          "bg-[var(--color-destructive-accent,var(--color-orange-600))] text-[var(--color-destructive-foreground,var(--color-white))]",
        preview:
          "bg-[var(--color-info-accent,var(--color-sky-500))] text-[var(--color-info-foreground,var(--color-white))]",
        verified:
          "bg-[var(--color-success-accent,var(--color-emerald-500))] text-[var(--color-success-foreground,var(--color-white))]",
        pro: "bg-[var(--color-primary-accent,var(--color-purple-500))] text-[var(--color-primary-foreground,var(--color-white))]",
        breaking:
          "bg-[var(--color-destructive-accent,var(--color-red-500))] text-[var(--color-destructive-foreground,var(--color-white))]",
        fix: "bg-[var(--color-success-accent,var(--color-green-500))] text-[var(--color-success-foreground,var(--color-white))]",
        docs: "bg-[var(--color-info-accent,var(--color-blue-500))] text-[var(--color-info-foreground,var(--color-white))]",
        perf: "bg-[var(--color-warning-accent,var(--color-orange-500))] text-[var(--color-warning-foreground,var(--color-white))]",
        refactor:
          "bg-[var(--color-primary-accent,var(--color-purple-500))] text-[var(--color-primary-foreground,var(--color-white))]",
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
      {
        variant: "beta",
        appearance: "light",
        className:
          "text-[var(--color-warning-accent,var(--color-amber-700))] bg-[var(--color-warning-soft,var(--color-amber-100))] dark:bg-[var(--color-warning-soft,var(--color-amber-950))] dark:text-[var(--color-warning-soft,var(--color-amber-600))]",
      },
      {
        variant: "experimental",
        appearance: "light",
        className:
          "text-[var(--color-destructive-accent,var(--color-orange-700))] bg-[var(--color-destructive-soft,var(--color-orange-100))] dark:bg-[var(--color-destructive-soft,var(--color-orange-950))] dark:text-[var(--color-destructive-soft,var(--color-orange-600))]",
      },
      {
        variant: "preview",
        appearance: "light",
        className:
          "text-[var(--color-info-accent,var(--color-sky-700))] bg-[var(--color-info-soft,var(--color-sky-100))] dark:bg-[var(--color-info-soft,var(--color-sky-950))] dark:text-[var(--color-info-soft,var(--color-sky-600))]",
      },
      {
        variant: "verified",
        appearance: "light",
        className:
          "text-[var(--color-success-accent,var(--color-emerald-700))] bg-[var(--color-success-soft,var(--color-emerald-100))] dark:bg-[var(--color-success-soft,var(--color-emerald-950))] dark:text-[var(--color-success-soft,var(--color-emerald-600))]",
      },
      {
        variant: "pro",
        appearance: "light",
        className:
          "text-[var(--color-primary-accent,var(--color-purple-700))] bg-[var(--color-primary-soft,var(--color-purple-100))] dark:bg-[var(--color-primary-soft,var(--color-purple-950))] dark:text-[var(--color-primary-soft,var(--color-purple-600))]",
      },
      {
        variant: "breaking",
        appearance: "light",
        className:
          "text-[var(--color-destructive-accent,var(--color-red-700))] bg-[var(--color-destructive-soft,var(--color-red-100))] dark:bg-[var(--color-destructive-soft,var(--color-red-950))] dark:text-[var(--color-destructive-soft,var(--color-red-600))]",
      },
      {
        variant: "fix",
        appearance: "light",
        className:
          "text-[var(--color-success-accent,var(--color-green-700))] bg-[var(--color-success-soft,var(--color-green-100))] dark:bg-[var(--color-success-soft,var(--color-green-950))] dark:text-[var(--color-success-soft,var(--color-green-600))]",
      },
      {
        variant: "docs",
        appearance: "light",
        className:
          "text-[var(--color-info-accent,var(--color-blue-700))] bg-[var(--color-info-soft,var(--color-blue-100))] dark:bg-[var(--color-info-soft,var(--color-blue-950))] dark:text-[var(--color-info-soft,var(--color-blue-600))]",
      },
      {
        variant: "perf",
        appearance: "light",
        className:
          "text-[var(--color-warning-accent,var(--color-orange-700))] bg-[var(--color-warning-soft,var(--color-orange-100))] dark:bg-[var(--color-warning-soft,var(--color-orange-950))] dark:text-[var(--color-warning-soft,var(--color-orange-600))]",
      },
      {
        variant: "refactor",
        appearance: "light",
        className:
          "text-[var(--color-primary-accent,var(--color-purple-700))] bg-[var(--color-primary-soft,var(--color-purple-100))] dark:bg-[var(--color-primary-soft,var(--color-purple-950))] dark:text-[var(--color-primary-soft,var(--color-purple-600))]",
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
        className:
          "text-violet-700 border-violet-200 bg-violet-50 dark:bg-violet-950 dark:border-violet-900 dark:text-violet-600",
      },
      {
        variant: "request",
        appearance: "outline",
        className:
          "text-cyan-700 border-cyan-200 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-900 dark:text-cyan-600",
      },
      {
        variant: "wip",
        appearance: "outline",
        className:
          "text-fuchsia-700 border-fuchsia-200 bg-fuchsia-50 dark:bg-fuchsia-950 dark:border-fuchsia-900 dark:text-fuchsia-600",
      },
      {
        variant: "stable",
        appearance: "outline",
        className:
          "text-teal-700 border-teal-200 bg-teal-50 dark:bg-teal-950 dark:border-teal-900 dark:text-teal-600",
      },
      {
        variant: "legacy",
        appearance: "outline",
        className:
          "text-stone-700 border-stone-200 bg-stone-50 dark:bg-stone-950 dark:border-stone-900 dark:text-stone-600",
      },
      {
        variant: "headless",
        appearance: "outline",
        className:
          "text-slate-700 border-slate-200 bg-slate-50 dark:bg-slate-950 dark:border-slate-900 dark:text-slate-600",
      },
      {
        variant: "alpha",
        appearance: "outline",
        className:
          "text-rose-700 border-rose-200 bg-rose-50 dark:bg-rose-950 dark:border-rose-900 dark:text-rose-600",
      },
      {
        variant: "deprecated",
        appearance: "outline",
        className:
          "text-red-700 border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-900 dark:text-red-600",
      },
      {
        variant: "version",
        appearance: "outline",
        className:
          "text-indigo-700 border-indigo-200 bg-indigo-50 dark:bg-indigo-950 dark:border-indigo-900 dark:text-indigo-600",
      },
      {
        variant: "beta",
        appearance: "outline",
        className:
          "text-amber-700 border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-900 dark:text-amber-600",
      },
      {
        variant: "experimental",
        appearance: "outline",
        className:
          "text-orange-700 border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-900 dark:text-orange-600",
      },
      {
        variant: "preview",
        appearance: "outline",
        className:
          "text-sky-700 border-sky-200 bg-sky-50 dark:bg-sky-950 dark:border-sky-900 dark:text-sky-600",
      },
      {
        variant: "verified",
        appearance: "outline",
        className:
          "text-emerald-700 border-emerald-200 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-600",
      },
      {
        variant: "pro",
        appearance: "outline",
        className:
          "text-purple-700 border-purple-200 bg-purple-50 dark:bg-purple-950 dark:border-purple-900 dark:text-purple-600",
      },
      {
        variant: "breaking",
        appearance: "outline",
        className:
          "text-red-700 border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-900 dark:text-red-600",
      },
      {
        variant: "fix",
        appearance: "outline",
        className:
          "text-green-700 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-900 dark:text-green-600",
      },
      {
        variant: "docs",
        appearance: "outline",
        className:
          "text-blue-700 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-600",
      },
      {
        variant: "perf",
        appearance: "outline",
        className:
          "text-orange-700 border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-900 dark:text-orange-600",
      },
      {
        variant: "refactor",
        appearance: "outline",
        className:
          "text-purple-700 border-purple-200 bg-purple-50 dark:bg-purple-950 dark:border-purple-900 dark:text-purple-600",
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
      {
        variant: "featured",
        appearance: "ghost",
        className: "text-violet-600",
      },
      { variant: "request", appearance: "ghost", className: "text-cyan-600" },
      { variant: "wip", appearance: "ghost", className: "text-fuchsia-600" },
      { variant: "stable", appearance: "ghost", className: "text-teal-600" },
      { variant: "legacy", appearance: "ghost", className: "text-stone-600" },
      { variant: "headless", appearance: "ghost", className: "text-slate-600" },
      { variant: "alpha", appearance: "ghost", className: "text-rose-600" },
      { variant: "deprecated", appearance: "ghost", className: "text-red-600" },
      { variant: "version", appearance: "ghost", className: "text-indigo-600" },
      { variant: "beta", appearance: "ghost", className: "text-amber-600" },
      {
        variant: "experimental",
        appearance: "ghost",
        className: "text-orange-600",
      },
      { variant: "preview", appearance: "ghost", className: "text-sky-600" },
      {
        variant: "verified",
        appearance: "ghost",
        className: "text-emerald-600",
      },
      { variant: "pro", appearance: "ghost", className: "text-purple-600" },
      { variant: "breaking", appearance: "ghost", className: "text-red-600" },
      { variant: "fix", appearance: "ghost", className: "text-green-600" },
      { variant: "docs", appearance: "ghost", className: "text-blue-600" },
      { variant: "perf", appearance: "ghost", className: "text-orange-600" },
      {
        variant: "refactor",
        appearance: "ghost",
        className: "text-purple-600",
      },

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
  },
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
  },
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
        className,
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
        className,
      )}
      {...props}
    />
  );
}

export { Badge, BadgeButton, BadgeDot, badgeVariants };
