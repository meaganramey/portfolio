import React, { useEffect } from "react";
import { Route, Switch } from "react-router";

import Navigation from "./Views/Navigation";
import AboutMe from "./Views/AboutMe";
import LandingPage from "./Views/LandingPage";
import Footer from "./Components/Footer";
import Resume from "./Views/Resume";
import Gallery from "./Views/Gallery";

import "./Assets/Styling/App.css";
import useStore from "./Store/Store";

function App() {
  const background = useStore((state) => state.background);
  const updateBackground = useStore((state) => state.updateBackground);
  useEffect(() => {
    if (!background) {
      updateBackground("home");
    }
  }, [background]);
  return (
    <>
      <div id={background} className="bg-image">
        <Navigation />
        <Switch>
          <Route path="/gallery" component={Gallery} />
          <Route path="/resume" component={Resume} />
          <Route path="/about_meagan" component={AboutMe} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
