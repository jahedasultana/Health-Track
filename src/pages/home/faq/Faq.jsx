import { useState } from "react";
import TopIcon from "./TopIcon";
import LeftIcon from "./LeftIcon";
import HeartIcon from "./HeartIcon";
import { FaQuestionCircle } from "react-icons/fa";

import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };
  const faqs = [
    {
      question: "What specialties do your hospital provide?",
      answer:
        "Our hospital offers cardiology, orthopedics, pediatrics, gynecology, and more for comprehensive care."
    },
    {
      question: "Are emergency services available 24/7?",
      answer:
        "Yes, we provide 24/7 emergency services with skilled doctors and advanced facilities."
    },
    {
      question: "Do you offer online doctor consultations?",
      answer:
        "Yes, we have an online consultation system for quick and convenient medical advice."
    },
    {
      question: "What insurance policies do you accept?",
      answer:
        "We accept most major insurance providers. Please contact us for detailed coverage information."
    },
    {
      question: "Do you provide specialized care for children?",
      answer:
        "Yes, our pediatric department offers specialized care for infants, children, and adolescents."
    }
  ];
  
  return (
    <div className=" w-[90%] mx-auto my-14  md:my-28">
      <div className="md:mb-16 mb-10">
        <p className="text-black/50 text-[14px] font-semibold">FAQ</p>
        <h2 className=" relative text-black md:text-4xl text-xl font-bold mb-3 w-[max-content]">
        Frequently Asked Questions
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-secondary"></div>
      </div>

      <div className=" flex flex-col md:flex-row gap-10">
        {/* FAQ Image with Overlay Text */}
        <div className="md:w-[50%] w-full mt-6 md:mt-0 relative">
          <img
            src="https://i.postimg.cc/bYFKnMNW/faq.png"
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
            <div key={index} className="mb-4 bg-[#FFFAF9] border pb-2">
              <div
                className="flex justify-between items-center cursor-pointer p-[14px]"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-medium flex items-center gap-4 transition-[max-height] duration-1000 delay-700">
                  <FaQuestionCircle
                    className={`text-lg ${
                      open === index ? "text-[#1ABC9C]" : "text-[#df1710]"
                    }`}
                  />
                  {faq.question}
                </h3>
                <button aria-expanded={open === index}>
                  {open === index ? (
                    <RiArrowDropUpLine className="text-4xl" />
                  ) : (
                    <RiArrowDropDownLine className="text-4xl" />
                  )}
                </button>
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                  open === index ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="mt-2 pl-16 pb-6 pr-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
