import React from "react";

// const FormHeader = (headding, details) => {
//   return;
//   <section className="text-center mx-auto ">
//     <h1 className="text-xl font-semibold">{headding}</h1>
//     <p className="text-secondary-text-color mt-4">{details}</p>
//   </section>;
// };

// export default FormHeader;

const FormHeader = ({ headding, details }) => {
  return (
    <section className="text-center mx-auto ">
      <h1 className="text-xl font-semibold">{headding}</h1>
      <p className="text-secondary-text-color mt-4">{details}</p>
    </section>
  );
};

export default FormHeader;
