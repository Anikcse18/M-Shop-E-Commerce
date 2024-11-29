"use clint";
import React from "react";
import FormHeader from "./formheader";
import { Input } from "@/components/ui/input";
import FormButton from "../../components/form/formbutton";

const ResetPassword = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-[424px] shadow-lg p-8 ">
        <FormHeader
          headding="Reset Password"
          details="Enter the email address or mobile phone number associated with your M Store account."
        />

        <section>
          <form className="flex flex-col gap-6 mt-8">
            <Input
              className="h-[40px] w-full details-text"
              type="password"
              label="Password"
              placeholder="8+ Character"
            />
            <Input
              className="h-[40px] w-full details-text"
              type="password"
              label="Confirm Password"
            />
            <FormButton btnName="Reset Password" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default ResetPassword;
