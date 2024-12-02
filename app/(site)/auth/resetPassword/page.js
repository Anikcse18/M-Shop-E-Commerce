"use client";
import ResetPassword from "@/components/auth/resetpassword";
import React from "react";
// import { useRouter } from "next/router";

const page = () => {
  // const router = useRouter();
  // const pathnames = router.pathname.split("/").filter((x) => x);
  // console.log("Router Is: ", pathnames);
  return (
    <div className="container mt-14 mb-24">
      <ResetPassword />
    </div>
  );
};

export default page;
