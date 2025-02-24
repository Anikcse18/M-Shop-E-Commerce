"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "@/components/common/button";
import Image from "next/image";
import Assistance from "@/components/help/assistance";

const Help = () => {
  return (
    <div>
      <section className="container mt-10 md:mt-20 public-sans">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
          <div className="flex-1">
            <div className="bg-[#EFD33D] px-4 py-2 inline-block ">
              <p className="uppercase text-sm md:text-lg font-semibold">
                Help Center
              </p>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold mt-4">
              How we can help you!
            </h1>

            <div className="mt-2 md:mt-4 border-[1px] p-2 lg:p-3 flex justify-between gap-2 items-center">
              <div className="flex items-center w-full relative">
                <FaSearch className="text-[#fa8232] text-xl lg:text-2xl absolute left-2" />

                <input
                  type="text"
                  className="w-full pl-10 py-3 lg:py-6  public-sans border-[1px] border-white focus:border-[#fa8232] focus:ring-0 outline-none lg:placeholder:text-lg"
                  placeholder="Enter your question or keyword"
                />
              </div>

              <div className="">
                <Button
                  className={
                    "bg-[#fa8232] px-3  lg:px-7 py-3 md:py-3 lg:py-6 public-sans md:font-bold lg:text-lg rounded-[2px] text-white hover:bg-slate-500 cursor-pointer md:uppercase"
                  }
                  name={"Search"}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-end">
              <Image
                src="/help/help_desk.jpeg"
                width={400}
                height={350}
                alt="Help Desk"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 md:mt-20">
        <Assistance />
      </section>
    </div>
  );
};

export default Help;
