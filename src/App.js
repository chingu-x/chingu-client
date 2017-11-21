import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Misc/Navbar";
import LandingPage from "./components/Home/LandingPage";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Footer from "./components/Misc/MainFooter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route exact path="/" component={LandingPage} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />

        <Footer />
      </div>
    );
  }
}

export default App;
