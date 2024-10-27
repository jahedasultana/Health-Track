import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const OurDoctors = () => {
  return (
    <section className="w-[90%] mx-auto mb-16">
      <div className="mb-10">
        <p className="text-[#1DBFCC]">Professionals</p>
        <h1 className="md:text-3xl text-xl font-medium text-[#3f3f41]">Our Doctors</h1>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {/* Card 1 */}
        <div className="w-full bg-white flex flex-col h-full">
          <div className="overflow-hidden flex justify-center items-center flex-col relative rounded-t-lg group">
            <img
              className="group-hover:scale-105 transition-all duration-700"
              src="https://i.postimg.cc/bJ7Jbx4T/doctor-girl.jpg"
              alt="doctor"
            />
            <div className="absolute inset-0 bg-[#1DBFCC] opacity-0 group-hover:opacity-35 transition-opacity duration-300 flex items-center justify-center"></div>
            <AiOutlinePlus className="text-white absolute text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="py-5 text-center border-r border-l border-b border-gray-400/50 flex-grow">
            <h3 className="text-[24px] text-[#1DBFCC]">Dr. Emily Stone</h3>
            <p className="text-lg opacity-70 text-gray-900">Cardiologist</p>
            <hr className="opacity-95 mt-2" />
            <p className="my-2 w-[250px] mx-auto opacity-50">
              Expert in heart health and disease prevention for all patients.
            </p>
            <hr className="opacity-95 mb-2" />
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#1DBFCC]" /> +1-555-123-4567
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#1DBFCC]"/> emily.stone@hospital.com
            </p>
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
            <hr className="opacity-95 mt-2" />
            <p className="my-2 w-[250px] mx-auto opacity-50">
              Specializes in child health and comprehensive pediatric treatments.
            </p>
            <hr className="opacity-95 mb-2" />
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#1DBFCC]"/> +1-555-987-6543
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#1DBFCC]"/> sarah.smith@hospital.com
            </p>
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
            <p className="text-lg opacity-70 text-gray-900">Orthopedic Surgeon</p>
            <hr className="opacity-95 mt-2" />
            <p className="my-2 w-[250px] mx-auto opacity-50">
              Skilled in bone and joint surgeries, improving mobility, pain-free.
            </p>
            <hr className="opacity-95 mb-2" />
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#1DBFCC]"/> +1-555-321-4567
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#1DBFCC]"/> michael.brown@hospital.com
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
            <hr className="opacity-95 mt-2" />
            <p className="my-2 w-[250px] mx-auto opacity-50">
              Focused on skin health, treating conditions with expert guidance.
            </p>
            <hr className="opacity-95 mb-2" />
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#1DBFCC]"/> +1-555-654-3210
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#1DBFCC]"/> olivia.green@hospital.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
