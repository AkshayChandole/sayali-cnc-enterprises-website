import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-700 p-4 text-white flex justify-between items-center relative">
      <div className="text-xl font-bold text-white">SAYALI CNC Enterprises</div>

      {/* Navbar Links for larger screens (visible on md and up) */}
      <div className="space-x-4 hidden md:flex">
        <a
          href="#home"
          className="text-white text-lg font-semibold hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white text-lg font-semibold hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          About
        </a>
        <a
          href="#services"
          className="text-white text-lg font-semibold hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Services
        </a>
        <a
          href="#contact"
          className="text-white text-lg font-semibold hover:text-indigo-400 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Contact
        </a>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <i className="fas fa-bars text-white text-3xl"></i>
        </button>
      </div>

      {/* Mobile Menu (Hidden by default, visible when isMenuOpen is true) */}
      <div
        className={`absolute top-0 right-0 bg-red-700 w-full transition-all duration-500 ease-in-out z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        style={{ height: "100vh" }}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl"
            aria-label="Close Menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center space-y-6">
          <a
            href="#home"
            className="text-white text-2xl font-semibold py-4 px-6 w-full text-center hover:bg-indigo-600 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-2xl font-semibold py-4 px-6 w-full text-center hover:bg-indigo-600 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="text-white text-2xl font-semibold py-4 px-6 w-full text-center hover:bg-indigo-600 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white text-2xl font-semibold py-4 px-6 w-full text-center hover:bg-indigo-600 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
