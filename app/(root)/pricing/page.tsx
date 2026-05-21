import {
  PricingHero,
  PricingCard,
  PricingFeatures,
  PricingComparison,
  PricingFAQ,
  PricingCTA,
} from "@/components/bilalUi/pricing";
import { isLemonConfigured } from "@/config/lemon";

const lemonReady = isLemonConfigured();

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "All core components, forever free.",
    features: [
      "50+ UI components",
      "Copy-paste integration",
      "Tailwind v4 styling",
      "Dark mode support",
      "MIT license",
      "Community access",
      "TypeScript support",
      "Responsive layouts",
    ],
    cta: "Browse Components",
    href: "/docs/components/button",
    popular: false,
  },
  {
    name: "Lifetime",
    price: "$15",
    period: "one-time",
    description: "All blocks, templates & premium components.",
    features: [
      "Everything in Free",
      "10+ page blocks",
      "3 full templates",
      "Premium components",
      "New component every week",
      "Lifetime updates",
      "Priority support",
      { label: "+ much more", more: true },
    ],
    cta: "Get Lifetime Access",
    href: "#",
    popular: true,
    badge: "Coming Soon",
    comingSoon: !lemonReady,
    checkout: lemonReady,
  },
];

const componentCategories = [
  {
    category: "UI Components",
    items: [
      { name: "Buttons", free: true },
      { name: "Cards", free: true },
      { name: "Badges", free: true },
      { name: "Dialogs", free: true },
      { name: "Dropdowns", free: true },
      { name: "Tables", free: true },
      { name: "Forms & Inputs", free: true },
      { name: "Navigation Menus", free: true },
      { name: "Date Pickers", free: true },
      { name: "Command Palette", free: true },
      { name: "Advanced Tables", free: false },
      { name: "Data Charts", free: false },
    ],
  },
  {
    category: "Page Blocks",
    items: [
      { name: "Hero Sections", free: false },
      { name: "Feature Grids", free: false },
      { name: "Pricing Tables", free: false },
      { name: "Testimonials", free: false },
      { name: "FAQ Accordions", free: false },
      { name: "CTA Sections", free: false },
      { name: "Newsletter Forms", free: false },
      { name: "Stats/Counters", free: false },
      { name: "Team Sections", free: false },
      { name: "Contact Forms", free: false },
    ],
  },
  {
    category: "Templates",
    items: [
      { name: "SaaS Landing Page", free: false },
      { name: "Admin Dashboard", free: false },
      { name: "Portfolio Site", free: false },
      { name: "Docs Site", free: true },
      { name: "Blog Layout", free: true },
    ],
  },
];

const faqs = [
  {
    q: "What's included in the $15 Lifetime plan?",
    a: "You get all page blocks (hero, features, pricing, etc.), full templates (SaaS landing page, admin dashboard, portfolio), and premium component variants — plus lifetime updates with no recurring fees.",
  },
  {
    q: "Are the free components production-ready?",
    a: "Yes. Every component follows accessibility best practices, supports dark mode, is built on Tailwind v4, and is fully customizable since you own the code.",
  },
  {
    q: "How does the $15 lifetime payment work?",
    a: "Pay once, get access forever. No subscriptions, no recurring charges. You'll receive all current and future premium blocks, templates, and components.",
  },
  {
    q: "Can I use these in commercial projects?",
    a: "Absolutely. Both free and premium components are licensed for personal and commercial use. Build unlimited projects.",
  },
  {
    q: "How do I access premium content after purchase?",
    a: "After purchase, you'll get access to a private GitHub repository and a download link with all blocks, templates, and premium components.",
  },
  {
    q: "Will more content be added later?",
    a: "Yes. The library is actively maintained and expanded. Your lifetime purchase covers all future updates and additions to the premium collection.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white dark:bg-black overflow-x-hidden">
      <PricingHero
        description="Free components stay free. Unlock the full collection — page blocks, premium variants, and production templates — with a single payment. No subscriptions. No surprises."
      />

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} checkout={plan.checkout} />
          ))}
        </div>
      </section>

      <PricingFeatures
        description="The $15 lifetime plan unlocks every block, template, and premium variant in the library."
      />

      <PricingComparison
        categories={componentCategories}
        description="Core components are always free. Blocks, templates, and premium variants are part of the $15 lifetime bundle."
      />

      <PricingFAQ faqs={faqs} />

      <PricingCTA
        description="Join the community and get lifetime access to every block, template, and premium component for just $15."
        primaryCta={{ label: "Get Lifetime Access — $15", href: lemonReady ? "/api/lemon/checkout" : "#" }}
        secondaryCta={{ label: "Browse Free Components", href: "/docs/components/button" }}
      />
    </main>
  );
}
