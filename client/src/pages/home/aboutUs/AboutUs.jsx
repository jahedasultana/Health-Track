import TopIcon from "./TopIcone";


const AboutUs = () => {
  return (
    <div className=" md:w-[90%] w-full mx-auto">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        {/* Image and Ratings Section ------- TODO: border change */}
        <div className="relative w-full md:w-1/2 h-full md:pl-10 pl-0">
          <img src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/about_1.png" alt="images" />
          <div className="absolute -top-14 right-28">
            <TopIcon></TopIcon>
          </div>
          <div className="absolute top-[270px] right-28">
            <Middle/>
          </div>
          <div className="absolute -bottom-12 -left-12">
            <Last></Last>
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
              ✔ Get latest news in your inbox. consectetur elit adipiscing.
            </li>
            <li>✔ Sed do eiusmod tempor incididunt ut labore dolore.</li>
            <li>✔ Tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>✔ Gravida. consectetur adipiscing elit.</li>
            <li>✔ Do eiusmod tempor incididunt ut labore dolore.</li>
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

