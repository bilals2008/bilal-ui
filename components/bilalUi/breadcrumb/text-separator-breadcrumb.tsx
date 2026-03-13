import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbTextSeparator() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-xs font-light text-muted-foreground">
          in
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Engineering</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-xs font-light text-muted-foreground">
          in
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Frontend</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
