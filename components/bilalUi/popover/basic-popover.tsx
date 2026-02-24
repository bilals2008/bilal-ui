import { Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function BasicPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Palette className="size-4 text-violet-500" />
          Open popover
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 border-violet-300 bg-violet-50 text-violet-950 dark:border-violet-700 dark:bg-violet-950 dark:text-violet-100">
        <p className="text-sm font-semibold">Colorized Popover</p>
        <p className="mt-1 text-sm text-violet-800 dark:text-violet-300">
          Use popovers for contextual settings, quick actions, and compact form
          inputs.
        </p>
      </PopoverContent>
    </Popover>
  );
}
