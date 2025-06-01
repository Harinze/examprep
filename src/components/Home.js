import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Home = () => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col justify-center items-center bg-gray-100 text-black", children: [_jsx("h1", { className: "text-3xl font-bold mb-6", children: "KCNA Exam Prep" }), _jsx("p", { className: "mb-4", children: "Welcome! Practice for your Kubernetes and Cloud Native Associate exam." }), _jsx(Link, { to: "/kcna-exam", children: _jsx("button", { className: "bg-white text-black px-4 py-2 rounded-xl shadow-md hover:bg-blue-100", children: "Start Exam" }) })] }));
};
export default Home;
