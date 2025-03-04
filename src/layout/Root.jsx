import { Outlet } from "react-router-dom";
import Navbar from "../shared/navBar/NavBar";
import Footer from "../shared/footer/Footer";
import { useEffect, useState } from "react";

const Root = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for the 'load' event to check when the browser finishes loading
        const handleLoad = () => setLoading(false);

        if (document.readyState === "complete") {
            setLoading(false); // If already loaded, hide spinner
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <div className="font-poppins">
            {loading ? (
                <div className="flex justify-center items-center h-screen" style={{ backgroundColor: "#50C2AC33" }} >
                    <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            id="pulsar" 
                            stroke="rgba(0,155,155,1)" 
                            fill="none" 
                            strokeWidth="2" 
                            strokeLinejoin="round"
                            strokeDasharray="300"
                            strokeDashoffset="300"
                            d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
                        >
                            <animate 
                                attributeName="stroke-dashoffset" 
                                from="300" 
                                to="0" 
                                dur="2s" 
                                repeatCount="indefinite"
                            />
                        </path>
                    </svg>
                </div>
            ) : (
                <>
                    <Navbar />
                    <div>
                        <Outlet />
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Root;
