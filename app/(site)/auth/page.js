"use client";
import React from "react";
import HeaderRoute from "@/components/common/headerroute";
import Registration from "./components/registration";
import ForgetPassword from "./components/forgetpassword";
import ResetPassword from "./components/resetpassword";
import VerifyMail from "./components/verifymail";

function Auth() {
  return (
    <section>
      <HeaderRoute route_name={"Sign Up"} />

      <div className="container mt-14 mb-24">
        {/* <Registration /> */}
        {/* <ForgetPassword /> */}
        {/* <ResetPassword /> */}
        {<VerifyMail />}
      </div>
    </section>
  );
}

export default Auth;
