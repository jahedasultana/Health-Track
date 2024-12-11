import axios from "axios";
import { useEffect, useState } from "react";

const DoctorProfile = () => {
  const [doctordata,setDoctordata] = useState([])
    const users = doctordata.map((item) => item.formData)
    const doctors = doctordata.map((item) => item.doctors)

    console.log(users);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/user_data_get`);
            setDoctordata(response.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
        {
          doctors.map((item,index) => <div key={index} className="text-center">
          <div className="bg-green-500 w-24 h-24 rounded-full mx-auto"></div>
          <h1 className="text-2xl font-bold mt-4">{item.name}</h1>
          <p className="text-gray-600">{item.category}</p>
        </div>)
        }
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Appointment Schedule</h2>
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  User Condition
                </th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item,index) => <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.condition}</td>
                <td className="border border-gray-300 px-4 py-2">
                  20th Nov 2024
                </td>
                <td className="border border-gray-300 px-4 py-2">Pending</td>
              </tr>)
              }
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 mt-6">
          For more details, please scan the QR code above to access additional
          resources.
        </p>
      </div>
    </div>
  );
};

export default DoctorProfile;