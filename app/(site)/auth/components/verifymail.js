"use clint";
import React from "react";
import FormHeader from "./formheader";
import { Input } from "@/components/ui/input";
import FormButton from "../../components/form/formbutton";

const VerifyMail = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-[424px] shadow-lg p-8 ">
        <FormHeader
          headding="Verify Your Email Address"
          details="Enter the email address or mobile phone number associated with your M Store account."
        />

        <section>
          <form className="flex flex-col gap-6 mt-8">
            <Input
              className="h-[40px] w-full details-text"
              type="number"
              label="Verification Code"
              forgetpassword="Resend Code"
            />

            <FormButton btnName="Verify Me" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default VerifyMail;
