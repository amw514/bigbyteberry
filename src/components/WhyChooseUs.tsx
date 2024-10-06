import React from "react";
import { ReasonsToChoose } from "./ReasonsToChoose";

const WhyChooseUs = () => {
  return (
    <div id="whyus" className="w-11/12 mx-auto py-16 flex flex-col space-x-6">
      <div>
        <h2 className="text-2xl lg:text-5xl font-bold text-center mb-6 dark:text-white">
          Why Choose Us
        </h2>
      </div>
      <div>
        <ReasonsToChoose />
      </div>
    </div>
  );
};

export default WhyChooseUs;
