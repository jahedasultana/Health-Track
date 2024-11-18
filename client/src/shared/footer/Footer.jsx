import { FaPhoneAlt } from "react-icons/fa";
import img from "../../assets/homeImage/footer.png";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#1F2732] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="pt-20 pb-12 text-center">
          <img
            className="mx-auto mix-blend-color-burn md:w-[20%] w-[45%]"
            src={img}
            alt="logo"
          />
        </div>

        <div className="">
          <hr className="opacity-15" />
          <div className="flex flex-col md:flex-row justify-around items-center text-center py-8 space-y-6 md:space-y-0">
            {/* Office Address */}
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-semibold">Office Address</h3>
              <p className="mt-1 flex items-center justify-center gap-2">
                <FaLocationDot className="text-[#FD9678] text-2xl" />
                <span className="text-[13px]">
                  Evanto HQ 24 Fifth St., Los Angeles, USA
                </span>
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full md:w-[1px] bg-white/10 md:h-[70px]" />

            {/* Talk to Expert */}
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-semibold">Talk To Expert</h3>
              <p className="mt-1 flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-[#FD9678] text-xl" />{" "}
                <span className="text-[13px]">(+01) 123 456 7890</span>
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full md:w-[1px] bg-white/10 md:h-[70px]" />

            {/* Another Contact */}
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-semibold">Talk To Expert</h3>
              <p className="mt-1 flex items-center justify-center gap-2">
                <MdEmail className="text-[#FD9678] text-2xl" />{" "}
                <span className="text-[13px]">example@healthtrack.com</span>
              </p>
            </div>
          </div>
          <hr className="opacity-15" />
        </div>

        <div className="grid md:justify-items-start justify-items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-6 pb-16 gap-6">
          {/* Footer Links Section */}

          {[
            [
              "Pediatric Clinic",
              "Dental Clinic",
              "General Surgery",
              "Physiotherapy",
            ],
            ["Cardiologist", "Surgery", "Gynecologist", "Pediatricians"],
            ["Cardiologist", "Surgery", "Gynecologist", "Pediatricians"],
            [
              "CT Scan Center",
              "Medical Store",
              "Pediatric Clinic",
              "Physiotherapy",
            ],
          ].map((section, index) => (
            <div key={index} className="mb-6 md:mb-0">
              <ul className="mt-4 space-y-2 text-md text-white">
                {section.map((item, idx) => (
                  <li key={idx} className="hover:text-[#FD9678] cursor-pointer">
                    <span className="mr-2 text-[#FD9678] text-2xl">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center bg-[#283240] py-5">
        <p className="text-white text-[13px]">
          © 2020 Health Track. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
