import React from "react";
import Header from "../layout/header";
import Link from "next/link";

const Popular = () => {
  const faqGroups = [
    [
      "How do I return my item?",
      "What is Clicons Returns Policy?",
      "How long is the refund process?",
    ],

    [
      "What are the 'Delivery Timelines'?",
      "What is 'Discover Your Daraz Campaign 2022'?",
      "What is the Voucher & Gift Offer in this Campaign?",
    ],
    
    [
      "How to cancel Clicon Order?",
      "Ask the Digital and Device Community?",
      "How to change my shop name?",
    ],
  ];
  console.log(faqGroups);

  return (
    <div>
      <hr className="mt-16" />
      <Header text={"Popular Items"} className={"mt-5 md:mt-20"} />

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 text-left container public-sans mt-5 md:mt-16">
        {faqGroups.map((group, index) => (
          <ul key={index} className="space-y-4 mt-4 md:mt-0">
            {group.map((question, i) => (
              <li
                className={
                  "text-gray-800 hover:text-orange-500 cursor-pointer text-base"
                }
                key={i}
              >
                <Link href={`/help/${question}`}>• {question} </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Popular;
