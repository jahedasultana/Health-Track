

const WhyChooseUs = () => {
    return (
        <div className="flex relative my-12 gap-5 items-center w-[90%] mx-auto">
            <div className="absolute -top-6 -left-[60px] bg-black/20 h-64 z-0 w-44">
            <p className="-rotate-90">Why Choose Us</p>
            </div>
          <div className="md:w-[62%] z-10 w-full">
            <img className="h-[400px] w-full object-cover" src="https://i.postimg.cc/ry0NVkbP/hand-holding.jpg" alt="whyChoose" />
          </div>
          <div className="md:w-[38%] w-full text-[18px] font-semibold space-y-3">
            <p>Streamlined Appointment Scheduling.</p>
            <p>Real-time Analytics & Reporting</p>
            <p>Remote Access & Telemedicine Integration</p>
            <p>Data Security and Privacy</p>
            <p>24/7 services</p>
          </div>
        </div>
    );
};

export default WhyChooseUs;