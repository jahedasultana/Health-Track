import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://health-track-server-ruddy.vercel.app/all-users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">All Users</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full bg-white shadow-md rounded-md">
                    <thead className="bg-secondary text-white">
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Blood Group</th>
                            <th className="px-4 py-2">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="border-b">
                                <td className="px-4 py-2 text-center">{user.name || 'no'}</td>
                                <td className="px-4 py-2 text-center">{user.email || 'no'}</td>
                                <td className="px-4 py-2 text-center">{user.blood_group || 'no'}</td>
                                <td className="px-4 py-2 text-center">{user.phone || 'no'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
