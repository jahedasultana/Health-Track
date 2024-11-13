import Select from "react-select";
import { useNavigate } from "react-router-dom";
const Appointment = () => {
  const navigate = useNavigate(); 

 
  const options = [
    { value: "heart-surgery", label: "Heart Surgery" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
  
  ];

  
  const handleDoctorClick = () => {
    navigate("/doctors"); 
  };

  return (
    <div className="px-2 my-10 w-[100%] font-sans">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Appointment Page
      </h2>
      <div className="flex flex-col items-center mb-8">
        <label className="text-lg mb-2">Search by Category</label>
        <Select
          options={options}
          placeholder="Select category..."
          className="w-64"
        />
      </div>
      <div className="flex gap-6 justify-center">
        <div className="border border-gray-300 p-4 w-64 text-center shadow-md rounded-lg transform transition-transform hover:scale-105">
          <div className="bg-gray-200 h-24 w-full mb-4 flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src="https://i.postimg.cc/bJ7Jbx4T/doctor-girl.jpg"
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium text-lg mb-2">Heart Surgery</h3>
          <p className="text-gray-700 mb-4">Total Doctors: 10</p>
          <button
            onClick={handleDoctorClick}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Get Available Doctor
          </button>
        </div>
        <div className="border border-gray-300 p-4 w-64 text-center shadow-md rounded-lg transform transition-transform hover:scale-105">
          <div className="bg-gray-200 h-24 w-full mb-4 flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src="https://i.postimg.cc/bJ7Jbx4T/doctor-girl.jpg"
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium text-lg mb-2">Heart Surgery</h3>
          <p className="text-gray-700 mb-4">Total Doctors: 10</p>
          <button
            onClick={handleDoctorClick}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Get Available Doctor
          </button>
        </div>
        <div className="border border-gray-300 p-4 w-64 text-center shadow-md rounded-lg transform transition-transform hover:scale-105">
          <div className="bg-gray-200 h-24 w-full mb-4 flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src="https://i.postimg.cc/bJ7Jbx4T/doctor-girl.jpg"
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium text-lg mb-2">Heart Surgery</h3>
          <p className="text-gray-700 mb-4">Total Doctors: 10</p>
          <button
            onClick={handleDoctorClick}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Get Available Doctor
          </button>
        </div>
        <div className="border border-gray-300 p-4 w-64 text-center shadow-md rounded-lg transform transition-transform hover:scale-105">
          <div className="bg-gray-200 h-24 w-full mb-4 flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src="https://i.postimg.cc/bJ7Jbx4T/doctor-girl.jpg"
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium text-lg mb-2">Heart Surgery</h3>
          <p className="text-gray-700 mb-4">Total Doctors: 10</p>
          <button
            onClick={handleDoctorClick}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Get Available Doctor
          </button>
        </div>

    
        {/* আরও কার্ড যোগ করতে পারেন */}
      </div>
    </div>
  );
};

export default Appointment;
