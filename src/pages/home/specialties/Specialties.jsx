import { TiPlus } from "react-icons/ti";
import { InfoCard } from "./InfoCard";
import { FaHeartbeat, FaTooth, FaBrain, FaEye } from "react-icons/fa";

const Specialties = () => {
  return (
    <div className="w-[90%] space-y-2 mt-[20px] md:mt-[90px] mb-10 md:mb-28 mx-auto ">
  

      <div className=" mb-16">
        <p className="text-black/70 text-[14px] font-semibold mb-2">Professionals</p>
        <h2 className=" relative text-[#1ABC9C] md:text-4xl text-2xl font-bold mb-3 w-[max-content]">
        Our Specialties
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>


      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {doctorCards.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            color={card.color}
            Icon={card.Icon}
            description={card.description}
            isEven={card.isEven}
          />
        ))}
      </div>
    </div>
  );
};

const doctorCards = [
  {
    title: "Cardiologist",
    Icon: FaHeartbeat,
    description:
      "Experienced cardiologist specializing in heart health and treatments.",
    color: "#FD9678",
    isEven: false,
  },
  {
    title: "Dentist",
    Icon: FaTooth,
    description: "Expert dentist offering advanced dental care and cleanings.",
    color: "#FD9678",
    isEven: true,
  },
  {
    title: "Neurologist",
    Icon: FaBrain,
    description:
      "Neurologist focused on brain disorders and nervous system issues.",
    color: "#FD9678",
    isEven: false,
  },
  {
    title: "Ophthalmologist",
    Icon: FaEye,
    description:
      "Ophthalmologist skilled in eye health and vision care services.",
    color: "#FD9678",
    isEven: true,
  },
];

export default Specialties;
