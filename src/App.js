import "./Assets/Styling/App.css";

import React, { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";

import Footer from "./Components/Footer";
import useStore from "./Store/Store";
import AboutMe from "./Views/AboutMe";
import LandingPage from "./Views/LandingPage";
import Missing from "./Views/Missing";
import Navigation from "./Views/Navigation";
import Projects from "./Views/Projects";
import Resume from "./Views/Resume";

function AppContent() {
  const background = useStore((state) => state.background);
  const updateBackground = useStore((state) => state.updateBackground);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      updateBackground("home");
    } else if (location.pathname === "/about_meagan") {
      updateBackground("aboutMe");
    } else if (location.pathname === "/resume") {
      updateBackground("resume");
    } else if (location.pathname === "/projects") {
      updateBackground("projects");
    }
  }, [location, updateBackground]);

  return (
    <>
      <div id={background} className="bg-image">
        <Navigation />
        <main id="main-content">
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about_meagan" element={<AboutMe />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
