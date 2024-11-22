const Details = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 p-8">
            {/* Doctor Details Section */}
            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Doctor Details</h2>
                <div className="bg-gray-200 h-32 w-full mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                        src="https://i.postimg.cc/bJ7Jbx4T/doctor-girl.jpg"
                        alt="Doctor"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-gray-700 mb-4">
                    <p><span className="font-semibold">Name:</span> Dr. John Doe</p>
                    <p><span className="font-semibold">Total Service:</span> 15 years</p>
                    <p><span className="font-semibold">Specialization:</span> Heart Surgery</p>
                </div>
                <div className="bg-gray-300 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2">Which Services:</h4>
                    <p>Heart Surgery, Cardiology, General Consultation</p>
                </div>
            </div>

            {/* Patient Details Form Section */}
            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Patient Details - Input Form</h2>
                <form className="space-y-4">
                    {/* Row for Patient Name and Age */}
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Patient Name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Patient Age"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                
                    <input
                        type="text"
                        placeholder="Patient Condition"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                 
                    <textarea
                        placeholder="Additional Details"
                        className="w-full p-7 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Details;
