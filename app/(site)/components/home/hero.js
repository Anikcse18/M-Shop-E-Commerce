"use client";
import Image from "next/image";
import React from "react";

import Button from "../../../../components/common/button";
import { FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css/pagination";

// import required modules
import { EffectFade, Pagination } from "swiper/modules";

const Hero = () => {
  const items = [
    {
      image: "/logo_box.png",
      title: "Fasted Delivery",
      details: "Delivery in 24/H",
    },

    {
      image: "/logo_trophy.png",
      title: "24 Hours Return",
      details: "100% money-back guarantee",
    },

    {
      image: "/logo_card.png",
      title: "Secure Payment",
      details: "Your money is safe",
    },
    {
      image: "/logo_headphone.png",
      title: "Support 24/7",
      details: "Live contact/message",
    },
  ];

  const products = [
    {
      title: "Xbox Consoles",
      details:
        "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
      image: "/xbox.png",
      price: "$299",
    },
    {
      title: "PlayStation 5",
      details:
        "Experience next-gen gaming with PlayStation 5 and its ultra-high-speed SSD.",
      image: "/xbox.png",
      price: "$499",
    },
    {
      title: "Iphone 16",
      details:
        "Experience next-gen gaming with PlayStation 5 and its ultra-high-speed SSD.",
      image: "/xbox.png",
      price: "$399",
    },
  ];

  const hotsell = [
    {
      title: "New Google Pixel 6 Pro",

      image: "/hero_2.png",
      offer: "29% OFF",
    },
    {
      title: "Xiaomi FlipBuds Pro",
      price: "$399",
      image: "/hero_2.png",
      offer: "19% OFF",
    },
  ];

  return (
    <section className="py-6 container public-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-5 items-center">
        {/* Grid 1 */}
        <div className="col-span-2 bg-[#F2F4F5] p-[25px] rounded-[6px] h-full flex items-center ">
          {/* Swiper */}
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={1} // You can change this to adjust the number of visible slides
            loop={true} // Enables loop mode
            pagination={{ clickable: true }} // Optional: pagination dots
            modules={[EffectFade, Pagination]}
            className="mySwiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <section className="flex p-3 flex-col lg:flex-row justify-between items-center">
                  <div className="max-w-[400px] mx-auto lg:mx-0">
                    <p className="text-[#2484C2] text-sm font-[600]">
                      -- THE BEST PLACE TO PLAY
                    </p>
                    <h1 className="pt-[4px] pb-[16px] text-[#191C1F] text-3xl md:text-5xl font-[600]">
                      {product.title}
                    </h1>
                    <p className="pb-[24px] text-[#475156] text-lg font-[400]">
                      {product.details}
                    </p>
                    <button className="hover:bg-gray-300 flex items-center gap-1 bg-[#FA8232] text-white hover:text-[#191C1F] text-sm lg:text-base font-bold px-2  lg:p-3  py-2 rounded-[3px] transition duration-300 ease-in-out">
                      SHOP NOW <FaArrowRightLong />
                    </button>
                  </div>
                  <div className="relative">
                    <div className="bg-[#2DA5F3] w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] absolute right-0 rounded-[100px] flex justify-center items-center">
                      <p className="text-white text-lg md:text-xl ">
                        {product.price}
                      </p>
                    </div>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={380}
                      height={400}
                      className="w-full h-[180px] md:h-[350px] "
                    />
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid 2 */}
        <div className="grid grid-rows-2 h-full gap-[24px]">
          {/* 1st */}
          <div className="pt-10 pb-2 lg:pb-0 pl-5 pr-0 rounded-[6px] bg-[#F2F4F5] hover:bg-black hover:text-white">
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="text-sm font-[500] hover:text-[#EBC80C] pb-[5px]">
                  Summer Sales
                </p>
                <h1 className="text-xl lg:text-2xl hover:text-[#EBC80C] pb-[18px] max-w-[172px]">
                  New Google Pixel 6 Pro
                </h1>
                <button className="hover:bg-gray-300  mb-3 flex items-center gap-1 bg-[#FA8232] text-white hover:text-[#191C1F] text-sm lg:text-base font-bold px-2  lg:p-3  py-2 rounded-[3px] transition duration-300 ease-in-out">
                  SHOP NOW <FaArrowRightLong />
                </button>
              </div>
              <div className="relative ">
                <div className="bg-[#EFD33D] absolute lg:right-8 lg:-top-5 right-0 -top-10">
                  <p className="h-10 w-full px-2 lg:px-[15px] py-2 lg:py-[10px] text-[#141414] text-sm  lg:text-base font-[600] rounded-md">
                    29% OFF
                  </p>
                </div>
                <Image src="/hero2.png" alt="sale" width={312} height={312} />
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="p-2 flex items-center rounded-lg bg-[#F2F4F5] hover:bg-black hover:text-white">
            <div className="flex justify-between gap-4 items-center">
              <div>
                <Image src="/hero3.png" alt="sale" width={180} height={180} />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl hover:text-[#EBC80C] pb-[18px] max-w-[172px]">
                  Xiaomi FlipBuds Pro
                </h1>
                <button className="hover:bg-gray-300 flex items-center gap-1 bg-[#FA8232] text-white hover:text-[#191C1F] text-sm lg:text-base font-bold px-2  lg:p-3  py-2 rounded-[3px] transition duration-300 ease-in-out">
                  SHOP NOW <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero section services */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-[41px] mt-[40px] border-2 rounded-[6px] p-[20px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex gap-2 items-center  ${
              index === items.length - 1
                ? "md:border-none"
                : index === 1
                ? "lg:border-r-2"
                : "md:border-r-2 "
            } `}
          >
            <div className="flex gap-2 items-center">
              <div className="">
                <Image
                  src={item.image}
                  alt={item.title} // Use the title for alt text
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="text-sm uppercase">{item.title}</p>
                <p className="text-[#5F6C72] text-sm">{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
