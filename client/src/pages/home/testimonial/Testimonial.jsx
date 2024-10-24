const Testimonial = () => {
  return (
    <div className="flex w-[90%] mx-auto mt-16">
      {/* Left side heading and description */}
      <div className="w-[35%] bg-[#FFFFFF] space-y-4">
        <h6 className="text-lg font-semibold text-[#1DBFCC]">
          20+ Years Of Experiences
        </h6>
        <h1 className="md:text-4xl text-xl font-bold text-[#3f3f41]">
          What Our Patients Say About Us
        </h1>
        <p className="text-gray-600">
          Adipiscing elitadi piscing elits eddo eusmod teo mpor incididunt
          utlabore edolor magnased doe iusmod tempor incididunt utlaboreet
          dolore magna aliqua. Quis ipsum suspend isseultrices and gravida.
          Consectetur adipiscing elitadipiscing in elitserissed aliqua.
        </p>
      </div>

      {/* Right side testimonial cards */}
      <div className="w-[65%] bg-[#F4F7F9] flex space-x-4 p-4">
        {/* Card 1 */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-[45%] relative">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://i.postimg.cc/63D9Pd4k/front-view.jpg"
              alt="Patient 1"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-bold text-[#3f3f41]">John Smith</h4>
             
              <p className="text-sm text-gray-500">Heart Patient</p>
            </div>
            
          </div>
           {/* Red line beneath the name */}
             <div className="w-12 h-1 bg-red-500 mt-1"></div>
          <p className="text-gray-600 mt-4">
            Get the latest news in your own inbox. Consecteturi adipiscing
            elitadipiscing elitseddoe. Tempor incididunt utlabore et dolore
            magna aliqua.
          </p>
          {/* Quote mark */}
          <div className="absolute top-4 right-4 text-[#E0E0E0] text-4xl font-serif">
            “
          </div>
          {/* Star rating */}
          <div className="flex items-center mt-4 text-yellow-400">
            <span>★ ★ ★ ★ ☆</span>
            <span className="ml-2 text-gray-500 text-sm">4.0</span>
          </div>
        </div>

        {/* Card 2 (You can use the same style) */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-[45%] relative">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://i.postimg.cc/63D9Pd4k/front-view.jpg"
              alt="Patient 2"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-bold text-[#3f3f41]">Jane Doe</h4>
            
              <p className="text-sm text-gray-500">Heart Patient</p>
            </div>
          </div>
            {/* Red line beneath the name */}
            <div className="w-12 h-1 bg-red-500 mt-1"></div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt.
          </p>
          {/* Quote mark */}
          <div className="absolute top-4 right-4 text-[#E0E0E0] text-4xl font-serif">
            “
          </div>
          {/* Star rating */}
          <div className="flex items-center mt-4 text-yellow-400">
            <span>★ ★ ★ ★ ☆</span>
            <span className="ml-2 text-gray-500 text-sm">4.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
