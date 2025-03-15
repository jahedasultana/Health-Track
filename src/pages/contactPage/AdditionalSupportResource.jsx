

const AdditionalSupportResource = () => {
    return (
        <div className="md:mb-24 mb-12 ">
            <div className="w-[90%] mx-auto">
            <div className="mb-14">
                 {/* Header Section */}
        <h2 className="text-2xl text-center text-primary mb-4">
        Additional Support Resource
        </h2>
        <div className="w-[80px] mx-auto h-[2px] mb-6 bg-secondary"></div>
        <p className="text-center md:w-[700px] mx-auto text-gray-400 mb-8">
          Suspendisse ultrices sapien sit amet accumsan pharetra. Phasellus nec
          turpis neque. Sed tortor lacus, eleifend vitae eros at, fermentum
          pellentesque leo.
        </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  px-[1px]">
                {Array(3).fill(0).map((_, index) => (
                    <div
                        key={index}
                        className="shadow-2xl p-6  text-center hover:shadow-lg  transition-shadow border-b-2 border-[#1ABC9C]"
                    >
                        <h3 className="text-2xl text-gray-800">Manuals</h3>
                        <p className="mt-2 text-gray-600">
                            venenatis, id pharetra ante luctus. Ae lacinia blandit tellus, eu
                            dignissim rhoncus. Nam volutpat eu neque ac, mollis dictum.
                        </p>
                        <button className="mt-6 mb-4 border text-black hover:text-white px-4 py-2 rounded hover:bg-teal-700">
                            Read More
                        </button>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default AdditionalSupportResource;
