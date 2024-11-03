import { CiBrightnessUp } from "react-icons/ci";

const WhyChooseUs = () => {
  return (
    <div className="bg-teal-500 py-16">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold mb-2">Our Achievements</h2>
        <h1 className="text-white text-4xl font-extrabold">Why Choose Us</h1>
      </div>
      <div className="grid md:grid-cols-4 gap-6 px-4 md:px-16">
        <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
          <h2 className="text-pink-400 text-6xl font-bold mb-4">8600</h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <CiBrightnessUp className="text-teal-500 text-4xl" />
            <p className="text-xl font-bold">Successful Cases</p>
          </div>
          <p className="text-gray-500">
            Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro convallis facilisisro
          </p>
        </div>
        <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
          <h2 className="text-pink-400 text-6xl font-bold mb-4">145</h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <CiBrightnessUp className="text-teal-500 text-4xl" />
            <p className="text-xl font-bold">Qualified Doctors</p>
          </div>
          <p className="text-gray-500">
            Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro convallis facilisisro
          </p>
        </div>
        <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
          <h2 className="text-pink-400 text-6xl font-bold mb-4">25</h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <CiBrightnessUp className="text-teal-500 text-4xl" />
            <p className="text-xl font-bold">Years of Experience</p>
          </div>
          <p className="text-gray-500">
            Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro convallis facilisisro
          </p>
        </div>
        <div className="bg-gradient-to-b from-white via-white to-gray-100 rounded-lg p-8 text-center shadow-md">
          <h2 className="text-pink-400 text-6xl font-bold mb-4">24x7</h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <CiBrightnessUp className="text-teal-500 text-4xl" />
            <p className="text-xl font-bold">Staff Availability</p>
          </div>
          <p className="text-gray-500">
            Aenean facilisis sodales est neci Morbi vitapurus on Est facilisisro convallis facilisisro
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
