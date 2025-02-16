import { Link } from "react-router-dom";

const PageBanner = ({title,pageDirection,pageAddress}) => {
    return (
        <div>
            <div
                    className="relative h-[230px] bg-fixed bg-cover flex items-end"
                    style={{
                      backgroundImage:
                        "url('https://i.postimg.cc/j5FZBZ7N/viras.jpg')",
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 "></div>
                    {/* Content */}
                    <div className="relative  z-10 flex justify-between w-full px-2 md:px-10 pb-6">
                      {/* Section Name */}
                      <h1 className="text-black md:text-4xl">{title}</h1>
                      {/* Navigation Links */}
                      <div className= " md:text-white flex items-center space-x-4">
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