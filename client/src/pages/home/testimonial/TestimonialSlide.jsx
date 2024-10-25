

const TestimonialSlide = () => {
  return (
    <div>
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
             <div className="w-12 h-1 bg-[#9ee9ef] mt-1"></div>
          <p className="text-gray-600 mt-4">
            Get the latest news in your own inbox. Consecteturi adipiscing
            elitadipiscing elitseddoe. Tempor incididunt utlabore et dolore
            magna aliqua.
          </p>
          {/* Quote mark */}
          <div className="absolute top-4 right-4 ">
            <img className="w-8 h-8 opacity-30" src="https://i.postimg.cc/JnqNcc6Q/quotation-mark.png" alt="mark" />
          </div>
          {/* Star rating */}
          <div className="flex items-center mt-4 text-yellow-400">
            <span>★ ★ ★ ★ ☆</span>
            <span className="ml-2 text-gray-500 text-sm">4.0</span>
          </div>
        </div>
    </div>
  );
};

export default TestimonialSlide;