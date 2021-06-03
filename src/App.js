import { Route, Switch } from 'react-router';
import NavBar from './Views/NavBar';
import LandingPage from './Views/LandingPage'

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route path='/' component={LandingPage} />
    </Switch>
    </>
  );
}

export default App;
