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
        "Our medical services prioritize patient care with a combination of expert professionals and state-of-the-art technology. From routine check-ups to advanced treatments, we ensure personalized attention for every family member. Our commitment to safety, efficiency, and compassion makes us the trusted choice for healthcare. With a focus on accessibility and affordability.",
    },
    {
      image: "https://i.postimg.cc/T2c8PvfM/cheerful-woman.jpg",
      question: "Why choose our medical for your family?",
      answer:
        "We offer comprehensive healthcare solutions tailored to meet your family’s needs. Our dedicated team of doctors and medical staff ensures reliable and effective treatments. With a patient-first approach, we provide a nurturing and welcoming environment for recovery and wellness. Trust us to deliver quality care and support for every stage of life, ensuring peace of mind for your loved ones.",
    },
    {
      image: "https://i.postimg.cc/T2c8PvfM/cheerful-woman.jpg",
      question: "Why opt for our healthcare services for your family?",
      answer:
        "Your family deserves the best in healthcare, and that’s exactly what we deliver. Our advanced facilities and skilled professionals work tirelessly to provide high-quality care for all. From preventive care to specialized treatments, we cater to every need with precision and empathy. Choose us for a dependable healthcare partner focused on keeping your loved ones healthy and happy.",
    },
  ];
  

  return (
    <div className="w-[90%] mx-auto md:my-24 my-12">
      <div className="">
        <h2 className="text-primary text-2xl mb-3">Our Hospital Updates</h2>
        <div className="w-[80px] h-[2px] mb-8 bg-secondary"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* FAQ Section */}
        <div className="md:w-[72%]">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-[#FFFAF9] border pb-2">
              <div
                className="flex justify-between items-center cursor-pointer p-[14px]"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-medium flex items-center gap-4 transition-all duration-1000 delay-700">
                  <FaQuestionCircle
                    className={`text-lg ${
                      open === index ? "text-primary" : "text-primary"
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


        {/* image */}
        <div className="md:w-[28%] group">
          <div className="relative">
            <img
              className="h-[406px] w-full object-cover border-b-2 border-[#FD9678] rounded-lg"
                 src="https://i.postimg.cc/ZY7K1tWH/cool-doctor.jpg"
              alt="Doctor"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary bg-opacity-10 rounded-lg transition-opacity duration-500 ease-in-out group-hover:bg-opacity-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHospitalUpdates;
