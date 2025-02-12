import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopContact from "./TopContant";
import useAuth from "../../provider/useAuth";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const localiton = useLocation()
  const handleLogout = () => {
    logout()
      .then(() => console.log("Logged out"))
      .catch((error) => console.error(error));
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll effect for all pages
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <nav className={`fixed top-0 z-20 w-full`}>
        <div
          className={`mx-auto ${
            scrollY <= 50 ? "bg-transparent h-[140px]" : (localiton.pathname == '/' ? 'bg-[#FD9678]' : "bg-[#1ABC9C]" )
          } absolute top-0 w-full z-20 shadow-lg`}
        >
          {/* Top Navbar */}
          <div className={`w-full md:block hidden transition-all duration-1000`}>
            {scrollY <= 50 && <TopContact />}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:w-[90%] mx-auto">
            <div
              className={`flex justify-between items-center w-full ${
                scrollY <= 50 ? "mt-[18px]" : ""
              }`}
            >
              {/* Logo */}
              <div className="z-10">
                <Link to={"/"} className="flex items-center px-2">
                  <img src={logo} alt="Logo" className="w-36 mr-2 py-2" />
                </Link>
              </div>
              {/* Primary Navbar items */}
              <div className="flex items-center text-white space-x-1 z-20">
                <Link
                  to="/"
                  className="py-4 lg:px-3 md:px-1 px-0  font-semibold text-lg"
                >
                  Home
                </Link>
                <Link
                  to="/aboutUs"
                  className="py-4 lg:px-3 md:px-1 px-0  font-semibold text-lg"
                >
                  About
                </Link>
                <Link
                  to="/getAvailableDoctor"
                  className="py-4 lg:px-3 md:px-1 px-0  font-semibold text-lg"
                >
                  Services
                </Link>
                <Link
                  to="/contactUs"
                  className="py-4 lg:px-3 md:px-1 px-0  font-semibold text-lg"
                >
                  Contact
                </Link>
                {user ? (
                  <div className="relative flex items-center">
                    <button onClick={toggleMenu}>
                      <img
                        className="h-[42px] w-[42px] rounded-full"
                        src={`${user?.photoURL}`}
                        alt="user photo"
                      />
                    </button>
                    {isOpen && (
                      <div className="bg-[#991747]/70 z-50 text-white px-4 py-5 w-44 space-y-5 absolute top-14 right-0">
                        <Link className="block text-lg" to={"dashboard"}>
                          Dashboard
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block text-lg p-2 bg-[#CE3D61] w-full border border-white/55"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link className="p-2 border" to={"/sign-in"}>
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center flex-col">
            {/* Logo */}
            <div className="md:hidden flex flex-col items-center">
              <div>
                <Link to={"/"} className="flex items-center px-2">
                  <img src="/logo.webp" alt="Logo" className="w-28 mr-2" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="outline-none mobile-menu-button"
              >
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            {menuOpen && (
              <div className="absolute top-[151px] w-full bg-black/90 text-white">
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/"
                        className="block py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aboutUs"
                        className="block py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/getAvailableDoctor"
                        className="block py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contactUs"
                        className="block py-2 px-4"
                        onClick={() => setMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
