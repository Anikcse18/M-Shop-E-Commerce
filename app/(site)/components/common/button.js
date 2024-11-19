import React from "react";

const Button = ({ className, name, icon }) => {
  return (
    <div className={`${className}`}>
      {name}
      {icon}
    </div>
  );
};

export default Button;
