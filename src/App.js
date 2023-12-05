
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Project from './Project';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
          <div className="content">
            <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/about'>
              <AboutMe/>
            </Route>
            <Route exact path='/projects'>
              <Project/>
            </Route>
            <Route exact path='/contact'>
              <Contact/>
            </Route>
            </Switch>
          </div>
    </div>
    </Router>
  );
}

export default App;

