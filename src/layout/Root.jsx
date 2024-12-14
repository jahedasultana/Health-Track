import { Outlet } from "react-router-dom";
import Navbar from "../shared/navBar/NavBar";
import Footer from "../shared/footer/Footer";


const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
