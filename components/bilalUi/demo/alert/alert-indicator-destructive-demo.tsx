import { OctagonAlert, Star } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

export default function AlertIndicatorDestructiveDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Alert className="rounded-none border-0 border-l-4 border-amber-300 bg-amber-300/10 text-amber-300">
        <OctagonAlert />
        <AlertTitle className="flex items-center gap-1.5 font-normal">
          <span className="text-amber-500">Warning</span>
          You have no credits left!
        </AlertTitle>
      </Alert>

      <Alert className="rounded-none border-0 border-l-4 border-sky-400 bg-sky-400/10 text-sky-400">
        <Star />
        <AlertTitle className="flex items-center gap-1.5 font-normal">
          <span className="text-sky-500">Did you know?</span>
          Here&apos;s something you&apos;d like to know
        </AlertTitle>
      </Alert>
    </div>
  );
}
