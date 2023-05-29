import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";


const App = () => {
  return (
    <Router>
      <div>
      <Countdown/>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<About />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};


export default App;
