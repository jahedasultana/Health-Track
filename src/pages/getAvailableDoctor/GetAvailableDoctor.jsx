import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import axios from 'axios';
import { Link } from "react-router-dom";
import PageBanner from "../../components/PageBanner";

const GetAvailableDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios("http://localhost:3000/doctors");
      // console.log(response.data);
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };


  return (
    <section className="min-h-screen">
      <PageBanner title={'Conatct Us'} pageAddress={'/contactUs'} pageDirection={'Contact Us'} />

      <div className="md:w-[90%] grid md:grid-cols-4 grid-cols-2 gap-4 w-full mx-auto py-10">
        {
          doctors.map((doctor) => <div key={doctor._id} className="relative group">
            {/* Doctor Image */}
            <img
              className="h-[350px] w-full object-cover object-top"
              src="https://i.postimg.cc/nVk5tCgC/similar.jpg"
              alt="Doctor"
            />

            {/* Hover Full Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute  inset-0 bg-black bg-opacity-60 transition-opacity duration-300 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100"
            >
              <motion.h3
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold"
              >
                {doctor?.name}
              </motion.h3>
              <motion.p
                initial={{ y: 0, opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-sm mb-4"
              >
                {doctor?.service_category
                }
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex space-x-4 mt-4"
              >
                <FaFacebookF className="text-lg" />
                <FaLinkedinIn className="text-lg" />
                <FaTwitter className="text-lg" />
                <FaYoutube className="text-lg" />
              </motion.div>
              {/* New Button on Hover */}
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <Link to={`/getAvailableDoctor/${doctor._id}`}>View Profile</Link>
              </motion.button>
            </motion.div>

            {/* Bottom Overlay (Initially Visible, Hidden on Hover) */}
            <div
              className="absolute bottom-6 left-0 w-[80%] px-4 py-2 bg-[#1DBFCC] text-white rounded-br-[90px] transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            >
              <h3 className="text-lg font-semibold">{doctor?.name}</h3>
              <p className="text-sm">{doctor?.service_category
              }</p>
            </div>
          </div>)
        }
      </div>
    </section>
  );
};

export default GetAvailableDoctor;
