import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-yellow-500 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">
          InterviewPrep
        </Link>

        {/* Hamburger menu button */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu items */}
        <div
          className={`flex-col md:flex-row md:flex gap-4 text-sm font-medium ${
            isOpen ? "flex" : "hidden"
          } md:items-center md:static absolute top-16 left-0 w-full bg-yellow-500 px-4 py-4 z-50 shadow-md md:shadow-none`}
        >
          <Link to="/kcna-exam" className="hover:text-white">
            KCNA
          </Link>
          <Link to="/react-prep" className="hover:text-white">
            React
          </Link>
          <Link to="/mini-websocket-prep" className="hover:text-white">
            WebSocket
          </Link>
          <Link to="/rest-prep" className="hover:text-white">
            REST
          </Link>
          <Link to="/rtl-prep" className="hover:text-white">
            RTL
          </Link>
          <Link to="/spa-prep" className="hover:text-white">
            SPA
          </Link>
          <Link to="/web-security" className="hover:text-white">
            Security
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
