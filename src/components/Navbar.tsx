import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">InterviewPrep</Link>
        <div className="flex gap-4 text-sm font-medium">
          <Link to="/kcna-exam" className="hover:text-white">KCNA</Link>
          <Link to="/react-prep" className="hover:text-white">React</Link>
          <Link to="/mini-websocket-prep" className="hover:text-white">WebSocket</Link>
          <Link to="/rest-prep" className="hover:text-white">REST</Link>
          <Link to="/rtl-prep" className="hover:text-white">RTL</Link>
          <Link to="/spa-prep" className="hover:text-white">SPA</Link>
          <Link to="/web-security" className="hover:text-white">Security</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
