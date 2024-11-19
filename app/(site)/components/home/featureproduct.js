"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Button, Rate } from "antd";
import { useRouter } from "next/router";

const Featureproduct = () => {
  // const router = useRouter();
  const products = [
    {
      index: 1,
      image: "/drone.png",
      productTitle:
        "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version",
      details:
        "Next-gen gaming console with 512GB SSD and 4K streaming capability.",
      rating: 4.5,
      reviewCount: 120, // Added review count
      newPrice: 299.99,
      discount: 0,
      marketStatus: "Available",
      sellingStatus: "Hot",
    },
    {
      index: 2,
      image: "/mobile_1.png",
      productTitle:
        "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear",
      details:
        "Sweat and weather-resistant wireless earbuds with up to 5 hours of battery life.",
      rating: 4.8,
      reviewCount: 200, // Added review count
      newPrice: 179.99,
      discount: 10,
      marketStatus: "Sold Out",
      sellingStatus: "Hot",
    },
    {
      index: 3,
      image: "/controller.png",
      productTitle: "Simple Mobile 4G LTE Prepaid Smartphone",
      details:
        "Affordable prepaid smartphone with 4G LTE support and 32GB storage.",
      rating: 4.2,
      reviewCount: 75, // Added review count
      newPrice: 89.99,
      discount: 10,
      marketStatus: "Available",
      sellingStatus: "",
    },
    {
      index: 4,
      image: "/headphone.png",
      productTitle: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      details:
        "Compact point-and-shoot camera with 20x optical zoom and 18.2 MP sensor.",
      rating: 4.7,
      reviewCount: 180, // Added review count
      newPrice: 359.99,
      discount: 0,
      marketStatus: "Available",
      sellingStatus: "Hot",
    },
    {
      index: 5,
      image: "/mobile.png",
      productTitle: "Portable Washing Machine, 11lbs Capacity Model 18NMFIAM",
      details:
        "Portable washing machine with 11lbs capacity and twin tub design.",
      rating: 4.3,
      reviewCount: 90, // Added review count
      newPrice: 179.99,
      discount: 15,
      marketStatus: "Available",
      sellingStatus: "",
    },
    {
      index: 6,
      image: "/toy.png",
      productTitle: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
      details:
        "2-barrel carburetor designed for 2100 engine to increase horsepower.",
      rating: 4.1,
      reviewCount: 60, // Added review count
      newPrice: 79.99,
      discount: 25,
      marketStatus: "Available",
      sellingStatus: "Hot",
    },
    {
      index: 7,
      image: "/mac.png",
      productTitle:
        "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
      details:
        "Waterproof Bluetooth speaker with 12 hours of playtime and dual passive bass radiators.",
      rating: 4.5,
      reviewCount: 150, // Added review count
      newPrice: 89.99,
      discount: 15,
      marketStatus: "Sold Out",
      sellingStatus: "Hot",
    },
    {
      index: 8,
      image: "/cctv.png",
      productTitle: "Smartwatch Series 6",
      details: "Fitness tracker with heart rate monitoring and GPS.",
      rating: 4.5,
      reviewCount: 110, // Added review count
      newPrice: 349.99,
      discount: 0,
      marketStatus: "Available",
      sellingStatus: "",
    },
  ];

  const navLinks = [
    { name: "All Products", href: "/" },
    { name: "Smart Phone", href: "/phone" },
    { name: "Laptop", href: "/laptop" },
    { name: "Headphone", href: "/headphone" },
    { name: "Tv", href: "/tv" },
  ];

  function discount(percent, price) {
    const discountedPrice = (price * (100 - percent)) / 100;
    const discountedPriceRounded = Math.round(discountedPrice);
    return discountedPriceRounded;
  }
  // const style = {
  //   marginRight: 10,
  //   color: router.asPath === href ? "red" : "black",
  // };

  return (
    <div className="container public-sans mt-8">
      <section className="grid grid-cols-1 lg:grid-cols-12 lg:gap-3">
        {/* // Left Div */}
        <div className="md:col-span-3 bg-[#F3DE6D] pt-8 ">
          <div className="flex flex-col items-center px-2">
            <h3 className="text-[#BE4646] text-sm mt-4">
              COMPUTER & ACCESSORIES
            </h3>
            <h1 className="text-4xl font-medium mt-3">32% Discount</h1>
            <p className="text-[#475156] mt-3">For all electronics products</p>
            <div className="flex items-center gap-2 mt-3">
              <p className="text-sm">Offer Ends Of: </p>
              <div className="bg-white text-sm p-1 rounded-sm">
                ENDS OF CHRISTMAS
              </div>
            </div>
            <button className="hover:bg-gray-300 mt-5 flex items-center gap-1 bg-[#FA8232] text-white hover:text-[#191C1F] text-sm lg:text-base font-bold px-2 lg:p-3 py-2 rounded-[3px] transition duration-300 ease-in-out">
              SHOP NOW <FaArrowRightLong />
            </button>
          </div>

          <Image
            src="/featureproduct.jpg"
            width={148}
            height={148}
            alt="Feature Product"
            layout="responsive"
            className="w-full h-full object-cover"
          />
        </div>
        {/* /Right Div */}
        <div className="md:col-span-9">
          <section className="flex justify-between mt-4 lg:mt-0 items-center">
            <div className="flex items-center gap-3">
              <h1 className=" text-lg md:text-2xl  font-semibold">
                Featured Products
              </h1>
            </div>

            <div className="flex items-center gap-5">
              <div className="hidden lg:flex">
                <nav className="text-gray-400  gap-5 hidden md:flex  items-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`hover:underline hover:text-gray-900 hover:decoration-[#FA8232] underline-offset-8 `}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <button className="text-[#2DA5F3] flex gap-2 items-center">
                <span className="hidden lg:flex">Browse</span> All Products
                <FaArrowRightLong />
              </button>
            </div>
          </section>
          {/* Product Section */}
          <section className="">
            <div className="grid md:grid-cols-4 gap-4 mt-5">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="border-[1px] p-2 border-gray-200 space-y-2 relative hover:shadow-md	 transition duration-300 ease-in-out"
                >
                  <div className="relative w-full group ">
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
                  <div className="flex items-center gap-2">
                    <Rate allowHalf disabled defaultValue={product.rating} />
                    <span className="text-gray-500">
                      ({product.reviewCount})
                    </span>
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
      </section>
    </div>
  );
};

export default Featureproduct;
