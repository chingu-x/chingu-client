import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./Shared/Navbar";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Settings from "./Profile/Settings";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Footer from "./Shared/MainFooter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/settings" component={Settings} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />

        <Footer />
      </div>
    );
  }
}

export default App;
