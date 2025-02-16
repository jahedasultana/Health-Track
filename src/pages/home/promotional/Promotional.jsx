
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Swal from 'sweetalert2';
import image1 from '../../../assets/homeImage/clender.png';
import image2 from '../../../assets/homeImage/heard.png';
import { TiPlus } from "react-icons/ti";


const Promotional = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const handleSubmitNewsletter = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Hooray!",
      text: "You've successfully subscribed to our service. You'll receive an email soon.",
      icon: "success",
    });
  };

  return (
    <section
      ref={sectionRef}
      className=" bg-gradient-to-b from-white to-[#f5edeb] md:py-32 py-5">
      <div className="container mx-auto  text-center p-5 md:p-0 lg:pb-5">
        <div className="relative">
          <div className="text-center pb-2">

            <h2 className="relative text-black md:text-4xl text-2xl font-bold mb-3 w-[max-content] mx-auto">
              Sign up for newsletter
              <TiPlus className="absolute text-[#FD9678] -right-6 -top-4" />
              <TiPlus className="absolute  text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
            </h2>

          </div>
          <p className="mb-4 md:w-[40%] mx-auto text-gray-600">
            Subscribe to our newsletter and stay informed about upcoming
            courses, events, and personalized recommendations for your learning
            journey.
          </p>
          <motion.img
            src={image2}
            alt="book"
            width={360}
            height={100}
            className="absolute -left-[20px] -top-[137px]  hidden lg:inline"
            style={{
              translateY,
            }}></motion.img>

          <motion.img
            src={image1}
            alt="book"
            width={260}
            height={100}
            className="absolute  right-[10px] -top-[-30px] hidden lg:inline"
            style={{
              translateY,
            }}></motion.img>
        </div>
        <form
          onSubmit={handleSubmitNewsletter}
          className="flex justify-center gap-5 flex-col md:flex-row">
          <input
            className="input px-3 rounded-md py-2  border border-[#FD9678] focus:outline-none shadow-md block"
            type="email"
            required
            placeholder="Your Email"
          />
          <button type="submit" className="px-4 py-2 rounded-md bg-secondary text-white bg-[#FD9678] shadow-md transition-opacity font-semibold hover:opacity-80">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Promotional;