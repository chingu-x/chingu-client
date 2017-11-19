import React, { Component } from "react";

import Form from "./Form";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className="col m6 offset-m3 grey lighten-5 signup-form">
              <h1 className="center">Sign Up</h1>
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
