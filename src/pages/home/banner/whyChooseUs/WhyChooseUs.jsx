import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { MdArrowRightAlt } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const WhyChooseUs = () => {
  const [startCounter, setStartCounter] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="pb-36 pt-8" ref={sectionRef}>
      <div className="bg-[#1ABC9C] h-[400px] py-20">
        <div className="text-center mb-10">
          <p className="text-white text-[14px] font-semibold mb-2">
            Our Achievements
          </p>
          <h2 className="relative text-white md:text-4xl text-2xl font-bold mb-3 w-[max-content] mx-auto">
            Why Choose Us
            <TiPlus className="absolute text-[#FD9678] -right-6 -top-4" />
            <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
          </h2>
          <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 px-4 md:px-16">
          {/* Card 1 */}
          <div className="group relative bg-gradient-to-b from-white via-white to-gray-100 rounded-md p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute inset-0 border border-transparent group-hover:border-r-[8px] group-hover:border-t-[3px] group-hover:border-l-[2px] group-hover:border-b-[7px] group-hover:border-[#f2ded9] transition-all duration-300"></div>

            <h2 className="text-[#FD9678]/80 text-6xl font-bold mb-4">
              {startCounter && <CountUp start={0} end={8600} duration={3} />}
            </h2>
            <div className="flex justify-center items-center gap-2 mb-2">
              <IoMdCheckmarkCircleOutline className="text-teal-500 text-7xl" />
              <p className="text-xl text-black/70 font-bold">
                Successful Cases
              </p>
            </div>
            <p className="text-gray-500 mb-4">
              Aenean facilisis sodales est neci Morbi vitapurus on Est
              facilisisro convallis facilisisro
            </p>

            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <button className="flex items-center p-[14px] bg-white text-black/70 hover:border hover:border-[#FD9678]/20 hover:text-white hover:bg-[#FD9678] rounded-full hover:shadow-custom transition-all duration-300 ease-in-out">
                <MdArrowRightAlt className="text-3xl" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gradient-to-b from-white via-white to-gray-100 rounded-md p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute inset-0 border border-transparent group-hover:border-r-[8px] group-hover:border-t-[3px] group-hover:border-l-[2px] group-hover:border-b-[7px] group-hover:border-[#f2ded9] transition-all duration-300"></div>
            <h2 className="text-[#FD9678]/80 text-6xl font-bold mb-4">
              {startCounter && (
                <CountUp start={0} end={145} duration={3} delay={1} />
              )}
            </h2>
            <div className="flex justify-center items-center gap-2 mb-2">
              <FaUserDoctor className="text-[#1ABC9C] text-7xl" />
              <p className="text-xl font-bold text-black/70">
                Qualified Doctors
              </p>
            </div>
            <p className="text-gray-500">
              Aenean facilisis sodales est neci Morbi vitapurus on Est
              facilisisro convallis facilisisro
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <button className="flex items-center p-[14px] bg-white text-black/70 hover:border hover:border-[#FD9678]/20 hover:text-white hover:bg-[#FD9678] rounded-full hover:shadow-custom transition-all duration-300 ease-in-out">
                <MdArrowRightAlt className="text-3xl" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gradient-to-b from-white via-white to-gray-100 rounded-md p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute inset-0 border border-transparent group-hover:border-r-[8px] group-hover:border-t-[3px] group-hover:border-l-[2px] group-hover:border-b-[7px] group-hover:border-[#f2ded9] transition-all duration-300"></div>

            <h2 className="text-[#FD9678]/80 text-6xl font-bold mb-4">
              {startCounter && (
                <CountUp start={0} end={25} duration={3} delay={2} />
              )}
            </h2>
            <div className="flex justify-center items-center gap-2 mb-2">
              <GrUserExpert className="text-[#1ABC9C] text-7xl" />
              <p className="text-xl font-bold text-black/70">
                Years of Experience
              </p>
            </div>
            <p className="text-gray-500">
              Aenean facilisis sodales est neci Morbi vitapurus on Est
              facilisisro convallis facilisisro
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <button className="flex items-center p-[14px] bg-white text-black/70 hover:border hover:border-[#FD9678]/20 hover:text-white hover:bg-[#FD9678] rounded-full hover:shadow-custom transition-all duration-300 ease-in-out">
                <MdArrowRightAlt className="text-3xl" />
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-gradient-to-b from-white via-white to-gray-100 rounded-md p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute inset-0 border border-transparent group-hover:border-r-[8px] group-hover:border-t-[3px] group-hover:border-l-[2px] group-hover:border-b-[7px] group-hover:border-[#f2ded9] transition-all duration-300"></div>
            <h2 className="text-[#FD9678]/80 text-6xl font-bold mb-4">24X7</h2>
            <div className="flex justify-center items-center gap-2 mb-2">
              <MdGroups className="text-[#1ABC9C] text-7xl" />
              <p className="text-xl font-bold text-black/70">
                Staff Availability
              </p>
            </div>
            <p className="text-gray-500">
              Aenean facilisis sodales est neci Morbi vitapurus on Est
              facilisisro convallis facilisisro
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <button className="flex items-center p-[14px] bg-white text-black/70 hover:border hover:border-[#FD9678]/20 hover:text-white hover:bg-[#FD9678] rounded-full hover:shadow-custom transition-all duration-300 ease-in-out">
                <MdArrowRightAlt className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
