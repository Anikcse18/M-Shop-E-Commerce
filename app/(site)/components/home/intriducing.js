"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Intriducing = () => {
  return (
    <div className="container  public-sans mt-8">
      <section className="flex flex-col lg:flex-row  relative justify-between gap-10">
        {/* Home Pod */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between px-6 py-10   bg-[#F2F4F5] flex-1">
          <div className="">
            <div className="bg-[#2DA5F3] text-sm p-1 text-center rounded-sm text-white w-[110px] uppercase">
              Introducing
            </div>
            <div className=" max-w-[240px] mt-5">
              <h1 className="text-3xl font-medium ">New Apple Homepod Mini</h1>
              <p className="mt-3 text-gray-500">New Apple Homepod Mini</p>
            </div>

            <button
              className="hover:bg-gray-300 mt-5 flex items-center gap-1 bg-[#FA8232]
] text-white hover:text-[#191C1F] text-sm lg:text-base font-bold px-2 lg:p-3 py-2 rounded-[3px] transition duration-300 ease-in-out"
            >
              SHOP NOW <FaArrowRightLong />
            </button>
          </div>
          <div className="w-[240px] h-[240px]">
            <Image
              src="/Homepod.png"
              alt="Home Poda"
              width={240} // Updated width
              height={240} // Updated height
              layout="responsive"
              className="w-[240px] h-[240px]" // Updated Tailwind classes
            />
          </div>
        </div>

        {/* Xiaomi */}
        <div className="flex  flex-col md:flex-row gap-5 px-6 lg:px-0 py-10 lg:py-0 items-center justify-between bg-[#191C1F] text-white flex-1">
          <div className="lg:pl-6 flex-1">
            <div className="bg-[#2DA5F3] text-sm p-1 text-center rounded-sm w-[110px] uppercase">
              Introducing
            </div>
            <div className="max-w-[240px] mt-5">
              <h1 className="text-3xl font-medium">New Apple Homepod Mini</h1>
              <p className="mt-3 text-gray-500">New Apple Homepod Mini</p>
            </div>

            <button className="hover:bg-gray-300 mt-5 flex items-center gap-1 bg-[#FA8232] text-white hover:text-[#191C1F] text-sm lg:text-base font-bold px-2 lg:p-3 py-2 rounded-[3px] transition duration-300 ease-in-out">
              SHOP NOW <FaArrowRightLong />
            </button>
          </div>
          <div className="md:absolute right-3 bottom-0 flex-1  border-red-500 ">
            <div className="">
              <Image
                src="/xiaomi.png"
                alt="Home Poda"
                width={240}
                height={240}
                className="w-[240px] h-[240px] "
              />
            </div>
            <div className="hidden w-[90px] h-[90px] rounded-full md:flex justify-center items-center bg-[#2DA5F3] text-center absolute -top-10 right-0">
              $590
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intriducing;
