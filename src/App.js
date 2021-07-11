import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";

import Navigation from "./Views/Navigation";
import AboutMe from "./Views/AboutMe";
import LandingPage from "./Views/LandingPage";
import Footer from "./Components/Footer";
import Resume from "./Views/Resume";
import Gallery from "./Views/Gallery";
import Missing from "./Views/Missing";

import "./Assets/Styling/App.css";
import useStore from "./Store/Store";

function App() {
  const background = useStore((state) => state.background);
  const updateBackground = useStore((state) => state.updateBackground);
  const history = useHistory()
  console.log(history)
  console.log('hello')
  useEffect(() => {
    if (history.location.pathname === '/') {
      updateBackground("home");
    }
    else if (history.location.pathname === '/about_meagan') {
      updateBackground("aboutMe");
    }
    else if (history.location.pathname === '/resume') {
      updateBackground("resume");
    }
    else if (history.location.pathname === '/gallery') {
      updateBackground("gallery");
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
          <Route path="*" component={Missing} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
