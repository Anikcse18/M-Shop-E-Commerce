import React from "react";
import { SlHome } from "react-icons/sl";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeaderRoute = ({ route_name }) => {
  return (
    <div className="route_header">
      <section className="container secondary_text  p-7">
        <div className="flex flex-row gap-2 max-h-[72px]">
          <div className="flex flex-row gap-2 items-center ">
            <SlHome />
            <p>Home</p>
            <MdOutlineKeyboardArrowRight className="text-lg" />
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <p>User Account</p>
            <MdOutlineKeyboardArrowRight className="text-lg" />
          </div>
          <div>
            <p className="text-[#2DA5F3]">{route_name}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderRoute;
