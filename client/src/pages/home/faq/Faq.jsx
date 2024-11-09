import { useState } from "react";
import TopIcon from "./TopIcon";
import LeftIcon from "./LeftIcon";
import HeartIcon from "./HeartIcon";
import { FaQuestionCircle } from "react-icons/fa";
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
            <div className=" flex flex-col md:flex-row gap-8">
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
               <div className="md:w-[50%] w-full mx-auto h-[175px]">
        {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <div
            className="flex justify-between items-center cursor-pointer p-3"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <button
              className="text-xl font-normal w-7 h-7 text-white bg-[#991747] rounded-full"
              aria-expanded={open === index}
            >
              {open === index ? "-" : "+"}
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