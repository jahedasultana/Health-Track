import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F2732] text-white  ">
      <div className=" mx-auto md:w-[90%] w-full md:px-0 px-4">
        <div className="w-92 py-10 ">
          <img
            className="md:w-[20%] mx-auto w-[45%]"
            src="/health-track.png"
            alt="logo"
          />
        </div>
        {/* first content */}

        <div className="">
          <hr />
          <div className="flex justify-around items-center text-center py-10">
            <div>
              {" "}
              <h3 className="text-lg font-semibold">Office Address</h3>
              <p className="mt-2">Evanto HQ 24 Fifth St., Los Angeles, USA</p>
            </div>
              <div className="h-[120px] w-[1px] bg-white">

              </div>
            <div>
              <h3 className="text-lg font-semibold">Talk To Expert</h3>
              <p className="mt-2 flex items-center justify-center md:justify-start gap-2">
                <FaPhoneAlt className="text-[#1DBFCC]" /> (+01) 123 456 7890
              </p>
            </div>

            <div className="h-[120px] w-[1px] bg-white">

</div>
            <div>
              <h3 className="text-lg font-semibold">Talk To Expert</h3>
              <p className="mt-2 flex items-center justify-center md:justify-start gap-2">
                <FaPhoneAlt className="text-[#1DBFCC]" /> (+01) 123 456 7890
              </p>
            </div>
          </div>

          <hr />
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-4 pb-12">
          <div className="mb-6 md:mb-0">
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Pediatric Clinic</li>
              <li>Dental Clinic</li>
              <li>General Surgery</li>
              <li>Physiotherapy</li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Cardiologist</li>
              <li>Surgery</li>
              <li>Gynecologist</li>
              <li>Pediatricians</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Cardiologist</li>
              <li>Surgery</li>
              <li>Gynecologist</li>
              <li>Pediatricians</li>
            </ul>
          </div>

          <div className="cursor-pointer">
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#FD9678]"> <span className="mr-1 text-[#FD9678] text-lg">-</span> CT Scan Center</li>
              <li>Medical Store</li>
              <li>Pediatric Clinic</li>
              <li>Physiotherapy</li>
            </ul>
          </div>
        </div>

       
      </div>
      <div className="text-center bg-[#283240] py-5">
          <p className="text-gray-500">
            © 2022 Health Care. All Rights Reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
