"use clint";
import React from "react";
import { Input } from "@/components/ui/input";
import FormHeader from "./formheader";
import FormButton from "../form/formbutton";


const ResetPassword = () => {
  

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="w-[424px] shadow-lg p-8 border-[1px]">
        <FormHeader
          headding="Reset Password"
          details="Enter the email address or mobile phone number associated with your M Store account."
        />

        <section>
          <form className="flex flex-col gap-6 mt-8" onSubmit={handelSubmit}>
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
          <div className="border-[1px] bg-slate-500 mt-8" />
          <h3 className="text-sm mt-2 text-secondary-text-color cursor-pointer">
            You may contact{" "}
            <span className="text-button-active">Customer Service </span>
            for help restoring access to your account.
          </h3>
        </section>
      </div>
    </div>
  );
};

export default ResetPassword;
