import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbPill() {
  const crumbs = ["Home", "Settings", "Account"];

  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1 sm:gap-1">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <BreadcrumbItem key={crumb}>
              {isLast ? (
                <BreadcrumbPage className="rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                  {crumb}
                </BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink
                    href="#"
                    className="rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80"
                  >
                    {crumb}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
