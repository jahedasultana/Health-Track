import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="md:w-[80%] w-full px-6 py-8 mx-auto">
        <div className="flex flex-wrap mt-8">
          <div className="w-full lg:w-1/2 ">
            <h2 className="text-xl font-medium text-[#1ABC9C]">Contact Us_</h2>
            <p className="mt-1 text-4xl font-bold text-gray-600">
              Get In Touch
            </p>
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
                    className="w-full text-[15px] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500/40"
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
