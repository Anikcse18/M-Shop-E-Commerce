"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "@/components/common/button";
import Image from "next/image";
import Assistance from "@/components/help/assistance";
import Popular from "@/components/popular/popular";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const Help = () => {
  return (
    <div>
      <section className="container mt-10 md:mt-20 public-sans font-bold text-white ">
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
                  className="w-full pl-10 py-3 lg:py-6  public-sans font-bold text-white  border-[1px] border-white focus:border-[#fa8232] focus:ring-0 outline-none lg:placeholder:text-lg"
                  placeholder="Enter your question or keyword"
                />
              </div>

              <div className="">
                <Button
                  className={
                    "bg-[#fa8232] px-3  lg:px-7 py-3 md:py-3 lg:py-6 public-sans font-bold text-white  md:font-bold lg:text-lg rounded-[2px] text-white hover:bg-slate-500 cursor-pointer md:uppercase"
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
        <Popular />
      </section>

      <section className="mt-10 md:mt-20 bg-[#F2F4F5] pb-12">
        <div className="container public-sans flex  flex-col items-center justify-center">
          <p className="text-sm bg-[#2DA5F3] font-semibold p-4 text-white inline-block text-center mt-10 md:mt-24">
            CONTACT US
          </p>

          <h1 className="font-semibold text-3xl mt-10 max-w-[400px] text-center public-sans leading-relaxed tracking-wider">
            Don’t find your answer. Contact with us
          </h1>
        </div>
        <div className="mt-10 md:mt-16 container public-sans flex flex-col lg:flex-row justify-center items-center gap-5">
          <div className="bg-white flex items-start p-6 gap-5 sm:max-w-[450px]">
            <div className=" ">
              <div className="bg-[#EAF6FE] p-8 h-[80px] flex items-center justify-center">
                <TbPhoneCall className="text-[#2DA5F3] text-2xl" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="text-lg font-semibold">Call us now</p>
              <p className="text-sm">
                we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
                with use now
              </p>
              <h1 className="text-sm sm:text-xl md:text-2xl">
                +1-202-555-0126
              </h1>
              <Button
                name="Contact us"
                icon={<FaArrowRightLong />}
                className="flex items-center text-white font-bold gap-2 py-3 px-4  uppercase bg-[#2DA5F3] w-fit"
              />
            </div>
          </div>

          <div className="bg-white flex items-start p-6 gap-5 max-w-[450px]">
            <div className=" ">
              <div className="bg-[#EAF7E9] p-8 h-[80px] flex items-center justify-center">
                <AiOutlineMessage className="text-[#2DB224] text-2xl " />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="text-lg font-semibold">Call us now</p>
              <p className="text-sm ">
                we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
                with use now
              </p>
              <h1 className=" text-sm sm:text-xl md:text-2xl">
                support@mshop.com
              </h1>
              <Button
                name="Contact us"
                icon={<FaArrowRightLong />}
                className="flex items-center text-white font-bold gap-2 py-3 px-4  uppercase bg-[#2DB224] w-fit"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
