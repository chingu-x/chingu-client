import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/profile/Profile";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="green accent-4">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              Chingu
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
