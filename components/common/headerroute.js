"use client";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import dynamic from "next/dynamic";

const Breadcrumb = dynamic(
  () => import("@/components/ui/breadcrumb").then((mod) => mod.Breadcrumb),
  { ssr: false }
);
const BreadcrumbItem = dynamic(
  () => import("@/components/ui/breadcrumb").then((mod) => mod.BreadcrumbItem),
  { ssr: false }
);
const BreadcrumbLink = dynamic(
  () => import("@/components/ui/breadcrumb").then((mod) => mod.BreadcrumbLink),
  { ssr: false }
);
const BreadcrumbList = dynamic(
  () => import("@/components/ui/breadcrumb").then((mod) => mod.BreadcrumbList),
  { ssr: false }
);
const BreadcrumbPage = dynamic(
  () => import("@/components/ui/breadcrumb").then((mod) => mod.BreadcrumbPage),
  { ssr: false }
);
const BreadcrumbSeparator = dynamic(
  () =>
    import("@/components/ui/breadcrumb").then((mod) => mod.BreadcrumbSeparator),
  { ssr: false }
);

import { useBreadcrumbs } from "@/utils/useBreadcrumbs";

const HeaderRoute = () => {
  const breadcrumbs = useBreadcrumbs();
  // console.log(breadcrumbs[0].label);

  return (
    <Breadcrumb
      className={`bg-gray-100 p-8 ${
        breadcrumbs.length == 0 || (breadcrumbs[0].label == "Who" && "hidden")
      }`}
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
