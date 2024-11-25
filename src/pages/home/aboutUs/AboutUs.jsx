import { TiPlus } from "react-icons/ti";
import Last from "./Last";
import Middle from "./Middle";
import TopIcon from "./TopIcone";
import { IoCheckmarkCircle } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className=" md:w-[90%] md:my-32 my-20 w-full mx-auto">
      <div className="flex flex-col md:flex-row items-center space-y-6 gap-14 md:space-y-0">
        {/* Image and Ratings Section ------- TODO: border change */}
        <div className="relative w-full md:w-1/2 h-full md:pl-10 pl-0">
          <img src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/about_1.png" alt="images" />
          <div className="absolute -top-14  md:right-28">
            <TopIcon></TopIcon>
          </div>
          <div className="absolute md:block hidden top-[270px] right-28">
            <Middle/>
          </div>
          <div className="absolute -bottom-12 md:-left-12">
            <Last></Last>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:h-[600px] md:w-1/2 px-6 md:text-left">
      
          <div className=" mb-10">
        <p className="text-black/70 text-[14px] font-semibold">About Us</p>
        <h2 className=" relative text-[#1ABC9C] md:text-4xl text-2xl font-bold mb-3 w-[max-content]">
        Consult A Doctor Anytime,<br /> Anywhere By Search
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>

          <p className="text-gray-500 md:text-[18px] text-[14px] mt-4 pb-4">
            Get latest news in your inbox. consectetur adipiscing elit
            adipiscing. eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
            Get latest news in your inbox. consectetur adipiscing elit  adipiscing.
            eiusmod tempor incididunt ut labore.
          </p>
          <ul className="mt-4 space-y-4 text-gray-500">
            <div className="flex items-center gap-2 ">
            <IoCheckmarkCircle  className="text-xl text-[#1ABC9C]"/>
            <p className="md:text-[16px] text-[13px]">
             Get latest news in your inbox. consectetur elit adipiscing.
            </p>
            </div>
            <div className="flex items-center gap-2 ">
            <IoCheckmarkCircle  className="text-xl text-[#1ABC9C]"/>
            <p className="md:text-[16px] text-[14px]">
             Get latest news in your inbox. consectetur elit adipiscing.
            </p>
            </div>
            <div className="flex items-center gap-2 ">
            <IoCheckmarkCircle  className="text-xl text-[#1ABC9C]"/>
            <p className="md:text-[16px] text-[14px]">
             Get latest news in your inbox. consectetur elit adipiscing.
            </p>
            </div>
            <div className="flex items-center gap-2 ">
            <IoCheckmarkCircle  className="text-xl text-[#1ABC9C]"/>
            <p className="md:text-[16px] text-[14px]">
             Get latest news in your inbox. consectetur elit adipiscing.
            </p>
            </div>
            <div className="flex items-center gap-2 ">
            <IoCheckmarkCircle  className="text-xl text-[#1ABC9C]"/>
            <p className="md:text-[16px] text-[14px]">
             Get latest news in your inbox. consectetur elit adipiscing.
            </p>
            </div>
           
        
           
          </ul>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

