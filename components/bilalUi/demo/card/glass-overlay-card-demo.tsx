// File: components/bilalUi/demo/card/glass-overlay-card-demo.tsx
import GlassOverlayCard from "@/components/bilalUi/card/glass-overlay-card";

export default function GlassOverlayCardDemo() {
  return (
    <div className="flex items-center justify-center p-6 w-full h-full">
      <GlassOverlayCard  title = "New UI Design Fundamentals"
  subtitle = "Explore the fundamentals of contemporary UI design"
  image = "/card-08.png"
  badge = {{text: "New", variant: "indigo"}}
  href = "#"/>
    </div>
  );
}
