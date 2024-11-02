const AboutUs = () => {
  return (
    <div className="flex justify-center items-center bg-white py-10 px-6">
      <div className="flex flex-col md:flex-row items-center max-w-5xl space-y-6 md:space-y-0 md:space-x-8">
        {/* Image and Ratings Section */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full relative">
            <img
              src="https://i.postimg.cc/d346Lj6N/man-woman.jpg"
              alt="Patient"
              className="rounded-lg shadow-lg"
            />
            {/* Overlay Elements */}
            <div className="absolute top-2 left-2 bg-white rounded-lg p-2 shadow-lg">
              <p className="text-sm font-semibold">3.5k Plus</p>
              <p className="text-xs text-gray-500">Satisfied Patients</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-2 shadow-lg flex items-center">
              <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
              <p className="ml-2 text-sm font-semibold">4.0</p>
              <p className="ml-2 text-xs text-gray-500">Mark A. Wilson</p>
            </div>
            <div className="absolute bottom-2 right-2 bg-white rounded-lg p-2 shadow-lg">
              <p className="text-xs">Lily A. Wilson</p>
              <p className="text-gray-500 text-xs">Senior Cardiologist</p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            Consult A Doctor Anytime, Anywhere By Search
          </h2>
          <p className="text-gray-500 mt-4">
            Get latest news in your inbox. consectetur adipiscing elit
            adipiscing. eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li>
              ✔️ Get latest news in your inbox. consectetur elit adipiscing.
            </li>
            <li>✔️ Sed do eiusmod tempor incididunt ut labore dolore.</li>
            <li>✔️ Tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>✔️ Gravida. consectetur adipiscing elit.</li>
            <li>✔️ Do eiusmod tempor incididunt ut labore dolore.</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
