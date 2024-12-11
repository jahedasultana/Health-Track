import axios from "axios";
import { useEffect, useState } from "react";


const UserProfile = () => {
    const [userdata,setUserdata] = useState([])
    const doctors = userdata.map((item) => item.doctors)
    const users = userdata.map((item) => item.formData)

    console.log(doctors);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/user_data_get`);
            setUserdata(response.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
                {
                    users.map((item,index) => <div key={index} className="text-center">
                    <div className="bg-green-500 w-24 h-24 rounded-full mx-auto"></div>
                    <h1 className="text-2xl font-bold mt-4">{item.name}</h1>
                    <p className="text-gray-600">Patient ID: 12345</p>
                </div>)
                }
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Doctor Details</h2>
                    <table className="w-full border-collapse border border-gray-300 text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Doctor Category</th>
                                <th className="border border-gray-300 px-4 py-2">Date</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors.map((item,index) => <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.service_category}</td>
                                <td className="border border-gray-300 px-4 py-2">21st Nov 2024</td>
                                <td className="border border-gray-300 px-4 py-2">Pending</td>
                                <td className="border border-gray-300 px-4 py-2"><button className="p-2 bg-green-400">Done</button></td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-500 mt-6">
                    For further updates, check your patient portal regularly.
                </p>
            </div>
        </div>
    );
};

export default UserProfile;
