import { Outlet } from "react-router-dom";
import Navbar from "../shared/navBar/NavBar";
import Footer from "../shared/footer/Footer";


const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;