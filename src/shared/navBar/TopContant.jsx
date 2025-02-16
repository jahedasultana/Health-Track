import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TopContact = () => {
  return (
    // before color bg-[#11282cb0]
    <div className="py-3 bg-transparent text-black shadow-2xl">
      <div className="flex justify-between items-center md:w-[90%] mx-auto">
        <div className="flex gap-x-3">
          <p className="border-r-[2px] pr-3">healthtrack@gmail.com
          </p>
          <p>+8801999999999</p>
        </div>
        {/* social */}
        <div className="flex gap-x-3">
          <Link target="_blank"
            to={
              "https://www.facebook.com/profile.php?id=100091576081203&mibextid=ZbWKwL"
            }
          >
            <FaFacebook />
          </Link>
          <FaTwitter className="cursor-pointer" />
          <Link to={"https://www.wa.me/+971547688269"}>
            <FaWhatsapp />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default TopContact;