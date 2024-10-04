import { Outlet } from "react-router-dom";
import Navbar from "../shared/navBar/NavBar";


const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;