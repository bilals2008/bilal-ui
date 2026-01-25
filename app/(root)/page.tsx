// File: app/(root)/page.tsx

import { HeroSection } from "@/components/hero/Hero";
import { ComponentShowcaseCard } from "@/components/landing/component-showcase-card";
import { InteractivePreview } from "@/components/landing/interactive-preview";
import { BuildInterfacesCard } from "@/components/landing/interfaceCards";
import { KeyFeatures } from "@/components/landing/key-features";
import { CTASection } from "@/components/landing/cta-section";
import { FAQSection } from "@/components/landing/faq-section";
import { NewsletterSection } from "@/components/landing/newsletter";
import { TemplatesShowcaseSection } from "@/components/landing/templates-showcase";

// import EventToast from "@/components/event-toast";
export default function Home() {
  return (
    <main className="bg-white dark:bg-black/5 overflow-x-hidden">
      <HeroSection />
      <ComponentShowcaseCard className="mb-1" />
      <InteractivePreview />
      <BuildInterfacesCard className="mb-1" />
      <TemplatesShowcaseSection />
      <KeyFeatures />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
      {/* <EventToast /> */}
    </main>
  );
}
