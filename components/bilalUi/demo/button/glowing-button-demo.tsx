import { GlowingButton } from "@/components/bilalUi/button/glowing-button";

export default function GlowingButtonDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 items-center justify-center p-4">
      <div className="flex justify-center">
        <GlowingButton>Hover Me</GlowingButton>
      </div>
      <div className="flex justify-center">
        <GlowingButton glowColor="#3b82f6">Hover Me</GlowingButton>
      </div>
      <div className="flex justify-center">
        <GlowingButton glowColor="#ef4444">Hover Me</GlowingButton>
      </div>

      <div className="flex justify-center">
        <GlowingButton glowPosition="left" glowColor="#ec4899">
          Hover Me
        </GlowingButton>
      </div>
      <div className="flex justify-center">
        <GlowingButton glowPosition="bottom" glowColor="#f59e0b">
          Hover Me
        </GlowingButton>
      </div>
      <div className="flex justify-center">
        <GlowingButton glowPosition="top" glowColor="#10b981">
          Hover Me
        </GlowingButton>
      </div>

      {/* Row 3: Unique Variants */}
      <div className="flex justify-center">
        <GlowingButton variant="dashed" glowColor="#0ea5e9">
          Hover Me
        </GlowingButton>
      </div>
      <div className="flex justify-center">
        <GlowingButton variant="dot" glowColor="#8b5cf6">
          Hover Me
        </GlowingButton>
      </div>
    </div>
  );
}
