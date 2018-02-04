import React, { Component } from "react";
import { Row, Col } from "antd";

import SignUpForm from "./SignUpForm";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <Row className="signup-box" type="flex" justify="center">
          <h1>CHINGU</h1>
          <h3>Create your profile for the CDN!</h3>
          <Col className="signup-lower" xs={24} md={24} lg={24}>
            <SignUpForm />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignUp;
