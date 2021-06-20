import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AboutPage from './AboutPage'
import ClockPage from './ClockPage'
import Counter from '../components/Counter'
import '../App.css';



export default function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/timepage">Time page</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage textcontent='some text about me' />
          </Route>
          <Route path="/timepage">
            <ClockPage />
          </Route>
          <Route path="/">
            <Home>
             sample texf
            </Home>
            <Counter counterValue={666}/>


          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}