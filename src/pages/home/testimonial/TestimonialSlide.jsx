// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function TestimonialSlide() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          {/* Card 1 */}
          <div className="relative bg-[#F4F7F9] p-[1.5px] md:mt-12 md:h-[360px] w-[320px] overflow-hidden group hover:shadow-lg -translate-y-1">
            
            {/* Gradient border using a pseudo-element */}
            <div className="absolute inset-0 border-[1px] border-transparent rounded-none group-hover:rounded-t-lg pointer-events-none">
              
              {/* Initial gradient direction (top to bottom) */}
              <div className="absolute inset-0 transition-all duration-1000 ease-in-out bg-gradient-to-b from-[#2aa7ff] via-[#2aa7ff99] to-transparent group-hover:bg-gradient-to-t"></div>
            </div>

            {/* Inner content with hover effect */}
            <div className="relative z-10 bg-[#F4F7F9] group-hover:bg-white rounded-none group-hover:rounded-t-lg p-6 h-full transition-colors duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://i.postimg.cc/63D9Pd4k/front-view.jpg"
                    alt="Patient 1"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <p className="text-sm">Heart Patient</p>
                  </div>
                </div>
                {/* Quote mark */}
                <div>
                  <img
                    className="w-8 h-8 opacity-30"
                    src="https://i.postimg.cc/JnqNcc6Q/quotation-mark.png"
                    alt="mark"
                  />
                </div>
              </div>

              {/* Red line beneath the name */}
              <div className="w-12 h-1 bg-[#9ee9ef] mt-1 group-hover:bg-white"></div>
              <p className="mt-4 ">
                Get the latest news in your own inbox. Consecteturi adipiscing
                elit. Tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Star rating */}
              <div className="flex items-center mt-4 text-yellow-400">
                <span>★ ★ ★ ★ ☆</span>
                <span className="ml-2 text-sm">4.0</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {/* Card 1 */}
          <div className="relative bg-[#F4F7F9] p-[1.5px] md:mt-2 md:h-[360px] w-[320px] overflow-hidden group hover:shadow-lg -translate-y-1">
            {/* Gradient border using a pseudo-element */}
            <div className="absolute inset-0 border-[1px] border-transparent rounded-none group-hover:rounded-t-lg pointer-events-none">
              {/* Initial gradient direction (top to bottom) */}
              <div className="absolute inset-0 transition-all duration-1000 ease-in-out bg-gradient-to-b from-[#2aa7ff] via-[#2aa7ff99] to-transparent group-hover:bg-gradient-to-t"></div>
            </div>

            {/* Inner content with hover effect */}
            <div className="relative z-10 bg-[#F4F7F9] group-hover:bg-white rounded-none group-hover:rounded-t-lg p-6 h-full transition-colors duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://i.postimg.cc/63D9Pd4k/front-view.jpg"
                    alt="Patient 1"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <p className="text-sm">Heart Patient</p>
                  </div>
                </div>
                {/* Quote mark */}
                <div>
                  <img
                    className="w-8 h-8 opacity-30"
                    src="https://i.postimg.cc/JnqNcc6Q/quotation-mark.png"
                    alt="mark"
                  />
                </div>
              </div>

              {/* Red line beneath the name */}
              <div className="w-12 h-1 bg-[#9ee9ef] mt-1 group-hover:bg-white"></div>
              <p className="mt-4 ">
                Get the latest news in your own inbox. Consecteturi adipiscing
                elit. Tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Star rating */}
              <div className="flex items-center mt-4 text-yellow-400">
                <span>★ ★ ★ ★ ☆</span>
                <span className="ml-2 text-sm">4.0</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {/* Card 1 */}
          <div className="relative bg-[#F4F7F9] p-[1.5px] md:mt-12 md:h-[360px] w-[320px] overflow-hidden group hover:shadow-lg -translate-y-1">
            {/* Gradient border using a pseudo-element */}
            <div className="absolute inset-0 border-[1px] border-transparent rounded-none group-hover:rounded-t-lg pointer-events-none">
              {/* Initial gradient direction (top to bottom) */}
              <div className="absolute inset-0 transition-all duration-1000 ease-in-out bg-gradient-to-b from-[#2aa7ff] via-[#2aa7ff99] to-transparent group-hover:bg-gradient-to-t"></div>
            </div>

            {/* Inner content with hover effect */}
            <div className="relative z-10 bg-[#F4F7F9] group-hover:bg-white rounded-none group-hover:rounded-t-lg p-6 h-full transition-colors duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://i.postimg.cc/63D9Pd4k/front-view.jpg"
                    alt="Patient 1"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <p className="text-sm">Heart Patient</p>
                  </div>
                </div>
                {/* Quote mark */}
                <div>
                  <img
                    className="w-8 h-8 opacity-30"
                    src="https://i.postimg.cc/JnqNcc6Q/quotation-mark.png"
                    alt="mark"
                  />
                </div>
              </div>

              {/* Red line beneath the name */}
              <div className="w-12 h-1 bg-[#9ee9ef] mt-1 group-hover:bg-white"></div>
              <p className="mt-4 ">
                Get the latest news in your own inbox. Consecteturi adipiscing
                elit. Tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Star rating */}
              <div className="flex items-center mt-4 text-yellow-400">
                <span>★ ★ ★ ★ ☆</span>
                <span className="ml-2 text-sm">4.0</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {/* Card 1 */}
          <div className="relative bg-[#F4F7F9] p-[1.5px] md:mt-2 md:h-[360px] w-[320px] overflow-hidden group hover:shadow-lg -translate-y-1">
            {/* Gradient border using a pseudo-element */}
            <div className="absolute inset-0 border-[1px] border-transparent rounded-none group-hover:rounded-t-lg pointer-events-none">
              {/* Initial gradient direction (top to bottom) */}
              <div className="absolute inset-0 transition-all duration-1000 ease-in-out bg-gradient-to-b from-[#2aa7ff] via-[#2aa7ff99] to-transparent group-hover:bg-gradient-to-t"></div>
            </div>

            {/* Inner content with hover effect */}
            <div className="relative z-10 bg-[#F4F7F9] group-hover:bg-white rounded-none group-hover:rounded-t-lg p-6 h-full transition-colors duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://i.postimg.cc/63D9Pd4k/front-view.jpg"
                    alt="Patient 1"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <p className="text-sm">Heart Patient</p>
                  </div>
                </div>
                {/* Quote mark */}
                <div>
                  <img
                    className="w-8 h-8 opacity-30"
                    src="https://i.postimg.cc/JnqNcc6Q/quotation-mark.png"
                    alt="mark"
                  />
                </div>
              </div>

              {/* Red line beneath the name */}
              <div className="w-12 h-1 bg-[#9ee9ef] mt-1 group-hover:bg-white"></div>
              <p className="mt-4 ">
                Get the latest news in your own inbox. Consecteturi adipiscing
                elit. Tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Star rating */}
              <div className="flex items-center mt-4 text-yellow-400">
                <span>★ ★ ★ ★ ☆</span>
                <span className="ml-2 text-sm">4.0</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

      
      </Swiper>
    </>
  );
}
