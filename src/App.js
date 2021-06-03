import { Route, Switch } from 'react-router';
import Navigation from './Views/Navigation';
import LandingPage from './Views/LandingPage'

function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route path='/' component={LandingPage} />
    </Switch>
    </>
  );
}

export default App;
