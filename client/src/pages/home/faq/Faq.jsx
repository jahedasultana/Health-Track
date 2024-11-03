import { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";

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
      <h2 className="md:text-3xl text-xl font-medium mb-8 flex items-center text-[#3f3f41] gap-3">
        <FaQuestion className="text-[#1DBFCC]" /> Frequently Asked Questions
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-10 items-center">
        {/* FAQ Section */}
        <div className="md:w-[60%] w-full space-y-6">
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

        {/* FAQ Image with Overlay Text */}
        <div className="md:w-[40%] w-full mt-6 md:mt-0 relative">
          <img
            src="https://img.freepik.com/free-vector/medical-doctor-operating-surgery_23-2148459147.jpg"
            alt="faq"
            className="w-full h-auto rounded-lg shadow-md"
          />
          
          {/* Overlay Top Icon with Title */}
          <div className="absolute top-[-20px] left-[50%] transform -translate-x-[50%] bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2">
            <span className="text-2xl">😊</span>
            <div>
              <h3 className="font-bold text-lg">Get Your Answer</h3>
              <p className="text-sm text-gray-600">Frequently Asked Questions</p>
            </div>
          </div>

          {/* Bottom Icon Overlay */}
          <div className="absolute bottom-[-20px] left-[50%] transform -translate-x-[50%] bg-white shadow-lg rounded-full p-3">
            <FaHandHoldingMedical className="text-[#1DBFCC] text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
