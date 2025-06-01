import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (_jsx("nav", { className: "bg-yellow-500 text-black shadow-md", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 py-3 flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "font-bold text-lg", children: "InterviewPrep" }), _jsxs("div", { className: "flex gap-4 text-sm font-medium", children: [_jsx(Link, { to: "/kcna-exam", className: "hover:text-white", children: "KCNA" }), _jsx(Link, { to: "/react-prep", className: "hover:text-white", children: "React" }), _jsx(Link, { to: "/mini-websocket-prep", className: "hover:text-white", children: "WebSocket" }), _jsx(Link, { to: "/rest-prep", className: "hover:text-white", children: "REST" }), _jsx(Link, { to: "/rtl-prep", className: "hover:text-white", children: "RTL" }), _jsx(Link, { to: "/spa-prep", className: "hover:text-white", children: "SPA" }), _jsx(Link, { to: "/web-security", className: "hover:text-white", children: "Security" })] })] }) }));
};
export default Navbar;
