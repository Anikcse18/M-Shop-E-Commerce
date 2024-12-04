// import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Plus, Minus } from "lucide-react";

"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import Button from "@/components/common/button";
import { FaArrowRightLong } from "react-icons/fa6";

const FAQ = () => {
  const generalFAQs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a hassle-free return policy for our customers. You can return items within 30 days of receiving your order as long as the products are unused, in their original packaging, and with all tags intact. To initiate a return, please visit the 'Returns' section on our website and follow the instructions. Once we receive the item and verify its condition, we will process your refund or exchange within 7-10 business days.",
    },
    {
      question: "Do you offer free shipping?",
      answer:
        "Yes, we provide free standard shipping on all orders over $50. For orders below $50, a nominal shipping fee applies, which will be calculated at checkout based on your location. Please note that free shipping is only available for addresses within our standard shipping zones and may exclude certain remote or international locations. Expedited shipping options are also available for an additional fee.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "Yes, you can make changes to your order within 24 hours of placing it, as long as it hasn’t been processed for shipping. To modify your order, contact our customer support team as soon as possible. Provide your order number and details about the changes you'd like to make. While we do our best to accommodate requests, we recommend double-checking your order before confirming to ensure accuracy.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "We’re here to assist you with any questions or concerns. You can reach our customer support team through multiple channels: via email at support@example.com, live chat on our website, or by calling our hotline at +1-800-123-4567. Our support hours are from 9 AM to 7 PM, Monday to Saturday. For quick responses, we recommend using live chat during business hours.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping fees and delivery times vary depending on the destination. At checkout, you can view available shipping options and estimated delivery times for your location. Please note that international orders may be subject to customs duties, taxes, or other fees imposed by the destination country. Customers are responsible for these additional charges, so we recommend checking with your local customs office for more information.",
    },
  ];
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!email || !subject || !message) {
      alert("Please fill in all the fields");
      return;
    }

    console.log({ email, subject, message });
  };

  return (
    <div className="container public-sans flex flex-col gap-14  lg:gap-28 md:flex-row mt-10 md:mt-16  lg:mt-24  xl:h-[100vh] ">
      <div className="flex-1">
        <h1 className=" text-[20px] md:text-[28px] xl:text-[32px] p-2">
          Frequently Asked Question
        </h1>

        <Accordion type="single" collapsible className="w-full mt-8 ">
          {generalFAQs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="mb-6">
              <AccordionTrigger className="w-full border-[1px] p-6 text-lg group hover:text-white font-medium">
                <span>{faq.question}</span>
                <PlusMinusIcon />
              </AccordionTrigger>
              <AccordionContent className="text-md text-secondary-text-color  p-6 shadow-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex-1">
        <div className="lg:h-[500px] max-w-[400px] bg-[#FBF4CE] p-5">
          <div>
            <h1 className="text-lg public-sans font-medium">
              Don’t find your answer, Ask for support.
            </h1>
            <p className="text-md mt-3 text-secondary-text-color">
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
              molestie accumsan dui, non iaculis primis in faucibu raesent eget
              sem purus.
            </p>
          </div>
          <form className="mt-6 flex flex-col gap-y-4" onSubmit={handleClick}>
            <Input
              placeholder="Email"
              aria-label="Email"
              name="email"
              className="bg-white py-6 rounded-none text-lg"
            />
            <Input
              placeholder="Subject"
              aria-label="Subject"
              name="subject"
              className="bg-white py-6 rounded-none text-lg"
            />

            <Textarea
              placeholder="Message (Optional)"
              aria-label="Message"
              name="text"
              className="bg-white py-6 rounded-none mt-2 !text-xl resize-none line-clamp-3"
            />

            <Button className="gap-2 mt-2 h-12 bg-button-active w-48 capitalize font-semibold">
              SEND MESSAGE <FaArrowRightLong />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
function PlusMinusIcon() {
  return (
    <div className="relative w-6 h-6 shrink-0">
      <Plus className="absolute inset-0 h-4 w-4 shrink-0  duration-200 transition-opacity opacity-100 group-data-[state=open]:opacity-0" />
      <Minus className="absolute inset-0 h-4 w-4 shrink-0  duration-200  transition-opacity opacity-0 group-data-[state=open]:opacity-100" />
    </div>
  );
}
