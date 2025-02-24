import React from "react";
import Header from "../layout/header";
import Image from "next/image";

const Assistance = () => {
  return (
    <div className="container">
      <Header text="What can we assist you with today?" />
      <div className="p-4 grid grid-cols-4 gap-4 mt-10">
        <div className="border-2 border-[#FFE7D6] hover:border-[#FA8232] flex gap-5 items-center public-sans p-6 rounded-sm">
          <div>
            <Image
              src={"/help/icon/Truck.png"}
              width={30}
              height={30}
              alt="Icon"
            />
          </div>
          <div>
            <h1>Track Order</h1>
          </div>
        </div>

        <div className="border-2 border-[#FFE7D6] hover:border-[#FA8232] flex gap-5 items-center public-sans p-6 rounded-sm">
          <div>
            <Image
              src={"/help/icon/Truck.png"}
              width={30}
              height={30}
              alt="Icon"
            />
          </div>
          <div>
            <h1>Track Order</h1>
          </div>
        </div>
        <div className="border-2 border-[#FFE7D6] hover:border-[#FA8232] flex gap-5 items-center public-sans p-6 rounded-sm">
          <div>
            <Image
              src={"/help/icon/Truck.png"}
              width={30}
              height={30}
              alt="Icon"
            />
          </div>
          <div>
            <h1>Track Order</h1>
          </div>
        </div>
        <div className="border-2 border-[#FFE7D6] hover:border-[#FA8232] flex gap-5 items-center public-sans p-6 rounded-sm">
          <div>
            <Image
              src={"/help/icon/Truck.png"}
              width={30}
              height={30}
              alt="Icon"
            />
          </div>
          <div>
            <h1>Track Order</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
