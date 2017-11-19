import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Misc/Navbar";
import LandingPage from "./components/Home/LandingPage";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Misc/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route exact path="/" component={LandingPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={SignUp} />

        <Footer />
      </div>
    );
  }
}

export default App;
