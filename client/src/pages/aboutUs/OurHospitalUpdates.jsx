import { useState } from "react";

import { FaQuestionCircle } from "react-icons/fa";

import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const OurHospitalUpdates = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };
  const faqs = [
    {
      image: "https://i.postimg.cc/T2c8PvfM/cheerful-woman.jpg",
      question: "Why opt for our medical services for your family?",
      answer:
        "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      image: "https://i.postimg.cc/T2c8PvfM/cheerful-woman.jpg",
      question: "Why choose our medical for your family?",
      answer:
        "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      image: "https://i.postimg.cc/T2c8PvfM/cheerful-woman.jpg",
      question: "Why opt for our healthcare services for your family?",
      answer:
        "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        {/* FAQ Section */}
        <div className="w-[65%]">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-gray-200 border pb-2">
              <div
                className="flex justify-between items-center cursor-pointer p-[14px]"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-medium flex items-center gap-4 transition-all duration-1000 delay-700">
                  <FaQuestionCircle
                    className={`text-lg ${
                      open === index ? "text-[#1DBFCC]" : "text-red-700"
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
                <div className="mt-2 p-3 text-gray-600">
                  <img
                    className="h-[92px] w-[111px] float-start pr-2"
                    src={faq.image}
                    alt="fair"
                  />
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

export default OurHospitalUpdates;
