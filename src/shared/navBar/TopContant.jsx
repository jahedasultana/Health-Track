import {
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
  
  const TopContact = () => {
    return (
  // before color bg-[#11282cb0]
      <div className="flex justify-between items-center py-3 bg-[#11282cb0] text-white shadow-2xl border-b-[0.1px] border-[#11282cab]">
        {/* number and email */}
        <div className="flex gap-x-3 ps-2">
          <p className="border-r-[2px] pr-3">cheapmytrip365@gmail.com 
          </p>
          <p>+8801725939352</p>
        </div>
        {/* social */}
        <div className="flex gap-x-3 pe-16">
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
    );
  };
  
  export default TopContact;