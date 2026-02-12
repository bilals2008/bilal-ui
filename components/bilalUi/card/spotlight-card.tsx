// File: components/bilalUi/card/spotlight-card.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function SpotlightCard() {
  return (
    <Card className="group relative w-full max-w-md overflow-hidden border-zinc-200/80 bg-white/90 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="pointer-events-none absolute -left-16 -top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl motion-safe:animate-pulse transition-transform duration-500 group-hover:scale-110" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl motion-safe:animate-pulse transition-transform duration-500 group-hover:scale-110" />

      <CardHeader className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle>Launch-ready UI kit</CardTitle>
            </div>
            <CardDescription>
              Build marketing pages and dashboards in hours.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
        <p>
          Includes production-ready components with consistent tokens, motion,
          and accessibility baked in.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="stable" appearance="outline" size="xs">
            Tailwind v4
          </Badge>
          <Badge variant="updated" appearance="outline" size="xs">
            React 19
          </Badge>
          <Badge variant="info" appearance="outline" size="xs">
            Fumadocs
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="relative flex items-center justify-between border-t border-zinc-200/60 dark:border-zinc-800/60 pt-5">
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          Updated Feb 7, 2026
        </div>
        <Button variant="outline" size="sm" className="gap-1.5">
          View kit
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
