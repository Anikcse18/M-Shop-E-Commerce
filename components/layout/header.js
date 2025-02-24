import React from "react";

const Header = ({ text, className }) => {
  return (
    <div className={`${className}`}>
      <h1 className={`text-3xl font-semibold text-center`}>{text}</h1>
    </div>
  );
};

export default Header;
