const OurServices = () => {
  return (
    <div className="bg-[#E4FEFF] relative">
      <h1 className="absolute text-black font-bold right-0  -top-10 opacity-5 text-[100px]">
        Our Services
      </h1>
      <div className="flex my-16 gap-4 w-[85%] mx-auto">
        {/* First image container */}

        <div className="w-[20%] relative mr-3">
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

        {/* Second image container with bottom alignment */}
        <div className="w-[40%] flex items-end rounded-md">
          <div className="relative w-full flex items-end rounded-md group overflow-hidden">
            <img
              className="w-full object-cover rounded-md"
              src="https://i.postimg.cc/mrxGrdc7/happy-doctor.jpg"
              alt="doctorService"
            />

            {/* Title and Button (Always Visible) */}
            <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-20  items-center text-white z-10">
              <h2 className="text-2xl font-semibold">Doctor Appointment</h2>
              <button className="mt-4 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
                Learn More
              </button>
            </div>

            {/* Overlay (Initially Hidden, Slides in from Left on Hover) */}
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
          </div>
        </div>
        <div className="w-[40%] flex items-end rounded-md">
          <div className="relative w-full flex items-end rounded-md group overflow-hidden">
            <img
              className="w-full object-cover rounded-md"
              src="https://i.postimg.cc/4xRgfLHV/hospital-reception.jpg"
              alt="doctorService"
            />

            {/* Title and Button (Always Visible) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white z-10">
              <h2 className="text-2xl font-semibold">Seat booking</h2>
              <button className="mt-4 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
                Learn More
              </button>
            </div>

            {/* Overlay (Initially Hidden, Slides in from Left on Hover) */}
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default OurServices;
