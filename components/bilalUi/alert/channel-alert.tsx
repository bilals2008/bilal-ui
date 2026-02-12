// File: components/bilalUi/alert/channel-alert.tsx
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle2, Info, Sparkles, X } from "lucide-react";

const channelAlerts = [
  {
    key: "signal",
    title: "Signal boost",
    description: "Your latest post is trending. Schedule a follow‑up.",
    action: "Plan",
    icon: Sparkles,
    classes: {
      rail: "bg-cyan-500",
      surface:
        "border border-cyan-500/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_55%)] text-slate-900 dark:text-slate-100",
      chip: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-200",
      action:
        "text-cyan-700 hover:text-cyan-900 dark:text-cyan-200 dark:hover:text-cyan-100 hover:bg-cyan-500/10 focus-visible:ring-cyan-500/40",
      close:
        "text-cyan-700/70 hover:text-cyan-900 dark:text-cyan-200/70 dark:hover:text-cyan-100 hover:bg-cyan-500/10 focus-visible:ring-cyan-500/40",
    },
  },
  {
    key: "success",
    title: "Deploy approved",
    description: "Release checks passed. Ready to roll out.",
    action: "Ship",
    icon: CheckCircle2,
    classes: {
      rail: "bg-emerald-500",
      surface:
        "border border-emerald-500/30 bg-[linear-gradient(135deg,rgba(16,185,129,0.08),transparent_55%)] text-slate-900 dark:text-slate-100",
      chip: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-200",
      action:
        "text-emerald-700 hover:text-emerald-900 dark:text-emerald-200 dark:hover:text-emerald-100 hover:bg-emerald-500/10 focus-visible:ring-emerald-500/40",
      close:
        "text-emerald-700/70 hover:text-emerald-900 dark:text-emerald-200/70 dark:hover:text-emerald-100 hover:bg-emerald-500/10 focus-visible:ring-emerald-500/40",
    },
  },
  {
    key: "info",
    title: "Routing change",
    description: "New region added. Traffic is rebalancing.",
    action: "Review",
    icon: Info,
    classes: {
      rail: "bg-indigo-500",
      surface:
        "border border-indigo-500/30 bg-[linear-gradient(135deg,rgba(99,102,241,0.08),transparent_55%)] text-slate-900 dark:text-slate-100",
      chip: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-200",
      action:
        "text-indigo-700 hover:text-indigo-900 dark:text-indigo-200 dark:hover:text-indigo-100 hover:bg-indigo-500/10 focus-visible:ring-indigo-500/40",
      close:
        "text-indigo-700/70 hover:text-indigo-900 dark:text-indigo-200/70 dark:hover:text-indigo-100 hover:bg-indigo-500/10 focus-visible:ring-indigo-500/40",
    },
  },
  {
    key: "warn",
    title: "Heat check",
    description: "CPU spike detected on one node. Keep an eye on it.",
    action: "Inspect",
    icon: AlertTriangle,
    classes: {
      rail: "bg-amber-500",
      surface:
        "border border-amber-500/30 bg-[linear-gradient(135deg,rgba(245,158,11,0.08),transparent_55%)] text-slate-900 dark:text-slate-100",
      chip: "bg-amber-500/15 text-amber-700 dark:text-amber-200",
      action:
        "text-amber-700 hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100 hover:bg-amber-500/10 focus-visible:ring-amber-500/40",
      close:
        "text-amber-700/70 hover:text-amber-900 dark:text-amber-200/70 dark:hover:text-amber-100 hover:bg-amber-500/10 focus-visible:ring-amber-500/40",
    },
  },
];

export function ChannelAlert() {
  return (
    <div className="grid w-full max-w-lg gap-2">
      {channelAlerts.map((alert) => {
        const Icon = alert.icon;
        return (
          <div
            key={alert.key}
            role="alert"
            className={cn(
              "relative flex items-center gap-2.5 rounded-md px-2.5 py-1.5",
              alert.classes.surface,
            )}
          >
            <span
              aria-hidden="true"
              className={cn("h-8 w-1.5 rounded-full", alert.classes.rail)}
            />
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <span
                className={cn(
                  "grid h-7 w-7 place-items-center rounded-full text-xs",
                  alert.classes.chip,
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-5">
                  {alert.title}
                </p>
                <p className="text-[11px]/4.5 text-slate-600 dark:text-slate-300">
                  {alert.description}
                </p>
              </div>
            </div>
            <button
              type="button"
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition focus-visible:outline-none focus-visible:ring-2",
                alert.classes.action,
              )}
            >
              {alert.action}
            </button>
            <button
              type="button"
              aria-label="Dismiss alert"
              className={cn(
                "rounded-full p-1.5 transition focus-visible:outline-none focus-visible:ring-2",
                alert.classes.close,
              )}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
