"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Saveupto = () => {
  return (
    <div className="p-12 max-w-[1430px] mx-auto bg-[#FFE7D6] mt-8">
      <section className="container">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between ">
          <div className="">
            <div className="bg-[#2DA5F3] text-sm p-1 text-center rounded-sm text-white w-[168px] uppercase">
              SAVE UP TO $200.00
            </div>
            <div className=" max-w-[400px] mt-5">
              <h1 className=" text-3xl lg:text-5xl font-medium ">
                Macbook Pro
              </h1>
              <p className=" mt-3 text-sm lg:text-2xl text-gray-500">
                Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
              </p>
            </div>

            <button
              className="hover:bg-gray-300 mt-5 flex items-center gap-1 bg-[#FA8232]
] text-white hover:text-[#191C1F] text-sm lg:text-base font-bold px-2 lg:p-3 py-2 rounded-[3px] transition duration-300 ease-in-out"
            >
              SHOP NOW <FaArrowRightLong />
            </button>
          </div>
          <div className="lg:w-[536px] w-[300px] lg:h-[425px] relative ">
            <Image
              src="/Macbookpro.png"
              alt="Home Poda"
              width={536} // Updated width
              height={425} // Updated height
              layout="responsive"
              className="w-[536px] h-[425px]" // Updated Tailwind classes
            />

            <div className=" md:w-[110px] w-[90px] md:h-[110px] h-[90px] absolute top-0 right-0 md:left-0  flex justify-center bg-[#FFCEAD] rounded-full border-[5px] border-white items-center">
              $ 1999
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Saveupto;
