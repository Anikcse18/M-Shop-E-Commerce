import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, label, ...props }, ref) => {
  return (
    <section>
      <label className="public-sans text-sm text-gray-color">{label}</label>
      <input
        type={type}
        className={cn(
          "flex mt-2 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </section>
  );
});
Input.displayName = "Input";

export { Input };
