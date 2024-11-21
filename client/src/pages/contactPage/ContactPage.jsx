import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
        <div>
            {/* Parallax Section */}
      <div
        className="relative h-[170px] bg-fixed bg-center bg-cover flex items-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/Kj77stLH/image-profession.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Content */}
        <div className="relative md:mt-10 z-10 flex justify-between w-full px-10">
          {/* Section Name */}
          <h1 className="text-white text-4xl">Contact Us</h1>
          {/* Navigation Links */}
          <div className="text-white flex items-center space-x-4">
            <Link to="/" className="text-lg hover:underline">
              Home
            </Link>
            <p className="">।</p>
            <Link to="/about" className="text-lg hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ContactPage;