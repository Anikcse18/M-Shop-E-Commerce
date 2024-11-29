import { Input } from "@/components/ui/input";
import React from "react";
import FormButton from "../../components/form/formbutton";
import Link from "next/link";
import FormHeader from "./formheader";

const ForgetPassword = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-[424px] shadow-lg p-8 ">
        <FormHeader
          headding="Forget Password"
          details="Enter the email address or mobile phone number associated with your Clicon account."
        />
        <section>
          <form className="flex flex-col gap-6 mt-8">
            <Input
              className="h-[40px] w-full details-text"
              type="email"
              label="Email Address"
            />
            <FormButton btnName="Send Code" />
          </form>
        </section>
        <section className="flex flex-col space-y-1 mt-8">
          <p className="text-sm text-secondary-text-color">
            Already have account?
            <Link href={"/"}>
              <button className="text-nav-primary public-sans ml-1">
                {" "}
                Sign In
              </button>
            </Link>
          </p>
          <p className="text-sm text-secondary-text-color">
            Don’t have account?
            <Link href={"/"}>
              {" "}
              <button className="text-nav-primary public-sans ml-1">
                {" "}
                Sign Up
              </button>
            </Link>
          </p>
        </section>
        <hr className=" border-[1px] mt-8" />
        <h1 className="text-sm mt-4 text-secondary-text-color">
          You may contact{" "}
          <Link href={"/"} className="text-button-active">
            Customer Service
          </Link>{" "}
          for help restoring access to your account.
        </h1>
      </div>
    </div>
  );
};

export default ForgetPassword;
