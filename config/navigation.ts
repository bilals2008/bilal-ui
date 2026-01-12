// File: config/navigation.ts
export interface NavItem {
  id: string | number;
  title: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
  count?: number | string;
  isComingSoon?: boolean;
  isNew?: boolean;
  isLab?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigationSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        id: "intro",
        title: "Introduction",
        href: "/docs",
        description: "Introduction and usage guidelines",
        icon: "Rocket",
        isNew: true,
      },
    ],
  },
  {
    title: "Latest",
    items: [
      {
        id: "action-search-bar",
        title: "Action Search Bar",
        href: "/docs/components/action-search-bar",
        isComingSoon: true,
        icon: "Search",
      },
      {
        id: "avatar-picker",
        title: "Avatar Picker",
        href: "/docs/components/avatar-picker",
        isComingSoon: true,
        icon: "User",
      },
      {
        id: "beams-background",
        title: "Beams Background",
        href: "/docs/components/beams-background",
        isComingSoon: true,
        icon: "Sparkles",
      },
    ],
  },
  {
    title: "Blocks",
    items: [
      {
        id: "ai-card-generation",
        title: "AI Card Generation",
        href: "/docs/blocks/ai-card-generation",
        isComingSoon: true,
        icon: "Cpu",
      },
      {
        id: "ai-chat",
        title: "AI Chat",
        href: "/docs/blocks/ai-chat",
        isComingSoon: true,
        icon: "MessageSquare",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        id: "alert",
        title: "Alerts",
        href: "/docs/components/alert",
        description: "Alert components and layouts",
        isComingSoon: true,
        icon: "AlertCircle",
      },
      {
        id: "button",
        title: "Button",
        href: "/docs/components/button",
        description: "Interactive button components with animations",
        isComingSoon: true,
        icon: "SquareArrowOutUpRight",
      },
      {
        id: "card",
        title: "Card",
        href: "/docs/components/card",
        description: "Versatile card components and layouts",
        isComingSoon: true,
        icon: "CreditCard",
      },
    ],
  },
];
