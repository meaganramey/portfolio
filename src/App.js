import { Route, Switch } from 'react-router';

import Navigation from './Views/Navigation';
import AboutMe from './Views/AboutMe'
import LandingPage from './Views/LandingPage'

import bgImage from './Assets/Images/background_areial_beach.jpg'

// import './Assets/Styling/App.css'

function App() {
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundSize: 'contain',
      backgroundColor: '#464646',
      height: '100vh'
      }}>
    <Navigation />
    <Switch>
      <Route path='/about_meagan' component={AboutMe} />
      <Route path='/' component={LandingPage} />
    </Switch>
    </div>
  );
}

export default App;
