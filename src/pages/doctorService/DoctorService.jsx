import axios from "axios";
import { useEffect, useState } from "react";

const DoctorService = () => {
    const email = localStorage.getItem("userRoleEmail");
    const [doctorDetails, setDoctorDetails] = useState();

    console.log("Doctor Details:", doctorDetails);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://health-track-server-ruddy.vercel.app/doctor_service/${email}`
            );
            setDoctorDetails(response.data); // Assuming the backend returns the relevant document
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const updateStatus = async (id, newStatus) => {

        console.log(newStatus);
        try {
            const response = await axios.put(
                `https://health-track-server-ruddy.vercel.app/doctor_service/update_status/${id}`,
                { status: newStatus }
            );

            if (response.status === 200) {
                alert("Status updated successfully!");
                fetchData(); // Refresh the data after the update
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    useEffect(() => {
        if (email) {
            fetchData();
        }
    }, [email]);

    return (
        <div className="bg-gray-100 min-h-screen md:p-8">
            <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="bg-green-500 w-24 h-24 rounded-full mx-auto"></div>
                    <h1 className="text-2xl font-bold mt-4">User Details</h1>
                    <p className="text-gray-600">{email}</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">User Details</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 text-left">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2">Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Age</th>
                                    <th className="border border-gray-300 px-4 py-2">Condition</th>
                                    <th className="border border-gray-300 px-4 py-2">Details</th>
                                    <th className="border border-gray-300 px-4 py-2">Status</th>
                                    <th className="border border-gray-300 px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {doctorDetails?.name || "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {doctorDetails?.age || "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {doctorDetails?.condition || "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {doctorDetails?.details || "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <span className={doctorDetails?.status === "pending" ? 'bg-orange-300 p-2 rounded-lg' : "bg-green-300 p-2 rounded-lg"}>
                                            {doctorDetails?.status || "N/A"}
                                        </span>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            className="p-1 bg-green-400 rounded-lg"
                                            onClick={() =>
                                                updateStatus(
                                                    doctorDetails?._id,
                                                    doctorDetails?.status === "Pending"
                                                        ? "Done"
                                                        : "Pending"
                                                )
                                            }
                                        >
                                            {doctorDetails?.status === "Pending"
                                                ? "Mark as Done"
                                                : "Mark as Pending"}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <p className="text-gray-500 mt-6">
                    For further updates, check your patient portal regularly.
                </p>
            </div>

        </div>
    );
};

export default DoctorService;
