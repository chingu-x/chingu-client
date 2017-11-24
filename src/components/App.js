import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./Misc/Navbar";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Footer from "./Misc/MainFooter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />

        <Footer />
      </div>
    );
  }
}

export default App;
