"use client";
import { faqList } from "@/utils/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import React from "react";

const SingelAnswer = () => {
  
  const ansid = useParams();

  const data = faqList.find((list) => list.id === parseInt(ansid.id));

  return (
    <div div className="container public-sans mt-16 mb-5">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-4xl">{data.question}</h1>
          <h1 className="text-2xl mt-5 ">{data.answer}</h1>
        </div>
        <div>
          <Image
            src="/answer.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default SingelAnswer;
