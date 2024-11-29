import * as React from "react";

import { cn } from "@/lib/utils";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
const Input = React.forwardRef(
  ({ className, type, label, placeholder, forgetpassword, ...props }, ref) => {
    const [showpassword, setshowpassword] = useState(false);

    const handelviewpassword = () => {
      setshowpassword((eyeopen) => !eyeopen);
    };

    return (
      <section>
        {type === "password" ? (
          <section className="">
            <label className=" text-sm text-gray-color flex justify-between">
              <h1> {label}</h1>{" "}
              <Link href="/">
                <h1 className="text-nav-primary font-medium ">
                  {forgetpassword}
                </h1>
              </Link>
            </label>

            <div className="relative">
              <input
                type={showpassword ? "text" : "password"}
                className={cn(
                  "flex mt-2 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                  className
                )}
                placeholder={placeholder}
                ref={ref}
                {...props}
              />

              {showpassword ? (
                <AiOutlineEyeInvisible
                  className="absolute right-4 top-1/4 text-xl"
                  onClick={handelviewpassword}
                />
              ) : (
                <AiOutlineEye
                  className="absolute right-4 top-1/4 text-xl"
                  onClick={handelviewpassword}
                />
              )}
            </div>
          </section>
        ) : (
          <section>
            {/* <label className="text-sm text-gray-color">{label}</label> */}
            <label className=" text-sm text-gray-color flex justify-between">
              <h1> {label}</h1>{" "}
              <Link href="/">
                <h1 className="text-nav-primary font-medium ">
                  {forgetpassword}
                </h1>
              </Link>
            </label>
            <input
              type={type}
              className={cn(
                "flex mt-2 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              placeholder={placeholder}
              ref={ref}
              {...props}
            />
          </section>
        )}
      </section>
    );
  }
);

Input.displayName = "Input";

export { Input };
