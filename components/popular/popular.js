import React from "react";
import Header from "../layout/header";
import Link from "next/link";
import { faqList } from "@/utils/data";

const Popular = () => {





  return (

    <div>
      <hr className="mt-16" />
      <Header text={"Popular Items"} className={"mt-5 md:mt-20"} />

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 text-left container public-sans mt-5 md:mt-16">

        {faqList.map((faq, index) => (
          <ul key={index} className="space-y-2 mt-4 md:mt-0">
            <li
              className={
                "text-gray-800 hover:text-orange-500 cursor-pointer text-base"
              }
              key={index}
            >
              <Link href={`/answer/${faq.id}`}>• {faq.question} </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Popular;
