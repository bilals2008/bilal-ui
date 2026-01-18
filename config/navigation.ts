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
  isUpdated?: boolean;
  isFeatured?: boolean;
  isRequest?: boolean;
  isWIP?: boolean;
  isStable?: boolean;
  isLegacy?: boolean;
  isHeadless?: boolean;
  isAlpha?: boolean;
  isDeprecated?: boolean;
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
     href: "/docs/getting-started/introduction",
      description: "Introduction and usage guidelines",
      icon: "Rocket",
      isNew: true,
    },
    {
      id: "installation",
      title: "Installation",
      href: "/docs/getting-started/installation",
      description: "How to install and configure Bilal UI",
      icon: "Download",
      isUpdated: true,
    },
  ],
},
 
  {
    title: "Components",
    items: [
       {
        id: "button",
        title: "Button",
        href: "/docs/components/button",
        description: "Interactive button components with animations",
        isNew: true,
        icon: "MousePointerClick",
      },
      {
        id: "alert",
        title: "Alert",
        href: "/docs/components/alert",
        description: "Alert components and layouts",
        isLab: true,
        icon: "AlertCircle",
      },
      {
        id: "card",
        title: "Card",
        href: "/docs/components/card",
        description: "Card components and layouts",
        isComingSoon: true,
        icon: "IdCard",
      },
    ],
  },
];
