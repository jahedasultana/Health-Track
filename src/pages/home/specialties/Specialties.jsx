import { TiPlus } from "react-icons/ti";
import { InfoCard } from "./InfoCard";
import { FaHeartbeat, FaTooth, FaBrain, FaEye } from "react-icons/fa";

const Specialties = () => {
  return (
    <div className="relative w-full ">
      {/* Rotated Background Image */}
      <div
        className="absolute md:block hidden -left-[100px] top-0 inset-0 h-[450px] w-[390px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://kamleshyadav.com/html/healthcare/bootstrap5/images/service/wedobg.png')`,
        }}
      ></div>

      {/* Content Section */}
      <div className="relative w-[90%] space-y-2 pt-[30px] md:mt-[90px] mb-10 md:mb-28 mx-auto">
        <div className="mb-20">
          <p className="text-black/50 text-[14px] font-semibold mb-2">
            Professionals
          </p>
          <h2 className="relative text-black md:text-4xl text-xl font-bold mb-3 w-[max-content]">
            Our Specialties
            <TiPlus className="absolute text-[#FD9678] -right-6 -top-4" />
            <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
          </h2>
          <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 space-y-14 md:space-y-0">
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
    </div>
  );
};

const doctorCards = [
  {
    title: "Cardiologist",
    Icon: FaHeartbeat,
    description:
      "Experienced cardiologist specializing in heart health and treatments.",
    color: "#ee2e31",
    isEven: false,
  },
  {
    title: "Dentist",
    Icon: FaTooth,
    description: "Expert dentist offering advanced dental care and cleanings.",
    color: "#82a6b1",
    isEven: true,
  },
  {
    title: "Neurologist",
    Icon: FaBrain,
    description:
      "Neurologist focused on brain disorders and nervous system issues.",
    color: "#d34f73",
    isEven: false,
  },
  {
    title: "Ophthalmologist",
    Icon: FaEye,
    description:
      "Ophthalmologist skilled in eye health and vision care services.",
    color: "#3772ff",
    isEven: true,
  },
];

export default Specialties;
