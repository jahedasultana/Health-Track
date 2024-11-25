
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
const WhyChooseUs = () => {
  return (

   <div className=" pb-28 pt-8">
     <div className="bg-[#1ABC9C] h-[400px]  py-20  ">
     

     <div className=" text-center  mb-10">
        <p className="text-white text-[14px] font-semibold mb-2">Our Achievements</p>
        <h2 className=" relative text-white md:text-4xl text-2xl font-bold mb-3 w-[max-content] mx-auto">
        Why Choose Us
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>

     <div className="grid md:grid-cols-4 gap-6 px-4 md:px-16">
       <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
         <h2 className="text-[#FD9678]/80 text-6xl font-bold mb-4">8600</h2>
         <div className="flex justify-center items-center gap-2 mb-2">
           <IoMdCheckmarkCircleOutline className="text-teal-500 text-7xl" />
           <p className="text-xl text-black/70 font-bold">Successful Cases</p>
         </div>
         <p className="text-gray-500">
           Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro
           convallis facilisisro
         </p>
       </div>
       <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
         <h2 className="text-[#FD9678]/80 text-6xl font-bold mb-4">145</h2>
         <div className="flex justify-center items-center gap-2 mb-2">
           <FaUserDoctor className="text-[#1ABC9C] text-7xl" />
           <p className="text-xl font-bold text-black/70 ">Qualified Doctors</p>
         </div>
         <p className="text-gray-500">
           Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro
           convallis facilisisro
         </p>
       </div>
       <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
         <h2 className="text-[#FD9678]/80 text-6xl font-bold mb-4">25</h2>
         <div className="flex justify-center items-center gap-2 mb-2">
           <GrUserExpert  className="text-[#1ABC9C] text-7xl" />
           <p className="text-xl font-bold text-black/70 ">Years of Experience</p>
         </div>
         <p className="text-gray-500">
           Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro
           convallis facilisisro
         </p>
       </div>
       <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
         <h2 className="text-[#FD9678]/80 text-6xl font-bold mb-4">24x7</h2>
         <div className="flex justify-center items-center gap-2 mb-2">
           <MdGroups className="text-[#1ABC9C] text-7xl" />
           <p className="text-xl font-bold text-black/70 ">Staff Availability</p>
         </div>
         <p className="text-gray-500">
           Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro
           convallis facilisisro
         </p>
       </div>
     </div>
   </div>
   </div>
  );
};

export default WhyChooseUs;
