import { FaPhoneAlt, FaEnvelope, FaPlus } from "react-icons/fa";

const OurDoctors = () => {
  return (
    <section className="w-[90%] mx-auto">
        <div className="mb-10">
            <p className="text-[#1DBFCC]">Professionals</p>
            <h1 className="md:text-3xl text-xl font-medium text-[#3f3f41]">Our Doctors</h1>
        </div>
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg relative group">
        <div className="relative">
          <img
            className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-y-110"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
            <FaPlus className="text-white text-3xl" />
          </div>
        </div>

        <div className="py-5 text-center">
          <h3 className="text-3xl text-[#1DBFCC] ">Dr. John Doe</h3>
          <p className="text-lg opacity-70 text-gray-700">Software Engineer</p>
          <hr className="opacity-95 mt-2" />
          <p className="my-2 opacity-50">
            Cum sociis natoque penatibus et magnis dis parturient montesmus.
          </p>
          <hr className="opacity-95 mb-2" />
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt /> +1-212-333-7078
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope /> johan24@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
