import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export const InfoCard = ({ title, Icon, description, isEven, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-sm flex flex-col items-center justify-center shadow-md p-10 text-center 
            w-full h-56 border border-[#FD9678]/50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? `${color}` : "#ffffff",
        transition: "background-color 0.5s ease",
      }}
    >
      {/* Background Icon */}
      <Icon
        className={`absolute text-[${color}] opacity-10 text-7xl sm:text-8xl lg:text-9xl space-y-3`}
      />

      {/* Title */}
      <div className="flex flex-col justify-center items-center ">
        <h2
          className={`text-2xl pt-3 font-semibold ${
            isHovered ? "text-white" : "text-black"
          } transition-colors duration-300`}
        >
          {title}
        </h2>
        <div
          className={`w-[80px] h-[2px] mt-2 ${
            isHovered ? "bg-white" : "bg-[#e0e4e4]"
          } transition-colors duration-300`}
        ></div>
        <p
          className={`text-sm mt-2 ${
            isHovered ? "text-white" : "text-black"
          } transition-colors duration-300`}
        >
          {description}
        </p>
      </div>

      {/* Icon Section */}
      <div
        className="absolute -top-[51px] flex items-center justify-center"
        style={{
          width: "110px",
          height: "100px",
          backgroundColor: "#FD96788F",
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <div
          className="flex items-center justify-center text-white"
          style={{
            width: "108px",
            height: "98px",
            backgroundColor: "white",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          <div
            className={`flex items-center  text-2xl ${
              isEven ? "border" : ""
            } sm:text-3xl lg:text-4xl h-full p-[8px]`}
            style={{ color: color }}
          >
            <Icon />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="absolute text-lg -bottom-4 bg-white text-primary border border-[#FD9678]/50 px-6 pt-1 rounded-full">
        <button>
          <FaLongArrowAltRight/>
        </button>
      </div>
    </div>
  );
};
