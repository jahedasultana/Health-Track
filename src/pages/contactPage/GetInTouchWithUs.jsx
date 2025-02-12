import { FiMapPin, FiPhone, FiMail, FiUser } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const GetInTouchWithUs = () => {
  return (
    <div  className="w-[90%] mx-auto my-20">
      <div className="">
        {/* Header Section */}
        <h2 className="text-2xl text-center text-[#1ABC9C] mb-4">
          Get in touch with us
        </h2>
        <div className="w-[80px] mx-auto h-[2px] mb-6 bg-[#1ABC9C]"></div>
        <p className="text-center md:w-[700px] mx-auto text-gray-400 mb-8">
          Suspendisse ultrices sapien sit amet accumsan pharetra. Phasellus nec
          turpis neque. Sed tortor lacus, eleifend vitae eros at, fermentum
          pellentesque leo.
        </p>

        {/* Main Section */}
        <div className="flex md:flex-row flex-col gap-4">
          {/* Message Form */}
          <div className="md:w-[65%] ">
            <div className="">
              <h2 className="text-[#1ABC9C] text-2xl mb-3">Leave a Message</h2>
              <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
            </div>
                <div className="bg-[#FFFAF9] border-b-2 border-[#1ABC9C] p-6">
                <form className="space-y-4">
              <div className="flex gap-4">
                {/* Full Name Field */}
                <div className="relative w-1/2">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-[#1ABC9C] text-white p-4 rounded-md flex items-center justify-center">
                      <FiUser className="text-xl" />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 pl-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Email Field */}
                <div className="relative w-1/2">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <div className="bg-[#1ABC9C] text-white p-4 flex items-center justify-center rounded-md">
                      <FiMail className="text-xl" />
                    </div>
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 pl-14 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Message Field */}
              <textarea
                
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-[#1ABC9C]"
                rows="8"
              ></textarea>

              {/* Checkbox */}
           <div className="flex justify-between">
           <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="receiveEmail"
                  className="w-4 h-4 text-[#1ABC9C] border-gray-300 rounded focus:ring-[#1ABC9C]"
                />
                <label
                  htmlFor="receiveEmail"
                  className="text-gray-600 text-sm cursor-pointer"
                >
                  Receive Your Comments By Email
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className=" bg-[#1ABC9C] text-white font-semibold py-3  px-6 rounded-sm hover:bg-[#2aedc6] transition"
              >
                Send
              </button>
           </div>
            </form>
                </div>
          
          </div>

          {/* Contact Details */}
          <div className="md:w-[35%]">
            <div className="">
              <h2 className="text-[#1ABC9C] text-2xl mb-3">Contact</h2>
              <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
            </div>

            <p className="flex items-center gap-3 text-gray-600 mb-4">
              <div className="bg-[#1ABC9C] text-white p-4 flex items-center justify-center rounded-md">
              <FiMapPin className="text-white text-xl" /></div> 121 King St,
              Melbourne VIC 3000, Australia
            </p>
            <hr className="opacity-95"/>
            
            <p className="flex items-center gap-3 text-gray-600 mb-4">
              <div className="bg-[#1ABC9C] text-white p-4 flex items-center justify-center rounded-md">
              <FiPhone className="text-white text-xl" />
                </div> +00 0 0000 0000
            </p>
            <p className="flex items-center gap-3 text-gray-600 mb-4">
              <div className="bg-[#1ABC9C] text-white p-4 flex items-center justify-center rounded-md">
              <FiMail className="text-white text-xl" /></div> info@healthcare.com
            </p>
            <div className="flex items-center gap-4 mt-4">
              <FaFacebookF className="text-2xl text-[#FD9678] cursor-pointer hover:text-[#1ABC9C]" />
              <FaTwitter className="text-2xl text-[#FD9678] cursor-pointer hover:text-[#1ABC9C]" />
              <FaLinkedinIn className="text-2xl text-[#FD9678] cursor-pointer hover:text-[#1ABC9C]" />
              <FaYoutube className="text-2xl text-[#FD9678] cursor-pointer hover:text-[#1ABC9C]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchWithUs;
