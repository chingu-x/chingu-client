import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: window.localStorage.getItem("user_id") || 0
    };
  }

  handleLogout(e) {
    e.preventDefault();

    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("token");
    window.location = "/";
  }

  render() {
    if(this.state.user_id) {
      return (
        <nav className="green accent-3">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              친구
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to={"/profile/" + this.state.user_id}>Profile</Link>
              </li>
              <li>
                <a onClick={e => this.handleLogout(e)}>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="green accent-3">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              친구
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/apply">Apply</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;
