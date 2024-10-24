import  {  useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// Card component definition
const Card = ({ name, patientType, imgUrl, quote, rating }) => (
  <div className="bg-white p-6 shadow-lg rounded-lg w-[45%] relative">
    <div className="flex items-center space-x-3 mb-4">
      <img
        src={imgUrl}
        alt={name}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h4 className="font-bold text-[#3f3f41]">{name}</h4>
        <p className="text-sm text-gray-500">{patientType}</p>
      </div>
    </div>
    {/* Red line beneath the name */}
    <div className="w-12 h-1 bg-[#9ee9ef] mt-1"></div>
    <p className="text-gray-600 mt-4">{quote}</p>
    {/* Quote mark */}
    <div className="absolute top-4 right-4">
      <img className="w-8 h-8 opacity-30" src="https://i.postimg.cc/JnqNcc6Q/quotation-mark.png" alt="mark" />
    </div>
    {/* Star rating */}
    <div className="flex items-center mt-4 text-yellow-400">
      <span>★ ★ ★ ★ ☆</span>
      <span className="ml-2 text-gray-500 text-sm">{rating}</span>
    </div>
  </div>
);

export default function TestimonialSlide() {
  const [swiperRef, setSwiperRef] = useState(null);

  const slides = [
    {
      name: "John Smith",
      patientType: "Heart Patient",
      imgUrl: "https://i.postimg.cc/63D9Pd4k/front-view.jpg",
      quote: "Get the latest news in your own inbox. Consecteturi adipiscing elitadipiscing elitseddoe.",
      rating: "4.0"
    },
    {
      name: "Jane Doe",
      patientType: "Cancer Survivor",
      imgUrl: "https://i.postimg.cc/63D9Pd4k/front-view.jpg",
      quote: "Stay informed with our regular updates. Tempor incididunt ut labore et dolore magna aliqua.",
      rating: "4.5"
    },
    {
      name: "Alice Brown",
      patientType: "Diabetes Patient",
      imgUrl: "https://i.postimg.cc/63D9Pd4k/front-view.jpg",
      quote: "Keep up with the latest health news and tips.",
      rating: "4.2"
    },
    {
      name: "Mark Wilson",
      patientType: "Stroke Survivor",
      imgUrl: "https://i.postimg.cc/63D9Pd4k/front-view.jpg",
      quote: "Receive regular insights to improve your health.",
      rating: "4.3"
    }
  ];

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Card
              name={slide.name}
              patientType={slide.patientType}
              imgUrl={slide.imgUrl}
              quote={slide.quote}
              rating={slide.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => swiperRef.slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => swiperRef.slideTo(2)} className="slide-2">
          Slide 2
        </button>
        <button onClick={() => swiperRef.slideTo(3)} className="slide-3">
          Slide 3
        </button>
        <button onClick={() => swiperRef.slideTo(4)} className="slide-4">
          Slide 4
        </button>
      </p>
    </>
  );
}
