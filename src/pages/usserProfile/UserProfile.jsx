

const UserProfile = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="bg-green-500 w-24 h-24 rounded-full mx-auto"></div>
                    <h1 className="text-2xl font-bold mt-4">Hi, Jane Doe</h1>
                    <p className="text-gray-600">Patient ID: 12345</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Disease Details</h2>
                    <table className="w-full border-collapse border border-gray-300 text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Disease Category</th>
                                <th className="border border-gray-300 px-4 py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Jane Doe</td>
                                <td className="border border-gray-300 px-4 py-2">Orthopedic</td>
                                <td className="border border-gray-300 px-4 py-2">21st Nov 2024</td>
                            </tr>
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
