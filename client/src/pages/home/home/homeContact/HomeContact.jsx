import { BsPhoneFlip } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const HomeContact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-around items-center w-full max-w-7xl mb-10 mx-auto px-4">

      <div className="flex gap-6 items-center w-full md:w-auto">
        <div className="flex-shrink-0">
          <BsPhoneFlip className="text-[#1DBFCC] text-4xl" />
        </div>
        <div className="space-y-1">
          <p className="text-[#3A3A3A99]">Give us a Call</p>
          <h3 className="text-[#2A2D32] text-[20px]">1-888-123-4567</h3>
        </div>
      </div>

      <div className="flex gap-6 items-center w-full md:w-auto">
        <div className="flex-shrink-0">
          <MdOutlineMailOutline className="text-[#1DBFCC] text-4xl" />
        </div>
        <div className="space-y-1 w-full md:w-[80%]">
          <p className="text-[#3A3A3A99]">Send us a Message</p>
          <h3 className="text-[#2A2D32] text-[20px]">health-track@gmail.com</h3>
        </div>
      </div>

      <div className="flex gap-6 items-center w-full md:w-auto">
        <div className="flex-shrink-0">
          <SlLocationPin className="text-[#1DBFCC] text-4xl" />
        </div>
        <div className="space-y-1">
          <p className="text-[#3A3A3A99]">Visit our Location</p>
          <h3 className="text-[#2A2D32] text-[20px]">3213 Suitland Street</h3>
        </div>
      </div>

    </div>
  );
};

export default HomeContact;