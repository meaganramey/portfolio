import { Route, Switch } from "react-router";

import Navigation from "./Views/Navigation";
import AboutMe from "./Views/AboutMe";
import LandingPage from "./Views/LandingPage";
import Footer from "./Components/Footer";

import "./Assets/Styling/App.css";

function App() {
  return (
    <>
      <div id="home" className="bg-image">
        <Navigation />
        <Switch>
          <Route path="/about_meagan" component={AboutMe} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
