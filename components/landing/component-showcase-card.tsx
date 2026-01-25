// File: components/landing/component-showcase-card.tsx

interface ComponentShowcaseCardProps {
  className: string;
}

export function ComponentShowcaseCard({
  className,
}: ComponentShowcaseCardProps) {
  return (
    <div className={className}>
      <div className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-zinc-700 to-zinc-400 dark:from-zinc-100 dark:to-zinc-400">
        Buttons, Inputs & More
      </div>

      <div className="space-y-12">
        <div className="space-y-20 mt-8">
          {[
            {
              component: (
                <div className="w-full h-12 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg flex items-center justify-center text-zinc-500 text-sm font-medium">
                  Input 10
                </div>
              ),
              label: "Input 10",
            },
            {
              component: (
                <div className="w-full h-16 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg flex items-center justify-center text-zinc-500 text-sm font-medium">
                  Alert 04
                </div>
              ),
              label: "Alert 04",
            },
            {
              component: (
                <div className="w-full flex justify-center gap-4">
                  <div className="w-full h-10 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg flex items-center justify-center text-zinc-500 text-sm font-medium">
                    Btn 13
                  </div>
                  <div className="w-full h-10 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg flex items-center justify-center text-zinc-500 text-sm font-medium">
                    Btn 12
                  </div>
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

        <div className="flex flex-col items-center pt-8 w-full max-w-sm mx-auto">
          <div className="w-full h-12 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg flex items-center justify-center text-zinc-500 text-sm font-medium">
            Input 08
          </div>
        </div>
      </div>

      <p className="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-4">
        + more available
      </p>
    </div>
  );
}
