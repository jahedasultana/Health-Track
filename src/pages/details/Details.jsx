import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../provider/useAuth";
import useRole from "../../hooks/useRole";
import PageBanner from "../../components/PageBanner";

const Details = () => {
    const { user } = useAuth()
    const { id } = useParams();
    const [doctors, setDoctor] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        condition: "",
        details: "",
    });
    const email = user?.email;
    const name = user?.displayName || 'Guest';
    const { role } = useRole()
    const doctorEmail = doctors?.email;
    console.log(doctorEmail);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://health-track-server-ruddy.vercel.app/doctors/${id}`);
            setDoctor(response.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userDetaild = {
          ...formData,
          name,
          email,
        };
        const data = {
          userDetaild, 
          doctorEmail,
          userEmail: email,
          status: 'pending',
        };
      
        try {
          const res = await axios.post('https://health-track-server-ruddy.vercel.app/service_request', data);
          console.log(res.data);
          
        } catch (error) {
          console.log(error);
        }
      };
      

    return (
        <section className="min-h-screen ">
                 <PageBanner title={'Details'} pageAddress={`/getAvailableDoctor/${id}`} pageDirection={'Details'} />

 <div className="flex flex-col lg:flex-row gap-8 py-10 ">
            {/* Doctor Details Section */}
            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Doctor Details</h2>
                <div className="bg-gray-200 h-64 w-full mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                        src="https://i.postimg.cc/bJ7Jbx4T/doctor-girl.jpg"
                        alt="Doctor"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="text-gray-700 mb-4">
                    <p><span className="font-semibold">Name:</span> {doctors?.name}</p>
                    <p><span className="font-semibold">Total Service:</span> {doctors.service_experience}</p>
                    <p><span className="font-semibold">Specialization:</span> {doctors?.service_category}</p>
                    <p><span className="font-semibold">Email :</span> {doctors?.email}</p>

                    <p>
                        <span className="font-semibold">Availability :</span>{" "}
                        <span
                            className={`px-[3px] pb-[1px] rounded-md ${doctors?.availability === "busy"
                                ? "bg-red-400/50 border border-red-600/80"
                                : "bg-green-400/50 border border-green-600/50"
                                }`}
                        >
                            {doctors?.availability}
                        </span>
                    </p>
                </div>
                <div className="bg-gray-300/90 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2">Which Services:</h4>
                    <p>{doctors.service_give}</p>
                </div>
            </div>

            {/* Patient Details Form Section */}
            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Patient Details - Input Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row for Patient Name and Age */}
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Patient Name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="Patient Age"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <input
                        type="text"
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        placeholder="Patient Condition"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder="Additional Details"
                        className="w-full h-[170px] resize-none p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {
                        doctors?.availability == 'busy' ?
                            <button
                                type="submit"
                                disabled={doctors?.availability == 'busy'}
                                className={`text-white py-2 px-4 rounded-lg
                        ${doctors?.availability == 'busy' && 'cursor-not-allowed bg-slate-500'}
                        transition-colors`}
                            >
                                Not Allow
                            </button>

                            :
                            <button
                                type="submit"
                                disabled={role === 'doctor'}
                                className={`text-white py-2 px-4 rounded-lg
                                ${role === 'doctor' ? 'cursor-not-allowed bg-slate-500' : 'cursor-auto bg-[#FD9678] hover:bg-[#1ABC9C]'}
                                transition-colors cursor-pointer`}
                            >
                                Submit
                            </button>

                    }
                    {/* <button
                        type="submit"
                        disabled={role === 'doctor'}
                        className={`text-white py-2 px-4 rounded-lg
                        ${role === 'doctor' ? 'cursor-not-allowed bg-slate-500' : 'cursor-auto bg-blue-500'}
                        transition-colors`}
                        title={role === 'doctor' ? 'You are a doctor' : ''}
                    >
                        Submit
                    </button> */}

                </form>
            </div>
        </div>
        </section>
       
    );
};

export default Details;
