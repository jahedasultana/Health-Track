import { AiOutlinePlus } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
const OurDoctors = () => {
  return (
    <section className="w-[90%] mx-auto my-28">
      <div className="md:mb-10 mb-6">
       
        <h1 className="md:text-3xl text-xl font-medium text-[#3f3f41]">
          
        </h1>
      </div>
      <div className="">
      <p className="text-black/70 text-[14px] font-semibold">Professionals</p>
        <h2 className="text-[#1ABC9C] text-4xl font-bold mb-3">
        Our Doctors
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {/* Card 1 */}
        <div className="w-full cursor-pointer bg-white flex flex-col h-full">
          <div className="overflow-hidden flex justify-center items-center flex-col relative rounded-t-lg group">
            <img
              className="group-hover:scale-105 transition-all duration-700 h-[250px] object-cover"
              src="https://i.postimg.cc/bJ7Jbx4T/doctor-girl.jpg"
              alt="doctor"
            />
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-35 transition-opacity duration-300 flex items-center justify-center"></div>
            <AiOutlinePlus className="text-white absolute text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* headline */}
          <div className="p-5 border-r border-l border-b border-gray-400/50 flex-grow space-y-1 ">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold text-black/70 hover:text-[#1ABC9C] cursor-pointer">
                Dr. Emily Stone
              </h3>
              <p className="flex gap-1 items-center">
                <FaStarHalfAlt className="text-[20px] block text-yellow-400" />
                3.5k
              </p>
            </div>
            <p className="text-[14px]  font-semibold opacity-50 text-gray-900">
              Cardiologist
            </p>
            <div className="flex items-center gap-1 pt-4">
            <GrLocation className="text-[23px] opacity-20"/>
              <p className="opacity-50 font-medium">Australia</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full bg-white flex flex-col h-full">
          <div className="overflow-hidden flex justify-center items-center flex-col relative rounded-t-lg group">
            <img
              className="group-hover:scale-105 transition-all duration-700"
              src="https://i.postimg.cc/GpnqMVGw/healthcare-workers.jpg"
              alt="doctor"
            />
            <div className="absolute inset-0 bg-[#1DBFCC] opacity-0 group-hover:opacity-35 transition-opacity duration-300 flex items-center justify-center"></div>
            <AiOutlinePlus className="text-white absolute text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="py-5 text-center border-r border-l border-b border-gray-400/50 flex-grow">
            <h3 className="text-[24px] text-[#1DBFCC]">Dr. Sarah Smith</h3>
            <p className="text-lg opacity-70 text-gray-900">Pediatrician</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full bg-white flex flex-col h-full">
          <div className="overflow-hidden flex justify-center items-center flex-col relative rounded-t-lg group">
            <img
              className="group-hover:scale-105 transition-all duration-700"
              src="https://i.postimg.cc/Dy2hNpQG/young-doctor.jpg"
              alt="doctor"
            />
            <div className="absolute inset-0 bg-[#1DBFCC] opacity-0 group-hover:opacity-35 transition-opacity duration-300 flex items-center justify-center"></div>
            <AiOutlinePlus className="text-white absolute text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="py-5 text-center border-r border-l border-b border-gray-400/50 flex-grow">
            <h3 className="text-[24px] text-[#1DBFCC]">Dr. Michael Brown</h3>
            <p className="text-lg opacity-70 text-gray-900">
              Orthopedic Surgeon
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full bg-white flex flex-col h-full">
          <div className="overflow-hidden flex justify-center items-center flex-col relative rounded-t-lg group">
            <img
              className="group-hover:scale-105 transition-all duration-700"
              src="https://i.postimg.cc/YSVqKN2H/young-woman.jpg"
              alt="doctor"
            />
            <div className="absolute inset-0 bg-[#1DBFCC] opacity-0 group-hover:opacity-35 transition-opacity duration-300 flex items-center justify-center"></div>
            <AiOutlinePlus className="text-white absolute text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="py-5 text-center border-r border-l border-b border-gray-400/50 flex-grow">
            <h3 className="text-[24px] text-[#1DBFCC]">Dr. Olivia Green</h3>
            <p className="text-lg opacity-70 text-gray-900">Dermatologist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
