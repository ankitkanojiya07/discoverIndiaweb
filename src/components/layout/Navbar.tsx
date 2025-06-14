import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface Location {
  name: string;
  path: string;
  id: string;
}

const locations: Location[] = [
  { name: "India", path: "/destinations", id: "india" },
  { name: "Nepal", path: "/destinations", id: "nepal" },
  { name: "Bhutan", path: "/destinations", id: "bhutan" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations", hasDropdown: true },
    { name: "Experiences", path: "/experiences" },
    { name: "Trekking", path: "/trekking" },
    { name: "Wildlife", path: "/wildlife" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-wider ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={closeMenu}
          >
            Discover Culture
          </Link>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onClick={() => setShowDestinations(!showDestinations)}
                      onMouseEnter={() => setShowDestinations(true)}
                    >
                      <button
                        className={`uppercase text-xs tracking-widest font-medium transition-colors duration-300 pb-1 border-b-2 inline-flex items-center ${
                          isScrolled
                            ? location.pathname.startsWith("/destinations")
                              ? "border-black text-black"
                              : "border-transparent hover:border-black hover:text-black text-black"
                            : location.pathname.startsWith("/destinations")
                            ? "border-white text-white"
                            : "border-transparent hover:border-white hover:text-white text-white"
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={14} className="ml-1" />
                      </button>
                      {showDestinations && (
                        <div
                          className="absolute left-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {locations.map((dest) => (
                            <Link
                              key={dest.name}
                              to={`${dest.path}?country=${dest.id}`}
                              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                            >
                              {dest.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`uppercase text-xs tracking-widest font-medium transition-colors duration-300 pb-1 border-b-2 ${
                        isScrolled
                          ? location.pathname === link.path
                            ? "border-black text-black"
                            : "border-transparent hover:border-black hover:text-black text-black"
                          : location.pathname === link.path
                          ? "border-white text-white"
                          : "border-transparent hover:border-white hover:text-white text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setShowDestinations(!showDestinations)}
                        className={`flex items-center justify-between w-full uppercase text-sm tracking-widest font-medium transition-colors duration-300 ${
                          isScrolled ? "text-black" : "text-white"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`ml-1 transform transition-transform ${
                            showDestinations ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {showDestinations && (
                        <ul className="mt-2 ml-4 space-y-2">
                          {locations.map((dest) => (
                            <li key={dest.name}>
                              <Link
                                to={`${dest.path}?country=${dest.id}`}
                                onClick={() => {
                                  closeMenu();
                                }}
                                className={`block text-sm ${
                                  isScrolled ? "text-gray-600" : "text-gray-300"
                                } hover:${
                                  isScrolled ? "text-black" : "text-white"
                                }`}
                              >
                                {dest.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block uppercase text-sm tracking-widest font-medium transition-colors duration-300 ${
                        isScrolled
                          ? location.pathname === link.path
                            ? "text-black"
                            : "text-black hover:text-black"
                          : location.pathname === link.path
                          ? "text-white"
                          : "text-white hover:text-white"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
