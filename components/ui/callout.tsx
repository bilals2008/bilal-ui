// File: components/ui/callout.tsx
"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import {
  Info,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Lightbulb,
  FileText,
  ChevronDown,
} from "lucide-react";

import { cn } from "@/lib/utils";

const calloutVariants = cva(
  "relative w-full rounded-xl border px-4 py-4 text-sm transition-all duration-300 overflow-hidden",
  {
    variants: {
      type: {
        info: "border-blue-500/20 bg-blue-500/[0.03] text-blue-100/90 dark:bg-blue-500/[0.05] [&>svg]:text-blue-400 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-500/50",
        warning:
          "border-amber-500/20 bg-amber-500/[0.03] text-amber-100/90 dark:bg-amber-500/[0.05] [&>svg]:text-amber-400 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-amber-500/50",
        warn: "border-amber-500/20 bg-amber-500/[0.03] text-amber-100/90 dark:bg-amber-500/[0.05] [&>svg]:text-amber-400 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-amber-500/50",
        error:
          "border-red-500/20 bg-red-500/[0.03] text-red-100/90 dark:bg-red-500/[0.05] [&>svg]:text-red-400 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-red-500/50",
        danger:
          "border-red-500/20 bg-red-500/[0.03] text-red-100/90 dark:bg-red-500/[0.05] [&>svg]:text-red-400 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-red-500/50",
        success:
          "border-emerald-500/20 bg-emerald-500/[0.03] text-emerald-100/90 dark:bg-emerald-500/[0.05] [&>svg]:text-emerald-400 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-emerald-500/50",
        tip: "border-purple-500/20 bg-purple-500/[0.03] text-purple-100/90 dark:bg-purple-500/[0.05] [&>svg]:text-purple-400 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-purple-500/50",
        note: "border-zinc-500/20 bg-zinc-500/[0.03] text-zinc-100/90 dark:bg-zinc-500/[0.05] [&>svg]:text-zinc-400 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-zinc-500/50",
      },
    },
    defaultVariants: {
      type: "info",
    },
  },
);

const iconMap = {
  info: Info,
  warning: AlertTriangle,
  warn: AlertTriangle,
  error: XCircle,
  danger: XCircle,
  success: CheckCircle2,
  tip: Lightbulb,
  note: FileText,
};

export interface CalloutProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  title?: string;
  icon?: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

function Callout({
  className,
  type = "info",
  title,
  icon,
  collapsible = false,
  defaultOpen = true,
  children,
  ...props
}: CalloutProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const IconComponent = type ? iconMap[type] : Info;

  const content = (
    <>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0">
          {icon || <IconComponent className="size-4" />}
        </span>
        <div className="flex-1 min-w-0">
          {title && (
            <div
              className={cn(
                "font-semibold mb-1",
                collapsible && "cursor-pointer select-none",
              )}
            >
              {collapsible ? (
                <CollapsiblePrimitive.Trigger className="flex w-full items-center justify-between gap-2">
                  <span>{title}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </CollapsiblePrimitive.Trigger>
              ) : (
                title
              )}
            </div>
          )}
          {collapsible ? (
            <CollapsiblePrimitive.Content className="overflow-hidden data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
              <div className="text-sm opacity-90 leading-relaxed [&>p]:my-0 [&>ul]:my-1 [&>ol]:my-1">
                {children}
              </div>
            </CollapsiblePrimitive.Content>
          ) : (
            <div className="text-sm opacity-90 leading-relaxed [&>p]:my-0 [&>ul]:my-1 [&>ol]:my-1">
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (collapsible) {
    return (
      <CollapsiblePrimitive.Root
        open={isOpen}
        onOpenChange={setIsOpen}
        defaultOpen={defaultOpen}
      >
        <div
          data-slot="callout"
          role="alert"
          className={cn(calloutVariants({ type }), className)}
          {...props}
        >
          {content}
        </div>
      </CollapsiblePrimitive.Root>
    );
  }

  return (
    <div
      data-slot="callout"
      role="alert"
      className={cn(calloutVariants({ type }), className)}
      {...props}
    >
      {content}
    </div>
  );
}

export { Callout, calloutVariants };
