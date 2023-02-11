import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import { SpeechProvider } from "@speechly/react-client";
import Main from "./components/Main";
import { VOICE_CONTROLS } from "./constants";

const App: React.FC = () => {
  return (
    <Router>
      <SpeechProvider
        appId="6ba27125-961a-491e-8178-509760cdcfad"
        vad={{ enabled: true }}
      >
        <Main voiceControls={VOICE_CONTROLS}>
          <div className="flex flex-col space-y-2 w-screen h-screen">
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Main>
      </SpeechProvider>
    </Router>
  );
};

export default App;
