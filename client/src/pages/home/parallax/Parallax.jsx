const Parallax = () => {
  return (
    <div
      className="relative bg-red-400 bg-cover bg-center md:h-[500px] h-auto md:my-10 my-8 "
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/sX1BnfnS/doctors-doing.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="w-[80%] pt-16 mx-auto h-full flex flex-col relative z-10">
        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
          {/* card number 1 */}
          <div className="max-w-xs border p-4 space-y-5 border-gray-200/40 bg-slate-100 bg-opacity-30 backdrop-blur-0 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center">
              <img
                className="h-28 w-28 object-cover rounded-full border-2 border-gray-300"
                src="https://i.postimg.cc/28x9rfRq/portrait-cheerful.jpg" 
                alt="Professor"
              />
            </div>
            <div className="text-center space-y-1">
              <h1 className="text-2xl text-[#69dde5] font-semibold">Professor Dr. John Doe</h1>
              <p className="text-sm text-white/90">
                Over 25 years of experience in medical research and advanced
                surgical procedures globally.
              </p>
            </div>
          </div>

          {/* card number 2 */}
          <div className="max-w-xs border p-4 space-y-5 border-gray-200/40 bg-slate-100 bg-opacity-30 backdrop-blur-0 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center">
              <img
                className="h-28 w-28 object-cover rounded-full border-2 border-gray-300"
                src="https://i.postimg.cc/DyfdQJHZ/man-with.jpg"
                alt="Professor"
              />
            </div>
            <div className="text-center space-y-1">
              <h1 className="text-2xl text-[#69dde5] font-semibold">Professor Dr. Sarah Lee</h1>
              <p className="text-sm text-white/90">
                18 years of clinical practice in cardiology, specializing in
                heart disease prevention and treatment.
              </p>
            </div>
          </div>

          {/* card number 3 */}
          <div className="max-w-xs border p-4 space-y-5 border-gray-200/40 bg-slate-100 bg-opacity-30 backdrop-blur-0 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center">
              <img
                className="h-28 w-28 object-cover rounded-full border-2 border-gray-300"
                src="https://i.postimg.cc/Fz4GXTTg/medium-shot.jpg"
                alt="Professor"
              />
            </div>
            <div className="text-center space-y-1">
              <h1 className="text-2xl text-[#69dde5] font-semibold">
                Professor Dr. Michael
              </h1>
              <p className="text-sm text-white/90">
                22 years of expertise in neurosurgery, focusing on complex brain
                and spinal cord surgeries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-36 bg-[#1DBFCC] absolute bottom-0 left-0"></div>
    </div>
  );
};

export default Parallax;
