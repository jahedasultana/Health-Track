import TestimonialSlide from "./TestimonialSlide";

const Testimonial = () => {
  return (
    <div className="flex w-[90%] mx-auto mt-16">
      {/* Left side heading and description */}
      <div className="w-[35%] bg-[#FFFFFF] space-y-4">
        <h6 className="text-lg font-semibold text-[#1DBFCC]">
          20+ Years Of Experiences
        </h6>
        <h1 className="md:text-4xl text-xl font-bold text-[#3f3f41]">
          What Our Patients Say About Us
        </h1>
        <p className="text-gray-600">
          Adipiscing elitadi piscing elits eddo eusmod teo mpor incididunt
          utlabore edolor magnased doe iusmod tempor incididunt utlaboreet
          dolore magna aliqua. Quis ipsum suspend isseultrices and gravida.
          Consectetur adipiscing elitadipiscing in elitserissed aliqua.
        </p>
      </div>

      {/* Right side testimonial cards */}
      <div className="w-[65%] bg-[#F4F7F9]  space-x-4 p-4">
     

            <TestimonialSlide></TestimonialSlide>
      </div>
    </div>
  );
};

export default Testimonial;
