"use client";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumbs } from "@/utils/useBreadcrumbs";

const HeaderRoute = () => {
  const breadcrumbs = useBreadcrumbs();
  console.log(breadcrumbs.label);

  return (
    <Breadcrumb
      className={`bg-gray-100 p-8 ${breadcrumbs.length == 0 && "hidden"}`}
    >
      <BreadcrumbList className="text-xl container">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center ">
            <Home className="h-4 w-4 mr-2 " />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4" />
        </BreadcrumbSeparator>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={breadcrumb.href}>
            {breadcrumb.isCurrent ? (
              <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink href={breadcrumb.href} as={Link}>
                  {breadcrumb.label}
                </BreadcrumbLink>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                )}
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default HeaderRoute;
