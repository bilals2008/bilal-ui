import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Info,
  ShieldAlert,
  X,
} from "lucide-react";

const solidAlerts = [
  {
    key: "primary",
    title: "Plan update",
    description: "Your trial ends in 3 days. Add a card to keep builds running.",
    action: "Manage plan",
    icon: Bell,
    classes: {
      surface:
        "bg-gradient-to-r from-sky-600 via-sky-600 to-sky-500 text-white shadow-[0_12px_30px_rgba(14,116,144,0.35)]",
      iconWrap: "bg-white/20 text-white",
      action:
        "text-white/90 hover:text-white hover:bg-white/15 focus-visible:ring-white/60",
      close:
        "text-white/70 hover:text-white hover:bg-white/15 focus-visible:ring-white/60",
      glow: "bg-sky-400/50",
    },
  },
  {
    key: "success",
    title: "All systems go",
    description: "Payouts were delivered successfully to your workspace.",
    action: "View report",
    icon: CheckCircle2,
    classes: {
      surface:
        "bg-gradient-to-r from-emerald-600 via-emerald-600 to-emerald-500 text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)]",
      iconWrap: "bg-white/20 text-white",
      action:
        "text-white/90 hover:text-white hover:bg-white/15 focus-visible:ring-white/60",
      close:
        "text-white/70 hover:text-white hover:bg-white/15 focus-visible:ring-white/60",
      glow: "bg-emerald-300/60",
    },
  },
  {
    key: "destructive",
    title: "Payment issue",
    description: "Your last charge failed. Update billing to avoid downtime.",
    action: "Fix billing",
    icon: ShieldAlert,
    classes: {
      surface:
        "bg-gradient-to-r from-rose-600 via-red-600 to-rose-500 text-white shadow-[0_12px_30px_rgba(244,63,94,0.35)]",
      iconWrap: "bg-white/20 text-white",
      action:
        "text-white/90 hover:text-white hover:bg-white/15 focus-visible:ring-white/60",
      close:
        "text-white/70 hover:text-white hover:bg-white/15 focus-visible:ring-white/60",
      glow: "bg-rose-300/60",
    },
  },
  {
    key: "info",
    title: "New insights",
    description: "Weekly usage is up 18%. See the top-performing projects.",
    action: "Open analytics",
    icon: Info,
    classes: {
      surface:
        "bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 text-white shadow-[0_12px_30px_rgba(99,102,241,0.35)]",
      iconWrap: "bg-white/20 text-white",
      action:
        "text-white/90 hover:text-white hover:bg-white/15 focus-visible:ring-white/60",
      close:
        "text-white/70 hover:text-white hover:bg-white/15 focus-visible:ring-white/60",
      glow: "bg-indigo-300/60",
    },
  },
  {
    key: "warning",
    title: "Capacity alert",
    description: "Storage is 92% full. Clean up logs to avoid pauses.",
    action: "Review usage",
    icon: AlertTriangle,
    classes: {
      surface:
        "bg-gradient-to-r from-amber-400 via-amber-400 to-yellow-400 text-slate-950 shadow-[0_12px_30px_rgba(251,191,36,0.35)]",
      iconWrap: "bg-slate-950/10 text-slate-950",
      action:
        "text-slate-900/80 hover:text-slate-950 hover:bg-slate-950/10 focus-visible:ring-slate-900/40",
      close:
        "text-slate-900/70 hover:text-slate-950 hover:bg-slate-950/10 focus-visible:ring-slate-900/40",
      glow: "bg-yellow-200/80",
    },
  },
];

export function SolidAlert() {
  return (
    <div className="grid w-full max-w-2xl gap-3">
      {solidAlerts.map((alert) => {
        const Icon = alert.icon;
        return (
          <div
            key={alert.key}
            role="alert"
            className={cn(
              "relative overflow-hidden rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3",
              alert.classes.surface,
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_55%)]" />
            <div
              className={cn(
                "absolute right-14 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full blur-2xl opacity-70",
                alert.classes.glow,
              )}
            />
            <div className="relative flex flex-wrap items-center gap-2.5">
              <div
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full",
                  alert.classes.iconWrap,
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold leading-5">
                  {alert.title}
                </p>
                <p className="text-[11px]/4.5 opacity-90">
                  {alert.description}
                </p>
              </div>

              <button
                type="button"
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[11px] font-semibold underline underline-offset-4 transition focus-visible:outline-none focus-visible:ring-2",
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
          </div>
        );
      })}
    </div>
  );
}
