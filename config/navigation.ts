// File: config/navigation.ts
export interface NavItem {
  id: string | number;
  title: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
  count?: number | string;
  isComingSoon?: boolean | number;
  isNew?: boolean | number;
  isLab?: boolean | number;
  isUpdated?: boolean | number;
  isFeatured?: boolean | number;
  isRequest?: boolean | number;
  isWIP?: boolean | number;
  isStable?: boolean | number;
  isLegacy?: boolean | number;
  isHeadless?: boolean | number;
  isAlpha?: boolean | number;
  isDeprecated?: boolean | number;
  isVersion?: boolean | number;
  isBeta?: boolean | number;
  isExperimental?: boolean | number;
  isPreview?: boolean | number;
  isVerified?: boolean | number;
  isPro?: boolean | number;
  isBreaking?: boolean | number;
  isFix?: boolean | number;
  isDocs?: boolean | number;
  isPerf?: boolean | number;
  isRefactor?: boolean | number;
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
    },
    {
      id: "installation",
      title: "Installation",
      href: "/docs/getting-started/installation",
      description: "How to install and configure Bilal UI",
      icon: "Download",
    },
    {
      id: "theming",
      title: "Theming",
      href: "/docs/getting-started/theming",
      description: "Configure colors and variables",
      icon: "Palette",
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
        icon: "ListCollapse",
      },
      {
        id: "avatar",
        title: "Avatar",
        href: "/docs/components/avatar",
        description: "An image element with a fallback for representing the user",
        icon: "User",
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
        icon: "BadgeCheck",
      },
      {
        id: "breadcrumb",
        title: "Breadcrumb",
        href: "/docs/components/breadcrumb",
        description: "Displays the current page path",
        icon: "ListFilter",
      },
      {
        id: "card",
        title: "Card",
        href: "/docs/components/card",
        description: "Card components and layouts",
        icon: "IdCard",
      },
      {
        id: "checkbox",
        title: "Checkbox",
        href: "/docs/components/checkbox",
        description: "A control for toggling between checked and unchecked",
        isNew: 7,
        icon: "SquareCheck",
      },
      {
        id: "dialog",
        title: "Dialog",
        href: "/docs/components/dialog",
        description: "A window overlaid on the primary window, rendering content underneath inert",
        icon: "RectangleEllipsis",
      },
      {
        id: "date-picker",
        title: "Date Picker",
        href: "/docs/components/date-picker",
        description: "Pick a date from a calendar UI",
        icon: "History",
      },
      {
        id: "drawer",
        title: "Drawer",
        href: "/docs/components/drawer",
        description: "Slide-up panel for focused tasks",
        icon: "PanelTop",
        isNew: 10,
      },
      {
        id: "dropdown-menu",
        title: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
        description: "Displays a menu to the user when triggered by a button",
        icon: "Menu",
        isNew: 10
      },
      {
        id: "input-otp",
        title: "Input OTP",
        href: "/docs/components/input-otp",
        description: "One-time password input pattern",
        icon: "TextCursorInput",
      },
      {
        id: "navigation-menu",
        title: "Navigation Menu",
        href: "/docs/components/navigation-menu",
        description: "Displays grouped navigation links with dropdown panels",
        icon: "Menu",
        isUpdated: true,
      },
      {
        id: "input",
        title: "Input",
        href: "/docs/components/input",
        description: "Displays a form input field or a component that looks like an input field",
        icon: "TextCursorInput",
        isNew: +9,
      },
      {
        id: "popover",
        title: "Popover",
        href: "/docs/components/popover",
        description: "Displays rich content in a floating panel",
        icon: "RectangleEllipsis",
      },
      {
        id: "progress",
        title: "Progress",
        href: "/docs/components/progress",
        description: "Visual indicator for completion state",
        icon: "PanelTop",
      },
      {
        id: "radio-group",
        title: "Radio Group",
        href: "/docs/components/radio-group",
        description: "Single-choice selection group",
        icon: "SquareCheck",
      },
      {
        id: "textarea",
        title: "Textarea",
        href: "/docs/components/textarea",
        description: "Displays a form textarea or a component that looks like a textarea",
        icon: "AlignLeft",
        isNew: +2
      },
      {
        id: "select",
        title: "Select",
        href: "/docs/components/select",
        description: "Displays a list of options for the user to pick from",
        icon: "ListFilter",
      },
      {
        id: "combobox",
        title: "Combobox",
        href: "/docs/components/combobox",
        description: "Searchable select input for quick option discovery",
        icon: "ChevronsUpDown",
        isNew: 3,
      },
      {
        id: "separator",
        title: "Separator",
        href: "/docs/components/separator",
        description: "Visually separates content sections",
        icon: "ListCollapse",
      },
      {
        id: "sheet",
        title: "Sheet",
        href: "/docs/components/sheet",
        description: "Side panel overlay for contextual content",
        icon: "PanelTop",
      },
      {
        id: "skeleton",
        title: "Skeleton",
        href: "/docs/components/skeleton",
        description: "Placeholder loading blocks",
        icon: "SquareCheck",
      },
      {
        id: "slider",
        title: "Slider",
        href: "/docs/components/slider",
        description: "Interactive range input",
        icon: "ToggleRight",
      },
      {
        id: "switch",
        title: "Switch",
        href: "/docs/components/switch",
        description: "A control that allows the user to toggle between checked and unchecked",
        icon: "ToggleRight",
      },
      {
        id: "tabs",
        title: "Tabs",
        href: "/docs/components/tabs",
        description: "A set of layered sections displayed one at a time",
        isUpdated: true,
        icon: "PanelTop",
      },
      {
        id: "toast",
        title: "Toast",
        href: "/docs/components/toast",
        description: "Temporary notification messages",
        icon: "AlertCircle",
      },
      {
        id: "toggle-group",
        title: "Toggle Group",
        href: "/docs/components/toggle-group",
        description: "Grouped toggle controls",
        icon: "ToggleRight",
      },
      {
        id: "tooltip",
        title: "Tooltip",
        href: "/docs/components/tooltip",
        description: "Contextual hint on hover/focus",
        icon: "CircleHelp",
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
        id: "form",
        title: "Form",
        href: "/docs/components/form",
        description: "Composable form building patterns",
        icon: "TextCursorInput",
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
    ],
  },
  {
    title: "Blocks",
    items: [
      {
        id: "blocks-introduction",
        title: "Introduction",
        href: "/docs/blocks/introduction",
        description: "Overview of reusable multi-component blocks",
        icon: "Map",
      },
      {
        id: "blocks-hero-sections",
        title: "Hero Sections",
        href: "/docs/blocks/hero-sections",
        description: "Ready-to-use hero block patterns",
        icon: "PanelTop",
        isComingSoon: true,
      },
      {
        id: "blocks-pricing-sections",
        title: "Pricing Sections",
        href: "/docs/blocks/pricing-sections",
        description: "Composable pricing table and plan blocks",
        icon: "ListFilter",
        isComingSoon: true,
      },
      {
        id: "blocks-dashboard-shells",
        title: "Dashboard Shells",
        href: "/docs/blocks/dashboard-shells",
        description: "Starter dashboard structures and app shells",
        icon: "RectangleEllipsis",
        isComingSoon: true,
      },
    ],
  },
];
