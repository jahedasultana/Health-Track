import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
const ContactUs = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.postimg.cc/Fz4G1npz/close-up.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#1DBFCC]/20 md:mt-16 mt-10 ">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-bold text-white/95 capitalize lg:text-3xl p-4 rounded-md">
                Contact us for <br /> more info
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <FaMapMarkerAlt className="w-6 h-6 mx-2 text-[#1DBFCC]" />
                  <span className="mx-2 text-white/95 truncate w-72">
                  3213 Suitland Street
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <FaPhone className="w-6 h-6 mx-2 text-[#1DBFCC]" />
                  <span className="mx-2 text-white/95 truncate w-72">
                    (257) 563-7401
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <FaEnvelope className="w-6 h-6 mx-2 text-[#1DBFCC]" />
                  <span className="mx-2 text-white/95 truncate w-72">
                  track@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-white/95">Follow us</h3>

                <div className="flex mt-4 -mx-1.5 bg-[#1DBFCC]/20 rounded-mg p-2">
                  <a
                    className="mx-1.5 text-gray-100 transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <FaTwitter className="w-10 h-10 fill-current" />
                  </a>

                  <a
                    className="mx-1.5 text-gray-100 transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <FaLinkedin className="w-8 h-8" />
                  </a>

                  <a
                    className="mx-1.5 text-gray-100 transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <FaFacebook className="w-8 h-8" />
                  </a>

                  <a
                    className="mx-1.5 text-gray-100 transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <FaInstagram className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <div className=" lg:w-1/2 mt-6 md:mt-0 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-black/40 rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">
                <form className="mt-2">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-white placeholder-white/90 bg-black/30 border border-gray-200/25 rounded-md focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-white">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-white placeholder-white/90 bg-black/30 border border-gray-200/25 rounded-md focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-white">
                      Message
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-white placeholder-white/90 bg-black/30 border border-gray-200/25 rounded-md md:h-28 focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#1DBFCC]/70 rounded-md hover:bg-[#179ba4]/60 focus:outline-none focus:ring focus:border-gray-400 focus:ring-gray-400 focus:ring-opacity-50">
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
