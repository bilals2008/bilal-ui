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
  isVersion?: boolean;
  isBeta?: boolean;
  isExperimental?: boolean;
  isPreview?: boolean;
  isVerified?: boolean;
  isPro?: boolean;
  isBreaking?: boolean;
  isFix?: boolean;
  isDocs?: boolean;
  isPerf?: boolean;
  isRefactor?: boolean;
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
    {
      id: "theming",
      title: "Theming",
      href: "/docs/getting-started/theming",
      description: "Configure colors and variables",
      icon: "Palette",
      isNew: true,
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      href: "/docs/getting-started/troubleshooting",
      description: "Common issues and how to resolve them",
      icon: "CircleHelp",
    },
    {
      id: "changelog",
      title: "Changelog",
      href: "/docs/getting-started/changelog",
      description: "Latest updates and announcements",
      icon: "History",
      isVersion: true,
    },
    {
      id: "roadmap",
      title: "Roadmap",
      href: "/docs/getting-started/roadmap",
      description: "Future plans and upcoming features",
      icon: "Map",
    },
  ],
},
 
  {
    title: "Components",
    items: [
       {
        id: "accordion",
        title: "Accordion",
        href: "/docs/components/accordion",
        description: "A vertically stacked set of interactive headings",
        isNew: true,
        icon: "ListCollapse",
      },
      {
        id: "avatar",
        title: "Avatar",
        href: "/docs/components/avatar",
        description: "An image element with a fallback for representing the user",
        icon: "User",
        isNew: true,
      },
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
        id: "alert-dialog",
        title: "Alert Dialog",
        href: "/docs/components/alert-dialog",
        description: "A modal dialog that interrupts the user with important content",
        isNew: true,
        icon: "MessageSquareWarning",
      },
      {
        id: "badge",
        title: "Badge",
        href: "/docs/components/badge",
        description: "Badge components and variants",
        isPerf: true,
        icon: "BadgeCheck",
      },
      {
        id: "card",
        title: "Card",
        href: "/docs/components/card",
        description: "Card components and layouts",
        isAlpha: true,
        icon: "IdCard",
      },
      {
        id: "checkbox",
        title: "Checkbox",
        href: "/docs/components/checkbox",
        description: "A control for toggling between checked and unchecked",
        isNew: true,
        icon: "SquareCheck",
      },
      {
        id: "dialog",
        title: "Dialog",
        href: "/docs/components/dialog",
        description: "A window overlaid on the primary window, rendering content underneath inert",
        isNew: true,
        icon: "RectangleEllipsis",
      },
      {
        id: "dropdown-menu",
        title: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
        description: "Displays a menu to the user when triggered by a button",
        isNew: true,
        icon: "Menu",
      },
      {
        id: "navigation-menu",
        title: "Navigation Menu",
        href: "/docs/components/navigation-menu",
        description: "Displays grouped navigation links with dropdown panels",
        isNew: true,
        icon: "Menu",
      },
      {
        id: "input",
        title: "Input",
        href: "/docs/components/input",
        description: "Displays a form input field or a component that looks like an input field",
        isNew: true,
        icon: "TextCursorInput",
      },
      {
        id: "textarea",
        title: "Textarea",
        href: "/docs/components/textarea",
        description: "Displays a form textarea or a component that looks like a textarea",
        isNew: true,
        icon: "AlignLeft",
      },
      {
        id: "select",
        title: "Select",
        href: "/docs/components/select",
        description: "Displays a list of options for the user to pick from",
        isNew: true,
        icon: "ListFilter",
      },
      {
        id: "combobox",
        title: "Combobox",
        href: "/docs/components/combobox",
        description: "Searchable select input for quick option discovery",
        isNew: true,
        icon: "ChevronsUpDown",
      },
      {
        id: "switch",
        title: "Switch",
        href: "/docs/components/switch",
        description: "A control that allows the user to toggle between checked and unchecked",
        isNew: true,
        icon: "ToggleRight",
      },
      {
        id: "tabs",
        title: "Tabs",
        href: "/docs/components/tabs",
        description: "A set of layered sections displayed one at a time",
        isNew: true,
        icon: "PanelTop",
      },
      {
        id: "aspect-ratio",
        title: "Aspect Ratio",
        href: "/docs/components/aspect-ratio",
        description: "Displays content within a desired ratio",
        icon: "PanelTop",
        isComingSoon: true,
      },
      {
        id: "calendar",
        title: "Calendar",
        href: "/docs/components/calendar",
        description: "Date picker calendar interface",
        icon: "History",
        isComingSoon: true,
      },
      {
        id: "carousel",
        title: "Carousel",
        href: "/docs/components/carousel",
        description: "Horizontally scrollable content",
        icon: "MousePointerClick",
        isComingSoon: true,
      },
      {
        id: "chart",
        title: "Chart",
        href: "/docs/components/chart",
        description: "Data visualization components",
        icon: "BadgeCheck",
        isComingSoon: true,
      },
      {
        id: "collapsible",
        title: "Collapsible",
        href: "/docs/components/collapsible",
        description: "Expandable and collapsible sections",
        icon: "ListCollapse",
        isComingSoon: true,
      },
      {
        id: "command",
        title: "Command",
        href: "/docs/components/command",
        description: "Command menu and quick actions",
        icon: "Menu",
        isComingSoon: true,
      },
      {
        id: "context-menu",
        title: "Context Menu",
        href: "/docs/components/context-menu",
        description: "Right-click contextual menu",
        icon: "Menu",
        isComingSoon: true,
      },
      {
        id: "form",
        title: "Form",
        href: "/docs/components/form",
        description: "Composable form building patterns",
        icon: "TextCursorInput",
        isComingSoon: true,
      },
      {
        id: "hover-card",
        title: "Hover Card",
        href: "/docs/components/hover-card",
        description: "Hover-triggered content card",
        icon: "IdCard",
        isComingSoon: true,
      },
      {
        id: "menubar",
        title: "Menubar",
        href: "/docs/components/menubar",
        description: "Desktop-style menu bar",
        icon: "Menu",
        isComingSoon: true,
      },
      {
        id: "pagination",
        title: "Pagination",
        href: "/docs/components/pagination",
        description: "Paginated navigation controls",
        icon: "ListFilter",
        isComingSoon: true,
      },
      {
        id: "resizable",
        title: "Resizable",
        href: "/docs/components/resizable",
        description: "Resizable layout panels",
        icon: "PanelTop",
        isComingSoon: true,
      },
      {
        id: "scroll-area",
        title: "Scroll Area",
        href: "/docs/components/scroll-area",
        description: "Custom scrollable area",
        icon: "AlignLeft",
        isComingSoon: true,
      },
      {
        id: "table",
        title: "Table",
        href: "/docs/components/table",
        description: "Structured tabular data UI",
        icon: "ListFilter",
        isComingSoon: true,
      },
      {
        id: "toggle",
        title: "Toggle",
        href: "/docs/components/toggle",
        description: "Two-state pressed button",
        icon: "ToggleRight",
        isComingSoon: true,
      },
    ],
  },
];
