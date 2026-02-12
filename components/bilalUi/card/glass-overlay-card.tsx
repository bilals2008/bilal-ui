// File: components/bilalUi/card/glass-overlay-card.tsx
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface GlassOverlayCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  badge?: {
    text: string;
    variant: "pink" | "indigo" | "orange";
  };
  href?: string;
}

export default function GlassOverlayCard({
  title = "New UI Design Fundamentals",
  subtitle = "Explore the fundamentals of contemporary UI design",
  image = "/card-08.png",
  badge = { text: "New", variant: "indigo" },
  href = "#",
}: GlassOverlayCardProps) {
  return (
    <Link href={href} className="group block w-full max-w-70">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "border border-zinc-200/50 bg-white/80 shadow-xs backdrop-blur-xl",
          "transition-all duration-300 hover:border-zinc-300/50 hover:shadow-md",
        )}
      >
        <div className="relative h-80 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute right-3 top-3">
          <span
            className={cn(
              "rounded-full border border-white/20 bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-xs backdrop-blur-md",
            )}
          >
            {badge.text}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <h3 className="text-lg leading-snug font-semibold text-white">
                {title}
              </h3>
              <p className="line-clamp-2 text-sm text-zinc-200">{subtitle}</p>
            </div>
            <div
              className={cn(
                "rounded-full bg-white/10 p-2 backdrop-blur-md",
                "transition-colors duration-300 group-hover:bg-white/20",
              )}
            >
              <ArrowUpRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:-rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
