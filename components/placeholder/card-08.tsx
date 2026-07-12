// File: components/placeholder/card-08.tsx
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Card08Props {
  title?: string;
  subtitle?: string;
  image?: string;
  badge?: {
    text: string;
    variant: "pink" | "indigo" | "orange";
  };
  href?: string;
}

export default function Card08({
  title = "New UI Design Fundamentals",
  subtitle = "Explore the fundamentals of contemporary UI design",
  image = "/card-08.png",
  badge = { text: "New", variant: "indigo" },
  href = "#",
}: Card08Props) {
  return (
    <Link href={href} className="block w-full max-w-70 group">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-card/80",
          "backdrop-blur-xl",
          "border border-border/50",
          "shadow-xs",
          "transition-all duration-300",
          "hover:shadow-md",
          "hover:border-border/50",
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

        <div
          className={cn(
            "absolute inset-0",
            "bg-linear-to-t from-foreground/90 via-foreground/40 to-transparent",
          )}
        />

        <div className="absolute top-3 right-3">
          <span
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-medium",
              "bg-background/90 text-foreground",
              "backdrop-blur-md",
              "shadow-xs",
              "border border-border/20",
            )}
          >
            {badge.text}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold text-primary-foreground leading-snug">
                {title}
              </h3>
              <p className="text-sm text-primary-foreground/80 line-clamp-2">
                {subtitle}
              </p>
            </div>
            <div
              className={cn(
                "p-2 rounded-full",
                "bg-primary-foreground/10",
                "backdrop-blur-md",
                "group-hover:bg-primary-foreground/20",
                "transition-colors duration-300 group",
              )}
            >
              <ArrowUpRight className="w-4 h-4 text-primary-foreground group-hover:-rotate-12 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
