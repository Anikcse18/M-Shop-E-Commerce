"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import { useEffect, useState } from "react";
// import { startCountDown } from "../../../../components/common/countdown";

import { FaRegStar, FaStar } from "react-icons/fa";

import Rating from "react-rating"; // Adjust the path based on your project structure
import { startCountDown } from "../common/countdown";

const BestDeal = () => {
  const products = [
    {
      index: 1,
      image: "/drone.png",
      productTitle:
        "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version",
      details:
        "Next-gen gaming console with 512GB SSD and 4K streaming capability.",
      rating: 4.5,
      newPrice: 299.99,
      discount: 0,
      marketStatus: "Available",
      sellingStatus: "Hot", // Added sellingStatus
    },
    {
      index: 2,
      image: "/mobile_1.png",
      productTitle:
        "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear",
      details:
        "Sweat and weather-resistant wireless earbuds with up to 5 hours of battery life.",
      rating: 4.8,
      newPrice: 179.99,
      discount: 10,
      marketStatus: "Sold Out",
      sellingStatus: "Hot", // Added sellingStatus
    },
    {
      index: 3,
      image: "/controller.png",
      productTitle: "Simple Mobile 4G LTE Prepaid Smartphone",
      details:
        "Affordable prepaid smartphone with 4G LTE support and 32GB storage.",
      rating: 4.2,
      newPrice: 89.99,
      discount: 10,
      marketStatus: "Available",
      sellingStatus: "", // Added sellingStatus
    },
    {
      index: 4,
      image: "/headphone.png",
      productTitle: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      details:
        "Compact point-and-shoot camera with 20x optical zoom and 18.2 MP sensor.",
      rating: 4.7,
      newPrice: 359.99,
      discount: 0,
      marketStatus: "Available",
      sellingStatus: "Hot", // Added sellingStatus
    },
    {
      index: 5,
      image: "/mobile.png",
      productTitle: "Portable Washing Machine, 11lbs Capacity Model 18NMFIAM",
      details:
        "Portable washing machine with 11lbs capacity and twin tub design.",
      rating: 4.3,
      newPrice: 179.99,
      discount: 15,
      marketStatus: "Available",
      sellingStatus: "", // Added sellingStatus
    },
    {
      index: 6,
      image: "/toy.png",
      productTitle: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
      details:
        "2-barrel carburetor designed for 2100 engine to increase horsepower.",
      rating: 4.1,
      newPrice: 79.99,
      discount: 25,
      marketStatus: "Available",
      sellingStatus: "Hot", // Added sellingStatus
    },
    {
      index: 7,
      image: "/mac.png",
      productTitle:
        "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
      details:
        "Waterproof Bluetooth speaker with 12 hours of playtime and dual passive bass radiators.",
      rating: 4.5,
      newPrice: 89.99,
      discount: 15,
      marketStatus: "Sold Out",
      sellingStatus: "Hot", // Added sellingStatus
    },
    {
      index: 8,
      image: "/cctv.png",
      productTitle: "Smartwatch Series 6",
      details: "Fitness tracker with heart rate monitoring and GPS.",
      rating: 4.5,
      newPrice: 349.99,
      discount: 0,
      marketStatus: "Available",
      sellingStatus: "", // Added sellingStatus
    },
  ];

  function discount(percent, price) {
    const discountedPrice = (price * (100 - percent)) / 100;
    const discountedPriceRounded = Math.round(discountedPrice);
    return discountedPriceRounded;
  }

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const countDownDate = new Date("Nov 25, 2024 15:37:25").getTime();

    // Start the countdown and update the state
    // startCountDown(countDownDate, setTimeLeft);
    startCountDown(countDownDate, setTimeLeft);
  }, []);

  return (
    <div className="container public-sans">
      {/* Top section */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-semibold">Best Deals</h1>
          <div className="hidden lg:flex gap-2 ">
            <p className="">Deals Ends In </p>

            <time className="bg-[#F3DE6D] px-2">
              {timeLeft.expired ? (
                <h1>EXPIRED</h1>
              ) : (
                <h1>
                  {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :
                  {timeLeft.seconds}s
                </h1>
              )}
            </time>
          </div>
        </div>

        <div>
          <button className="text-[#2DA5F3] flex gap-2 items-center">
            <span className="hidden sm:flex">Browse</span> All Products{" "}
            <FaArrowRightLong />
          </button>
        </div>
      </section>
      {/* Product section */}
      <section className="grid grid-cols-1 space-y-3 lg:space-y-0 lg:grid-cols-12 mt-5">
        {/* Left Section */}
        <div className="md:col-span-3 p-2 border-2 relative border-gray-200 flex flex-col ">
          <Image
            src="/console.png"
            alt="banner"
            width={280}
            height={268}
            layout="responsive"
            className="w-full h-auto relative z-10"
          ></Image>

          <div className="space-y-4 flex flex-col">
            <div className="flex items-center gap-2">
              <Rating
                emptySymbol={
                  <FaRegStar
                    className="text-2xl text-gray-100"
                    style={{ marginRight: "6px" }}
                  />
                }
                fullSymbol={
                  <FaStar
                    className="text-2xl text-primary"
                    style={{ marginRight: "6px" }}
                  />
                }
                initialRating={2.5}
                readonly
              />

              <span className="text-gray-500">(12,890)</span>
            </div>
            <h1>
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </h1>
            <h1 className="text-xl">
              <del className="mr-2 text-gray-400">400.0 </del>
              <span className="text-[#2DA5F3]">$ 299.0</span>
            </h1>
            <p className="text-[#5F6C72] max-w-[280px]">
              Games built using the Xbox Series X|S development kit showcase
              unparalleled load times, visuals.
            </p>
            <div className="flex max-h-[50px] items-center justify-between ">
              <div className="w-[50px] h-full rounded-md  bg-[#FFE7D6] flex justify-center items-center hover:bg-[#FA8232] transition-colors duration-300">
                <CiHeart className="text-3xl" />
              </div>
              <button className="hover:bg-gray-300  h-full w-[60%] lg:w-[50%] flex flex-row justify-center items-center gap-2 bg-[#FA8232] text-white hover:text-[#191C1F] text-sm lg:text-base lg:font-bold px-2  lg:p-3 py-2 rounded-[3px] transition duration-300 ease-in-out">
                <CiShoppingCart className="text-2xl font-bold hidden lg:block" />
                Add to Cart
              </button>

              <div className="w-[50px] h-full rounded-md bg-[#FFE7D6] flex justify-center items-center hover:bg-[#FA8232] transition-colors duration-300">
                <IoEyeOutline className="text-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-9 grid md:grid-cols-4 gap-2 mt-2 md:mt-0 lg:ml-2">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="border-[1px] border-gray-200 space-y-2 p-2 relative"
            >
              <div className="relative w-full group">
                {/* Image */}
                <Image
                  src={product.image}
                  alt="image"
                  width={216}
                  height={188}
                  layout="responsive"
                  className="w-full h-auto relative z-10"
                />

                {/* Hover section */}
                <div className="absolute inset-0 bg-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="flex justify-center gap-2 items-center h-full">
                    <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center hover:bg-[#FA8232] transition-colors duration-300">
                      <CiHeart className="text-3xl" />
                    </div>
                    <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center hover:bg-[#FA8232] transition-colors duration-300">
                      <IoEyeOutline className="text-3xl" />
                    </div>
                    <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center hover:bg-[#FA8232] transition-colors duration-300">
                      <CiShoppingCart className="text-3xl" />
                    </div>
                  </div>
                </div>
              </div>
              <summary className="line-clamp-2 text-sm">
                {product.productTitle}
              </summary>
              <h1 className="text-[#2DA5F3] font-semibold ">
                {product.discount > 0 && (
                  <del className="text-gray-600">${product.newPrice}</del>
                )}
                <span className="text-[#2DA5F3] ml-2">
                  $ {discount(product.discount, product.newPrice)}
                </span>
              </h1>

              {product?.marketStatus === "Available" ? (
                product?.discount > 0 && (
                  <div className="absolute left-0 top-0 ml-2 z-10">
                    {product?.sellingStatus === "Hot" && (
                      <div
                        className={`w-16 p-1 flex justify-center items-center rounded-md text-sm text-white bg-[#EE5858]`}
                      >
                        <h1>{product.sellingStatus}</h1>
                      </div>
                    )}

                    {product?.discount > 0 && (
                      <div
                        className={`w-20 p-1 flex justify-center items-center rounded-md text-sm text-white bg-[#EFD33D] ${
                          product?.sellingStatus === "Hot" && "mt-2"
                        }`}
                      >
                        <h1 className="whitespace-pre font-semibold">
                          {product.discount} % OFF
                        </h1>
                      </div>
                    )}
                  </div>
                )
              ) : (
                <div className="w-20 p-1 absolute left-0 top-0 ml-2 z-10 flex justify-center items-center rounded-md text-sm text-white bg-gray-400 mt-2">
                  <h1 className="whitespace-pre font-semibold">
                    {product.marketStatus}
                  </h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BestDeal;
