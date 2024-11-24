"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import HeaderRoute from "@/components/common/headerroute";

function Auth() {
  const [tap, setTap] = useState("signin");
  return (

    <section>
      <HeaderRoute route_name={"Sign Up"} />
      <div className="flex gap-3">
        <Button className="" onClick={() => setTap("signin")}>
          Sign In
        </Button>
        <Button onClick={() => setTap("signup")}>Sign Up</Button>
      </div>
      <div className="p-7 border-green-500 border-2">
        {tap == "signin" && <p className="text-3xl bg-red-500">Sign In</p>}
        {tap == "signup" && <p className="text-3xl bg-red-500">Sign Up</p>}
      </div>
    </section>
    
  );
}

export default Auth;
