"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

const BottomBar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", icon: <FaHome size={18} />, path: "/" },
    { label: "Product", icon: <FaProductHunt size={18} />, path: "/product" },
    { label: "Cart", icon: <FiShoppingCart size={18} />, path: "/cart" },
    { label: "Profile", icon: <FaUser size={18} />, path: "/profile" },
  ];

  return (
    <div className="p-3 fixed bottom-0 sm:hidden flex bg-gradient-to-r from-[#1b6392] via-[#1a5278] to-[#144466] h-[70px] w-full rounded-tr-[20px] rounded-tl-[20px] shadow-lg z-50">
      
      
      <div className="flex items-center justify-around w-full">
        {navItems?.map((Item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-white cursor-pointer transition-all duration-300 ease-in-out 
                                        ${
                                          pathname === Item.path
                                            ? "text-yellow-400"
                                            : "text-white"
                                        } 
                                        hover:scale-110 hover:text-yellow-300`}
            onClick={() => (window.location.pathname = Item.path)}
          >
            {Item.icon}
            <span className="mt-1 text-sm font-medium">{Item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
