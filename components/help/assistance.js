import React from "react";
import Header from "../layout/header";
import Image from "next/image";

const Assistance = () => {
  const assistanceOptions = [
    {
      icon: "/help/icon/Truck.png",
      name: "Track Order",
    },
    {
      icon: "/help/icon/LockOpen.png",
      name: "Reset Password",
    },
    {
      icon: "/help/icon/CreditCard.png",
      name: "Payment Option",
    },
    {
      icon: "/help/icon/User.png",
      name: "User & Account",
    },
    {
      icon: "/help/icon/Stack.png",
      name: "Wishlist & Compare",
    },
    {
      icon: "/help/icon/Notepad.png",
      name: "Shipping & Billing",
    },
    {
      icon: "/help/icon/CreditCard.png",
      name: "Shoping Cart & Wallet",
    },
    {
      icon: "/help/icon/Storefront.png",
      name: "Sell on Clicon",
    },
  ];
  return (
    <div className="container">
      <Header text="What can we assist you with today?" />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {assistanceOptions.map((items, index) => (
          <div
            className="border-2 border-[#FFE7D6] cursor-pointer hover:border-[#FA8232] flex gap-5 items-center public-sans p-6 rounded-sm"
            key={index}
          >
            <div>
              <Image src={items.icon} width={30} height={30} alt="Icon" />
            </div>
            <div>
              <h1 className="line-clamp-1">{items.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assistance;
