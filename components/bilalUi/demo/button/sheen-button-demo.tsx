import { ArrowUpRight } from "lucide-react";
import { SheenButton } from "@/components/bilalUi/button/sheen-button";

export default function SheenButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      <SheenButton tone="mint">
        Get Started
        <ArrowUpRight className="h-4 w-4" />
      </SheenButton>
      <SheenButton tone="sunset">Launch Preview</SheenButton>
      <SheenButton tone="violet">View Changelog</SheenButton>
    </div>
  );
}
