import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import currentUserQuery from "./currentUserQuery";
import "./Navbar.css";

const { Header } = Layout;

export class Navbar extends Component {
  handleLogout = e => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    window.location = "/";
  };

  render() {
    let { loading, user } = this.props.data;
    if (loading) {
      return <h1>Loading</h1>;
    }
    return (
      <Layout>
        <Header className="nav-header">
          <div className="logo">
            <div className="logo-container">
              <Link to="/">Chingu</Link>
            </div>
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: "64px", display: "flex" }}
          >
            {user ? null : (
              <Menu.Item key="2">
                <Link to="/signup">Sign Up</Link>
              </Menu.Item>
            )}

            {user ? null : (
              <Menu.Item key="3">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}

            {user ? (
              <Menu.Item key="4">
                <Link to={`/profile/${user.id}`}>Profile</Link>
              </Menu.Item>
            ) : null}

            {user ? (
              <Menu.Item key="5">
                <Link to="/settings">Settings</Link>
              </Menu.Item>
            ) : null}

            {user ? (
              <Menu.Item key="6">
                <a onClick={this.handleLogout}>Logout</a>
              </Menu.Item>
            ) : null}
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default graphql(currentUserQuery)(Navbar);
