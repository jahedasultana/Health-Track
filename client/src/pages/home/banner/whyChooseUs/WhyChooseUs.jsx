import { MdHealthAndSafety, MdSchedule, MdInsights, MdSecurity, MdSupportAgent } from "react-icons/md";

const WhyChooseUs = () => {
    return (
        <div className="flex relative my-12 gap-10 items-center w-[90%] mx-auto">

            {/* Background Box */}
            <div className="absolute  -top-6 -left-[63px] bg-[#1DBFCC] h-[320px] z-0 w-[320px]">
                <div className="relative">
                    <p className="-rotate-90 absolute top-36 text-4xl font-bold text-white/90 -left-28">Why Choose Us</p>
                </div>
            </div>

            {/* Image with overlay */}
            <div className="relative md:w-[50%] z-10 w-full">
                <img className="h-[400px] w-full object-cover" src="https://i.postimg.cc/ry0NVkbP/hand-holding.jpg" alt="whyChoose" />
                <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Overlay */}
            </div>

            {/* Text and Icons */}
            <div className="md:w-[50%] w-full text-[18px] font-semibold space-y-3 text-right"> {/* Align text right */}
                {/* content 1 */}
                <div className="flex w-full items-center gap-5 justify-end"> {/* Align icon and text to the right */}
                    <div className="bg-[#991747] rounded-full">
                        <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                            <MdHealthAndSafety size={25} />
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">Streamlined Appointment Scheduling</p>
                    </div>
                </div>

                {/* content 2 */}
                <div className="flex items-center gap-5 justify-end">
                    <div className="bg-[#991747] rounded-full">
                        <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                            <MdInsights size={25} />
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">Real-time Analytics & Reporting</p>
                    </div>
                </div>

                {/* content 3 */}
                <div className="flex items-center gap-5 justify-end">
                    <div className="bg-[#991747] rounded-full">
                        <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                            <MdSchedule size={25} />
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">Remote Access & Telemedicine Integration</p>
                    </div>
                </div>

                {/* content 4 */}
                <div className="flex items-center gap-5 justify-end">
                    <div className="bg-[#991747] rounded-full">
                        <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                            <MdSecurity size={25} />
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">Data Security and Privacy</p>
                    </div>
                </div>

                {/* content 5 */}
                <div className="flex items-center gap-5 justify-end">
                    <div className="bg-[#991747] rounded-full">
                        <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                            <MdSupportAgent size={25} />
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">24/7 Services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
