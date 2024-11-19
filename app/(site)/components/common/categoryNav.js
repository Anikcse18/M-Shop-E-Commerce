import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
                    <NavigationMenuTrigger className="text-lg px-4 py-2 bg-gray-100">All Category</NavigationMenuTrigger>
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
