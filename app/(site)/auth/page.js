"use client";
import React from "react";
import { useState } from "react";
import HeaderRoute from "@/components/common/headerroute";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Auth() {
  const [tap, setTap] = useState("signin");
  return (
    <section>
      <HeaderRoute route_name={"Sign Up"} />

      <div className="container mt-10">
        <section className="flex justify-center items-center">
          <Tabs defaultValue="account" className="min-w-[340px]">
            <TabsList className="flex flex-row gap-16">
              <TabsTrigger value="account">Sign Up</TabsTrigger>
              <TabsTrigger value="password">Sign In</TabsTrigger>
            </TabsList>
            <section className="border-2 p-5">
              <TabsContent value="account">
                <form className="flex flex-col gap-6">
                  <Input
                    className="h-[40px]"
                    type="email"
                    label="Email Address"
                  />

                  <Input className="h-[40px]" type="email" label="Password" />
                  <Button className="bg-[#FA8232] h-[48px]">Sign In</Button>
                </form>
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </section>
          </Tabs>
        </section>
      </div>
    </section>
  );
}

export default Auth;
