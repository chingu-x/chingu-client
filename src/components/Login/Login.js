import React, { Component } from "react";
import { Row, Col } from "antd";

import Form from "./Form";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Row type="flex" justify="center">
          <Col xs={24} md={12} lg={8}>
            <Form />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
