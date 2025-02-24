import React from "react";
import dynamic from "next/dynamic";

const Accordion = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.Accordion),
  { ssr: false }
);
const AccordionContent = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.AccordionContent),
  { ssr: false }
);
const AccordionItem = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.AccordionItem),
  { ssr: false }
);
const AccordionTrigger = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.AccordionTrigger),
  { ssr: false }
);

const FAQ = () => {
  return (
    <div className="public-sans">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
