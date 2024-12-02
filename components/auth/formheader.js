import React from "react";

const FormHeader = ({ headding, details }) => {
  return (
    <section className="text-center mx-auto ">
      <h1 className="text-xl font-semibold">{headding}</h1>
      <p className="text-secondary-text-color mt-4 max-w-[325px] mx-auto">
        {details}
      </p>
    </section>
  );
};

export default FormHeader;
