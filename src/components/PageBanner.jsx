import { Link } from "react-router-dom";

const PageBanner = ({title,pageDirection,pageAddress}) => {
    return (
        <div>
            <div
                    className="relative h-[230px] bg-fixed bg-center bg-cover flex items-end"
                    style={{
                      backgroundImage:
                        "url('https://i.postimg.cc/Kj77stLH/image-profession.jpg')",
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                    {/* Content */}
                    <div className="relative  z-10 flex justify-between w-full px-10 pb-6">
                      {/* Section Name */}
                      <h1 className="text-white text-4xl">{title}</h1>
                      {/* Navigation Links */}
                      <div className="text-white flex items-center space-x-4">
                        <Link to="/" className="text-lg hover:underline">
                          Home
                        </Link>
                        <p className="">।</p>
                        <Link to={pageAddress} className="text-lg hover:underline">
                          {pageDirection}
                        </Link>
                      </div>
                    </div>
                  </div>
        </div>
    );
};

export default PageBanner;