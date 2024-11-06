import { FaPhoneAlt } from "react-icons/fa";
import img from "../../assets/homeImage/footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#1F2732] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="pt-12 pb-8 text-center">
          <img className="mx-auto md:w-[20%] w-[45%]" src={img} alt="logo" />
        </div>

        <div className="">
          <hr className="opacity-15" />
          <div className="flex flex-col md:flex-row justify-around items-center text-center py-8 space-y-6 md:space-y-0">
            {/* Office Address */}
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-semibold">Office Address</h3>
              <p className="mt-2">Evanto HQ 24 Fifth St., Los Angeles, USA</p>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full md:w-[1px] bg-white/10 md:h-[60px]" />

            {/* Talk to Expert */}
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-semibold">Talk To Expert</h3>
              <p className="mt-2 flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-[#1DBFCC]" /> (+01) 123 456 7890
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full md:w-[1px] bg-white/10 md:h-[60px]" />

            {/* Another Contact */}
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-semibold">Talk To Expert</h3>
              <p className="mt-2 flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-[#1DBFCC]" /> (+01) 123 456 7890
              </p>
            </div>
          </div>
          <hr className="opacity-15" />
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-4 pb-12 gap-6">
          {/* Footer Links Section */}
          {[
            ["Pediatric Clinic", "Dental Clinic", "General Surgery", "Physiotherapy"],
            ["Cardiologist", "Surgery", "Gynecologist", "Pediatricians"],
            ["Cardiologist", "Surgery", "Gynecologist", "Pediatricians"],
            ["CT Scan Center", "Medical Store", "Pediatric Clinic", "Physiotherapy"],
          ].map((section, index) => (
            <div key={index} className="mb-6 md:mb-0">
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                {section.map((item, idx) => (
                  <li key={idx} className="hover:text-[#FD9678]">
                    <span className="mr-2 text-[#FD9678] text-lg">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center bg-[#283240] py-4">
        <p className="text-white text-[13px]">© 2022 Health Care. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
