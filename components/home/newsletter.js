"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Newsletter = () => {
  const brands = [
    {
      brand: "Google",
      imageUrl: "/google.png",
    },
    {
      brand: "Amazon",
      imageUrl: "/amazon.png",
    },
    {
      brand: "Toshiba",
      imageUrl: "/toshiba.png",
    },
    {
      brand: "Philips",
      imageUrl: "/philips.png",
    },
    {
      brand: "Samsung",
      imageUrl: "/samsung.png",
    },
  ];

  return (
    <div className="bg-[#1B6392] p-10 public-sans">
      <section className="max-w-[624px] text-center text-white mx-auto space-y-8">
        <h1 className="text-4xl font-semibold">Subscribe to our newsletter</h1>
        <p className="text-[1rem] max-w-[524px] mx-auto">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>
        <div className="mt-4">
          <form className="lg:relative w-full flex justify-center flex-row gap-2 flex-nowrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="lg:w-full w-[70%] px-2 py-3 lg:px-4 lg:py-5 pr-20 border border-gray-300 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className=" flex items-center hover:bg-gray-300 bg-[#FA8232] hover:text-black gap-2 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2  px-2 lg:px-4 py-3 lg:py-4 mr-1 lg:ml-3  text-white  rounded-lg  focus:outline-none focus:ring-2 focus:ring-white"
            >
              Subscribe
              <FaArrowRightLong className="hidden md:block" />
            </button>
          </form>
        </div>

        <section className="grid grid-cols-3 md:grid-cols-5 gap-5 justify-center">
          {brands?.map((brand, index) => (
            <Image
              key={index}
              src={brand.imageUrl}
              alt="brand"
              width={72}
              height={72}
              className="mx-auto"
            ></Image>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Newsletter;
