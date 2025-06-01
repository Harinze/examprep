import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Exam from "./components/Exam"; 
import FrontendPrep from "./components/FrontendPrep";
import MiniWebsocket from "./components/MiniWebsocket";
import { QuestionProvider } from "../src/context/RestQuestionContext"; 
import RestPrep from "./components/RestPrep";
import RTL from "./components/RTL";
import SPAPrep from "./components/SPA";

function App() {
  return (
    <Router>
      <QuestionProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kcna-exam" element={<Exam />} />
          <Route path="/react-prep" element={<FrontendPrep />} />
          <Route path="/mini-websocket-prep" element={<MiniWebsocket />} />
          <Route path="/rest-prep" element={<RestPrep />} />
           <Route path="/rtl" element={<RTL />} />
            <Route path="/rtl" element={<SPAPrep />} />
        </Routes>
      </QuestionProvider>
    </Router>
  );
}

export default App;
