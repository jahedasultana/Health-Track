import { TiPlus } from "react-icons/ti";
import mainImg from "../../../assets/homeImage/team2.png";
import bgImage from "../../../assets/homeImage/slove.png"; // Import the background image

const AboutUs = () => {
  return (
    <div className="md:w-[100%] relative md:pl-20 mb-36 w-full mx-auto">
      {/* Title Section */}
      <div className="absolute -top-8">
        <p className="text-black/70 text-[14px] font-semibold mb-2">About Us</p>
        <h2 className="relative text-[#1ABC9C] md:text-4xl text-2xl font-bold mb-3 w-[max-content]">
          Your Trusted Healthcare <br /> Partner Anytime
          <TiPlus className="absolute text-[#FD9678] -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] bg-[#1ABC9C]"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Section with Background Image */}
        <div
          className="w-full md:w-[40%] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${bgImage})` }}
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
          <img className="h-auto" src={mainImg} alt="images" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
