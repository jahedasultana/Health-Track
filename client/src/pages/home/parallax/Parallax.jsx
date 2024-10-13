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

      <div className="w-[80%] pt-8 mx-auto h-full flex flex-col relative z-10">
        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
          {/* card number 1 */}
          <div className="border p-2 space-y-5 border-gray-200/40 bg-slate-100 bg-opacity-30 backdrop-blur-0 rounded-lg shadow-lg">
            <img
              className="h-44 w-full object-cover rounded-t-lg"
              src="https://i.postimg.cc/sX1BnfnS/doctors-doing.jpg"
              alt=""
            />
            <div className="p-3">
              <h1 className="text-lg font-semibold">Hello</h1>
              <p className="text-sm">Some descriptive text here.</p>
            </div>
          </div>
          {/* card number 2 */}
          <div className="border p-2 space-y-5 border-gray-200/40 bg-slate-100 bg-opacity-30 backdrop-blur-0 rounded-lg shadow-lg">
            <img
              className="h-44 w-full object-cover rounded-t-lg"
              src="https://i.postimg.cc/sX1BnfnS/doctors-doing.jpg"
              alt=""
            />
            <div className="p-3">
              <h1 className="text-lg font-semibold">Hello</h1>
              <p className="text-sm">Some descriptive text here.</p>
            </div>
          </div>
          {/* card number 3 */}
          <div className="border p-2 space-y-5 border-gray-200/40 bg-slate-100 bg-opacity-30 backdrop-blur-0 rounded-lg shadow-lg">
            <img
              className="h-44 w-full object-cover rounded-t-lg"
              src="https://i.postimg.cc/sX1BnfnS/doctors-doing.jpg"
              alt=""
            />
            <div className="p-3">
              <h1 className="text-lg font-semibold">Hello</h1>
              <p className="text-sm">Some descriptive text here.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-36 bg-green-700 absolute bottom-0 left-0"></div>
    </div>
  );
};

export default Parallax;
