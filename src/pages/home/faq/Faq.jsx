import { useState } from "react";
import TopIcon from "./TopIcon";
import LeftIcon from "./LeftIcon";
import HeartIcon from "./HeartIcon";
import { FaQuestionCircle } from "react-icons/fa";

import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };
  const faqs = [
    {
      question: "Why opt for our medical services for your family?",
      answer:
        "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      question: "Why choose our medical for your family?",
      answer:
        "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      question: "Why opt for our healthcare services for your family?",
      answer:
        "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      question: "Why choose our medical services for your family?",
      answer:
        "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      question: "Why choose our medical services for your family?",
      answer:
        "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <div className=" w-[90%] mx-auto ">
      <div className=" flex flex-col md:flex-row gap-10">
        {/* FAQ Image with Overlay Text */}
        <div className="md:w-[50%] w-full mt-6 md:mt-0 relative">
          <img
            src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/faq.png"
            alt="faq"
            className="w-full h-auto"
          />

          <div className="absolute -top-10 right-14">
            <TopIcon></TopIcon>
          </div>
          <div className="absolute bottom-12 -left-5">
            <LeftIcon></LeftIcon>
          </div>
          <div className="absolute bottom-14 right-[1px]">
            <HeartIcon></HeartIcon>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="md:w-[50%] w-full mx-auto md:h-[175px]">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-gray-200 border pb-2">
              <div
                className="flex justify-between items-center cursor-pointer p-[14px]"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-medium  flex items-center gap-4 transition-all duration-700 delay-500"><FaQuestionCircle className={`text-lg ${
                    open === index ? "text-[#1DBFCC]" : "text-red-700"
                  }`}></FaQuestionCircle>{faq.question}</h3>
                <button
                  
                  aria-expanded={open === index}
                >
                  {open === index ? <RiArrowDropUpLine className="text-4xl"/> : <RiArrowDropDownLine className="text-4xl"/>}
                </button>
              </div>
              <div
                className={`mt-2 p-3 text-gray-600 transition-all duration-300 ease-in-out ${
                  open === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
