// File: components/landing/component-showcase-card.tsx
import AIInput_04 from "../placeholder/ai-input-04";
import Card08 from "../placeholder/card-08";
import Btn03 from "../placeholder/btn-03";
import { Btn14 } from "../placeholder/btn-14";
import Alert03 from "../placeholder/alert-03";

interface ComponentShowcaseCardProps {
  className: string;
}

export function ComponentShowcaseCard({
  className,
}: ComponentShowcaseCardProps) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-zinc-900 via-purple-500 to-rose-500 dark:from-white dark:via-purple-400 dark:to-rose-400">
          Buttons, Inputs & More
        </h2>
        <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-rose-500 rounded-full mt-4" />
      </div>

      <div className="space-y-12">
        <div className="space-y-20 mt-8">
          {[
            {
              component: <AIInput_04 />,
              label: "Input 04",
            },
            {
              component: <Card08 image="/card-08.png" />,
              label: "Card 08",
            },
            {
              component: (
                <div className="w-full flex flex-col items-center justify-center gap-4">
                  <Btn03 />
                  <Btn14 label="Submit" className="w-40" />
                </div>
              ),
              label: "Buttons",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-8 w-full max-w-sm mx-auto"
            >
              <div className="w-full flex items-center justify-center">
                {item.component}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row flex-wrap items-center pt-8 w-full max-w-full">
          <Alert03 />
        </div>
      </div>

      <p className="text-sm font-bold text-center mt-8 bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-fuchsia-500 to-rose-500 animate-pulse">
        + more available
      </p>
    </div>
  );
}
