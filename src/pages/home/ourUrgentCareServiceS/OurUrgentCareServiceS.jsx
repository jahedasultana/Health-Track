import { TiPlus } from "react-icons/ti";

const services = [
  { name: "Sugar Testing", icon: "🩸" },
  { name: "Antibody Testing", icon: "💉" },
  { name: "Vaccination Dose", icon: "💊" },
  { name: "X-Ray And ECG", icon: "📉" },
  { name: "Lipid Profile", icon: "📄" },
  { name: "Thyroid Test", icon: "🧬" },
  { name: "Hepatic Function", icon: "🫁" },
  { name: "Prolactin Test", icon: "📊" },
];

const OurUrgentCareServiceS = () => {
  return (
    <div className="pb-20 pt-14 my-14  md:my-28 px-4 bg-[#FFFAF9]">
      <div className="w-[90%] mx-auto">

      <div className="md:mb-16 mb-10">
        <p className="text-black/70 text-[14px] font-semibold">Services</p>
        <h2 className=" relative text-[#1ABC9C] md:text-4xl text-2xl font-bold mb-3 w-[max-content]">
        Our Urgent Care Services
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>


     
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 w-[90%]  mx-auto gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="hover:-translate-y-[12px] transition-all duration-700 hover:bg-gradient-to-t from-[#FD9678]  p-[0.5px] hover:shadow-2xl shadow-md rounded-lg hover:rounded-t-lg hover:rounded-none hover:text-[#1ABC9C]"
          >
            <div className="flex flex-col justify-center items-center bg-white p-4 rounded-lg hover:rounded-t-lg hover:rounded-none h-[250px]">
              <div className="bg-[#f7eae7] py-[14px] px-[5px] rounded-full mb-4">
                <span className="text-5xl">{service.icon}</span>
              </div>
              <h3 className="text-xl whitespace-pre-line text-black/70 font-semibold text-center">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurUrgentCareServiceS;
