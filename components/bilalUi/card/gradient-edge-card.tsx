import { ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GradientEdgeCard() {
  return (
    <div className="group relative w-full max-w-md rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/60 via-emerald-500/60 to-amber-500/60 transition-all duration-300 hover:from-sky-500 hover:via-emerald-500 hover:to-amber-500">
      <Card className="relative h-full rounded-2xl border-0 bg-white/95 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 dark:bg-zinc-950/95">
        <CardHeader className="space-y-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            <Sparkles className="h-3.5 w-3.5 text-sky-500" />
            New Variant
          </div>
          <div className="space-y-1.5">
            <CardTitle>Gradient Edge Card</CardTitle>
            <CardDescription>
              Subtle animated border accent for premium callouts.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
          <p>
            Keeps the core card content clean while the outer edge gives visual
            priority to featured blocks.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="info" appearance="outline" size="xs">
              Marketing
            </Badge>
            <Badge variant="updated" appearance="outline" size="xs">
              Dashboard
            </Badge>
            <Badge variant="stable" appearance="outline" size="xs">
              Docs
            </Badge>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-zinc-200/70 pt-5 dark:border-zinc-800/70">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Updated Feb 15, 2026
          </span>
          <Button variant="outline" size="sm" className="gap-1.5">
            Explore
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
