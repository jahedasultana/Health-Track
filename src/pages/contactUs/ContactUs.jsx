import { FaLocationDot } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";

const ContactUs = () => {
  return (
    <section className="bg-[#FFFFFF] mt-16">
      <div className="md:w-[80%] w-full px-6 py-8 mx-auto">
        <div className="flex flex-wrap mt-8">
          <div className="w-full lg:w-1/2 ">
         

            <div className="mt-5">
        <p className="text-black/70 text-[14px] font-semibold">Contact Us</p>
        <h2 className=" relative text-[#1ABC9C] md:text-4xl text-2xl font-bold mb-3 w-[max-content]">
        Get In Touch
          <TiPlus className="absolute text-[#FD9678]  -right-6 -top-4" />
          <TiPlus className="absolute text-[#FD9678] opacity-70 text-2xl -right-[27px] rotate-45 -top-5" />
        </h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>

            <div className=" relative md:pt-16 pt-8 ">
              <img
                className=""
                src="https://kamleshyadav.com/html/healthcare/bootstrap5/healthcare/assets/images/map.png"
                alt=""
              />

              <div className="absolute top-32 right-32 group">
                <FaLocationDot className="text-2xl text-[#FD9678]" />
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 right-0 bg-white text-gray-500 shadow-md text-sm rounded p-4  transition-opacity duration-300 w-[165px]">
                13/2 Elizabeth Street Melbourne VIC 3000, Australia
                </div>
              </div>

              <div className="absolute bottom-28 right-[240px] group">
                <FaLocationDot className="text-2xl text-[#1ABC9C]" />
                <div className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 right-0 bg-white text-gray-500 shadow-md  text-sm rounded p-4 transition-opacity duration-300 w-[165px]">
                13/2 Elizabeth Street Melbourne VIC 3000, Australia
                </div>
              </div>

              <div className="absolute top-28 left-[80px] group">
                <FaLocationDot className="text-2xl text-[#FD9678]" />
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 left-0 bg-white text-gray-500 shadow-md text-sm rounded p-4 transition-opacity duration-300 w-[165px]">
                13/2 Elizabeth Street Melbourne VIC 3000, Australia
                </div>
              </div>
            </div>
            <div>
             
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="p-8 ">
              <form className="space-y-4">
                <div>
                  <label className="block text-[16px] text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full text-[15px] px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-teal-500/40"
                  />
                </div>
                <div>
                  <label className="block text-[16px] text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="w-full text-[15px] px-4 py-2 mt-2 border  focus:outline-none focus:ring-1 focus:ring-teal-500/40"
                  />
                </div>
                <div>
                  <label className="block text-[16px] text-gray-700">Contact No.</label>
                  <input
                    type="text"
                    placeholder="(123) 456-7890"
                    className="w-full text-[15px] px-4 py-2 mt-2 border focus:outline-none focus:ring-1 focus:ring-teal-500/40"
                  />
                </div>
                <div>
                  <label className="block text-[16px] text-gray-700">Message</label>
                  <textarea
                    placeholder="Message"
                    className="w-full text-[15px] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500/40 resize-none h-[140px]"
                    rows="4"
                  ></textarea>
                </div>
                <button className="w-[110px] px-4 py-2 text-white bg-teal-500  hover:bg-teal-400">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
