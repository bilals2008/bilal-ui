import {
  ArrowRight,
  Crown,
  Gauge,
  LayoutDashboard,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const proPacks = [
  {
    label: "Dashboard systems",
    value: "12+",
    icon: LayoutDashboard,
  },
  {
    label: "SaaS page blocks",
    value: "40+",
    icon: Gauge,
  },
  {
    label: "Premium patterns",
    value: "Pro",
    icon: LockKeyhole,
  },
];

export function ProComingSoonSection() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-border bg-muted/50 px-5 py-7 sm:px-8 lg:px-10">
          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                <Crown className="h-3.5 w-3.5" />
                Bilal UI Pro
              </div>

              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Premium components are{" "}
                <span className="text-rose-500 dark:text-rose-400">
                  coming soon.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Free components stay free. Pro will bring production-ready
                dashboards, SaaS sections, auth flows, pricing pages, and full
                templates for builders who want to launch faster.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#newsletter"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80"
                >
                  Join pro waitlist
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/docs"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-bold text-muted-foreground transition hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-muted-foreground dark:hover:text-foreground"
                >
                  Browse free components
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-4">
                <div className="mb-4 flex items-center justify-between rounded-xl border border-border bg-muted/60 px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Launch pack
                    </p>
                    <p className="mt-1 text-lg font-bold text-foreground">
                      Pro v1 bundle
                    </p>
                  </div>
                  <div className="rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs font-bold text-orange-500">
                    Soon
                  </div>
                </div>

                <div className="grid gap-3">
                  {proPacks.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-xl border border-border bg-muted/70 p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-foreground">
                          {item.label}
                        </p>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                          <div className="h-full w-2/3 rounded-full bg-muted-foreground/50" />
                        </div>
                      </div>
                      <span className="text-xl font-black text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-dashed border-border bg-muted/70 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-rose-500 dark:text-rose-400" />
                    <p className="text-sm leading-6 text-muted-foreground">
                      Early buyers get lifetime updates for the first pro
                      release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
