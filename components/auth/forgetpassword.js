"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Link from "next/link";
import FormHeader from "./formheader";
import FormButton from "../form/formbutton";
import AuthModal from "./authmodal";
import HeaderRoute from "../common/headerroute";

const ForgetPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();

    setIsModalOpen(true);
    console.log("Click Forget password");
  };

  return (
    <div className=" flex justify-center items-center">
      {/* <HeaderRoute /> */}
      <div className="w-[424px] shadow-lg p-8 border-[1px] onClick={handelClick} ">
        <FormHeader
          headding="Forget Password"
          details="Enter the email address or mobile phone number associated with your M-Shop account."
        />
        <div>
          <form className="flex flex-col gap-6 mt-8" onClick={handelSubmit}>
            <Input
              className="h-[40px] w-full details-text"
              type="email"
              label="Email Address"
            />
            {/* <Link href={"/auth/resetPassword"}>
             
            </Link> */}
            <FormButton btnName="Send Code" />
          </form>
        </div>
        <div className="flex flex-col space-y-1 mt-8">
          <p className="text-sm text-secondary-text-color">
            Already have account?
            <Link href={"/auth"}>
              <button className="text-nav-primary public-sans ml-1">
                {" "}
                Sign In
              </button>
            </Link>
          </p>
          <p className="text-sm text-secondary-text-color">
            Don’t have account?
            <Link href={"/auth"}>
              <button className="text-nav-primary public-sans ml-1">
                Sign Up
              </button>
            </Link>
          </p>
        </div>
        <hr className=" border-[1px] mt-8" />
        <h1 className="text-sm mt-4 text-secondary-text-color">
          You may contact{" "}
          <Link href={"/"} className="text-button-active">
            Customer Service
          </Link>{" "}
          for help restoring access to your account.
        </h1>
      </div>
      <AuthModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default ForgetPassword;
