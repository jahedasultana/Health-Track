import { useState } from "react";
import { FaQuestion } from "react-icons/fa";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase. Please keep your receipt.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 5-7 business days, depending on your location.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support through email and chat.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support through email and chat.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support through email and chat.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support through email and chat.Yes, we offer 24/7 customer support through email and chat.",
    },
  ];

  return (
    <div className="container w-[90%]  mx-auto p-5">
      <h2 className="md:text-3xl  text-xl font-medium mb-8 flex items-center text-[#3f3f41] gap-3">
        <FaQuestion className="text-[#1DBFCC]" /> Frequently Asked Questions
      </h2>

  
      {/* FAQ Section with Image on the Right */}
      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* FAQ Section (70% width) */}
        <div className="md:w-[60%] w-full space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg text-[#6e6e6f] font-medium">{faq.question}</h3>
                <button
                  className="text-xl font-normal w-7 h-7 text-white bg-[#1DBFCC] rounded-full"
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

        {/* Image Section (30% width) */}
        <div className="md:w-[40%] w-full mt-6 md:mt-0 relative">
          <img
            src="https://img.freepik.com/free-vector/question-mark-sign-with-chat-bubble-sticker-ideas-speech_1017-43369.jpg?t=st=1728558652~exp=1728562252~hmac=5bc1876df16790dde8e767939036e7847fb40327e92237cc4e602785d4207ae8&w=740"
            alt="faq"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-[#1DBFCC] bg-opacity-40 flex justify-center items-center  opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-5xl font-bold">FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
