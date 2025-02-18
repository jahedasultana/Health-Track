import { TiPlus } from "react-icons/ti";
import mainImg from "../../../assets/homeImage/team2.png";


const AboutUs = () => {
  return (
    <div className="md:w-[100%] px-6 md:px-0 relative md:pl-20 mb-10 md:mb-28  w-full mx-auto">
      {/* Title Section */}
      <div className="md:absolute -top-8">
        <p className="text-black/50 text-[14px] font-semibold mb-2">About Us</p>
        <h2 className="relative text-black md:text-4xl text-xl font-bold mb-3 w-[max-content]">
          Your Trusted Healthcare <br /> Partner Anytime
          <TiPlus className="absolute text-[#FD9678] -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] bg-[#1ABC9C]"></div>
      </div>

    

      {/* Content Section */}
      <div className="flex relative flex-col md:flex-row items-center">
        {/* Left Section with Background Image */}

        <div
        className="absolute md:block hidden -left-[100px] -top-20 inset-0 h-[450px] w-[390px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://kamleshyadav.com/html/healthcare/bootstrap5/images/service/wedobg.png')`,
        }}
      ></div>
        <div
          className="w-full md:w-[40%]"
          
        >
          <div className="bg-white/70 backdrop-blur-sm">
            <p>
              At our healthcare platform, we are committed to bridging the gap
              between patients and medical professionals. Our mission is to
              ensure that quality healthcare is accessible to everyone,
              regardless of location or time constraints. With a team of highly
              skilled doctors and a user-friendly system, you can easily search
              for, consult, and receive expert medical advice anytime and
              anywhere.
            </p>
          </div>
        </div>

        {/* Right Section with Main Image */}
        <div className="w-full md:w-[60%] flex justify-end items-center h-full">
          <img className="h-auto border-b-[1px] border-[#FD9678]" src={mainImg} alt="images" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
