const DoctorProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="bg-green-500 w-24 h-24 rounded-full mx-auto"></div>
          <h1 className="text-2xl font-bold mt-4">Dr. Sarah Khan</h1>
          <p className="text-gray-600">Specialist in Cardiology</p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Appointment Schedule</h2>
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Doctor Category
                </th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">John Doe</td>
                <td className="border border-gray-300 px-4 py-2">Cardiology</td>
                <td className="border border-gray-300 px-4 py-2">
                  20th Nov 2024
                </td>
              </tr>
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
