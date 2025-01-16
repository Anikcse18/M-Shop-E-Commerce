"use client";
import React from "react";

import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import Link from "next/link";

const Notfound = () => {
  return (
    <div className="container lg:h-[80vh] flex flex-col items-center justify-center">
      <div>
        <Image src="/error/404.png" alt="Error Page" width={500} height={500} />
      </div>
      <div className="text-center ">
        <h1 className="text-4xl">404, Page not founds</h1>
        <p className="text-md text-secondary-text-color max-w-[500px] mt-5 ">
          Something went wrong. It’s look that your requested could not be
          found. It’s look like the link is broken or the page is removed.
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-6">
        <button className="whitespace-pre hover:bg-gray-300 capitalize  mb-3 flex items-center gap-3 bg-[#FA8232] text-white hover:text-[#191C1F] text-sm lg:text-base font-bold px-4 lg:px-8  py-4 rounded-[3px] transition duration-300 ease-in-out">
          <FaArrowLeftLong className="md:text-2xl" /> GO BACK
        </button>
        <Link href={"/"}>
          <button className="whitespace-pre border-2 border-[#FA8232]/40 capitalize mb-3 flex items-center gap-3  hover:text-white hover:bg-[#FA8232] text-[#FA8232] text-sm lg:text-base font-bold px-4 lg:px-8 py-4 rounded-[3px]  transition duration-300 ease-in-out">
            <GoHome className="md:text-2xl" /> GO TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
