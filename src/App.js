import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Exam from "./components/Exam";
import FrontendPrep from "./components/FrontendPrep";
import MiniWebsocket from "./components/MiniWebsocket";
import { QuestionProvider } from "./context/RestQuestionContext";
import RestPrep from "./components/RestPrep";
import RTL from "./components/RTL";
import SPAPrep from "./components/SPA";
import WebSecurity from "./components/WebSecurity";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
    return (_jsx(Router, { children: _jsxs(QuestionProvider, { children: [_jsx(Navbar, {}), _jsx("main", { className: "min-h-screen bg-white text-black px-4 py-6", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/kcna-exam", element: _jsx(Exam, {}) }), _jsx(Route, { path: "/react-prep", element: _jsx(FrontendPrep, {}) }), _jsx(Route, { path: "/mini-websocket-prep", element: _jsx(MiniWebsocket, {}) }), _jsx(Route, { path: "/rest-prep", element: _jsx(RestPrep, {}) }), _jsx(Route, { path: "/rtl-prep", element: _jsx(RTL, {}) }), _jsx(Route, { path: "/spa-prep", element: _jsx(SPAPrep, {}) }), _jsx(Route, { path: "/web-security", element: _jsx(WebSecurity, {}) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
