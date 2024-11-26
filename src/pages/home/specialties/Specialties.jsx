import { InfoCard } from "./InfoCard";
import { FaHeartbeat, FaTooth, FaBrain, FaEye } from "react-icons/fa";

const Specialties = () => {
  return (
    <div className="w-[90%] space-y-24 mt-[70px] mb-24 mx-auto ">
      <div className="">
        <p className="text-[#1DBFCC]">Professionals</p>
        <h1 className="md:text-3xl text-xl font-medium text-[#3f3f41]">
          Our Specialties
        </h1>
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
