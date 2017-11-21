import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import "./Navbar.css";

const { Header } = Layout;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: window.localStorage.getItem("user_id")
    };
  }

  handleLogout = e => {
    e.preventDefault();
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("token");
    window.location = "/";
  };

  render() {
    return (
      <Layout>
        <Header className="nav-header">
          <div className="logo">Chingu</div>
          <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>

            {this.state.user_id ? null : (
              <Menu.Item key="2">
                <Link to="/signup">Sign Up</Link>
              </Menu.Item>
            )}

            {this.state.user_id ? null : (
              <Menu.Item key="3">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}

            {this.state.user_id ? (
              <Menu.Item key="4">
                <Link to={`/profile/${this.state.user_id}`}>Profile</Link>
              </Menu.Item>
            ) : null}

            {this.state.user_id ? (
              <Menu.Item key="5">
                <a onClick={this.handleLogout}>Logout</a>
              </Menu.Item>
            ) : null}
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default Navbar;
