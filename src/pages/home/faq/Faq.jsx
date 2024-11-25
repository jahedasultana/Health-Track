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
    <div className=" w-[90%] mx-auto my-14  md:my-28">
      <div className="md:mb-16 mb-10">
        <p className="text-black/70 text-[14px] font-semibold">Trust</p>
        <h2 className=" relative text-[#1ABC9C] md:text-4xl text-2xl font-bold mb-3 w-[max-content]">
          Why Choose Us
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>

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
            <div key={index} className="mb-4 bg-[#FFFAF9] border pb-2">
              <div
                className="flex justify-between items-center cursor-pointer p-[14px]"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-medium flex items-center gap-4 transition-[max-height] duration-1000 delay-700">
                  <FaQuestionCircle
                    className={`text-lg ${
                      open === index ? "text-[#1ABC9C]" : "text-[#FD9678]"
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
