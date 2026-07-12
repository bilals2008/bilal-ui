// File: components/landing/interfaceCards.tsx
import Link from "next/link";
import { ArrowRight, Github, Zap } from "lucide-react";
import AIInput_04 from "../placeholder/ai-input-04";

function Header() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-500 to-pink-500 dark:from-amber-400 dark:to-pink-400">
          Build beautiful interfaces
        </span>
      </h2>
      <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        A collection of UI components that you can copy and paste into your
        apps.
      </p>
      <p className="mt-2 text-base text-muted-foreground">
        Accessible. Open Source.
      </p>
    </div>
  );
}

interface BuildInterfacesCardProps {
  className: string;
}

export function BuildInterfacesCard({ className }: BuildInterfacesCardProps) {
  return (
    <div className={className}>
      <div className="h-full flex flex-col justify-between items-center">
        <Header />
        <div className="w-full flex flex-col items-center">
         
          <AIInput_04 />
        </div>

        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                            bg-linear-to-r from-primary to-primary/80
                            text-primary-foreground 
                            hover:scale-105 active:scale-95
                            transition-all duration-200 ease-in-out"
          >
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">Explore Components</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#"
            target="_blank"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                            border border-border
                            hover:bg-muted
                            hover:scale-105 active:scale-95
                            transition-all duration-200"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-medium">View on GitHub</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}
