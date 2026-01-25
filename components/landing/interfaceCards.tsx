// File: components/landing/interfaceCards.tsx
import Link from "next/link";
import { ArrowRight, Github, Zap } from "lucide-react";
// import AIInput_04 from "@/components/codesnippetui/ai-input/ai-input-04";

function Header() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-500 to-pink-500 dark:from-amber-400 dark:to-pink-400">
          Build beautiful interfaces
        </span>
      </h2>
      <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
        A collection of UI components that you can copy and paste into your
        apps.
      </p>
      <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
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
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
            components / AI-Input-04
          </p>
          <div className="select-none cursor-default touch-none pointer-events-none border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-4 w-full max-w-md h-32 flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-900/50">
            <p className="text-zinc-400 dark:text-zinc-600 font-mono text-sm">
              AIInput_04 Preview
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                            bg-linear-to-r from-zinc-900 to-zinc-800 dark:from-zinc-100 dark:to-zinc-200
                            text-white dark:text-zinc-900 
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
                            border border-zinc-200 dark:border-zinc-800
                            hover:bg-zinc-100 dark:hover:bg-zinc-800/50
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
