"use client";
import React from "react";
import HeaderRoute from "@/components/common/headerroute";
import Registration from "@/components/auth/registration";
import AuthModal from "@/components/auth/authmodal";
import ResetPassword from "@/components/auth/resetpassword";

function Auth() {
  return (
    <section>
      <HeaderRoute route_name={"Sign Up"} />

      <div className="container mt-14 mb-24">
        <Registration />
      </div>
    </section>
  );
}

export default Auth;
