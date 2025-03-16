import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../provider/useAuth";
import useRole from "../../hooks/useRole";
import UserManu from "./manu/UserManu";
import DoctorManu from "./manu/DoctorManu";
import MenuItem from "./manu/ManuItem";
import AdminMenu from "./manu/AdminManu";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const {role} = useRole()

 

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/ZWcm0D2/logo.jpg"
                alt="logo"
                width="50"
                height="50"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-primary w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
       <div>
       <Link to={'/'}>
       <MdOutlineKeyboardBackspace className="text-secondary text-3xl" />
       </Link>
       </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <MenuItem
                label="Dashboard"
                address="/dashboard"
                icon={MdDashboard}
              ></MenuItem>

              {/* Manage Slots*/}

              
              {role === "admin" && <AdminMenu></AdminMenu>}
              {role === "user" && <UserManu/>}
              {role === "doctor" && <DoctorManu/>}
            </nav>
          </div>
        </div>

        <div>
        {/* 
          <hr />
          <MenuItem
            label="Profile"
            address="/dashboard/profile"
            icon={FcSettings}
          ></MenuItem>

          <Link
            to="/"
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </Link>

          */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;