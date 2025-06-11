import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

const handleLogout = async () => {
  await signOut(auth);
  navigate("/login");
};


  const navLinks = [
    { path: "/kcna-exam", label: "KCNA" },
    { path: "/react-prep", label: "React" },
    { path: "/mini-websocket-prep", label: "WebSocket" },
    { path: "/rest-prep", label: "REST" },
    { path: "/rtl-prep", label: "RTL" },
    { path: "/spa-prep", label: "SPA" },
    { path: "/kcna-138", label: "KCNA 138" },
    { path: "/web-security", label: "Security" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl">
          InterviewPrep
        </Link>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0 z-50`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {user ? (
       <button onClick={handleLogout} className="hover:text-gray-300 transition">Logout</button>
       ) : (
        <Link to="/login" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
        Login
      </Link>
        )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
