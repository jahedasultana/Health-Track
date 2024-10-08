const OurServices = () => {
  return (
    <div className="bg-[#E4FEFF] relative">
        <h1 className="absolute text-black font-bold right-0  -top-10 opacity-5 text-[100px]">Our Services</h1>
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
          <img
            className="w-full object-cover"
            src="https://i.postimg.cc/mrxGrdc7/happy-doctor.jpg"
            alt="doctorService"
          />
        </div>

        {/* Third image container */}
        <div className="w-[40%] flex items-end">
          <img
            className="w-full object-cover"
            src="https://i.postimg.cc/4xRgfLHV/hospital-reception.jpg"
            alt="seatBooking"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
