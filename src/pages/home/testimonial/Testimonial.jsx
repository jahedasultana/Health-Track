// import reviews from "/reviews.json";
import { useEffect, useState } from "react";
import TestimonialSlide from "./TestimonialSlide";
import { motion } from "framer-motion";
import { TiPlus } from "react-icons/ti";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const firstcolum = reviews.slice(0, 3);
  const secondColum = reviews.slice(3, 6);
  const lastColum = reviews.slice(6, 9);

  return (
    <section className="mx-auto my-7">
      <div className="md:mb-14 md:pl-20 pl-6 mb-10">
        <p className="text-black/50 text-[14px] font-semibold">Reviews</p>
        <h2 className=" relative text-black text-xl md:text-4xl font-bold mb-3 w-[max-content]">
        Here's What Our Patients <br /> Have to Say
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>

      <div className="relative w-full">
        <div className="section-gradient h-full w-full"></div>
        <div className="overflow-hidden md:flex gap-5 w-[90%] h-[780px] mx-auto">
          {/* first col */}
          <motion.div
            animate={{
              translateY: "-50%",
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className=" w-full flex flex-col gap-5"
          >
            <div className="flex flex-col w-full gap-5" duration={15}>
              {firstcolum.map((first, idx) => (
                <TestimonialSlide key={idx} first={first} />
              ))}
            </div>
            <div className="flex flex-col w-full gap-5" duration={15}>
              {firstcolum.map((first, idx) => (
                <TestimonialSlide key={idx} first={first} />
              ))}
            </div>
          </motion.div>
          {/* second col */}
          <motion.div
            animate={{
              translateY: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className=" w-full flex flex-col gap-5"
          >
            <div className="flex flex-col w-full gap-5" duration={15}>
              {secondColum.map((first, idx) => (
                <TestimonialSlide key={idx} first={first} />
              ))}
            </div>
            <div className="flex flex-col w-full gap-5" duration={15}>
              {secondColum.map((first, idx) => (
                <TestimonialSlide key={idx} first={first} />
              ))}
            </div>
          </motion.div>
          {/* last col */}
          <motion.div
            animate={{
              translateY: "-50%",
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className=" w-full flex flex-col gap-5"
          >
            <div className="flex flex-col w-full gap-5" duration={15}>
              {lastColum.map((first, idx) => (
                <TestimonialSlide key={idx} first={first} />
              ))}
            </div>
            <div className="flex flex-col w-full gap-5" duration={15}>
              {lastColum.map((first, idx) => (
                <TestimonialSlide key={idx} first={first} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
