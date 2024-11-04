import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1e293b] text-white">
            <div className="container p-6 mx-auto">
                <div className="lg:flex lg:justify-between text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold">Office Address</h3>
                        <p className="mt-2">Evanto HQ 24 Fifth St., Los Angeles, USA</p>
                        <ul className="mt-4 space-y-1 text-sm text-gray-400">
                            <li>Pediatric Clinic</li>
                            <li>Dental Clinic</li>
                            <li>General Surgery</li>
                            <li>Physiotherapy</li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold">Talk To Expert</h3>
                        <p className="mt-2 flex items-center justify-center md:justify-start gap-2">
                            <FaPhoneAlt className="text-[#1DBFCC]" /> (+01) 123 456 7890
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-gray-400">
                            <li>Cardiologist</li>
                            <li>Surgery</li>
                            <li>Gynecologist</li>
                            <li>Pediatricians</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Email Us</h3>
                        <p className="mt-2 flex items-center justify-center md:justify-start gap-2">
                            <FaEnvelope className="text-[#1DBFCC]" /> example@healthcare.com
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-gray-400">
                            <li>  CT Scan Center</li>
                            <li>Medical Store</li>
                            <li>Pediatric Clinic</li>
                            <li>Physiotherapy</li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-gray-600" />

                <div className="text-center">
                    <p className="text-gray-500">© 2022 Health Care. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
