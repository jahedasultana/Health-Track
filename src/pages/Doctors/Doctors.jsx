import React, { useEffect, useState } from "react";
import axios from "axios";

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get("http://localhost:3000/all-doctors");
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">All Doctors</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full bg-white shadow-md rounded-md">
                    <thead className="bg-[#1ABC9C] text-white">
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Service Experience</th>
                            <th className="px-4 py-2">Service Category</th>
                            <th className="px-4 py-2">Services Provided</th>
                            <th className="px-4 py-2">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor) => (
                            <tr key={doctor._id} className="border-b">
                                <td className="px-4 py-2 text-center">{doctor.name || 'no'}</td>
                                <td className="px-4 py-2 text-center">{doctor.email || 'no'}</td>
                                <td className="px-4 py-2 text-center">{doctor.service_experience || 'no'}</td>
                                <td className="px-4 py-2 text-center">{doctor.service_category || 'no'}</td>
                                <td className="px-4 py-2 text-center">{doctor.service_give || 'no'}</td>
                                <td className="px-4 py-2 text-center">{doctor.availability || 'no'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Doctors;
