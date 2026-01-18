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
  "relative w-full rounded-lg border px-4 py-3 text-sm transition-colors",
  {
    variants: {
      type: {
        info: "border-[var(--callout-info-border)] bg-[var(--callout-info-bg)] text-[var(--callout-info-text)] [&>svg]:text-[var(--callout-info-icon)]",
        warning:
          "border-[var(--callout-warning-border)] bg-[var(--callout-warning-bg)] text-[var(--callout-warning-text)] [&>svg]:text-[var(--callout-warning-icon)]",
        error:
          "border-[var(--callout-error-border)] bg-[var(--callout-error-bg)] text-[var(--callout-error-text)] [&>svg]:text-[var(--callout-error-icon)]",
        success:
          "border-[var(--callout-success-border)] bg-[var(--callout-success-bg)] text-[var(--callout-success-text)] [&>svg]:text-[var(--callout-success-icon)]",
        tip: "border-[var(--callout-tip-border)] bg-[var(--callout-tip-bg)] text-[var(--callout-tip-text)] [&>svg]:text-[var(--callout-tip-icon)]",
        note: "border-[var(--callout-note-border)] bg-[var(--callout-note-bg)] text-[var(--callout-note-text)] [&>svg]:text-[var(--callout-note-icon)]",
      },
    },
    defaultVariants: {
      type: "info",
    },
  }
);

const iconMap = {
  info: Info,
  warning: AlertTriangle,
  error: XCircle,
  success: CheckCircle2,
  tip: Lightbulb,
  note: FileText,
};

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
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
                collapsible && "cursor-pointer select-none"
              )}
            >
              {collapsible ? (
                <CollapsiblePrimitive.Trigger className="flex w-full items-center justify-between gap-2">
                  <span>{title}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180"
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
