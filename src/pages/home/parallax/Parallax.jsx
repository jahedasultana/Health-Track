import { useRef } from "react";
import img from "../../../assets/homeImage/Sheard.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
    ref={sectionRef}
      className="relative bg-cover bg-center md:h-[500px] h-auto md:mt-32 md:mb-10 my-8 py-8 md:py-0"
      style={{
        backgroundImage: "url('https://i.postimg.cc/T39sQfrX/health.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1ABC9C] opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row  justify-between items-center md:h-[500px] h-auto pl-0 md:pl-8">
        {/* Left Side (Text Content) */}
        <div className="md:w-[50%] w-full text-white text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Stay Healthy, Stay Happy!
          </h1>
          <p className="text-base text-[16px] leading-relaxed">
            Your health is your most valuable asset. By incorporating simple
            habits like eating a balanced diet, drinking plenty of water, and
            maintaining regular physical activity, you can significantly improve
            your overall well-being. Remember to take breaks, practice
            mindfulness, and get at least 7-8 hours of quality sleep each night.
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-[50%] pr-8 md:pr-0 md:mt-0 mt-5 w-full">
          <motion.img
            src={img}
            style={{
              translateY,
            }}
            alt="Stay Healthy"
            className="w-full h-[200px]  sm:h-[250px] md:h-[400px] object-cover rounded-lg"
          ></motion.img>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
