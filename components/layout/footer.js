// import React from "react";
"use client";
import Link from "next/link";
import { FaBagShopping, FaArrowRightLong, FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  const customerSupport = {
    phone: "(629) 555-0129",
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
    email: "info@kinbo.com",
  };
  const categories = ["Computer & Laptop", "SmartPhone", "Headphone"];
  const accessories = ["Camera & Photo", "TV & Homes"];
  const quicklinks = [
    "Shop Product",
    "Shopping Cart",
    "Wishlist",
    "Compare",
    "Track Order",
    "Customer Help",
    "About Us",
  ];

  const tags = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "Macbook",
    "SSD",
    "Graphics Card",
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];

  // className="flex flex-col lg:flex-row  lg:justify-between  py-16"
  return (
    <footer className="text-white public-sans">
      <section className=" container ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5  gap-4 py-16">
          <div className="">
            <div className="flex items-center gap-2 text-white font-bold text-3xl">
              <FaBagShopping className="text-yellow-500" />
              <span>MStore</span>
            </div>
            <div className="space-y-2 mt-4 ">
              <p className="text-[#77878F]">Customer Support</p>
              <h3>{customerSupport.phone}</h3>
              <h3 className="max-w-[248px] text-[#77878F]">
                {customerSupport.address}
              </h3>
              <h3 className="">{customerSupport.email}</h3>
            </div>
          </div>
          <div>
            <h1 className="uppercase">Top Category</h1>
            <div className="mt-4">
              <ul className="text-[#77878F] space-y-3">
                {categories.map((product, idx) => (
                  <li key={idx}>{product}</li>
                ))}
              </ul>

              <div>
                <div className="flex items-center my-3">
                  <div className="border-t-2 border-yellow-400 h-0 w-[26px] mr-2"></div>
                  <p>Accessories</p>
                </div>
                <ul className="text-[#77878F] space-y-3">
                  {accessories.map((accessorie, idx) => (
                    <li key={idx}>{accessorie}</li>
                  ))}
                </ul>
                <Link href={"/"}>
                  <div className="flex items-center gap-3 text-yellow-500 py-2 text-lg">
                    <h1>Browse All Product</h1>
                    <FaArrowRightLong />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="uppercase">Quick Links</h1>
            <ul className="text-[#77878F] space-y-3 mt-4">
              {quicklinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={"/"}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="uppercase">Download App</h1>
            <div className="mt-4 space-y-5">
              <div className="flex gap-1 md:gap-4 max-w-[176px] max-h-[70px] p-2 md:p-4 bg-[#303639] rounded-md">
                <div className="text-4xl">
                  <IoLogoGooglePlaystore />
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-xs">Get it on</p>
                  <h1 className="text-sm font-bold lg:text-base">
                    Google Play
                  </h1>
                </div>
              </div>
              {/* px-[2px] py-2 md:p-2 */}
              <div className="flex gap-1 md:gap-4 max-w-[176px] max-h-[70px] p-2 md:p-4 bg-[#303639] rounded-md">
                <div className="text-4xl">
                  <FaApple />
                </div>
                <div>
                  <p className="text-xs">Get it on</p>
                  <h1 className="text-sm font-bold lg:text-base">
                    Apple Store
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="uppercase">Popular Tag</h1>
            <div className="mt-4 max-w-[312px]">
              {/* className="flex flex-wrap gap-4" */}

              <div className="flex flex-wrap gap-4">
                {tags.map((tag, idx) => (
                  <button className="category" key={idx}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t-2 border-[#303639] text-center">
        <h1 className="py-4">Copyright by @Istiak</h1>
      </div>
    </footer>
  );
};

export default Footer;
