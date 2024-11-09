import { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import TopIcon from "./TopIcon";
import LeftIcon from "./LeftIcon";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "Why opt for our medical services for your family?",
      answer: "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      question: "Why choose our medical for your family?",
      answer: "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      question: "Why opt for our healthcare services for your family?",
      answer: "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      question: "Why choose our medical services for your family?",
      answer: "Get latest news in your inbox. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <div className="container w-[90%] mx-auto">
     

      <div className=" relative flex flex-col md:flex-row md:space-x-10 items-center">
          {/* FAQ Image with Overlay Text */}
          <div className="md:w-[50%] w-full mt-6 md:mt-0 relative">
          <img
            src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/faq.png"
            alt="faq"
            className="w-full h-auto rounded-lg shadow-md"
          />
          
   <div className="absolute -top-10 right-14">
   <TopIcon></TopIcon>
   </div>
   <di className="absolute bottom-12 -left-5">
    <LeftIcon></LeftIcon>
   </di>
        </div>


        {/* FAQ Section */}
        <div className="md:w-[50%] w-full space-y-6">

        <h2 className="md:text-3xl text-xl font-medium mb-8 flex items-center text-[#3f3f41] gap-3">
        <FaQuestion className="text-[#1DBFCC]" />Frequently Asked Questions
      </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:w-full w-[90%] text-[#6e6e6f] font-medium">{faq.question}</h3>
                <button
                  className="text-xl font-semibold w-7 h-7 text-white bg-[#1DBFCC] rounded-full"
                  aria-expanded={open === index}
                >
                  {open === index ? "-" : "+"}
                </button>
              </div>
              <div
                className={`mt-2 text-gray-600 transition-all duration-300 ease-in-out ${
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
