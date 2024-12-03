"use client";
import React from "react";
import HeaderRoute from "@/components/common/headerroute";
import Registration from "@/components/auth/registration";

const Auth = () => {
  return (
    <section>
      {/* <HeaderRoute /> */}

      <div className="container mt-14 mb-24">
        <Registration />
      </div>
    </section>
  );
};

export default Auth;
