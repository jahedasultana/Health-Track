import {
  MdHealthAndSafety,
  MdSchedule,
  MdInsights,
  MdSecurity,
  MdSupportAgent,
} from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row relative md:mb-12  md:mt-20 mt-10  gap-8 md:gap-12 items-center w-[95%] md:w-[90%] mx-auto">
      {/* Background Box */}
      <div className="absolute -top-6 left-1 md:-left-[63px] bg-[#1DBFCC] h-[250px] md:h-[320px] z-0 w-[250px] md:w-[320px] hidden md:block">
        <div className="relative">
          <p className="-rotate-90 absolute top-24 md:top-36 text-2xl md:text-4xl font-bold text-white/90 -left-16 md:-left-28">
            Why Choose Us
          </p>
        </div>
      </div>

      <h1 className="relative text-center md:hidden text-[#535354] text-3xl font-bold">
          <span className="absolute inset-0 bg-[#02929c]  opacity-30 blur-md rounded-md"></span>
          Why Choose Us
        </h1>

      {/* Image with overlay */}
      <div className="relative  w-full md:w-[50%] z-10">
        <img
          className="h-[300px] md:h-[400px] w-full object-cover"
          src="https://i.postimg.cc/ry0NVkbP/hand-holding.jpg"
          alt="whyChoose"
        />
        <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-all duration-1000  z-10"></div>{" "}
        {/* Overlay */}
      </div>

      {/* Text and Icons */}
      <div className="w-full md:w-[50%] text-[16px] md:text-[18px] font-semibold space-y-4 text-right mt-4 md:mt-0">
        {" "}
        {/* Align text right */}
        {/* content 1 */}
        <div className="flex w-full items-center gap-4 md:gap-5 justify-start">
          {" "}
          {/* Align icon and text */}
          <div className="bg-[#1DBFCC] rounded-full">
            <p className="h-10 md:h-16 w-10 md:w-16 text-lg md:text-xl font-semibold flex items-center justify-center text-white">
              <MdHealthAndSafety size={25} />
            </p>
          </div>
          <p className="text-gray-600 text-start md:text-right">
              Streamlined Appointment Scheduling
            </p>
        </div>
        {/* content 2 */}
        <div className="flex items-center gap-4 md:gap-5 justify-start">
          <div className="bg-[#1DBFCC] rounded-full">
            <p className="h-10 md:h-16 w-10 md:w-16 text-lg md:text-xl font-semibold flex items-center justify-center text-white">
              <MdInsights size={25} />
            </p>
          </div>
         
            <p className="text-gray-600 md:text-right text-start">
              Real-time Analytics & Reporting
            </p>
         
        </div>
        {/* content 3 */}
        <div className="flex items-center gap-4 md:gap-5 justify-start">
          <div className="bg-[#1DBFCC] rounded-full">
            <p className="h-10 md:h-16 w-10 md:w-16 text-lg md:text-xl font-semibold flex items-center justify-center text-white">
              <MdSchedule size={25} />
            </p>
          </div>

            <p className="text-gray-600  md:text-right text-start ">
              Remote Access & Telemedicine Integration
            </p>
        
        </div>
        {/* content 4 */}
        <div className="flex items-center gap-4 md:gap-5 justify-start">
          <div className="bg-[#1DBFCC] rounded-full">
            <p className="h-10 md:h-16 w-10 md:w-16 text-lg md:text-xl font-semibold flex items-center justify-center text-white">
              <MdSecurity size={25} />
            </p>
          </div>
        
            <p className="text-gray-600 md:text-right text-start">
              Data Security and Privacy
            </p>
     
        </div>
        {/* content 5 */}
        <div className="flex items-center gap-4 md:gap-5 justify-start">
          <div className="bg-[#1DBFCC] rounded-full">
            <p className="h-10 md:h-16 w-10 md:w-16 text-lg md:text-xl font-semibold flex items-center justify-center text-white">
              <MdSupportAgent size={25} />
            </p>
          </div>
          <p className="text-gray-600 md:text-right text-start">24/7 Services</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
