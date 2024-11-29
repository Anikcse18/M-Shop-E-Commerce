import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const FormButton = ({ btnName, className }) => {
  return (
    <div>
      <Button
        className={`bg-[#FA8232] w-full h-[48px] flex flex-row gap-2 justify-center items-center uppercase font-bold  ${className}`}
      >
        {btnName}

        <FaArrowRightLong />
      </Button>
    </div>
  );
};

export default FormButton;
