import React, { Component } from "react";
import { Row, Col } from "antd";

import Form from "./Form";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <Row type="flex" justify="center">
          <Col xs={24} md={12} lg={8}>
            <Form />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignUp;
