import { AiOutlinePlus } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { TiPlus } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const OurDoctors = () => {
  return (
    <section className="w-[90%] mx-auto md:my-28 my-12">
      <div className="md:mb-10 mb-6">
        <h1 className="md:text-3xl text-xl font-medium text-[#3f3f41]"></h1>
      </div>
      <div className="md:mb-14 mb-10">
        <p className="text-black/70 text-[14px] font-semibold">Professionals</p>
        <h2 className=" relative text-[#1ABC9C] text-2xl md:text-4xl font-bold mb-3 w-[max-content]">
          Our Doctors
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
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

          {/* Card Content Section */}
          <div className="p-5 shadow-lg  rounded-lg flex-grow space-y-1 relative group">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold text-black/70 hover:text-[#1ABC9C] cursor-pointer">
                Dr. Michael Brown
              </h3>
              <p className="flex gap-1 items-center">
                <FaStarHalfAlt className="text-[20px] block text-yellow-400" />
                3.5k
              </p>
            </div>
            <p className="text-[14px] font-semibold opacity-50 text-gray-900">
              Dermatologist
            </p>
            <div className="flex items-center gap-1 pb-2 pt-4">
              <GrLocation className="text-[23px] opacity-20" />
              <p className="opacity-50 font-medium">Australia</p>
            </div>
            {/* social icon */}
            <div className="flex gap-2 pb-2 pt-3 justify-center">
              {/* Facebook Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/50">
                <FaFacebookF className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>

              {/* Twitter Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/50">
                <FaTwitter className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>

              {/* Phone Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/60">
                <FaPhoneAlt className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>
            </div>
            {/* Bottom Border on Card Hover */}
            <div className="absolute bottom-0 left-0 w-[80%] h-[2px]  bg-[#FD9678] ml-7  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full cursor-pointer bg-white flex flex-col h-full">
          <div className="overflow-hidden flex justify-center items-center flex-col relative rounded-t-lg group">
            <img
              className="group-hover:scale-105 transition-all duration-700 h-[250px] object-cover"
              src="https://i.postimg.cc/GpnqMVGw/healthcare-workers.jpg"
              alt="doctor"
            />
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-35 transition-opacity duration-300 flex items-center justify-center"></div>
            <AiOutlinePlus className="text-white absolute text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Card Content Section */}
          <div className="p-5 shadow-lg rounded-lg flex-grow space-y-1 relative group">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold text-black/70 hover:text-[#1ABC9C] cursor-pointer">
                Dr. Michael Brown
              </h3>
              <p className="flex gap-1 items-center">
                <FaStarHalfAlt className="text-[20px] block text-yellow-400" />
                3.5k
              </p>
            </div>
            <p className="text-[14px] font-semibold opacity-50 text-gray-900">
              Dermatologist
            </p>
            <div className="flex items-center gap-1 pb-2 pt-4">
              <GrLocation className="text-[23px] opacity-20" />
              <p className="opacity-50 font-medium">Australia</p>
            </div>

            {/* social icon */}
            <div className="flex pb-2 gap-2 pt-3 justify-center">

              {/* Facebook Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/50">
                <FaFacebookF className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>

              {/* Twitter Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/50">
                <FaTwitter className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>

              {/* Phone Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/60">
                <FaPhoneAlt className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>
            </div>

            {/* Bottom Border on Card Hover */}
            <div className="absolute bottom-0 left-0 w-[80%] h-[2px]  bg-[#FD9678] ml-7  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full cursor-pointer bg-white flex flex-col h-full">
          <div className="overflow-hidden flex justify-center items-center flex-col relative rounded-t-lg group">
            <img
              className="group-hover:scale-105 transition-all duration-700 h-[250px] object-cover"
              src="https://i.postimg.cc/Dy2hNpQG/young-doctor.jpg"
              alt="doctor"
            />
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-35 transition-opacity duration-300 flex items-center justify-center"></div>
            <AiOutlinePlus className="text-white absolute text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Card Content Section */}
          <div className="p-5 shadow-lg rounded-lg flex-grow space-y-1 relative group">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold text-black/70 hover:text-[#1ABC9C] cursor-pointer">
                Dr. Michael Brown
              </h3>
              <p className="flex gap-1 items-center">
                <FaStarHalfAlt className="text-[20px] block text-yellow-400" />
                3.5k
              </p>
            </div>
            <p className="text-[14px] font-semibold opacity-50 text-gray-900">
              Dermatologist
            </p>
            <div className="flex items-center gap-1 pb-2 pt-4">
              <GrLocation className="text-[23px] opacity-20" />
              <p className="opacity-50 font-medium">Australia</p>
            </div>

            {/* social icon */}
            <div className="flex gap-2 pb-2 pt-3 justify-center">
              {/* Facebook Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/50">
                <FaFacebookF className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>

              {/* Twitter Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/50">
                <FaTwitter className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>

              {/* Phone Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/60">
                <FaPhoneAlt className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>
            </div>
            {/* Bottom Border on Card Hover */}
            <div className="absolute bottom-0 left-0 w-[80%] h-[2px]  bg-[#FD9678] ml-7  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>
        </div>


        {/* Card 4 */}
        <div className="w-full cursor-pointer bg-white flex flex-col h-full">
          {/* Image Section */}
          <div className="overflow-hidden flex justify-center items-center flex-col relative rounded-t-lg group">
            <img
              className="group-hover:scale-105 transition-all duration-700 h-[250px] object-cover"
              src="https://i.postimg.cc/YSVqKN2H/young-woman.jpg"
              alt="doctor"
            />
            <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-35 transition-opacity duration-300 flex items-center justify-center"></div>
            <AiOutlinePlus className="text-white absolute text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Card Content Section */}
          <div className="p-5 shadow-lg rounded-lg flex-grow space-y-1 relative group">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold text-black/70 hover:text-[#1ABC9C] cursor-pointer">
                Dr. Olivia Green
              </h3>
              <p className="flex gap-1 items-center">
                <FaStarHalfAlt className="text-[20px] block text-yellow-400" />
                3.5k
              </p>
            </div>
            <p className="text-[14px] font-semibold opacity-50 text-gray-900">
              Dermatologist
            </p>
            <div className="flex items-center gap-1 pb-2 pt-4">
              <GrLocation className="text-[23px] opacity-20" />
              <p className="opacity-50 font-medium">Australia</p>
            </div>
            {/* social icon */}
            <div className="flex gap-2 pb-2 pt-3 justify-center">
              {/* Facebook Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/50">
                <FaFacebookF className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>

              {/* Twitter Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/50">
                <FaTwitter className="text-black hover:text-[#FD9678] transition-colors duration-300" />
              </div>

              {/* Phone Icon */}
              <div className="bg-white border p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FD9678]/60">
                <FaPhoneAlt className="text-black  hover:text-[#FD9678] transition-colors duration-300" />
              </div>
            </div>

            {/* Bottom Border on Card Hover */}

            <div className="absolute bottom-0 left-0 w-[80%] h-[2px]  bg-[#FD9678] ml-7  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurDoctors;
