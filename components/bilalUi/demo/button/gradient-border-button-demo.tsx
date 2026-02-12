import { ArrowRight, Download, Play, Sparkles } from "lucide-react";
import { GradientBorderButton } from "@/components/bilalUi/button/gradient-border-button";

export default function GradientBorderButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6">
      {/* Primary Variants */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-medium text-muted-foreground">Primary</h4>
        <div className="flex gap-3">
          <GradientBorderButton variant="primary" animation="pulse">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </GradientBorderButton>
          <GradientBorderButton variant="primary" animation="shimmer">
            <Download className="h-4 w-4" />
            Download
          </GradientBorderButton>
        </div>
      </div>

      {/* Accent Variants */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-medium text-muted-foreground">Accent</h4>
        <div className="flex gap-3">
          <GradientBorderButton variant="accent" animation="pulse">
            <Play className="h-4 w-4" />
            Watch Demo
          </GradientBorderButton>
          <GradientBorderButton variant="accent" animation="shimmer">
            View Details
          </GradientBorderButton>
        </div>
      </div>

      {/* Callout Variants */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-medium text-muted-foreground">Callout</h4>
        <div className="flex gap-3">
          <GradientBorderButton variant="callout" animation="pulse">
            <Sparkles className="h-4 w-4" />
            New Feature
          </GradientBorderButton>
          <GradientBorderButton variant="callout" animation="shimmer">
            Learn More
          </GradientBorderButton>
        </div>
      </div>

      {/* Chart Variants */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-medium text-muted-foreground">Chart</h4>
        <div className="flex gap-3">
          <GradientBorderButton variant="chart" animation="pulse">
            Analytics
          </GradientBorderButton>
          <GradientBorderButton variant="chart" animation="shimmer">
            View Report
          </GradientBorderButton>
        </div>
      </div>

      {/* Border Width Variations */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-medium text-muted-foreground">Border Styles</h4>
        <div className="flex gap-3">
          <GradientBorderButton 
            variant="primary" 
            animation="none" 
            borderWidth="p-[1px]"
          >
            Thin
          </GradientBorderButton>
          <GradientBorderButton 
            variant="accent" 
            animation="none" 
            borderWidth="p-[3px]"
          >
            Thick
          </GradientBorderButton>
        </div>
      </div>

      {/* No Animation */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-medium text-muted-foreground">Static</h4>
        <div className="flex gap-3">
          <GradientBorderButton variant="callout" animation="none">
            Static Button
          </GradientBorderButton>
        </div>
      </div>
    </div>
  );
}