import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from '@clerk/clerk-react'
import axios from 'axios';

const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let email;
  let name;

  if (isLoaded && isSignedIn) {
    email = user?.primaryEmailAddress?.emailAddress;
    name = user?.fullName;

    console.log("User's email:", email);
  } else {
    console.log("User is not signed in or data is not loaded.");
  }

  
  useEffect(() => {
    const postDataToApi = async () => {

      const sendData = {
        email,
        userRole: "user",
        name,
      }
      try {
        const response = await axios.post('http://localhost:3000/userCreate', sendData);
     
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    postDataToApi();
 },[email,name]);

  return (
    <nav className="text-black bg-white relative">
      <div className="mx-auto flex justify-between items-center">
        <div className="w-full">
          {/* first part */}
          <div className="flex justify-between items-center w-full py-3 md:px-10 px-3">
            <div className="w-92">
              <img
                className="md:w-[55%] w-[45%]"
                src="/health-track.png"
                alt="logo"
              />
            </div>

            <div className="hidden md:flex items-center justify-center gap-5">
              <button className="px-3 font-semibold py-2 border bg-[#1DBFCC] text-white">
                Doctor
              </button>
              {/* karpa start */}

              {!isLoaded ? (
                <div className="bg-gray-300 animate-pulse w-[28px] h-[28px] rounded-full">
                </div>
              ) : (
                // Render based on email existence after data is loaded
                email ? (
                 
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                ) : (
                  <div className="px-3 font-semibold py-2 border bg-[#1DBFCC] text-white">
                    <SignedOut>
                      <SignInButton  />
                    </SignedOut>
                  </div>
                )
              )}

              {/* <button className="px-3 font-semibold py-2 border bg-[#1DBFCC] text-white">
                Login
              </button> */}
            </div>
          </div>

          {/* second part */}
          <div className="hidden md:flex bg-[#E4FEFF] text-black/70 py-5 pl-10">
            <div className="hidden md:flex lg:gap-16 md:gap-5 text-center font-semibold">
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/getAvailableDoctor"}>GetAvailableDoctor</Link>
              <Link to={"/aboutUs"}>About Us</Link>
              <Link to={"/contactUs"}>Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden pr-3">
          <button id="btn" onClick={toggleMenu}>
            {isOpen ? (
              <VscChromeClose size={30} />
            ) : (
              <RiMenuAddFill size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full md:hidden mt-4 absolute top-14 z-10 bg-white/90 py-7 transition-all duration-300 ease-in-out transform ${isOpen
          ? "translate-y-0 opacity-100"
          : "translate-y-[-20px] opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex items-center flex-col space-y-2">
          <Link to={"/"}>Home</Link>
          <Link to={"/appointment"}>Appointment</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/"}>Funding</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;