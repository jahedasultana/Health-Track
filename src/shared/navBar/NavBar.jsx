import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopContact from "./TopContant";


const Navbar2 = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Top content scroll
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [location.pathname]);

  return (
    <section>
      <nav className={${location.pathname === '/' ? "fixed top-0 z-20" : ""} w-full}>
        <div className={mx-auto ${location.pathname === '/' ? "bg-[#ebeff5] bg-opacity-90" : "bg-gray-200"} absolute top-0 w-full z-10 shadow-lg}>
          {/* Top Navbar */}
          <div className={w-full md:block hidden transition-all duration-1000}>
            {location.pathname === '/' && scrollY <= 50 && <TopContact />}
            {location.pathname !== '/' && <TopContact />}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-between items-center md:px-4 px-0">
            <div className="flex justify-between w-full">
              {/* Logo */}
              <div className="z-10">
                <Link to={"/"} className="flex items-center px-2">
                  <img src="/logo.webp" alt="Logo" className="w-28 mr-2 py-2" />
                </Link>
              </div>
              {/* Primary Navbar items */}
              <div className="flex items-center space-x-1 z-20">
                <Link to="/" className="py-4 lg:px-3 md:px-1 px-0 text-black font-semibold text-lg">
                  Home
                </Link>
                <Link to="/about" className="py-4 lg:px-3 md:px-1 px-0 text-black font-semibold text-lg">
                  About
                </Link>
                <Link to="/getAvailableDoctor" className="py-4 lg:px-3 md:px-1 px-0 text-black font-semibold text-lg">
                  Services
                </Link>
                <Link to="/contact" className="py-4 lg:px-3 md:px-1 px-0 text-black font-semibold text-lg">
                  Contact
                </Link>
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
                      <Link to="/" className="block py-2 px-4" onClick={() => setMenuOpen(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="block py-2 px-4" onClick={() => setMenuOpen(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="block py-2 px-4" onClick={() => setMenuOpen(false)}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="block py-2 px-4" onClick={() => setMenuOpen(false)}>
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

export default Navbar2;