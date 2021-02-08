import code from "./assets/img/code.png";
import "./App.css";
import * as React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import clsx from "clsx";

function App() {
  const [navOpen, setNavOpen] = React.useState(true);

  return (
    <Router>
      <div id="app">
        {/* This is where you would usually wrap your content in a general <Layout/> component. */}
        <main>
          <Switch>
            <Route path="/">Home</Route>
            <Route path="/projects">Projects</Route>
            <Route path="/about">About</Route>
            <Route path="/contact">Contact</Route>
          </Switch>
        </main>
        <nav className={clsx(navOpen && "open")}>
          <img src={code} alt="Code" onClick={() => setNavOpen(!navOpen)} />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
