import { CiBrightnessUp } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
const WhyChooseUs = () => {
  return (

   <div className=" pb-24 pt-8">
     <div className="bg-[#1ABC9C] h-[400px]  py-16  ">
     
     <div className="text-center mb-12">
       <h2 className="text-white text-3xl font-bold mb-2">Our Achievements</h2>
       <h1 className="text-white text-4xl font-extrabold">Why Choose Us</h1>
     </div>
     <div className="grid md:grid-cols-4 gap-6 px-4 md:px-16">
       <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
         <h2 className="text-pink-400 text-6xl font-bold mb-4">8600</h2>
         <div className="flex justify-center items-center gap-2 mb-2">
           <IoMdCheckmarkCircleOutline className="text-teal-500 text-7xl" />
           <p className="text-xl font-bold">Successful Cases</p>
         </div>
         <p className="text-gray-500">
           Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro
           convallis facilisisro
         </p>
       </div>
       <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
         <h2 className="text-pink-400 text-6xl font-bold mb-4">145</h2>
         <div className="flex justify-center items-center gap-2 mb-2">
           <FaUserDoctor className="text-teal-500 text-7xl" />
           <p className="text-xl font-bold">Qualified Doctors</p>
         </div>
         <p className="text-gray-500">
           Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro
           convallis facilisisro
         </p>
       </div>
       <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
         <h2 className="text-pink-400 text-6xl font-bold mb-4">25</h2>
         <div className="flex justify-center items-center gap-2 mb-2">
           <GrUserExpert  className="text-teal-500 text-7xl" />
           <p className="text-xl font-bold">Years of Experience</p>
         </div>
         <p className="text-gray-500">
           Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro
           convallis facilisisro
         </p>
       </div>
       <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
         <h2 className="text-pink-400 text-6xl font-bold mb-4">24x7</h2>
         <div className="flex justify-center items-center gap-2 mb-2">
           <MdGroups className="text-teal-500 text-7xl" />
           <p className="text-xl font-bold">Staff Availability</p>
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
