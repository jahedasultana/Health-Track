import { MdHealthAndSafety } from "react-icons/md";


const WhyChooseUs = () => {
    return (
        <div className="flex relative my-12 gap-5 items-center w-[90%] mx-auto">

            <div className="absolute  -top-6 -left-[63px] bg-[#1DBFCC] h-[320px] z-0 w-[320px]">
           <div className="relative">
           <p className="-rotate-90 absolute top-36 text-4xl font-bold text-white/90 -left-28">Why Choose Us</p>
           </div>
            </div>


          <div className="md:w-[50%] z-10 w-full">
            <img className="h-[400px] w-full object-cover" src="https://i.postimg.cc/ry0NVkbP/hand-holding.jpg" alt="whyChoose" />
          </div>
          <div className="md:w-[50%] w-full text-[18px] font-semibold space-y-3">
            {/* content 1 */}
          <div className="flex items-start gap-5">
            <div className="bg-[#991747] rounded-full">
              <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                <MdHealthAndSafety size={25}/>
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Save Lives Instantly</h5>
              <p className="text-gray-600">
              Your blood donation can help save up to three lives in critical need of transfusions.
              </p>
            </div>
          </div>

          {/* content 2 */}
          <div className="flex items-start gap-5">
            <div className="bg-[#991747] rounded-full">
              <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                <MdHealthAndSafety size={25}/>
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Promotes Heart Health</h5>
              <p className="text-gray-600">
              Regular blood donation reduces excess iron in your body, lowering the risk of heart disease.
              </p>
            </div>
          </div>

          {/* content 3 */}
          <div className="flex items-start gap-5">
            <div className="bg-[#991747] rounded-full">
              <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                <MdHealthAndSafety size={25}/>
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Boosts Your Well-Being</h5>
              <p className="text-gray-600">
              Donating blood can improve your emotional and physical health by helping others in need.
              </p>
            </div>
          </div>
          </div>
        </div>
    );
};

export default WhyChooseUs;