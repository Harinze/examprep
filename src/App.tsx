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
import KCNA138 from "./components/KCNA-138";

function App() {
  return (
    <Router>
      <QuestionProvider>
        <Navbar />
        <main className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-8 lg:px-10 py-6">
          <div className="max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kcna-exam" element={<Exam />} />
              <Route path="/react-prep" element={<FrontendPrep />} />
              <Route path="/mini-websocket-prep" element={<MiniWebsocket />} />
              <Route path="/rest-prep" element={<RestPrep />} />
              <Route path="/rtl-prep" element={<RTL />} />
              <Route path="/spa-prep" element={<SPAPrep />} />
              <Route path="/web-security" element={<WebSecurity />} />
              <Route path="/kcna-138" element={<KCNA138 />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </QuestionProvider>
    </Router>
  );
}

export default App;
