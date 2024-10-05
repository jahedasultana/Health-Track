import { useEffect, useState } from "react";

const images = [
  {
    src: "https://i.postimg.cc/QCsXFXZj/doctor-p.jpg",
    text: "Welcome to Our Beautiful Apartment",
    paragraph: "Entrust your health our doctors",
  },
  {
    src: "https://i.postimg.cc/rsJqWvqx/tol.jpg",
    text: "Explore the City Life",
    paragraph: "Entrust your health our doctors",
  },
  {
    src: "https://i.postimg.cc/L8qM6qgz/photo-doctor.jpg",
    text: "Discover Your Dream Home",
    paragraph: "Entrust your health our doctors",
  },
  {
    src: "https://i.postimg.cc/K8dhKZtC/doctors-boy.jpg",
    text: "Discover Your Dream Home",
    paragraph: "Entrust your health our doctors",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mb-16 w-full h-[280px] md:h-[450px] overflow-hidden">
      <div
        className="transition-opacity duration-700 ease-in-out"
        style={{ opacity: 1 }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full md:h-[450px] h-[280px] object-cover"
            />

            <div className="absolute flex items-center top-0 left-0 right-0  h-full bg-black bg-opacity-20">
              <div className="md:pl-44 pl-10 md:space-y-4 space-y-2">
                <p className="text-white font-semibold">{image.paragraph}</p>
                <h1 className="text-white text-lg md:text-3xl font-semibold md:w-[70%] w-full">
                  {image.text}
                </h1>
              <div className="text-white flex gap-3">
              <button className="border border-gray-300/40 px-2 py-2 text-[10px]">Make an Appointment</button>
              <button className=" border border-gray-300/40 px-2 text-[10px] py-2">View Departments</button>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
