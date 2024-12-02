"use client";
import React from "react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import { Checkbox } from "@/components/ui/checkbox";
import FormButton from "../form/formbutton";

import AuthModal from "./authmodal";
import Link from "next/link";

const Registration = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handelClick = (e) => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <section className="flex justify-center items-center">
        <Tabs
          defaultValue="account"
          className="w-[424px] shadow-lg border-[1px]"
        >
          <section className="flex flex-row w-full justify-between h-14 border-b-2">
            <Button
              onClick={() => handleTabClick("tab1")}
              className={`bg-transparent public-sans text-gray-500  border-b-4 border-white   shadow-none hover:border-[#FA8232] hover:bg-white hover:text-black rounded-none text-xl flex-1 h-full ${
                activeTab === "tab1"
                  ? "border-[#FA8232] text-black"
                  : "border-white"
              }`}
            >
              Sign In
            </Button>

            <Button
              onClick={() => handleTabClick("tab2")}
              className={`bg-transparent public-sans text-gray-500  border-b-4 border-white   shadow-none hover:border-[#FA8232] hover:bg-white hover:text-black rounded-none text-xl flex-1 h-full ${
                activeTab === "tab2"
                  ? "border-[#FA8232] text-black"
                  : "border-white"
              } `}
            >
              Sign Up
            </Button>
          </section>

          <section className="p-8">
            {activeTab === "tab1" && (
              <TabsContent value="account">
                <form
                  className="flex flex-col gap-6"
                  onClick={() => handelClick(true)}
                >
                  <Input
                    className="h-[40px] w-full details-text"
                    type="email"
                    label="Email Address"
                  />

                  <Input
                    className="h-[40px] w-full details-text"
                    type="password"
                    label="Password"
                    forgetpassword="Forget Password"
                  />

                  <FormButton btnName="Sign In" />
                </form>

                {/* Make or devider */}
                <div className="flex flex-row mt-5 items-center gap-3">
                  <div className=" flex-1">
                    <div className="bg-gray-300 p-[1px]"></div>
                  </div>
                  <div className="public-sans text-gray-500">or</div>
                  <div className="  flex-1">
                    <div className="bg-gray-300 p-[1px]"></div>
                  </div>
                </div>

                {/* Sign In with gogle apple */}
                <div className="flex flex-col gap-3 mt-8">
                  <Button
                    variant="outline"
                    className="w-full h-[48px] relative flex items-center justify-center text-[#191C1F]"
                  >
                    <FcGoogle
                      className="absolute left-3 text-2xl"
                      aria-hidden="true"
                    />
                    <span className="flex-grow text-center">
                      Login with Google
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-[48px] relative flex items-center justify-center text-[#191C1F]"
                  >
                    <FaApple
                      className="absolute left-3 text-2xl"
                      aria-hidden="true"
                    />
                    <span className="flex-grow text-center">
                      Login with Apple
                    </span>
                  </Button>
                </div>
              </TabsContent>
            )}
            {activeTab === "tab2" && (
              <TabsContent value="account">
                <form className="flex flex-col gap-6" onSubmit={handelClick}>
                  <Input
                    className="h-[45px] w-full details-text"
                    type="text"
                    label="Name"
                  />
                  <Input
                    className="h-[45px] w-full details-text"
                    type="email"
                    label="Email Address"
                  />

                  {/* Password */}
                  <Input
                    className="h-[45px] w-full details-text"
                    type="password"
                    label="Password"
                    placeholder="8+ character"
                  />
                  {/* Confirm password */}
                  <Input
                    className="h-[45px] w-full details-text"
                    type="password"
                    label="Confirm Password"
                  />
                  {/* data-[state=unchecked]:bg-white data-[state=checked]:bg-[#FA8232] */}
                  {/* terms and Policy */}
                  <div className="flex items-start flex-row space-x-2 max-w-[400px]">
                    <Checkbox className="bg-primary border-[#FA8232] " />

                    <label
                      htmlFor="terms"
                      className="text-md leading-[1] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 public-sans text-[#77878F] "
                    >
                      Are you agree to M Shop{" "}
                      <span className="text-nav-primary">
                        Terms of Condition
                      </span>{" "}
                      and{" "}
                      <span className="text-nav-primary"> Privacy Policy</span>.
                    </label>
                  </div>

                  <FormButton btnName="Sign Up" />
                </form>

                {/* Make or devider */}
                <div className="flex flex-row mt-5 items-center gap-3">
                  <div className=" flex-1">
                    <div className="bg-gray-300 p-[1px]"></div>
                  </div>
                  <div className="public-sans text-gray-500">or</div>
                  <div className="  flex-1">
                    <div className="bg-gray-300 p-[1px]"></div>
                  </div>
                </div>

                {/* Sign In with gogle apple */}
                <div className="flex flex-col gap-3 mt-8">
                  <Button
                    variant="outline"
                    className="w-full h-[48px] relative flex items-center justify-center text-[#191C1F] public-sans"
                  >
                    <FcGoogle
                      className="absolute left-3 text-2xl"
                      aria-hidden="true"
                    />
                    <span className="flex-grow text-center">
                      Sign Up with Google
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-[48px] relative flex items-center justify-center text-[#191C1F]  public-sans"
                  >
                    <FaApple
                      className="absolute left-3 text-2xl"
                      aria-hidden="true"
                    />
                    <span className="flex-grow text-center">
                      Sign Up with Apple
                    </span>
                  </Button>
                </div>
                <AuthModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
              </TabsContent>
            )}
          </section>
        </Tabs>
      </section>
    </div>
  );
};

export default Registration;
