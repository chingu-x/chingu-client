import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = props => (
  <nav className="green accent-3">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">
        친구
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
);

export default Navbar;
