import React from "react";

const Button = ({ className, name, icon }) => {
  return (
    <div className={`${className} cursor-pointer hover:bg-slate-500`}>
      {name}
      {icon}
    </div>
  );
};

export default Button;
