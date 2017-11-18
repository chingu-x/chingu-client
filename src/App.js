import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/profile/Profile";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
