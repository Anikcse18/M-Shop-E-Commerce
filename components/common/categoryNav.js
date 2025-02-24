import React from "react";
import dynamic from "next/dynamic";
const NavigationMenu = dynamic(
  () =>
    import("@/components/ui/navigation-menu").then((mod) => mod.NavigationMenu),
  { ssr: false }
);
const NavigationMenuContent = dynamic(
  () =>
    import("@/components/ui/navigation-menu").then(
      (mod) => mod.NavigationMenuContent
    ),
  { ssr: false }
);
const NavigationMenuItem = dynamic(
  () =>
    import("@/components/ui/navigation-menu").then(
      (mod) => mod.NavigationMenuItem
    ),
  { ssr: false }
);
const NavigationMenuList = dynamic(
  () =>
    import("@/components/ui/navigation-menu").then(
      (mod) => mod.NavigationMenuList
    ),
  { ssr: false }
);
const NavigationMenuTrigger = dynamic(
  () =>
    import("@/components/ui/navigation-menu").then(
      (mod) => mod.NavigationMenuTrigger
    ),
  { ssr: false }
);
const NavigationMenuLink = dynamic(
  () =>
    import("@/components/ui/navigation-menu").then(
      (mod) => mod.NavigationMenuLink
    ),
  { ssr: false }
);


const categories = [
  { title: "Electronics", href: "/category/electronics" },
  { title: "Fashion", href: "/category/fashion" },
  { title: "Home Appliances", href: "/category/home-appliances" },
  { title: "Books", href: "/category/books" },
];

export function SingleCategoryMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg px-4 py-7 bg-gray-100">
            All Category
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-4">
              {categories.map((category) => (
                <CategoryListItem
                  key={category.title}
                  title={category.title}
                  href={category.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const CategoryListItem = React.forwardRef(({ title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none rounded-md p-2 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

CategoryListItem.displayName = "CategoryListItem";
