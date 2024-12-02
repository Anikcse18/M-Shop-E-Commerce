import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const FormButton = ({ btnName, className, disabled }) => {
  return (
    <div>
      <Button
        className={cn(
          "bg-[#FA8232] w-full h-[48px] flex flex-row gap-2 justify-center items-center uppercase font-bold",
          "hover:bg-[#E57422] transition-colors duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        disabled={disabled}
      >
        {btnName}
        <FaArrowRightLong
          className={cn("transition-transform duration-200", {
            "opacity-50": disabled,
            "group-hover:translate-x-1": !disabled,
          })}
        />
      </Button>
    </div>
  );
};

export default FormButton;
