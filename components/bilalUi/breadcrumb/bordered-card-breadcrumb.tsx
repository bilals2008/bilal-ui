import { Home, Package, ShoppingBag } from "lucide-react";

export function BreadcrumbBorderedCard() {
  const crumbs = [
    { label: "Home", href: "#", icon: Home },
    { label: "Products", href: "#", icon: Package },
    { label: "Jacket", href: null, icon: ShoppingBag },
  ];

  return (
    <div className="inline-flex items-center divide-x divide-border overflow-hidden rounded-xl border bg-card shadow-sm">
      {crumbs.map(({ label, href, icon: Icon }, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <div key={label} className="flex items-center">
            {isLast ? (
              <span className="flex items-center gap-1.5 bg-muted px-3 py-2 text-xs font-semibold text-foreground">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            ) : (
              <a
                href={href ?? "#"}
                className="flex items-center gap-1.5 px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
