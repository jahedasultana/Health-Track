const OurServices = () => {
  return (
    <div className="md:bg-[#E4FEFF] relative">
      <h1 className="absolute text-black font-bold right-0 -top-10 opacity-5 text-[100px] hidden md:block">
        Our Services
      </h1>

      <div className="flex flex-col md:flex-row md:my-16 my-10 gap-4 w-[85%] mx-auto">

     
      <h1 className="relative text-center md:hidden text-[#535354] text-3xl font-bold">
          <span className="absolute inset-0 bg-[#02929c]  opacity-30 blur-md rounded-md"></span>
          Our Services
        </h1>
      
    

        {/* First image container (Hidden on small devices) */}
        <div className="w-full md:w-[20%] relative mr-3 hidden md:block">
          <img
            className="h-[350px] w-full object-cover"
            src="https://i.postimg.cc/0yFgrV49/hayd.jpg"
            alt="service"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h3 className="text-[30px] text-white font-semibold -rotate-90">
              Our Services
            </h3>
          </div>
        </div>

        {/* Second and Third image containers (Always Visible) */}
        <div className="flex flex-col gap-4 md:flex-row w-full md:w-[80%]">
          <div className="w-full md:w-[50%] flex items-end ">
            <div className="relative w-full flex items-end  group overflow-hidden">
              <img
                className="w-full object-cover"
                src="https://i.postimg.cc/mrxGrdc7/happy-doctor.jpg"
                alt="doctorService"
              />
              {/* Title and Button (Always Visible) */}
              <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-30 items-center text-white z-10">
                <h2 className="md:text-3xl text-2xl text-[#eef0f4] font-semibold">
                  Doctor Appointment
                </h2>
                <h3 className="text-xl text-[#eef0f4] font-semibold">
                  Total Doctor: 101
                </h3>
                <h5 className="text-lg text-[#eef0f4] font-semibold">
                  Category: 10
                </h5>
                <button className="mt-4 px-4 py-2 bg-[#1DBFCC] hover:bg-[#08d7e6] font-semibold">
                  Learn More
                </button>
              </div>
              {/* Overlay (Initially Hidden, Slides in from Left on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#1DBFCC] to-transparent translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
            </div>
          </div>

          <div className="w-full md:w-[50%] flex items-end ">
            <div className="relative w-full flex items-end  group overflow-hidden">
              <img
                className="w-full object-cover"
                src="https://i.postimg.cc/4xRgfLHV/hospital-reception.jpg"
                alt="doctorService"
              />
              {/* Title and Button (Always Visible) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white z-10">
                <h2 className="md:text-3xl text-2xl text-[#eef0f4] font-semibold">
                  Seat Booking
                </h2>
                <h3 className="text-xl text-[#eef0f4] font-semibold">
                  Total seat: 100
                </h3>
                <h5 className="text-lg text-[#eef0f4] font-semibold">
                  Category: 5
                </h5>
                <button className="mt-4 px-4 py-2 bg-[#1DBFCC] hover:bg-[#08d7e6] font-semibold">
                  Learn More
                </button>
              </div>
              {/* Overlay (Initially Hidden, Slides in from Left on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#1DBFCC] to-transparent translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
