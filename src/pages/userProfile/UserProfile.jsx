import axios from "axios";
import { useEffect, useState } from "react";

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState([]);
    const email = localStorage.getItem('userRoleEmail');

    console.log(userDetails);

    useEffect(() => {
        if (email) {
            fetchData();
        }
    }, [email]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://health-track-server-ruddy.vercel.app/user_service/${email}`);
            setUserDetails(response.data); // Assuming response.data is an array of user details
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="bg-green-500 w-24 h-24 rounded-full mx-auto"></div>
                    <h1 className="text-2xl font-bold mt-4">User Details</h1>
                    <p className="text-gray-600">Below are the service details for the user:</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Doctor Details</h2>
                    <table className="w-full border-collapse border border-gray-300 text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Age</th>
                                <th className="border border-gray-300 px-4 py-2">Condition</th>
                                <th className="border border-gray-300 px-4 py-2">Details</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDetails.length > 0 ? (
                                userDetails.map((detail, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 px-4 py-2">{detail.name || "N/A"}</td>
                                        <td className="border border-gray-300 px-4 py-2">{detail.age || "N/A"}</td>
                                        <td className="border border-gray-300 px-4 py-2">{detail.condition || "N/A"}</td>
                                        <td className="border border-gray-300 px-4 py-2">{detail.details || "N/A"}</td>
                                        <td className="border border-gray-300 px-4 py-2">{detail.status || "N/A"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        className="border border-gray-300 px-4 py-2 text-center"
                                        colSpan="5"
                                    >
                                        No data available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-500 mt-6">
                    For further updates, check your patient portal regularly.
                </p>
            </div>
            <p>Service Time 24 Hours 24/7</p>
        </div>
    );
};

export default UserProfile;
