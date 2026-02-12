// File: components/bilalUi/alert/outline-alert.tsx
import { cn } from "@/lib/utils";
import { Bell, CheckCircle2, Info, ShieldAlert, X } from "lucide-react";

const outlineAlerts = [
  {
    key: "primary",
    title: "Release note",
    description: "New billing portal is live for all workspaces.",
    action: "See update",
    icon: Bell,
    classes: {
      border: "border-sky-500/60",
      chip: "text-sky-600 bg-sky-500/10",
      action:
        "text-sky-600 hover:text-sky-700 hover:bg-sky-500/10 focus-visible:ring-sky-500/40",
      close:
        "text-sky-600/70 hover:text-sky-700 hover:bg-sky-500/10 focus-visible:ring-sky-500/40",
    },
  },
  {
    key: "success",
    title: "Backup complete",
    description: "All projects were archived without errors.",
    action: "Open logs",
    icon: CheckCircle2,
    classes: {
      border: "border-emerald-500/60",
      chip: "text-emerald-600 bg-emerald-500/10",
      action:
        "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-500/10 focus-visible:ring-emerald-500/40",
      close:
        "text-emerald-600/70 hover:text-emerald-700 hover:bg-emerald-500/10 focus-visible:ring-emerald-500/40",
    },
  },
  {
    key: "destructive",
    title: "Access locked",
    description: "Too many failed attempts. Verify to continue.",
    action: "Verify",
    icon: ShieldAlert,
    classes: {
      border: "border-rose-500/60",
      chip: "text-rose-600 bg-rose-500/10",
      action:
        "text-rose-600 hover:text-rose-700 hover:bg-rose-500/10 focus-visible:ring-rose-500/40",
      close:
        "text-rose-600/70 hover:text-rose-700 hover:bg-rose-500/10 focus-visible:ring-rose-500/40",
    },
  },
  {
    key: "info",
    title: "Usage digest",
    description: "Weekly reports are ready in your inbox.",
    action: "Open",
    icon: Info,
    classes: {
      border: "border-indigo-500/60",
      chip: "text-indigo-600 bg-indigo-500/10",
      action:
        "text-indigo-600 hover:text-indigo-700 hover:bg-indigo-500/10 focus-visible:ring-indigo-500/40",
      close:
        "text-indigo-600/70 hover:text-indigo-700 hover:bg-indigo-500/10 focus-visible:ring-indigo-500/40",
    },
  },
];

export function OutlineAlert() {
  return (
    <div className="grid w-full max-w-lg gap-2">
      {outlineAlerts.map((alert) => {
        const Icon = alert.icon;
        return (
          <div
            key={alert.key}
            role="alert"
            className={cn(
              "group relative flex flex-wrap items-center gap-2 bg-transparent px-2.5 py-1.5",
              "border border-current/35",
              "before:pointer-events-none before:absolute before:inset-1 before:border before:border-current/20",
              "clip-path-[polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]",
              alert.classes.border,
            )}
          >
            <span
              className={cn(
                "grid h-7 w-7 place-items-center rounded-full text-xs transition-transform duration-300 group-hover:-translate-y-0.5",
                alert.classes.chip,
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold leading-5 text-slate-900 dark:text-slate-100">
                {alert.title}
              </p>
              <p className="text-[11px]/4.5 text-slate-600 dark:text-slate-300">
                {alert.description}
              </p>
            </div>
            <button
              type="button"
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 group-hover:-translate-y-0.5 duration-300",
                alert.classes.action,
              )}
            >
              {alert.action}
            </button>
            <button
              type="button"
              aria-label="Dismiss alert"
              className={cn(
                "rounded-full p-1.5 transition focus-visible:outline-none focus-visible:ring-2 duration-300 group-hover:translate-x-0.5",
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
