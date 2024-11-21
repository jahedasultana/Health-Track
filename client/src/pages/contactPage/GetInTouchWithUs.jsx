import { FiMapPin, FiPhone, FiMail, FiUser } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const GetInTouchWithUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto bg-white shadow-lg p-8 rounded-md">
        {/* Header Section */}
        <h2 className="text-2xl text-center text-[#1ABC9C] mb-4">
          Get in touch with us
        </h2>
        <div className="w-[80px] mx-auto h-[2px] mb-6 bg-[#1ABC9C]"></div>
        <p className="text-center w-[700px] mx-auto text-gray-400 mb-8">
          Suspendisse ultrices sapien sit amet accumsan pharetra. Phasellus nec
          turpis neque. Sed tortor lacus, eleifend vitae eros at, fermentum
          pellentesque leo.
        </p>

        {/* Main Section */}
        <div className="flex gap-8">
          {/* Message Form */}
          <div className="w-[65%]">
            <div className="">
              <h2 className="text-[#1ABC9C] text-2xl mb-3">Leave a Message</h2>
              <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
            </div>

            <form className="space-y-4">
              <div className="flex gap-4">
                {/* Full Name Field */}
                <div className="relative w-1/2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <div className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center">
                      <FiUser className="text-xl" />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 pl-14 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Email Field */}
                <div className="relative w-1/2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <div className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center">
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
                placeholder="Type your message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="5"
              ></textarea>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="receiveEmail"
                  className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
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
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="w-[35%]">
            <div className="">
              <h2 className="text-[#1ABC9C] text-2xl mb-3">Contact</h2>
              <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
            </div>

            <p className="flex items-center gap-3 text-gray-600 mb-4">
              <FiMapPin className="text-green-500 text-xl" /> 121 King St,
              Melbourne VIC 3000, Australia
            </p>
            <p className="flex items-center gap-3 text-gray-600 mb-4">
              <FiPhone className="text-green-500 text-xl" /> +00 0 0000 0000
            </p>
            <p className="flex items-center gap-3 text-gray-600 mb-4">
              <FiMail className="text-green-500 text-xl" /> info@healthcare.com
            </p>
            <div className="flex items-center gap-4 mt-4">
              <FaFacebookF className="text-2xl text-green-500 cursor-pointer hover:text-green-600" />
              <FaTwitter className="text-2xl text-green-500 cursor-pointer hover:text-green-600" />
              <FaLinkedinIn className="text-2xl text-green-500 cursor-pointer hover:text-green-600" />
              <FaYoutube className="text-2xl text-green-500 cursor-pointer hover:text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchWithUs;
