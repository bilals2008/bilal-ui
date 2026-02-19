// File: components/ui/callout.tsx
"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import {
  Info,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Lightbulb,
  FileText,
  OctagonAlert,
  Flame,
  Bug,
} from "lucide-react";

import { cn } from "@/lib/utils";

const calloutVariants = cva(
  [
    "group/callout relative w-full rounded-xl border px-4 py-4 text-sm overflow-hidden",
    "transition-all duration-300 ease-in-out",
    "hover:shadow-sm",
  ],
  {
    variants: {
      type: {
        info: [
          "bg-[var(--callout-info-bg)] border-[var(--callout-info-border)]/40 text-[var(--callout-info-text)]",
          "hover:border-[var(--callout-info-border)]/70 hover:shadow-blue-500/5",
        ],
        warning: [
          "bg-[var(--callout-warning-bg)] border-[var(--callout-warning-border)]/40 text-[var(--callout-warning-text)]",
          "hover:border-[var(--callout-warning-border)]/70 hover:shadow-amber-500/5",
        ],
        warn: [
          "bg-[var(--callout-warning-bg)] border-[var(--callout-warning-border)]/40 text-[var(--callout-warning-text)]",
          "hover:border-[var(--callout-warning-border)]/70 hover:shadow-amber-500/5",
        ],
        error: [
          "bg-[var(--callout-error-bg)] border-[var(--callout-error-border)]/40 text-[var(--callout-error-text)]",
          "hover:border-[var(--callout-error-border)]/70 hover:shadow-red-500/5",
        ],
        danger: [
          "bg-[var(--callout-error-bg)] border-[var(--callout-error-border)]/40 text-[var(--callout-error-text)]",
          "hover:border-[var(--callout-error-border)]/70 hover:shadow-red-500/5",
        ],
        success: [
          "bg-[var(--callout-success-bg)] border-[var(--callout-success-border)]/40 text-[var(--callout-success-text)]",
          "hover:border-[var(--callout-success-border)]/70 hover:shadow-emerald-500/5",
        ],
        tip: [
          "bg-[var(--callout-tip-bg)] border-[var(--callout-tip-border)]/40 text-[var(--callout-tip-text)]",
          "hover:border-[var(--callout-tip-border)]/70 hover:shadow-purple-500/5",
        ],
        note: [
          "bg-[var(--callout-note-bg)] border-[var(--callout-note-border)]/40 text-[var(--callout-note-text)]",
          "hover:border-[var(--callout-note-border)]/70 hover:shadow-zinc-500/5",
        ],
        caution: [
          "bg-[var(--callout-caution-bg)] border-[var(--callout-caution-border)]/40 text-[var(--callout-caution-text)]",
          "hover:border-[var(--callout-caution-border)]/70 hover:shadow-orange-500/5",
        ],
        important: [
          "bg-[var(--callout-important-bg)] border-[var(--callout-important-border)]/40 text-[var(--callout-important-text)]",
          "hover:border-[var(--callout-important-border)]/70 hover:shadow-pink-500/5",
        ],
        bug: [
          "bg-[var(--callout-bug-bg)] border-[var(--callout-bug-border)]/40 text-[var(--callout-bug-text)]",
          "hover:border-[var(--callout-bug-border)]/70 hover:shadow-orange-500/5",
        ],
      },
    },
    defaultVariants: {
      type: "info",
    },
  },
);

const iconBgVariants = cva(
  "flex items-center justify-center size-7 rounded-lg transition-colors duration-300",
  {
    variants: {
      type: {
        info: "bg-[var(--callout-info-icon)]/10 text-[var(--callout-info-icon)]",
        warning:
          "bg-[var(--callout-warning-icon)]/10 text-[var(--callout-warning-icon)]",
        warn: "bg-[var(--callout-warning-icon)]/10 text-[var(--callout-warning-icon)]",
        error:
          "bg-[var(--callout-error-icon)]/10 text-[var(--callout-error-icon)]",
        danger:
          "bg-[var(--callout-error-icon)]/10 text-[var(--callout-error-icon)]",
        success:
          "bg-[var(--callout-success-icon)]/10 text-[var(--callout-success-icon)]",
        tip: "bg-[var(--callout-tip-icon)]/10 text-[var(--callout-tip-icon)]",
        note: "bg-[var(--callout-note-icon)]/10 text-[var(--callout-note-icon)]",
        caution:
          "bg-[var(--callout-caution-icon)]/10 text-[var(--callout-caution-icon)]",
        important:
          "bg-[var(--callout-important-icon)]/10 text-[var(--callout-important-icon)]",
        bug: "bg-[var(--callout-bug-icon)]/10 text-[var(--callout-bug-icon)]",
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
  caution: OctagonAlert,
  important: Flame,
  bug: Bug,
};

export interface CalloutProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  title?: string;
  icon?: React.ReactNode;
}

function Callout({
  className,
  type = "info",
  title,
  icon,
  children,
  ...props
}: CalloutProps) {
  const IconComponent = type ? iconMap[type] : Info;

  return (
    <div
      data-slot="callout"
      role="alert"
      className={cn(calloutVariants({ type }), className)}
      {...props}
    >
      <div className="flex items-stretch gap-3">
        <span className={cn(iconBgVariants({ type }), "mt-0.5 shrink-0")}>
          {icon || <IconComponent className="size-3.5" />}
        </span>
        <div className="flex-1 min-w-0">
          {title && (
            <div className="font-semibold text-[0.84rem] leading-snug tracking-tight mb-1">
              {title}
            </div>
          )}
          {children && (
            <div className="text-[0.81rem] opacity-80 leading-relaxed [&>p]:my-0 [&>ul]:my-1 [&>ol]:my-1">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Callout, calloutVariants };
