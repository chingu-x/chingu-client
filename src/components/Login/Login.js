import React, { Component } from "react";

import Form from "./Form";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col m6 offset-m3 grey lighten-5 login-form">
              <h1 className="center">Login</h1>
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
