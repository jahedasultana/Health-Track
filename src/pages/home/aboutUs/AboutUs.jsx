import { TiPlus } from "react-icons/ti";
import mainImg from "../../../assets/homeImage/team.png";
import sideImg from "../../../assets/homeImage/aboutme.png";

const AboutUs = () => {
  return (
    <div className=" md:w-[90%] md:my-32 my-20 w-full mx-auto">
      <div>
        <p className="text-black/70 text-[14px] font-semibold mb-2">About Us</p>
        <h2 className=" relative text-[#1ABC9C] md:text-4xl text-2xl font-bold mb-3 w-[max-content]">
          Consult A Doctor Anytime,
          <br /> Anywhere By Search
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            perferendis totam, nobis vitae molestias, eaque corrupti ut commodi
            obcaecati labore distinctio fugiat iusto dignissimos laborum
            accusamus ducimus aperiam? Quo, a!
          </p>
        </div>

        <div className="w-full md:w-1/2 h-full">
          <img src={mainImg} alt="images" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
