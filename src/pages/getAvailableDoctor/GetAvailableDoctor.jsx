"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa"
import axios from "axios"
import { Link } from "react-router-dom"
import PageBanner from "../../components/PageBanner"

const GetAvailableDoctor = () => {
  const [doctors, setDoctors] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios("https://health-track-server-ruddy.vercel.app/doctors")
      setDoctors(response.data)
    } catch (error) {
      console.error("Error fetching doctors:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-gray-50">
      <PageBanner title={"Services"} pageAddress={"/getAvailableDoctor"} pageDirection={"Services"} />

      <div className="container mx-auto px-4 py-16">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <motion.div
                key={doctor._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Doctor Image with gradient overlay */}
                <div className="relative h-[350px] w-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    src="https://img.freepik.com/free-photo/portrait-beautiful-blonde-female-doctor_329181-1230.jpg?t=st=1730196307~exp=1730199907~hmac=950ae6d3d8ebc20c4fa11509fd920e737d2af6cf91dfdd7f331922e5afed2dd0&w=360"
                    alt={doctor?.name || "Doctor"}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70"></div>
                </div>

                {/* Info bar (always visible) */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:translate-y-full">
                  <h3 className="text-white text-xl font-bold">{doctor?.name}</h3>
                  <p className="text-cyan-100 text-sm">{doctor?.service_category || "No Category" }</p>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-b from-cyan-600/90 to-blue-900/90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-center"
                  >
                    <h3 className="text-white text-2xl font-bold mb-1">{doctor?.name}</h3>
                    <p className="text-cyan-100 mb-4 inline-block px-3 py-1 rounded-full bg-white/20 text-sm">
                      {doctor?.service_category}
                    </p>

                    <div className="flex justify-center space-x-4 my-4">
                      <motion.a
                        whileHover={{ y: -3 }}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        href="#"
                      >
                        <FaFacebookF className="text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -3 }}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        href="#"
                      >
                        <FaLinkedinIn className="text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -3 }}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        href="#"
                      >
                        <FaTwitter className="text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -3 }}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        href="#"
                      >
                        <FaYoutube className="text-white" />
                      </motion.a>
                    </div>

                    <Link to={`/getAvailableDoctor/${doctor._id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 bg-white text-cyan-700 font-medium py-2 px-6 rounded-full hover:bg-cyan-50 transition-colors shadow-lg"
                      >
                        View Profile
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {!isLoading && doctors.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600">No doctors available at the moment</h3>
          </div>
        )}
      </div>
    </section>
  )
}

export default GetAvailableDoctor;
